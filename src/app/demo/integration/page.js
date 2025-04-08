"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Link, UploadCloud, X } from "lucide-react";

const brokers = [
  {
    name: "Zerodha",
    description: "India's largest stock broker by active retail clients",
    logo: "/logo/zerodha.png",
    status: "connected",
    lastSync: "2 hours ago",
  },
  {
    name: "Fyers",
    description: "Modern trading platform with advanced charting",
    logo: "/logo/fyers.jpg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Dhan",
    description: "Next-generation trading platform",
    logo: "/logo/dhan.jpeg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Angel One",
    description: "Full-service stock broker with research",
    logo: "/logo/AngelOne.png",
    status: "connected",
    lastSync: "30 minutes ago",
  },
  {
    name: "Alpaca",
    description: "Commission-free stock trading API",
    logo: "/logo/alpaca.png",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Tradier",
    description: "US-based broker with powerful API",
    logo: "/logo/Tradier.png",
    status: "disconnected",
    lastSync: null,
  },
];

const dataProviders = [
  {
    name: "TrueData",
    description: "Real-time market data and analytics",
    logo: "/logo/TrueData.png",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Global Data Feed",
    description: "Comprehensive market data solution",
    logo: "/logo/global-data-feeds.png",
    status: "disconnected",
    lastSync: null,
  },
];

export default function IntegrationPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [csvUploaded, setCsvUploaded] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
    setCsvUploaded(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Integration</h1>
        <p className="text-muted-foreground">
          Connect your broker accounts and data providers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Broker Integration Section */}
        <Card className="border border-[#A8BFFF]/30 shadow-md">
          <CardHeader className="bg-[#F5F7FA] border-b border-[#A8BFFF]/20">
            <CardTitle className="text-[#1E2B4F]">Broker Accounts</CardTitle>
            <CardDescription>
              Connect your broker accounts to automatically import your trading
              data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {brokers.map((broker) => (
              <div
                key={broker.name}
                className="flex items-center justify-between rounded-lg border border-[#A8BFFF]/30 p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4B63FF]/10 border border-[#4B63FF]/20">
                    <div className="h-8 w-8 relative overflow-hidden">
                      <Image
                        src={broker.logo}
                        alt={broker.name}
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1E2B4F]">
                      {broker.name}
                    </h3>
                    <p className="text-sm text-[#6A7C99]">
                      {broker.description}
                    </p>
                  </div>
                </div>
                <div>
                  {broker.status === "connected" ? (
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-[#6A7C99]">
                          Last sync: {broker.lastSync}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-400 text-red-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white">
                      <Link className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Data Providers Section */}
        <Card className="border border-[#A8BFFF]/30 shadow-md">
          <CardHeader className="bg-[#F5F7FA] border-b border-[#A8BFFF]/20">
            <CardTitle className="text-[#1E2B4F]">Data Providers</CardTitle>
            <CardDescription>
              Connect to market data providers for additional data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {dataProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center justify-between rounded-lg border border-[#A8BFFF]/30 p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4B63FF]/10 border border-[#4B63FF]/20">
                    <div className="h-8 w-8 relative overflow-hidden">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        fill
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1E2B4F]">
                      {provider.name}
                    </h3>
                    <p className="text-sm text-[#6A7C99]">
                      {provider.description}
                    </p>
                  </div>
                </div>
                <div>
                  {provider.status === "connected" ? (
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-[#6A7C99]">
                          Last sync: {provider.lastSync}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-400 text-red-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white">
                      <Link className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* CSV Upload Section */}
      <Card className="border border-[#A8BFFF]/30 shadow-md">
        <CardHeader className="bg-[#F5F7FA] border-b border-[#A8BFFF]/20">
          <CardTitle className="text-[#1E2B4F]">CSV Data Upload</CardTitle>
          <CardDescription>
            Upload your trading data from a CSV file
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div
            className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center ${
              isDragging
                ? "border-[#4B63FF] bg-[#4B63FF]/5"
                : "border-[#A8BFFF]/50"
            } ${csvUploaded ? "bg-green-50 border-green-500" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {csvUploaded ? (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1E2B4F]">
                  Upload Successful
                </h3>
                <p className="mb-4 max-w-md text-sm text-[#6A7C99]">
                  Your file has been uploaded and is being processed. This may
                  take a few minutes.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCsvUploaded(false)}
                    className="border-[#A8BFFF] text-[#4B63FF] hover:bg-[#4B63FF]/5"
                  >
                    Upload Another File
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white"
                  >
                    View Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4B63FF]/10">
                  <UploadCloud className="h-6 w-6 text-[#4B63FF]" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-[#1E2B4F]">
                  Drag & Drop CSV File
                </h3>
                <p className="mb-4 max-w-md text-sm text-[#6A7C99]">
                  Drag and drop your trading data CSV file here, or click to
                  select a file from your computer.
                </p>
                <Button className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white">
                  Select File
                </Button>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t border-[#A8BFFF]/20 px-6 py-4 bg-[#F5F7FA]/50">
          <h4 className="mb-2 text-sm font-medium text-[#1E2B4F]">
            Supported formats
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#4B63FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#4B63FF]">
              Zerodha P&L Report
            </span>
            <span className="rounded-full bg-[#4B63FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#4B63FF]">
              Angel One Trade Report
            </span>
            <span className="rounded-full bg-[#4B63FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#4B63FF]">
              Stockey CSV Format
            </span>
            <span className="rounded-full bg-[#4B63FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#4B63FF]">
              Alpaca API Integration
            </span>
          </div>
          <p className="mt-4 text-xs text-[#6A7C99]">
            Need help with CSV format?{" "}
            <a
              href="#"
              className="text-[#4B63FF] underline hover:text-[#3A51E0]"
            >
              Download template
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-[#4B63FF] underline hover:text-[#3A51E0]"
            >
              view documentation
            </a>
            .
          </p>
        </CardFooter>
      </Card>

      {/* API Integration Section */}
      <Card className="border border-[#A8BFFF]/30 shadow-md">
        <CardHeader className="bg-[#F5F7FA] border-b border-[#A8BFFF]/20">
          <CardTitle className="text-[#1E2B4F]">API Integration</CardTitle>
          <CardDescription>
            Access the Stockey API for advanced integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="rounded-lg border border-[#A8BFFF]/30 p-4 hover:shadow-md transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-medium text-[#1E2B4F]">Developer API</h3>
                <p className="text-sm text-[#6A7C99]">
                  Access your data programmatically with our RESTful API
                </p>
              </div>
              <Button className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white">
                Generate API Key
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-[#A8BFFF]/30 p-4 hover:shadow-md transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-medium text-[#1E2B4F]">
                  Webhook Integration
                </h3>
                <p className="text-sm text-[#6A7C99]">
                  Receive real-time notifications via webhook
                </p>
              </div>
              <Button
                variant="outline"
                className="border-[#A8BFFF] text-[#4B63FF] hover:bg-[#4B63FF]/5"
              >
                Configure Webhooks
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row sm:justify-between border-t border-[#A8BFFF]/20 px-6 py-4 bg-[#F5F7FA]/50">
          <p className="text-sm text-[#6A7C99] mb-2 sm:mb-0">
            Need help with API integration?
          </p>
          <a
            href="#"
            className="text-sm text-[#4B63FF] hover:text-[#3A51E0] hover:underline"
          >
            View API Documentation
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
