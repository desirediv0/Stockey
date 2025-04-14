"use client";
import TradingViewChart from "@/components/TradingViewChart";
import TradingViewSectorStockWidget from "@/components/TradingViewSectorStockWidget";
import TradingViewPerformanceHeatmap from "@/components/TradingViewPerformanceHeatmap";
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
  MoreHorizontal,
  RefreshCw,
  Calendar,
  ChevronDown,
  PieChart,
  BarChart,
  TrendingUp,
  Lock,
} from "lucide-react";
import { formatCurrency, formatPercentage } from "@/lib/utils";

// Sample data for the portfolio dashboard
const portfolioData = {
  totalInvested: 1250000,
  currentValue: 1342500.75,
  netPL: 92500.75,
  percentChange: 7.4,
  xirr: 12.8,
};

const marketData = {
  nifty: {
    value: 23156.85,
    change: 0.75,
    isPositive: true,
  },
  sensex: {
    value: 76582.5,
    change: 0.82,
    isPositive: true,
  },
  marketBreadth: {
    advancing: 1235,
    declining: 832,
    unchanged: 124,
  },
};

const sectorAllocation = [
  { name: "IT", percentage: 28 },
  { name: "Banking", percentage: 22 },
  { name: "Pharma", percentage: 15 },
  { name: "Auto", percentage: 12 },
  { name: "FMCG", percentage: 10 },
  { name: "Others", percentage: 13 },
];

const holdings = [
  {
    symbol: "RELIANCE",
    qty: 120,
    avgBuy: 2450.75,
    cmp: 2850.75,
    invested: 294090,
    currentValue: 342090,
    unrealizedPL: 48000,
    percentGain: 16.32,
    sector: "Energy",
  },
  {
    symbol: "INFY",
    qty: 150,
    avgBuy: 1350.5,
    cmp: 1480.5,
    invested: 202575,
    currentValue: 222075,
    unrealizedPL: 19500,
    percentGain: 9.63,
    sector: "IT",
  },
  {
    symbol: "HDFCBANK",
    qty: 80,
    avgBuy: 1600.25,
    cmp: 1750.3,
    invested: 128020,
    currentValue: 140024,
    unrealizedPL: 12004,
    percentGain: 9.38,
    sector: "Banking",
  },
  {
    symbol: "TCS",
    qty: 35,
    avgBuy: 3200.4,
    cmp: 3540.25,
    invested: 112014,
    currentValue: 123908.75,
    unrealizedPL: 11894.75,
    percentGain: 10.62,
    sector: "IT",
  },
  {
    symbol: "SUNPHARMA",
    qty: 90,
    avgBuy: 980.3,
    cmp: 1020.5,
    invested: 88227,
    currentValue: 91845,
    unrealizedPL: 3618,
    percentGain: 4.1,
    sector: "Pharma",
  },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("1M");
  const [selectedBroker, setSelectedBroker] = useState("All Brokers");
  const [selectedDataSource, setSelectedDataSource] = useState("TrueData");
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  return (
    <div className="space-y-6">
      {/* Top Navigation and Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative inline-block w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full justify-between"
              style={{
                color: "#1E2B4F",
                borderColor: "#A8BFFF",
                backgroundColor: "white",
              }}
            >
              {selectedBroker}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            {/* Dropdown would go here */}
          </div>

          <div className="relative inline-block w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full justify-between"
              style={{
                color: "#1E2B4F",
                borderColor: "#A8BFFF",
                backgroundColor: "white",
              }}
            >
              {selectedDataSource}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            {/* Dropdown would go here */}
          </div>

          <Button
            variant="outline"
            style={{
              color: "#4B63FF",
              borderColor: "#A8BFFF",
              backgroundColor: "white",
            }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="inline-flex items-center rounded-md shadow-sm">
          <Button
            variant={timeRange === "1D" ? "default" : "outline"}
            className="rounded-l-md rounded-r-none"
            onClick={() => setTimeRange("1D")}
            style={
              timeRange === "1D"
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
            1D
          </Button>
          <Button
            variant={timeRange === "1W" ? "default" : "outline"}
            className="rounded-none border-l-0"
            onClick={() => setTimeRange("1W")}
            style={
              timeRange === "1W"
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
            1W
          </Button>
          <Button
            variant={timeRange === "1M" ? "default" : "outline"}
            className="rounded-none border-l-0"
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
            variant={timeRange === "YTD" ? "default" : "outline"}
            className="rounded-none border-l-0"
            onClick={() => setTimeRange("YTD")}
            style={
              timeRange === "YTD"
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
            YTD
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
      </div>

      {/* Header Widgets (Portfolio Summary Cards) */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ color: "#6A7C99" }}
              >
                Total Invested
              </p>
              <p className="text-2xl font-bold" style={{ color: "#1E2B4F" }}>
                {formatCurrency(portfolioData.totalInvested)}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ color: "#6A7C99" }}
              >
                Current Value
              </p>
              <p className="text-2xl font-bold" style={{ color: "#1E2B4F" }}>
                {formatCurrency(portfolioData.currentValue)}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ color: "#6A7C99" }}
              >
                Net P&L
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(portfolioData.netPL)}
                </p>
                <ArrowUp className="ml-2 h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ color: "#6A7C99" }}
              >
                % Change
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-green-600">
                  +{portfolioData.percentChange}%
                </p>
                <ArrowUp className="ml-2 h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ color: "#6A7C99" }}
              >
                XIRR
              </p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-green-600">
                  {portfolioData.xirr}%
                </p>
                <ArrowUp className="ml-2 h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Sentiment Section */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card
          className="shadow-sm hover:shadow-md transition-shadow col-span-3 lg:col-span-1"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Market Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">NIFTY</p>
                  <p className="text-2xl font-bold">{marketData.nifty.value}</p>
                </div>
                <div
                  className={`flex items-center ${
                    marketData.nifty.isPositive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {marketData.nifty.isPositive ? (
                    <ArrowUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {marketData.nifty.change}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">SENSEX</p>
                  <p className="text-2xl font-bold">
                    {marketData.sensex.value}
                  </p>
                </div>
                <div
                  className={`flex items-center ${
                    marketData.sensex.isPositive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {marketData.sensex.isPositive ? (
                    <ArrowUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {marketData.sensex.change}%
                  </span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Market Breadth</p>
                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{
                        width: `${
                          (marketData.marketBreadth.advancing /
                            (marketData.marketBreadth.advancing +
                              marketData.marketBreadth.declining +
                              marketData.marketBreadth.unchanged)) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="ml-2 text-xs font-medium">
                    <span className="text-green-600">
                      {marketData.marketBreadth.advancing}
                    </span>
                    {" / "}
                    <span className="text-red-600">
                      {marketData.marketBreadth.declining}
                    </span>
                    {" / "}
                    <span className="text-gray-500">
                      {marketData.marketBreadth.unchanged}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Chart */}
        <Card
          className="shadow-sm hover:shadow-md transition-shadow col-span-3 lg:col-span-2"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle
                className="text-lg font-medium"
                style={{ color: "#1E2B4F" }}
              >
                Performance
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                View Options
              </Button>
            </div>
          </CardHeader>
       
          <CardContent>
            <div className="h-[250px] p-1">
              <TradingViewChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Visuals Section */}
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
              Sector Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[450px] p-1">
              <TradingViewSectorStockWidget />
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
              Performance Heatmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[450px] p-1">
              <TradingViewPerformanceHeatmap />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table Section */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Current Holdings
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                Export
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
                  <th className="text-right py-3 px-4 font-medium">Qty</th>
                  <th className="text-right py-3 px-4 font-medium">Avg Buy</th>
                  <th className="text-right py-3 px-4 font-medium">CMP</th>
                  <th className="text-right py-3 px-4 font-medium">Invested</th>
                  <th className="text-right py-3 px-4 font-medium">
                    Current Value
                  </th>
                  <th className="text-right py-3 px-4 font-medium">
                    Unrealized P&L
                  </th>
                  <th className="text-right py-3 px-4 font-medium">
                    % Gain/Loss
                  </th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr
                    key={holding.symbol}
                    className="border-b"
                    style={{ color: "#1E2B4F" }}
                  >
                    <td className="py-3 px-4 font-medium">{holding.symbol}</td>
                    <td className="text-right py-3 px-4">{holding.qty}</td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(holding.avgBuy)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(holding.cmp)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(holding.invested)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(holding.currentValue)}
                    </td>
                    <td
                      className={`text-right py-3 px-4 font-medium ${
                        holding.unrealizedPL >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {holding.unrealizedPL >= 0 ? "+" : ""}
                      {formatCurrency(holding.unrealizedPL)}
                    </td>
                    <td
                      className={`text-right py-3 px-4 font-medium ${
                        holding.percentGain >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {holding.percentGain >= 0 ? "+" : ""}
                      {holding.percentGain}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Watchlist Section */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Watchlist & Alerts
            </CardTitle>
            <Button
              size="sm"
              style={{ backgroundColor: "#4B63FF", color: "white" }}
            >
              Add Symbol
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-md">
            <div className="text-center p-6">
              <Lock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 font-medium">Premium Feature</p>
              <p className="text-sm text-gray-400 mb-4">
                Upgrade to access watchlist and alerts
              </p>
              <Button style={{ backgroundColor: "#19C68B", color: "white" }}>
                Upgrade Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer with upgrade prompt */}
      <div
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center"
        style={{ borderColor: "#A8BFFF" }}
      >
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-1" style={{ color: "#1E2B4F" }}>
            Unlock Advanced Analytics
          </h3>
          <p className="text-sm" style={{ color: "#6A7C99" }}>
            Upgrade to Pro for additional features, API access, and advanced
            reporting
          </p>
        </div>
        <Button style={{ backgroundColor: "#19C68B", color: "white" }}>
          Upgrade to Pro
        </Button>
      </div>
    </div>
  );
}
