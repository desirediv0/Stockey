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
  MousePointerClick,
  Sparkles,
  ArrowRight,
  Check,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import WishlistForm from "@/components/wishlist-form";
import ContactForm from "@/components/contact-form";

const plansData = {
  monthly: [
    {
      name: "Free",
      tagline: "For individual traders just getting started",
      price: "FREE",
      description: "Basic features for exploring the platform",
      features: [
        { name: "Connect up to 2 broker accounts", included: true },
        { name: "Basic portfolio analytics", included: true },
        { name: "Pre-built dashboard templates", included: true },
        { name: "7-day data history", included: true },
        { name: "Email support", included: true },
        { name: "Advanced charting capabilities", included: false },
        { name: "Unlimited dashboards", included: false },
        { name: "Custom alerts & notifications", included: false },
        { name: "Priority support", included: false },
        { name: "CSV data upload", included: false },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "outline",
      highlight: false,
      showRibbon: false,
      isWishlist: true,
    },
    {
      name: "Pro",
      tagline: "For serious traders and investors",
      price: "₹999",
      period: "/month",
      description: "All the tools you need for advanced trading analytics",
      features: [
        { name: "Connect unlimited broker accounts", included: true },
        { name: "Advanced portfolio analytics", included: true },
        { name: "All dashboard templates", included: true },
        { name: "Full historical data", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced charting capabilities", included: true },
        { name: "Unlimited dashboards", included: true },
        { name: "Custom alerts & notifications", included: true },
        { name: "Priority support", included: true },
        { name: "CSV data upload", included: true },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "default",
      highlight: true,
      showRibbon: true,
      isWishlist: true,
    },
    {
      name: "Team",
      tagline: "For professional trading teams",
      price: "Custom",
      description: "Tailored solutions for trading firms and teams",
      features: [
        { name: "Everything in Pro plan", included: true },
        { name: "Team collaboration features", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Security & compliance features", included: true },
        { name: "API access", included: true },
        { name: "White labeling options", included: true },
        { name: "Onboarding & training", included: true },
        { name: "SLA & uptime guarantees", included: true },
        { name: "Custom reports", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      isContactForm: true,
    },
  ],
  annual: [
    {
      name: "Free",
      tagline: "For individual traders just getting started",
      price: "FREE",
      description: "Basic features for exploring the platform",
      features: [
        { name: "Connect up to 2 broker accounts", included: true },
        { name: "Basic portfolio analytics", included: true },
        { name: "Pre-built dashboard templates", included: true },
        { name: "7-day data history", included: true },
        { name: "Email support", included: true },
        { name: "Advanced charting capabilities", included: false },
        { name: "Unlimited dashboards", included: false },
        { name: "Custom alerts & notifications", included: false },
        { name: "Priority support", included: false },
        { name: "CSV data upload", included: false },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "outline",
      highlight: false,
      showRibbon: false,
      isWishlist: true,
    },
    {
      name: "Pro",
      tagline: "For serious traders and investors",
      price: "₹799",
      period: "/month",
      description: "All the tools you need for advanced trading analytics",
      features: [
        { name: "Connect unlimited broker accounts", included: true },
        { name: "Advanced portfolio analytics", included: true },
        { name: "All dashboard templates", included: true },
        { name: "Full historical data", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced charting capabilities", included: true },
        { name: "Unlimited dashboards", included: true },
        { name: "Custom alerts & notifications", included: true },
        { name: "Priority support", included: true },
        { name: "CSV data upload", included: true },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "default",
      highlight: true,
      showRibbon: true,
      isWishlist: true,
      discount: "20% off",
    },
    {
      name: "Team",
      tagline: "For professional trading teams",
      price: "Custom",
      description: "Tailored solutions for trading firms and teams",
      features: [
        { name: "Everything in Pro plan", included: true },
        { name: "Team collaboration features", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Security & compliance features", included: true },
        { name: "API access", included: true },
        { name: "White labeling options", included: true },
        { name: "Onboarding & training", included: true },
        { name: "SLA & uptime guarantees", included: true },
        { name: "Custom reports", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      isContactForm: true,
    },
  ],
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [billingCycle, setBillingCycle] = useState("monthly");
     const [isExpanded, setIsExpanded] = useState(false);
  const plans =
    billingCycle === "monthly" ? plansData.monthly : plansData.annual;
      const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="space-y-8 p-4 md:p-6">
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
                    activeTab === "subscription" ? "bg-primary/10" : ""
                  }`}
                  onClick={() => setActiveTab("subscription")}
                  style={{
                    color: activeTab === "subscription" ? "#4B63FF" : "#1E2B4F",
                  }}
                >
                  <MousePointerClick className="h-4 w-4 mr-2" />
                  Subscription
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
          {/* Profile Tab */}
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

          {/* Preferences Tab */}
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
                  <div className="flex flex-col sm:flex-row gap-3">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

          {/* Security Tab */}
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm" style={{ color: "#1E2B4F" }}>
                        Add an extra layer of security to your account
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        style={{ color: "#6A7C99" }}
                      >
                        We&apos;ll send you a code via email or SMS when you
                        sign in on a new device.
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
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border rounded-md gap-2"
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
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border rounded-md gap-2"
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
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <Card style={{ borderColor: "#F0F4FF" }}>
              <CardHeader className="pb-2">
                <CardTitle style={{ color: "#1E2B4F" }}>
                  Notification Settings
                </CardTitle>
                <CardDescription style={{ color: "#6A7C99" }}>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-medium mb-3"
                    style={{ color: "#1E2B4F" }}
                  >
                    Email Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          Account Updates
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Receive updates about your account activity
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ borderColor: "#4B63FF", color: "#4B63FF" }}
                      >
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          Marketing Emails
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Receive marketing and promotional emails
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ borderColor: "#A8BFFF", color: "#1E2B4F" }}
                      >
                        Disabled
                      </Button>
                    </div>
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
                    Push Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          New Messages
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Receive notifications for new messages
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ borderColor: "#4B63FF", color: "#4B63FF" }}
                      >
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#1E2B4F" }}
                        >
                          System Updates
                        </p>
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ color: "#6A7C99" }}
                        >
                          Receive notifications about system updates
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ borderColor: "#4B63FF", color: "#4B63FF" }}
                      >
                        Enabled
                      </Button>
                    </div>
                  </div>
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
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Subscription Tab */}
          {activeTab === "subscription" && (
            <div className="mx-auto max-w-7xl grid grid-cols-1 gap-3 lg:grid-cols-3">
              {plans.map((plan) => {
               

            return (
              <div
                key={plan.name}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl relative ${
                  plan.highlight
                    ? "border-[#4b63ff50] ring-2 ring-[#4b63ff50] shadow-lg transform hover:-translate-y-1"
                    : "border-[#A8BFFF] hover:border-[#4B63FF]"
                }`}
              >
                {plan.showRibbon && (
                  <div className="absolute -right-20 top-6 bg-[#19C68B] text-white py-2 px-20 transform rotate-45 shadow-md z-10 w-72 flex justify-center">
                    <span className="text-xs font-bold tracking-wider text-center ml-5 ">
                      MOST POPULAR SAVE 20%
                    </span>
                  </div>
                )}
                <div className="p-8">
                  {plan.highlight && (
                    <div className="mb-4">
                      <span className="rounded-full bg-[#4B63FF]/10 px-3 py-1 text-xs font-semibold leading-6 text-[#4B63FF] ring-1 ring-inset ring-[#4B63FF]/30 flex items-center w-fit gap-1">
                        <Sparkles className="h-3 w-3" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  {/* {plan.discount && (
                  <div className="mb-4">
                    <span className="rounded-full bg-[#6A7C99]/10 px-3 py-1 text-xs font-semibold leading-6 text-[#6A7C99] ring-1 ring-inset ring-[#6A7C99]/30">
                      {plan.discount}
                    </span>
                  </div>
                )} */}
                  <h3 className="text-2xl font-bold text-[#1E2B4F]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#6A7C99]">{plan.tagline}</p>
                  <p className="mt-6 flex items-baseline">
                    <span className="text-5xl font-bold text-[#1E2B4F]">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-[#6A7C99] ml-1">
                        {plan.period}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-[#6A7C99]">
                    {plan.description}
                  </p>

                  {plan.isWishlist ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={`mt-8 w-full h-12 font-semibold shadow-sm ${
                            plan.buttonVariant === "default"
                              ? "bg-[#4B63FF] hover:bg-[#3A51E0] text-white"
                              : "bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] border border-[#A8BFFF]"
                          }`}
                          variant={plan.buttonVariant}
                          size="lg"
                          onClick={() => setSelectedPlan(plan.name)}
                        >
                          {plan.buttonText}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] p-6">
                        <DialogHeader>
                          <DialogTitle className="text-[#1E2B4F] text-xl">
                            Join the Waitlist for {selectedPlan}
                          </DialogTitle>
                          <DialogDescription className="text-[#6A7C99]">
                            Leave your details and we&apos;ll notify you when
                            this plan becomes available.
                          </DialogDescription>
                        </DialogHeader>
                        <WishlistForm planName={selectedPlan} />
                      </DialogContent>
                    </Dialog>
                  ) : plan.isContactForm ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="mt-8 w-full bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] font-semibold border border-[#A8BFFF] shadow-sm h-12"
                          variant={plan.buttonVariant}
                          size="lg"
                        >
                          {plan.buttonText}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] p-6">
                        <DialogHeader>
                          <DialogTitle className="text-[#1E2B4F] text-xl">
                            Contact Our Sales Team
                          </DialogTitle>
                          <DialogDescription className="text-[#6A7C99]">
                            Fill out this form and our team will get back to you
                            within 24 hours.
                          </DialogDescription>
                        </DialogHeader>
                        <ContactForm />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      className={`mt-8 w-full h-12 font-semibold shadow-sm ${
                        plan.buttonVariant === "default"
                          ? "bg-[#4B63FF] hover:bg-[#3A51E0] text-white"
                          : "bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] border border-[#A8BFFF]"
                      }`}
                      variant={plan.buttonVariant}
                      size="lg"
                      disabled={plan.buttonText === "Coming Soon"}
                    >
                      {plan.buttonText}
                      {plan.buttonVariant === "default" &&
                        plan.buttonText !== "Coming Soon" && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between bg-[#F5F7FA] p-8">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1E2B4F]">
                      What&apos;s included:
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {/* Show only first 4 items or all items based on expanded state */}
                      {plan.features
                        .slice(0, isExpanded ? undefined : 4)
                        .map((feature) => (
                          <li
                            key={feature.name}
                            className="flex items-start text-sm leading-6"
                          >
                            {feature.included ? (
                              <Check
                                className="mr-3 h-5 w-5 flex-shrink-0 text-[#19C68B]"
                                aria-hidden="true"
                              />
                            ) : (
                              <X
                                className="mr-3 h-5 w-5 flex-shrink-0 text-[#6A7C99]"
                                aria-hidden="true"
                              />
                            )}
                            <span
                              className={
                                feature.included
                                  ? "text-[#1E2B4F]"
                                  : "text-[#6A7C99]"
                              }
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                    </ul>

                    {/* Show More/Less button if features are more than 4 */}
                    {plan.features.length > 4 && (
                      <Button
                        variant="ghost"
                        className="mt-4 w-full text-[#4B63FF] hover:bg-[#4B63FF]/10"
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {" "}
                        {isExpanded ? (
                          <>
                            Show Less
                            <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show More
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
              })}
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <Card style={{ borderColor: "#F0F4FF" }}>
              <CardHeader className="pb-2">
                <CardTitle style={{ color: "#1E2B4F" }}>
                  Billing History
                </CardTitle>
                <CardDescription style={{ color: "#6A7C99" }}>
                  View and manage your billing information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-sm font-medium mb-3"
                      style={{ color: "#1E2B4F" }}
                    >
                      Payment Method
                    </h3>
                    <div
                      className="border rounded-md p-4 flex items-center justify-between"
                      style={{ borderColor: "#F0F4FF" }}
                    >
                      <div className="flex items-center">
                        <CreditCard
                          className="h-6 w-6 mr-3"
                          style={{ color: "#4B63FF" }}
                        />
                        <div>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#1E2B4F" }}
                          >
                            Visa ending in 4242
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            style={{ color: "#6A7C99" }}
                          >
                            Expires 12/24
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                      >
                        Update
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-medium mb-3"
                      style={{ color: "#1E2B4F" }}
                    >
                      Recent Transactions
                    </h3>
                    <div className="space-y-3">
                      <div
                        className="border rounded-md p-4 flex items-center justify-between"
                        style={{ borderColor: "#F0F4FF" }}
                      >
                        <div>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#1E2B4F" }}
                          >
                            Pro Plan - Monthly
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            style={{ color: "#6A7C99" }}
                          >
                            Dec 1, 2023
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#1E2B4F" }}
                          >
                            $19.99
                          </p>
                          <p
                            className="text-xs text-green-600"
                            style={{ color: "#10B981" }}
                          >
                            Paid
                          </p>
                        </div>
                      </div>
                      <div
                        className="border rounded-md p-4 flex items-center justify-between"
                        style={{ borderColor: "#F0F4FF" }}
                      >
                        <div>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#1E2B4F" }}
                          >
                            Pro Plan - Monthly
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            style={{ color: "#6A7C99" }}
                          >
                            Nov 1, 2023
                          </p>
                        </div>
                        <div className="text-right">
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#1E2B4F" }}
                          >
                            $19.99
                          </p>
                          <p
                            className="text-xs text-green-600"
                            style={{ color: "#10B981" }}
                          >
                            Paid
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  Download All
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
