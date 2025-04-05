"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  BarChart3,
  Lock,
  Moon,
  Sun,
  Smartphone,
  LogOut,
  Settings,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: "#1E2B4F" }}
        >
          Settings
        </h1>
        <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3">
          <Card style={{ borderColor: "#F0F4FF" }}>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === "profile" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                  style={{
                    color: activeTab === "profile" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === "preferences" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("preferences")}
                  style={{
                    color: activeTab === "preferences" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === "security" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("security")}
                  style={{
                    color: activeTab === "security" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === "notifications" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("notifications")}
                  style={{
                    color:
                      activeTab === "notifications" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === "billing" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("billing")}
                  style={{
                    color: activeTab === "billing" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9">
          {activeTab === "profile" && (
            <Card style={{ borderColor: "#F0F4FF" }}>
              <CardHeader className="pb-2">
                <CardTitle style={{ color: "#1E2B4F" }}>
                  Profile Information
                </CardTitle>
                <CardDescription style={{ color: "#6A7C99" }}>
                  Update your personal information and public profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User
                        className="h-12 w-12"
                        style={{ color: "#4B63FF" }}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                    >
                      Change
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          style={{ color: "#1E2B4F" }}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="John"
                          style={{ borderColor: "#A8BFFF" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          style={{ color: "#1E2B4F" }}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="Doe"
                          style={{ borderColor: "#A8BFFF" }}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: "#1E2B4F" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="john.doe@example.com"
                        style={{ borderColor: "#A8BFFF" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: "#1E2B4F" }}
                      >
                        Bio
                      </label>
                      <textarea
                        className="h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="Investment professional with 10+ years of experience in portfolio management and analysis."
                        style={{ borderColor: "#A8BFFF" }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  Cancel
                </Button>
                <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "preferences" && (
            <Card style={{ borderColor: "#F0F4FF" }}>
              <CardHeader className="pb-2">
                <CardTitle style={{ color: "#1E2B4F" }}>Preferences</CardTitle>
                <CardDescription style={{ color: "#6A7C99" }}>
                  Customize your dashboard experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Theme
                  </h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 justify-start border-2"
                      style={{ borderColor: "#4B63FF", color: "#1E2B4F" }}
                    >
                      <Sun className="h-4 w-4 mr-2" />
                      Light
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 justify-start"
                      style={{ borderColor: "#A8BFFF", color: "#1E2B4F" }}
                    >
                      <Moon className="h-4 w-4 mr-2" />
                      Dark
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 justify-start"
                      style={{ borderColor: "#A8BFFF", color: "#1E2B4F" }}
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      System
                    </Button>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Language
                  </h3>
                  <select
                    className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="en-US"
                    style={{ borderColor: "#A8BFFF" }}
                  >
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="fr-FR">French</option>
                    <option value="de-DE">German</option>
                    <option value="ja-JP">Japanese</option>
                  </select>
                </div>

                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Dashboard Layout
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div
                      className="border rounded-md p-3 cursor-pointer border-primary"
                      style={{ borderColor: "#4B63FF" }}
                    >
                      <div className="bg-primary/10 rounded-md h-24 mb-2 flex items-center justify-center">
                        <BarChart3
                          className="h-8 w-8"
                          style={{ color: "#4B63FF" }}
                        />
                      </div>
                      <p
                        className="text-sm font-medium text-center"
                        style={{ color: "#1E2B4F" }}
                      >
                        Default
                      </p>
                    </div>
                    <div
                      className="border rounded-md p-3 cursor-pointer"
                      style={{ borderColor: "#A8BFFF" }}
                    >
                      <div className="bg-muted rounded-md h-24 mb-2 flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p
                        className="text-sm font-medium text-center"
                        style={{ color: "#1E2B4F" }}
                      >
                        Compact
                      </p>
                    </div>
                    <div
                      className="border rounded-md p-3 cursor-pointer"
                      style={{ borderColor: "#A8BFFF" }}
                    >
                      <div className="bg-muted rounded-md h-24 mb-2 flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p
                        className="text-sm font-medium text-center"
                        style={{ color: "#1E2B4F" }}
                      >
                        Expanded
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Date Format
                  </h3>
                  <select
                    className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="MM/DD/YYYY"
                    style={{ borderColor: "#A8BFFF" }}
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>

                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Currency
                  </h3>
                  <select
                    className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="USD"
                    style={{ borderColor: "#A8BFFF" }}
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="INR">INR - Indian Rupee</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  Reset to Default
                </Button>
                <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "security" && (
            <Card style={{ borderColor: "#F0F4FF" }}>
              <CardHeader className="pb-2">
                <CardTitle style={{ color: "#1E2B4F" }}>
                  Security Settings
                </CardTitle>
                <CardDescription style={{ color: "#6A7C99" }}>
                  Manage your account security and authentication methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Change Password
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: "#1E2B4F" }}
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="••••••••"
                        style={{ borderColor: "#A8BFFF" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: "#1E2B4F" }}
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="••••••••"
                        style={{ borderColor: "#A8BFFF" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        style={{ color: "#1E2B4F" }}
                      >
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="••••••••"
                        style={{ borderColor: "#A8BFFF" }}
                      />
                    </div>
                    <Button
                      style={{ backgroundColor: "#4B63FF", color: "white" }}
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Update Password
                    </Button>
                  </div>
                </div>

                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "#F0F4FF" }}
                >
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm" style={{ color: "#1E2B4F" }}>
                        Add an extra layer of security to your account
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        style={{ color: "#6A7C99" }}
                      >
                        We'll send you a code via email or SMS when you sign in
                        on a new device.
                      </p>
                    </div>
                    <Button
                      style={{ backgroundColor: "#4B63FF", color: "white" }}
                    >
                      Enable
                    </Button>
                  </div>
                </div>

                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "#F0F4FF" }}
                >
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Active Sessions
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="flex justify-between items-center p-3 border rounded-md"
                      style={{ borderColor: "#F0F4FF" }}
                    >
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          Current Browser - Chrome on Windows
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Active now • 192.168.1.105
                        </p>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Current
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center p-3 border rounded-md"
                      style={{ borderColor: "#F0F4FF" }}
                    >
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          iPhone 13 - Safari
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Last active 2 hours ago • 78.41.232.14
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ color: "#F43F5E", borderColor: "#F43F5E" }}
                      >
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "#F0F4FF" }}
                >
                  <h3 className="text-sm font-medium mb-3 text-red-500">
                    Danger Zone
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          Delete Account
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Permanently delete your account and all your data
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ color: "#F43F5E", borderColor: "#F43F5E" }}
                      >
                        Delete Account
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          Log out of all devices
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          End all active sessions across all your devices
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ color: "#F43F5E", borderColor: "#F43F5E" }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Log out all
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
