"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Menu,
  Search,
  X,
  ChevronDown,
  HelpCircle,
  User,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { formatCurrency, formatPercentage } from "@/lib/utils";

export function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search logic here
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          style={{ color: "#4B63FF" }}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold" style={{ color: "#1E2B4F" }}>
            Investment Dashboard
          </h1>
          <p
            className="text-sm text-muted-foreground"
            style={{ color: "#6A7C99" }}
          >
            Welcome back, John Doe
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {showSearch ? (
          <form
            onSubmit={handleSearch}
            className="relative flex w-full items-center md:w-auto"
          >
            <input
              type="search"
              placeholder="Search..."
              className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderColor: "#A8BFFF" }}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-9 w-9"
              onClick={() => setShowSearch(false)}
              style={{ color: "#4B63FF" }}
            >
              <X className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSearch(true)}
            style={{ color: "#4B63FF" }}
          >
            <Search className="h-5 w-5" />
          </Button>
        )}

        <Button variant="ghost" size="icon" style={{ color: "#4B63FF" }}>
          <Bell className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" style={{ color: "#4B63FF" }}>
          <HelpCircle className="h-5 w-5" />
        </Button>

        <ThemeToggle />

        <div className="hidden md:flex items-center gap-2 pl-2 border-l">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-5 w-5" />
          </div>
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            style={{ color: "#1E2B4F" }}
          >
            <span>John Doe</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-background p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: "#4B63FF" }}>
                  Stockey
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileSidebarOpen(false)}
                style={{ color: "#4B63FF" }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            {/* Mobile navigation content goes here */}
          </div>
        </div>
      )}
    </header>
  );
}
