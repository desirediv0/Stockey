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
  PieChart as PieChartIcon,
  Globe,
  ChevronDown,
  Search,
  Layers,
  Filter,
  ListFilter,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample market data
const marketIndices = [
  {
    name: "NIFTY 50",
    value: 23156.85,
    change: 0.75,
    isPositive: true,
  },
  {
    name: "SENSEX",
    value: 76582.5,
    change: 0.82,
    isPositive: true,
  },
  {
    name: "BANKNIFTY",
    value: 48320.75,
    change: 1.05,
    isPositive: true,
  },
  {
    name: "NIFTYMIDCAP",
    value: 12543.3,
    change: -0.32,
    isPositive: false,
  },
];

const topGainers = [
  { name: "ADANIPOWER", price: 542.3, change: 8.5 },
  { name: "TATAMOTORS", price: 892.15, change: 5.2 },
  { name: "M&M", price: 1450.65, change: 4.8 },
  { name: "ICICIBANK", price: 1120.85, change: 3.9 },
  { name: "HDFC", price: 2730.5, change: 3.7 },
];

const topLosers = [
  { name: "ZOMATO", price: 178.2, change: -6.3 },
  { name: "INFY", price: 1450.9, change: -4.2 },
  { name: "ASIANPAINT", price: 3120.4, change: -3.8 },
  { name: "SBIN", price: 732.15, change: -2.4 },
  { name: "TITAN", price: 3450.75, change: -2.1 },
];

const sectorPerformance = [
  { name: "IT", change: -1.8, isPositive: false },
  { name: "Banking", change: 1.5, isPositive: true },
  { name: "Auto", change: 2.7, isPositive: true },
  { name: "Pharma", change: 0.4, isPositive: true },
  { name: "FMCG", change: -0.8, isPositive: false },
  { name: "Metals", change: 3.2, isPositive: true },
  { name: "Energy", change: 1.2, isPositive: true },
  { name: "Realty", change: -2.1, isPositive: false },
];

const marketBreadth = {
  advancing: 1235,
  declining: 832,
  unchanged: 124,
};

const newsItems = [
  {
    title: "RBI keeps repo rate unchanged at 6.5% for seventh consecutive time",
    time: "2 hours ago",
    source: "Economic Times",
  },
  {
    title: "Q4 results: TCS reports 5% growth in net profit, beats estimates",
    time: "4 hours ago",
    source: "LiveMint",
  },
  {
    title: "Adani Power shares surge after announcing expansion plans",
    time: "6 hours ago",
    source: "MoneyControl",
  },
  {
    title:
      "FII buying boosts markets, domestic institutions remain net sellers",
    time: "8 hours ago",
    source: "Business Standard",
  },
];

// Sample historic market data for the line chart
const historicData = [
  { date: "Jan", NIFTY: 21500, SENSEX: 72000, BANKNIFTY: 45000 },
  { date: "Feb", NIFTY: 22100, SENSEX: 73500, BANKNIFTY: 46200 },
  { date: "Mar", NIFTY: 21800, SENSEX: 73000, BANKNIFTY: 45800 },
  { date: "Apr", NIFTY: 22400, SENSEX: 74200, BANKNIFTY: 46800 },
  { date: "May", NIFTY: 22900, SENSEX: 75500, BANKNIFTY: 47500 },
  { date: "Jun", NIFTY: 23100, SENSEX: 76000, BANKNIFTY: 48000 },
  { date: "Jul", NIFTY: 23150, SENSEX: 76580, BANKNIFTY: 48320 },
];

export default function MarketPage() {
  const [marketView, setMarketView] = useState("Overview");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#1E2B4F" }}
          >
            Market Insights
          </h1>
          <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
            Real-time market data and analysis
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
            >
              {marketView}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
            <Search className="mr-2 h-4 w-4" />
            Find Symbol
          </Button>
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {marketIndices.map((index) => (
          <Card
            key={index.name}
            className="shadow-sm hover:shadow-md transition-shadow"
            style={{ borderColor: "#F0F4FF" }}
          >
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm font-medium" style={{ color: "#6A7C99" }}>
                  {index.name}
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1E2B4F" }}>
                  {index.value.toLocaleString()}
                </p>
                <div
                  className={`flex items-center ${
                    index.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {index.isPositive ? (
                    <ArrowUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4" />
                  )}
                  <span className="font-medium">{index.change}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Breadth Card */}
      <Card
        className="shadow-sm hover:shadow-md transition-shadow"
        style={{ borderColor: "#F0F4FF" }}
      >
        <CardHeader className="pb-2">
          <CardTitle
            className="text-lg font-medium"
            style={{ color: "#1E2B4F" }}
          >
            Market Breadth
          </CardTitle>
          <CardDescription style={{ color: "#6A7C99" }}>
            Advancing vs declining stocks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative h-[180px] w-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        name: "Advancing",
                        value: marketBreadth.advancing,
                        color: "#10B981",
                      },
                      {
                        name: "Declining",
                        value: marketBreadth.declining,
                        color: "#EF4444",
                      },
                      {
                        name: "Unchanged",
                        value: marketBreadth.unchanged,
                        color: "#6B7280",
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {[
                      {
                        name: "Advancing",
                        value: marketBreadth.advancing,
                        color: "#10B981",
                      },
                      {
                        name: "Declining",
                        value: marketBreadth.declining,
                        color: "#EF4444",
                      },
                      {
                        name: "Unchanged",
                        value: marketBreadth.unchanged,
                        color: "#6B7280",
                      },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value, "Stocks"]}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-green-600">
                    {marketBreadth.advancing}
                  </span>
                  <span
                    className="text-sm text-muted-foreground"
                    style={{ color: "#6A7C99" }}
                  >
                    Advancing
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${
                        (marketBreadth.advancing /
                          (marketBreadth.advancing +
                            marketBreadth.declining +
                            marketBreadth.unchanged)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">
                    {marketBreadth.declining}
                  </span>
                  <span
                    className="text-sm text-muted-foreground"
                    style={{ color: "#6A7C99" }}
                  >
                    Declining
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{
                      width: `${
                        (marketBreadth.declining /
                          (marketBreadth.advancing +
                            marketBreadth.declining +
                            marketBreadth.unchanged)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-500">
                    {marketBreadth.unchanged}
                  </span>
                  <span
                    className="text-sm text-muted-foreground"
                    style={{ color: "#6A7C99" }}
                  >
                    Unchanged
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-gray-500 rounded-full"
                    style={{
                      width: `${
                        (marketBreadth.unchanged /
                          (marketBreadth.advancing +
                            marketBreadth.declining +
                            marketBreadth.unchanged)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sector Performance Heatmap */}
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
                Sector Performance
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                Performance by industry sectors
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {sectorPerformance.map((sector) => (
              <div
                key={sector.name}
                className="flex flex-col p-4 rounded-lg"
                style={{
                  backgroundColor: sector.isPositive
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(239, 68, 68, 0.1)",
                  borderLeft: `4px solid ${
                    sector.isPositive ? "#10B981" : "#EF4444"
                  }`,
                }}
              >
                <span
                  className="text-sm font-medium mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  {sector.name}
                </span>
                <div
                  className={`flex items-center ${
                    sector.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {sector.isPositive ? (
                    <ArrowUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDown className="mr-1 h-4 w-4" />
                  )}
                  <span className="text-lg font-bold">
                    {Math.abs(sector.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Movers Section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {/* Top Gainers */}
        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Top Gainers
            </CardTitle>
            <CardDescription style={{ color: "#6A7C99" }}>
              Stocks with highest positive movement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topGainers.map((stock) => (
                <div
                  key={stock.name}
                  className="flex items-center justify-between pb-3 border-b last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium" style={{ color: "#1E2B4F" }}>
                      {stock.name}
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "#6A7C99" }}
                    >
                      ₹
                      {stock.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    <span className="font-medium">{stock.change}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Losers */}
        <Card
          className="shadow-sm hover:shadow-md transition-shadow"
          style={{ borderColor: "#F0F4FF" }}
        >
          <CardHeader className="pb-2">
            <CardTitle
              className="text-lg font-medium"
              style={{ color: "#1E2B4F" }}
            >
              Top Losers
            </CardTitle>
            <CardDescription style={{ color: "#6A7C99" }}>
              Stocks with highest negative movement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topLosers.map((stock) => (
                <div
                  key={stock.name}
                  className="flex items-center justify-between pb-3 border-b last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium" style={{ color: "#1E2B4F" }}>
                      {stock.name}
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ color: "#6A7C99" }}
                    >
                      ₹
                      {stock.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <div className="flex items-center text-red-600">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    <span className="font-medium">
                      {Math.abs(stock.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Trends Chart */}
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
                Market Trends
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                Historical performance of major indices
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <ListFilter className="h-4 w-4 mr-2" />
                Compare
              </Button>
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <Layers className="h-4 w-4 mr-2" />
                Indicators
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full rounded-md">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={historicData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#6A7C99" />
                <YAxis stroke="#6A7C99" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="NIFTY"
                  stroke="#4B63FF"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="SENSEX"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="BANKNIFTY"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Market News Feed */}
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
                Latest Market News
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                Recent updates that may impact markets
              </CardDescription>
            </div>
            <Button
              variant="outline"
              style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
            >
              View All News
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="flex items-start pb-4 border-b last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <p className="font-medium mb-1" style={{ color: "#1E2B4F" }}>
                    {news.title}
                  </p>
                  <div
                    className="flex items-center text-sm text-muted-foreground"
                    style={{ color: "#6A7C99" }}
                  >
                    <span>{news.time}</span>
                    <span className="mx-2">•</span>
                    <span>{news.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call-to-Action Card */}
      <Card className="overflow-hidden" style={{ borderColor: "#F0F4FF" }}>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-1" style={{ color: "#1E2B4F" }}>
              Get Advanced Market Analysis
            </h3>
            <p className="text-sm max-w-md" style={{ color: "#6A7C99" }}>
              Upgrade to Pro for real-time market data, technical indicators,
              and personalized alerts
            </p>
          </div>
          <Button style={{ backgroundColor: "#19C68B", color: "white" }}>
            <Globe className="mr-2 h-4 w-4" />
            Upgrade to Pro
          </Button>
        </div>
      </Card>
    </div>
  );
}
