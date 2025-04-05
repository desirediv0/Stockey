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
  ArrowUp,
  ArrowDown,
  Bell,
  Plus,
  Trash2,
  MoreHorizontal,
  Star,
  StarOff,
  AlertTriangle,
  Settings,
  ChevronDown,
  Search,
  Filter,
  ArrowUpDown,
  X,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Sample watchlist data
const watchlistGroups = [
  { id: 1, name: "Favorites", isDefault: true },
  { id: 2, name: "Tech Stocks", isDefault: false },
  { id: 3, name: "Banking", isDefault: false },
  { id: 4, name: "Pharma", isDefault: false },
];

const watchlistStocks = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd",
    price: 2850.75,
    change: 1.5,
    changeAmount: 42.05,
    isUp: true,
    isFavorite: true,
    alerts: [
      { type: "price", value: 2900, isUp: true },
      { type: "price", value: 2800, isUp: false },
    ],
    group: 1,
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd",
    price: 1480.5,
    change: -1.2,
    changeAmount: -17.95,
    isUp: false,
    isFavorite: true,
    alerts: [{ type: "percent", value: 2, isUp: true }],
    group: 2,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd",
    price: 3540.25,
    change: 0.8,
    changeAmount: 28.1,
    isUp: true,
    isFavorite: false,
    alerts: [],
    group: 2,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd",
    price: 1750.3,
    change: -0.5,
    changeAmount: -8.8,
    isUp: false,
    isFavorite: true,
    alerts: [{ type: "price", value: 1800, isUp: true }],
    group: 3,
  },
  {
    symbol: "SUNPHARMA",
    name: "Sun Pharmaceutical Industries Ltd",
    price: 1020.5,
    change: 0.3,
    changeAmount: 3.05,
    isUp: true,
    isFavorite: false,
    alerts: [],
    group: 4,
  },
  {
    symbol: "TATASTEEL",
    name: "Tata Steel Ltd",
    price: 142.5,
    change: 2.1,
    changeAmount: 2.93,
    isUp: true,
    isFavorite: true,
    alerts: [
      { type: "percent", value: 3, isUp: true },
      { type: "price", value: 130, isUp: false },
    ],
    group: 1,
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd",
    price: 1750.3,
    change: -0.5,
    changeAmount: -8.8,
    isUp: false,
    isFavorite: true,
    alerts: [{ type: "price", value: 1700, isUp: false }],
    group: 1,
  },
  {
    symbol: "MARUTI",
    name: "Maruti Suzuki India Ltd",
    price: 10650.75,
    change: 2.3,
    changeAmount: 239.5,
    isUp: true,
    isFavorite: false,
    alerts: [],
    group: 1,
  },
];

// Sample alerts
const recentAlerts = [
  {
    symbol: "RELIANCE",
    triggerPrice: 2800,
    currentPrice: 2850.75,
    time: "10 mins ago",
    type: "price-above",
  },
  {
    symbol: "TATASTEEL",
    triggerPrice: 140,
    currentPrice: 142.5,
    time: "1 hour ago",
    type: "price-above",
  },
  {
    symbol: "INFY",
    percentage: -2,
    currentChange: -1.2,
    time: "3 hours ago",
    type: "percent-change",
  },
];

export default function WatchlistPage() {
  const [activeGroup, setActiveGroup] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Filter stocks based on active group
  const filteredStocks = watchlistStocks.filter(
    (stock) => stock.group === activeGroup
  );

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to search for stocks
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#1E2B4F" }}
          >
            Watchlist
          </h1>
          <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
            Track your favorite stocks and set price alerts
          </p>
        </div>
        <div className="flex items-center gap-2">
          {showSearch ? (
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search stocks..."
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
              variant="outline"
              onClick={() => setShowSearch(true)}
              style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          )}
          <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
            <Plus className="h-4 w-4 mr-2" />
            Add Symbol
          </Button>
        </div>
      </div>

      {/* Watchlist tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-2">
        {watchlistGroups.map((group) => (
          <Button
            key={group.id}
            variant={activeGroup === group.id ? "default" : "outline"}
            className="h-9"
            onClick={() => setActiveGroup(group.id)}
            style={
              activeGroup === group.id
                ? { backgroundColor: "#4B63FF", color: "white" }
                : { color: "#1E2B4F", borderColor: "#A8BFFF" }
            }
          >
            {group.name}
            {group.isDefault && <Star className="ml-1 h-3 w-3" />}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          style={{ color: "#4B63FF" }}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Watchlist table */}
      <Card className="shadow-sm" style={{ borderColor: "#F0F4FF" }}>
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <CardTitle
                className="text-lg font-medium"
                style={{ color: "#1E2B4F" }}
              >
                {watchlistGroups.find((g) => g.id === activeGroup)?.name}
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                {filteredStocks.length} symbols
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
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
              <Button
                variant="outline"
                size="sm"
                style={{ color: "#4B63FF", borderColor: "#A8BFFF" }}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
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
                  <th className="text-right py-3 px-4 font-medium">Price</th>
                  <th className="text-right py-3 px-4 font-medium">Change</th>
                  <th className="text-center py-3 px-4 font-medium">Alerts</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => (
                  <tr
                    key={`${stock.symbol}-${index}`}
                    className="border-b hover:bg-muted/50 transition-colors"
                    style={{ color: "#1E2B4F" }}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 mr-2 p-0"
                          style={{
                            color: stock.isFavorite ? "#FFB400" : "#6A7C99",
                          }}
                        >
                          {stock.isFavorite ? (
                            <Star className="h-4 w-4" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                        <span className="font-medium">{stock.symbol}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{stock.name}</td>
                    <td className="text-right py-3 px-4 font-medium">
                      ₹
                      {stock.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      className={`text-right py-3 px-4 font-medium ${
                        stock.isUp ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {stock.isUp ? (
                          <ArrowUp className="mr-1 h-4 w-4" />
                        ) : (
                          <ArrowDown className="mr-1 h-4 w-4" />
                        )}
                        <span>
                          {stock.isUp ? "+" : ""}
                          {stock.change}% (₹
                          {Math.abs(stock.changeAmount).toFixed(2)})
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center">
                        {stock.alerts.length > 0 ? (
                          <>
                            <Bell className="h-4 w-4 text-amber-500 mr-1" />
                            <span className="text-sm">
                              {stock.alerts.length}
                            </span>
                          </>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            None
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="text-right py-3 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          style={{ color: "#4B63FF" }}
                        >
                          <Bell className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          style={{ color: "#EF4444" }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          style={{ color: "#6A7C99" }}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between bg-muted/20 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {filteredStocks.length} of {watchlistStocks.length} symbols
          </div>
          <Button
            variant="outline"
            size="sm"
            style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
          >
            View All
          </Button>
        </CardFooter>
      </Card>

      {/* Recent Alerts */}
      <Card className="shadow-sm" style={{ borderColor: "#F0F4FF" }}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle
                className="text-lg font-medium"
                style={{ color: "#1E2B4F" }}
              >
                Recent Alerts
              </CardTitle>
              <CardDescription style={{ color: "#6A7C99" }}>
                Notifications from your price alerts
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
            >
              <Bell className="h-4 w-4 mr-2" />
              Manage Alerts
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {recentAlerts.length > 0 ? (
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border"
                  style={{ borderColor: "#F0F4FF" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        alert.type.includes("above") ||
                        (alert.type === "percent-change" &&
                          alert.percentage > 0)
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: "#1E2B4F" }}>
                        {alert.symbol}{" "}
                        {alert.type === "price-above"
                          ? `crossed above ₹${alert.triggerPrice}`
                          : alert.type === "price-below"
                          ? `dropped below ₹${alert.triggerPrice}`
                          : `moved ${alert.percentage}%`}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>
                          Current price:{" "}
                          <span
                            className={
                              alert.type.includes("above") ||
                              (alert.type === "percent-change" &&
                                alert.percentage > 0)
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            ₹
                            {alert.currentPrice?.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                            {alert.type === "percent-change" &&
                              ` (${alert.currentChange > 0 ? "+" : ""}${
                                alert.currentChange
                              }%)`}
                          </span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground"
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Bell className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
              <p className="text-muted-foreground">No recent alerts</p>
              <Button
                className="mt-4"
                variant="outline"
                style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
              >
                Create Alert
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add to Watchlist Card */}
      <Card className="shadow-sm" style={{ borderColor: "#F0F4FF" }}>
        <CardHeader>
          <CardTitle
            className="text-lg font-medium"
            style={{ color: "#1E2B4F" }}
          >
            Add to Watchlist
          </CardTitle>
          <CardDescription style={{ color: "#6A7C99" }}>
            Popular stocks you might want to track
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                symbol: "NIFTY",
                name: "Nifty 50",
                value: "23,156.85",
                change: "+0.75%",
              },
              {
                symbol: "BANKNIFTY",
                name: "Bank Nifty",
                value: "48,320.75",
                change: "+1.05%",
              },
              {
                symbol: "HDFCBANK",
                name: "HDFC Bank Ltd",
                value: "1,750.30",
                change: "-0.5%",
              },
              {
                symbol: "INFY",
                name: "Infosys Ltd",
                value: "1,480.50",
                change: "-1.2%",
              },
              {
                symbol: "RELIANCE",
                name: "Reliance Industries",
                value: "2,850.75",
                change: "+1.5%",
              },
              {
                symbol: "TATASTEEL",
                name: "Tata Steel Ltd",
                value: "142.50",
                change: "+2.1%",
              },
            ].map((stock, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
                style={{ borderColor: "#F0F4FF" }}
              >
                <div>
                  <p className="font-medium" style={{ color: "#1E2B4F" }}>
                    {stock.symbol}
                  </p>
                  <p className="text-sm text-muted-foreground">{stock.name}</p>
                  <p
                    className={`text-sm font-medium ${
                      stock.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stock.value} ({stock.change})
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  style={{ borderColor: "#A8BFFF" }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t">
          <Button
            variant="outline"
            style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
          >
            Browse More Stocks
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
