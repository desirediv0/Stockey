import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const backupDir = path.join(process.cwd(), "public", "backup");

    // Check if backup directory exists
    if (!fs.existsSync(backupDir)) {
      return NextResponse.json({
        success: true,
        backups: [],
        message: "No backup directory found",
      });
    }

    // Get all JSON files in the backup directory
    const files = fs
      .readdirSync(backupDir)
      .filter((file) => file.endsWith(".json"));

    if (files.length === 0) {
      return NextResponse.json({
        success: true,
        backups: [],
        message: "No backup files found",
      });
    }

    // Read the content of each file
    const backups = files
      .map((file) => {
        try {
          const filePath = path.join(backupDir, file);
          const content = fs.readFileSync(filePath, "utf8");
          return JSON.parse(content);
        } catch (error) {
          console.error(`Error reading backup file ${file}:`, error);
          return null;
        }
      })
      .filter((backup) => backup !== null);

    // Sort by timestamp (newest first)
    backups.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB - dateA;
    });

    return NextResponse.json({
      success: true,
      backups,
      count: backups.length,
    });
  } catch (error) {
    console.error("Error getting backups:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code || "UNKNOWN",
      },
      { status: 500 }
    );
  }
}
