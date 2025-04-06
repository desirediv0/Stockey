"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white py-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div
          className="text-sm text-muted-foreground"
          style={{ color: "#6A7C99" }}
        >
          &copy; {new Date().getFullYear()} Stockey. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/demo/help"
            className="text-sm hover:underline"
            style={{ color: "#6A7C99" }}
          >
            Help & Support
          </Link>
          <Link
            href="/demo/privacy"
            className="text-sm hover:underline"
            style={{ color: "#6A7C99" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/demo/terms"
            className="text-sm hover:underline"
            style={{ color: "#6A7C99" }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
