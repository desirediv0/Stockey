"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  ArrowDown,
  PieChart,
  BarChart,
  TrendingUp,
  ChevronDown,
  Info,
  Calendar,
  Download,
  ChevronsUpDown,
  Filter,
} from "lucide-react";
import { formatCurrency, formatPercentage } from "@/lib/utils";

// Sample data for the portfolio page
const portfolioStats = {
  totalInvested: 1250000,
  currentValue: 1342500.75,
  overallReturn: 92500.75,
  returnPercentage: 7.4,
  xirr: 12.8,
  cagr: 8.5,
  volatility: 14.2,
  sharpeRatio: 0.74,
};

const assetAllocation = [
  { name: "Stocks", percentage: 65, value: 872625 },
  { name: "Mutual Funds", percentage: 20, value: 268500 },
  { name: "ETFs", percentage: 10, value: 134250 },
  { name: "Bonds", percentage: 5, value: 67125 },
];

const topHoldings = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd",
    value: 142500,
    allocation: 10.6,
    change: 12.5,
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd",
    value: 124300,
    allocation: 9.3,
    change: 5.8,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd",
    value: 105200,
    allocation: 7.8,
    change: -2.3,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd",
    value: 98750,
    allocation: 7.4,
    change: 3.1,
  },
  {
    symbol: "BAJFINANCE",
    name: "Bajaj Finance Ltd",
    value: 82400,
    allocation: 6.1,
    change: -4.2,
  },
];

const sectorDistribution = [
  { name: "IT", percentage: 28, value: 376300 },
  { name: "Financial Services", percentage: 22, value: 295350 },
  { name: "Energy", percentage: 15, value: 201375 },
  { name: "Consumer Goods", percentage: 12, value: 161100 },
  { name: "Pharma", percentage: 10, value: 134250 },
  { name: "Auto", percentage: 8, value: 107400 },
  { name: "Others", percentage: 5, value: 67125 },
];

export default function PortfolioPage() {
  const [timeRange, setTimeRange] = useState("1Y");
  const [portfolioView, setPortfolioView] = useState("Holdings");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#1E2B4F" }}
          >
            Portfolio Analytics
          </h1>
          <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
            Detailed analysis of your investment portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="text-sm"
            style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Jan 1, 2023 - Dec 31, 2023
          </Button>
          <Button
            className="text-sm"
            style={{ backgroundColor: "#4B63FF", color: "white" }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ color: "#6A7C99" }}
                >
                  Current Value
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1E2B4F" }}>
                  {formatCurrency(portfolioStats.currentValue)}
                </p>
              </div>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ color: "#6A7C99" }}
                >
                  Total Return
                </p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(portfolioStats.overallReturn)}
                  </p>
                  <ArrowUp className="ml-2 h-5 w-5 text-green-600" />
                </div>
                <p className="text-sm text-green-600">
                  +{portfolioStats.returnPercentage}%
                </p>
              </div>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ color: "#6A7C99" }}
                >
                  XIRR
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {portfolioStats.xirr}%
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ color: "#6A7C99" }}
                >
                  Since inception
                </p>
              </div>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ color: "#6A7C99" }}
                >
                  CAGR
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1E2B4F" }}>
                  {portfolioStats.cagr}%
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ color: "#6A7C99" }}
                >
                  3 Year
                </p>
              </div>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
               Performance
            </CardTitle>
            <CardDescription style={{ color: "#6A7C99" }}>
              Track your portfolio value over time
            </CardDescription>
          </div>
          <div className="mt-2 sm:mt-0 inline-flex items-center rounded-md shadow-sm">
            <Button
              variant={timeRange === "1M" ? "default" : "outline"}
              className="rounded-l-md rounded-r-none"
              onClick={() => setTimeRange("1M")}
              style={
                timeRange === "1M"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              1M
            </Button>
            <Button
              variant={timeRange === "3M" ? "default" : "outline"}
              className="rounded-none border-l-0"
              onClick={() => setTimeRange("3M")}
              style={
                timeRange === "3M"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              3M
            </Button>
            <Button
              variant={timeRange === "6M" ? "default" : "outline"}
              className="rounded-none border-l-0"
              onClick={() => setTimeRange("6M")}
              style={
                timeRange === "6M"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              6M
            </Button>
            <Button
              variant={timeRange === "1Y" ? "default" : "outline"}
              className="rounded-none border-l-0"
              onClick={() => setTimeRange("1Y")}
              style={
                timeRange === "1Y"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              1Y
            </Button>
            <Button
              variant={timeRange === "3Y" ? "default" : "outline"}
              className="rounded-none border-l-0"
              onClick={() => setTimeRange("3Y")}
              style={
                timeRange === "3Y"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              3Y
            </Button>
            <Button
              variant={timeRange === "ALL" ? "default" : "outline"}
              className="rounded-r-md rounded-l-none border-l-0"
              onClick={() => setTimeRange("ALL")}
              style={
                timeRange === "ALL"
                  ? {
                      backgroundColor: "#4B63FF",
                      color: "white",
                    }
                  : {
                      color: "#1E2B4F",
                      borderColor: "#A8BFFF",
                    }
              }
            >
              ALL
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full bg-gray-50 dark:bg-gray-800 rounded-md flex items-center justify-center">
            {/* Replace with actual chart component */}
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">
                 Performance Chart
              </p>
              <p className="text-xs text-gray-400">
                Showing data for {timeRange}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Breakdown */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Asset Allocation
            </CardTitle>
            <CardDescription style={{ color: "#6A7C99" }}>
              Breakdown by investment type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="h-[200px] w-[200px] relative flex items-center justify-center mb-4 lg:mb-0">
                {/* Replace with actual pie chart component */}
                <div className="rounded-full h-full w-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                  <PieChart className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                {assetAllocation.map((asset) => (
                  <div
                    key={asset.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{
                          backgroundColor: `hsl(${
                            assetAllocation.indexOf(asset) * 60
                          }, 70%, 50%)`,
                        }}
                      ></div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#1E2B4F" }}
                      >
                        {asset.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-sm font-medium"
                        style={{ color: "#1E2B4F" }}
                      >
                        {formatCurrency(asset.value)}
                      </div>
                      <div
                        className="text-xs text-muted-foreground"
                        style={{ color: "#6A7C99" }}
                      >
                        {asset.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Sector Distribution
            </CardTitle>
            <CardDescription style={{ color: "#6A7C99" }}>
              Portfolio by industry sector
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-gray-50 dark:bg-gray-800 rounded-md flex items-center justify-center">
              {/* Replace with actual bar chart component */}
              <div className="text-center">
                <BarChart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Sector Distribution Chart
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {sectorDistribution.slice(0, 4).map((sector) => (
                <div key={sector.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{
                      backgroundColor: `hsl(${
                        sectorDistribution.indexOf(sector) * 40
                      }, 70%, 50%)`,
                    }}
                  ></div>
                  <div className="text-xs">
                    <span className="font-medium" style={{ color: "#1E2B4F" }}>
                      {sector.name}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {sector.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Holdings Table */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle
                className="text-lg font-medium"
                style={{ color: "#1E2B4F" }}
              >
                Top Holdings
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                Your highest value investments
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <ChevronsUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ color: "#6A7C99" }}>
                  <th className="text-left py-3 px-4 font-medium">Symbol</th>
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-right py-3 px-4 font-medium">Value</th>
                  <th className="text-right py-3 px-4 font-medium">
                    Allocation
                  </th>
                  <th className="text-right py-3 px-4 font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                {topHoldings.map((holding) => (
                  <tr
                    key={holding.symbol}
                    className="border-b"
                    style={{ color: "#1E2B4F" }}
                  >
                    <td className="py-3 px-4 font-medium">{holding.symbol}</td>
                    <td className="py-3 px-4">{holding.name}</td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(holding.value)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {holding.allocation}%
                    </td>
                    <td
                      className={`text-right py-3 px-4 font-medium ${
                        holding.change >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {holding.change >= 0 ? (
                          <ArrowUp className="mr-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="mr-1 h-4 w-4" />
                        )}
                        {Math.abs(holding.change)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Risk Metrics */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2">
          <CardTitle
            className="text-lg font-medium"
            style={{ color: "#1E2B4F" }}
          >
            Portfolio Risk Metrics
          </CardTitle>
          <CardDescription style={{ color: "#6A7C99" }}>
            Performance and risk measurements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1E2B4F" }}
                >
                  Volatility (Annualized)
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: "#1E2B4F" }}
                >
                  {portfolioStats.volatility}%
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{
                    width: `${(portfolioStats.volatility / 25) * 100}%`,
                  }}
                ></div>
              </div>
              <p
                className="text-xs text-muted-foreground"
                style={{ color: "#6A7C99" }}
              >
                Measures how much returns fluctuate over time
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1E2B4F" }}
                >
                  Sharpe Ratio
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: "#1E2B4F" }}
                >
                  {portfolioStats.sharpeRatio}
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${(portfolioStats.sharpeRatio / 2) * 100}%`,
                  }}
                ></div>
              </div>
              <p
                className="text-xs text-muted-foreground"
                style={{ color: "#6A7C99" }}
              >
                Risk-adjusted return (higher is better)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1E2B4F" }}
                >
                  CAGR (3Y)
                </span>
                <span className="text-sm font-bold text-green-600">
                  {portfolioStats.cagr}%
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${(portfolioStats.cagr / 20) * 100}%` }}
                ></div>
              </div>
              <p
                className="text-xs text-muted-foreground"
                style={{ color: "#6A7C99" }}
              >
                Compound Annual Growth Rate
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
