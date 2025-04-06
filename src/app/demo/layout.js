"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardLayout({ children }) {
  // Set up theme based on user preference
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If no preference set but system is dark mode
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="relative flex min-h-screen bg-background">
      <div className="hidden md:block">
        <Sidebar className="w-64" />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
