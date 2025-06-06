import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Function to retry writing to a file with delay
const retryWriteFile = async (filePath, data, maxRetries = 5, delay = 500) => {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // Using fs.promises for better async handling
      const fileHandle = await fs.promises.open(filePath, "a");
      await fileHandle.writeFile(data);
      await fileHandle.close();
      return true;
    } catch (error) {
      console.log(
        `Retry ${retries + 1}/${maxRetries}: Error writing to file:`,
        error.message
      );

      // If it's not a busy resource error, throw it
      if (error.code !== "EBUSY" && error.code !== "EACCES") {
        throw error;
      }

      // Increase delay with each retry attempt
      const adjustedDelay = delay + retries * 200;
      console.log(`Waiting ${adjustedDelay}ms before retry ${retries + 1}...`);

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, adjustedDelay));
      retries++;
    }
  }

  // If all retries failed
  throw new Error(`Failed to write to file after ${maxRetries} retries`);
};

// Backup function to save as JSON if CSV fails
const saveAsJsonBackup = async (csvData, id) => {
  try {
    // Parse the CSV data into structured data
    const parts = csvData.trim().split(",");
    const formType = parts[1]; // First part is now the ID, so shift indexes
    const date = parts[2];
    const time = parts[3];

    // The rest of the fields may have quotes, so we need to handle them carefully
    const restOfData = csvData.substring(csvData.indexOf('"'));

    // Create a backup entry
    const backupEntry = {
      id,
      formType,
      date,
      time,
      rawData: restOfData,
      timestamp: new Date().toISOString(),
    };

    // Define backup json file path
    const backupDir = path.join(process.cwd(), "public", "backup");
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const backupFilePath = path.join(
      backupDir,
      `form_backup_${Date.now()}.json`
    );

    // Using fs.promises for better async handling
    await fs.promises.writeFile(
      backupFilePath,
      JSON.stringify(backupEntry, null, 2),
      "utf8"
    );

    console.log(`Successfully created backup JSON at ${backupFilePath}`);
    return true;
  } catch (backupError) {
    console.error("Failed to create backup JSON:", backupError);
    return false;
  }
};

export async function POST(request) {
  try {
    const data = await request.json();
    const { csvData } = data;

    // Generate a unique ID for this submission
    const id = uuidv4();

    // Define the path for the CSV file in the public directory
    const csvFilePath = path.join(
      process.cwd(),
      "public",
      "form-submissions.csv"
    );

    // Create header if file doesn't exist - use a try/catch block to handle potential errors
    try {
      if (!fs.existsSync(csvFilePath)) {
        console.log("File does not exist, creating with header");
        // Include headers for all form types, now with ID
        const header = "ID,Type,Date,Time,Name,Email,Phone,Message/Details\n";
        fs.writeFileSync(csvFilePath, header, { flag: "wx", encoding: "utf8" });
      }
    } catch (fileError) {
      // If the error is anything other than "file already exists", throw it
      if (fileError.code !== "EEXIST") {
        throw fileError;
      }
      console.log(
        "Header creation was attempted by another process, continuing..."
      );
    }

    // Add ID to the CSV data
    // Extract the first part (before newline) to add ID at the beginning
    let enhancedCsvData;
    if (csvData.includes("\n")) {
      const [firstLine, ...rest] = csvData.split("\n");
      enhancedCsvData = `${id},${firstLine}\n${rest.join("\n")}`;
    } else {
      enhancedCsvData = `${id},${csvData}`;
    }

    try {
      // Try to write to CSV file with retry logic
      await retryWriteFile(csvFilePath, enhancedCsvData);
      console.log("Data appended successfully to CSV with ID");
      return NextResponse.json({ success: true, id, storage: "csv" });
    } catch (csvError) {
      // If CSV writing fails, use JSON backup
      console.error("CSV write failed, using JSON backup:", csvError);
      const backupSuccess = await saveAsJsonBackup(enhancedCsvData, id);

      if (!backupSuccess) {
        throw new Error("Both CSV and JSON backup failed");
      }

      // Even though CSV failed, we created a backup successfully
      console.log("Form data saved as JSON backup instead of CSV");
      return NextResponse.json({
        success: true,
        id,
        storage: "json_backup",
        message: "CSV was busy, data saved as JSON backup",
      });
    }

    // This line should never be reached due to returns in try/catch blocks
  } catch (error) {
    console.error("Error saving to CSV:", error);
    return NextResponse.json(
      { success: false, error: error.message, code: error.code || "UNKNOWN" },
      { status: 500 }
    );
  }
}
