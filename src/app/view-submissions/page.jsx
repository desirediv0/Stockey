"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ViewSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setIsLoading(true);
        let submissionsData = [];
        let csvError = null;

        // Try to fetch and parse CSV data first
        try {
          const response = await fetch("/form-submissions.csv");

          if (response.ok) {
            const csvText = await response.text();
            const lines = csvText.split("\n");
            const headers = lines[0].split(",");

            const csvData = lines
              .slice(1)
              .filter((line) => line.trim() !== "")
              .map((line) => {
                const values = parseCSVLine(line);
                return headers.reduce((obj, header, index) => {
                  obj[header] = values[index] || "";
                  return obj;
                }, {});
              });

            submissionsData = [...csvData];
          } else {
            csvError = "CSV file not found or cannot be accessed";
          }
        } catch (err) {
          csvError = `Error fetching CSV: ${err.message}`;
          console.error(csvError);
        }

        // If CSV reading failed or returned no data, try to fetch JSON backups
        if (csvError || submissionsData.length === 0) {
          try {
            const backupResponse = await fetch("/api/get-backups");

            if (backupResponse.ok) {
              const backupData = await backupResponse.json();

              if (backupData.success && backupData.backups.length > 0) {
                // Add backup submissions to the data array
                submissionsData = [
                  ...submissionsData,
                  ...backupData.backups.map((backup) => ({
                    Type: backup.formType,
                    Date: backup.date,
                    Time: backup.time,
                    Name: extractValue(backup.rawData, 0),
                    Email: extractValue(backup.rawData, 1),
                    Phone: extractValue(backup.rawData, 2),
                    Message: extractValue(backup.rawData, 3),
                    Country:
                      backup.formType === "wishlist"
                        ? extractValue(backup.rawData, 3)
                        : "",
                    Experience:
                      backup.formType === "wishlist"
                        ? extractValue(backup.rawData, 4)
                        : "",
                    Plan:
                      backup.formType === "wishlist"
                        ? extractValue(backup.rawData, 5)
                        : "",
                    isBackup: true,
                  })),
                ];
              }
            }
          } catch (backupErr) {
            console.error("Error fetching JSON backups:", backupErr);
          }
        }

        setSubmissions(submissionsData);

        if (submissionsData.length === 0 && csvError) {
          setError("Could not load submissions. " + csvError);
        }
      } catch (err) {
        console.error("Error handling submissions:", err);
        setError(
          "Could not load submissions. Please check if the CSV file exists in the public directory."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Helper function to extract values from JSON backup raw data
  const extractValue = (rawData, index) => {
    try {
      if (!rawData) return "";

      // Split by commas, but keep quoted content together
      const parts = [];
      let inQuotes = false;
      let currentPart = "";

      for (let i = 0; i < rawData.length; i++) {
        const char = rawData[i];

        if (char === '"') {
          inQuotes = !inQuotes;
          currentPart += char;
        } else if (char === "," && !inQuotes) {
          parts.push(currentPart);
          currentPart = "";
        } else {
          currentPart += char;
        }
      }

      if (currentPart) {
        parts.push(currentPart);
      }

      // Return the requested index, cleaned of quotes
      return parts[index] ? parts[index].replace(/^"|"$/g, "") : "";
    } catch (e) {
      console.error("Error extracting value from backup:", e);
      return "";
    }
  };

  // Helper function to properly parse CSV with quoted fields
  const parseCSVLine = (line) => {
    const result = [];
    let start = 0;
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') {
        inQuotes = !inQuotes;
      } else if (line[i] === "," && !inQuotes) {
        result.push(
          line.substring(start, i).replace(/^"|"$/g, "").replace(/""/g, '"')
        );
        start = i + 1;
      }
    }

    result.push(
      line.substring(start).replace(/^"|"$/g, "").replace(/""/g, '"')
    );
    return result;
  };

  const handleExportCSV = () => {
    const url = "/form-submissions.csv";
    const a = document.createElement("a");
    a.href = url;
    a.download = "form_submissions.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading submissions...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center text-red-500 mb-6">{error}</div>
        <p className="text-center">
          Please make sure you have submitted at least one form to create the
          CSV file.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1E2B4F]">Form Submissions</h1>
        <Button onClick={handleExportCSV} className="bg-[#4B63FF]">
          Export CSV
        </Button>
      </div>

      {submissions.length === 0 ? (
        <p className="text-center py-10">
          No submissions yet. Please submit a form first.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 bg-gray-50 border text-left">Type</th>
                <th className="p-2 bg-gray-50 border text-left">Date</th>
                <th className="p-2 bg-gray-50 border text-left">Time</th>
                <th className="p-2 bg-gray-50 border text-left">Name</th>
                <th className="p-2 bg-gray-50 border text-left">Email</th>
                <th className="p-2 bg-gray-50 border text-left">Phone</th>
                <th className="p-2 bg-gray-50 border text-left">
                  Message/Details
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${
                    submission.isBackup ? "bg-yellow-50" : ""
                  }`}
                >
                  <td className="p-2 border">
                    {submission.Type}
                    {submission.isBackup && (
                      <span className="ml-1 px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                        Backup
                      </span>
                    )}
                  </td>
                  <td className="p-2 border">{submission.Date}</td>
                  <td className="p-2 border">{submission.Time}</td>
                  <td className="p-2 border">{submission.Name}</td>
                  <td className="p-2 border">{submission.Email}</td>
                  <td className="p-2 border">
                    {submission.Phone ? (
                      <a
                        href={`tel:${submission.Phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {submission.Phone}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-2 border max-w-md break-words">
                    {submission.Type === "contact"
                      ? submission.Message
                      : submission.Type === "wishlist"
                      ? submission.Country
                      : submission.Type === "integration"
                      ? submission.Details
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
