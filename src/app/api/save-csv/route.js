import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to retry writing to a file with delay
const retryWriteFile = async (filePath, data, maxRetries = 5, delay = 300) => {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // Try to append to the file
      fs.appendFileSync(filePath, data, { flag: "a", encoding: "utf8" });
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

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
      retries++;
    }
  }

  // If all retries failed
  throw new Error(`Failed to write to file after ${maxRetries} retries`);
};

// Backup function to save as JSON if CSV fails
const saveAsJsonBackup = async (csvData) => {
  try {
    // Parse the CSV data into structured data
    const parts = csvData.trim().split(",");
    const formType = parts[0];
    const date = parts[1];
    const time = parts[2];

    // The rest of the fields may have quotes, so we need to handle them carefully
    const restOfData = csvData.substring(csvData.indexOf('"'));

    // Create a backup entry
    const backupEntry = {
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
    fs.writeFileSync(
      backupFilePath,
      JSON.stringify(backupEntry, null, 2),
      "utf8"
    );

    console.log("Backup JSON saved successfully at:", backupFilePath);
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

    console.log("Received data in API:", data);

    // Define the path for the CSV file in the public directory
    const csvFilePath = path.join(
      process.cwd(),
      "public",
      "form-submissions.csv"
    );

    console.log("Saving to file:", csvFilePath);

    // Create header if file doesn't exist - use a try/catch block to handle potential errors
    try {
      if (!fs.existsSync(csvFilePath)) {
        console.log("File does not exist, creating with header");
        // Include headers for all form types
        const header = "Type,Date,Time,Name,Email,Phone,Message/Details\n";
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

    try {
      // Try to write to CSV file with retry logic
      await retryWriteFile(csvFilePath, csvData);
      console.log("Data appended successfully to CSV");
    } catch (csvError) {
      // If CSV writing fails, use JSON backup
      console.error("CSV write failed, using JSON backup:", csvError);
      const backupSuccess = await saveAsJsonBackup(csvData);

      if (!backupSuccess) {
        throw new Error("Both CSV and JSON backup failed");
      }

      // Even though CSV failed, we created a backup successfully
      console.log("Form data saved as JSON backup instead of CSV");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving to CSV:", error);
    return NextResponse.json(
      { success: false, error: error.message, code: error.code || "UNKNOWN" },
      { status: 500 }
    );
  }
}
