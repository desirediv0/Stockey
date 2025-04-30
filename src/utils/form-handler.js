// Simple utility function to save form data to CSV file
export const saveFormToCSV = async (formData, formType) => {
  try {
    // Create a formatted date string
    const now = new Date();
    const date = now.toLocaleDateString("en-IN");
    const time = now.toLocaleTimeString("en-IN");

    // Clean phone number if present
    const phoneNumber = formData.phone ? String(formData.phone).trim() : "";

    // Log data being processed
    console.log("Processing form data:", {
      ...formData,
      phone: phoneNumber,
      type: formType,
    });

    // Format the data for CSV
    let csvData = "";

    // For contact form
    if (formType === "contact") {
      csvData = `${formType},${date},${time},"${formData.fullName || ""}","${
        formData.email || ""
      }","${phoneNumber}","${(formData.message || "").replace(/"/g, '""')}"\n`;
    }
    // For wishlist form
    else if (formType === "wishlist") {
      csvData = `${formType},${date},${time},"${formData.fullName || ""}","${
        formData.email || ""
      }","${phoneNumber}","${formData.country || ""}","${
        formData.tradingExperience || ""
      }","${formData.planName || ""}"\n`;
    }
    // For integration suggestion form
    else if (formType === "integration") {
      csvData = `${formType},${date},${time},"${formData.fullName || ""}","${
        formData.email || ""
      }","${phoneNumber}","${(formData.integrationDetails || "").replace(
        /"/g,
        '""'
      )}"\n`;
    }

    console.log("CSV data prepared:", csvData);

    // Use retry logic for API call
    let attempts = 0;
    const maxAttempts = 3;
    let lastError = null;

    while (attempts < maxAttempts) {
      try {
        // Save to file using fetch to a local route
        const response = await fetch("/api/save-csv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ csvData }),
        });

        const result = await response.json();

        if (!response.ok) {
          console.log(`Attempt ${attempts + 1} failed:`, result);
          throw new Error(result.error || "Failed to save form data");
        }

        console.log("Form data saved successfully");
        return true;
      } catch (error) {
        lastError = error;
        attempts++;

        if (attempts < maxAttempts) {
          // Wait before retrying (exponential backoff)
          const delay = Math.pow(2, attempts) * 500;
          console.log(`Retrying in ${delay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw (
      lastError || new Error("Failed to save form data after multiple attempts")
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return false;
  }
};
