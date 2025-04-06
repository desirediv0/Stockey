"use client";

import { useState } from "react";
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
    logo: "/logos/zerodha.svg",
    status: "connected",
    lastSync: "2 hours ago",
  },
  {
    name: "Fyers",
    description: "Modern trading platform with advanced charting",
    logo: "/logos/fyers.svg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Dhan",
    description: "Next-generation trading platform",
    logo: "/logos/dhan.svg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Angel One",
    description: "Full-service stock broker with research",
    logo: "/logos/angel-one.svg",
    status: "connected",
    lastSync: "30 minutes ago",
  },
  {
    name: "Interactive Brokers",
    description: "Global trading platform for international markets",
    logo: "/logos/ib.svg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Tradier",
    description: "US-based broker with powerful API",
    logo: "/logos/tradier.svg",
    status: "disconnected",
    lastSync: null,
  },
];

const dataProviders = [
  {
    name: "TrueData",
    description: "Real-time market data and analytics",
    logo: "/logos/truedata.svg",
    status: "disconnected",
    lastSync: null,
  },
  {
    name: "Global Data Feed",
    description: "Comprehensive market data solution",
    logo: "/logos/gdf.svg",
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Integration</h1>
        <p className="text-muted-foreground">
          Connect your broker accounts and data providers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Broker Integration Section */}
        <Card>
          <CardHeader>
            <CardTitle>Broker Accounts</CardTitle>
            <CardDescription>
              Connect your broker accounts to automatically import your trading
              data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {brokers.map((broker) => (
              <div
                key={broker.name}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <div className="h-6 w-6 bg-muted rounded-md"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">{broker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {broker.description}
                    </p>
                  </div>
                </div>
                <div>
                  {broker.status === "connected" ? (
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">
                          Last sync: {broker.lastSync}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <X className="mr-2 h-4 w-4" />
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button>
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
        <Card>
          <CardHeader>
            <CardTitle>Data Providers</CardTitle>
            <CardDescription>
              Connect to market data providers for additional data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dataProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <div className="h-6 w-6 bg-muted rounded-md"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">{provider.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {provider.description}
                    </p>
                  </div>
                </div>
                <div>
                  {provider.status === "connected" ? (
                    <div className="flex items-center">
                      <div className="mr-2 flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">
                          Last sync: {provider.lastSync}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <X className="mr-2 h-4 w-4" />
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button>
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
      <Card>
        <CardHeader>
          <CardTitle>CSV Data Upload</CardTitle>
          <CardDescription>
            Upload your trading data from a CSV file
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center ${
              isDragging ? "border-primary bg-primary/5" : "border-border"
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
                <h3 className="mb-2 text-xl font-medium">Upload Successful</h3>
                <p className="mb-4 max-w-md text-sm text-muted-foreground">
                  Your file has been uploaded and is being processed. This may
                  take a few minutes.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCsvUploaded(false)}
                  >
                    Upload Another File
                  </Button>
                  <Button size="sm">
                    View Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <UploadCloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">
                  Drag & Drop CSV File
                </h3>
                <p className="mb-4 max-w-md text-sm text-muted-foreground">
                  Drag and drop your trading data CSV file here, or click to
                  select a file from your computer.
                </p>
                <Button>Select File</Button>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t px-6 py-4">
          <h4 className="mb-2 text-sm font-medium">Supported formats</h4>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              Zerodha P&L Report
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              Angel One Trade Report
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              Stockey CSV Format
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              Interactive Brokers Flex Query
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Need help with CSV format?{" "}
            <a href="#" className="text-primary underline">
              Download template
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary underline">
              view documentation
            </a>
            .
          </p>
        </CardFooter>
      </Card>

      {/* API Integration Section */}
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Access the Stockey API for advanced integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-medium">Developer API</h3>
                <p className="text-sm text-muted-foreground">
                  Access your data programmatically with our RESTful API
                </p>
              </div>
              <Button>Generate API Key</Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-medium">Webhook Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Receive real-time notifications via webhook
                </p>
              </div>
              <Button variant="outline">Configure Webhooks</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Need help with API integration?
          </p>
          <a href="#" className="text-sm text-primary">
            View API Documentation
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
