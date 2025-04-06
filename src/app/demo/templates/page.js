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
  BarChart3,
  LineChart,
  PieChart,
  Layout,
  Search,
  Plus,
  Filter,
  ChevronDown,
  Star,
  Clock,
  Users,
  Copy,
  Eye,
  BarChart,
  Download,
  FileText,
  X,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Sample template categories
const categories = [
  { id: "all", name: "All Templates" },
  { id: "portfolio", name: "Portfolio Analysis" },
  { id: "fundamental", name: "Fundamental Analysis" },
  { id: "technical", name: "Technical Analysis" },
  { id: "sector", name: "Sector Analysis" },
  { id: "market", name: "Market Overview" },
  { id: "custom", name: "My Templates" },
];

// Sample templates
const templates = [
  {
    id: 1,
    title: "Portfolio Performance Dashboard",
    description: "Track your portfolio's performance, returns, and allocation",
    category: "portfolio",
    image: "/images/templates/portfolio-dashboard.jpg",
    rating: 4.8,
    reviews: 245,
    isPopular: true,
    isFeatured: true,
    isPremium: false,
    isNew: false,
  },
  {
    id: 2,
    title: "Fundamental Analysis Dashboard",
    description: "Analyze company financials, ratios, and valuation metrics",
    category: "fundamental",
    image: "/images/templates/fundamental-dashboard.jpg",
    rating: 4.6,
    reviews: 189,
    isPopular: true,
    isFeatured: false,
    isPremium: true,
    isNew: false,
  },
  {
    id: 3,
    title: "Technical Analysis Dashboard",
    description: "Chart patterns, technical indicators, and price analysis",
    category: "technical",
    image: "/images/templates/technical-dashboard.jpg",
    rating: 4.7,
    reviews: 210,
    isPopular: true,
    isFeatured: false,
    isPremium: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Sector Performance Dashboard",
    description: "Compare sectors, industry groups, and relative performance",
    category: "sector",
    image: "/images/templates/sector-dashboard.jpg",
    rating: 4.5,
    reviews: 175,
    isPopular: false,
    isFeatured: true,
    isPremium: false,
    isNew: false,
  },
  {
    id: 5,
    title: "Market Overview Dashboard",
    description: "Track market indices, breadth, and sentiment indicators",
    category: "market",
    image: "/images/templates/market-dashboard.jpg",
    rating: 4.9,
    reviews: 320,
    isPopular: true,
    isFeatured: true,
    isPremium: false,
    isNew: false,
  },
  {
    id: 6,
    title: "Dividend Analysis Dashboard",
    description: "Track dividend yields, payout ratios, and income projections",
    category: "portfolio",
    image: "/images/templates/dividend-dashboard.jpg",
    rating: 4.6,
    reviews: 142,
    isPopular: false,
    isFeatured: false,
    isPremium: false,
    isNew: true,
  },
  {
    id: 7,
    title: "Risk Analysis Dashboard",
    description: "Measure volatility, drawdowns, and risk-adjusted returns",
    category: "portfolio",
    image: "/images/templates/risk-dashboard.jpg",
    rating: 4.7,
    reviews: 168,
    isPopular: false,
    isFeatured: false,
    isPremium: true,
    isNew: true,
  },
  {
    id: 8,
    title: "Options Trading Dashboard",
    description: "Track options strategies, greeks, and expiration analysis",
    category: "technical",
    image: "/images/templates/options-dashboard.jpg",
    rating: 4.8,
    reviews: 195,
    isPopular: false,
    isFeatured: false,
    isPremium: true,
    isNew: true,
  },
];

const popularTemplates = templates
  .filter((template) => template.isPopular)
  .slice(0, 3);
const featuredTemplates = templates
  .filter((template) => template.isFeatured)
  .slice(0, 3);

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Filter templates based on active category
  const filteredTemplates =
    activeCategory === "all"
      ? templates
      : templates.filter((template) => template.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#1E2B4F" }}
          >
            Dashboard Templates
          </h1>
          <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
            Choose from pre-built templates or create your own
          </p>
        </div>
        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
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
            </div>
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
            Create Template
          </Button>
        </div>
      </div>

      {/* Categories tabs */}
      <div className="flex overflow-x-auto py-2 gap-2 no-scrollbar">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            style={
              activeCategory === category.id
                ? { backgroundColor: "#4B63FF", color: "white" }
                : { color: "#1E2B4F", borderColor: "#A8BFFF" }
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Featured templates section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold" style={{ color: "#1E2B4F" }}>
            Featured Templates
          </h2>
          <Button variant="ghost" style={{ color: "#4B63FF" }}>
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTemplates.map((template) => (
            <Card
              key={template.id}
              className="overflow-hidden transition-all hover:shadow-md"
              style={{ borderColor: "#F0F4FF" }}
            >
              <div className="aspect-[16/9] bg-muted relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                  {template.category === "portfolio" && (
                    <BarChart3 className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "fundamental" && (
                    <FileText className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "technical" && (
                    <LineChart className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "sector" && (
                    <PieChart className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "market" && (
                    <BarChart className="h-12 w-12 text-primary/40" />
                  )}
                </div>
                {template.isPremium && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    Premium
                  </div>
                )}
                {template.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    New
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1" style={{ color: "#1E2B4F" }}>
                  {template.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground line-clamp-2"
                  style={{ color: "#6A7C99" }}
                >
                  {template.description}
                </p>
                <div className="flex items-center mt-3 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span>{template.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    {template.reviews} reviews
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#4B63FF", color: "white" }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Use Template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* All Templates Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold" style={{ color: "#1E2B4F" }}>
            {activeCategory === "all"
              ? "All Templates"
              : categories.find((c) => c.id === activeCategory)?.name}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
              >
                Newest First
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="overflow-hidden transition-all hover:shadow-md"
              style={{ borderColor: "#F0F4FF" }}
            >
              <div className="aspect-[16/9] bg-muted relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                  {template.category === "portfolio" && (
                    <BarChart3 className="h-10 w-10 text-primary/40" />
                  )}
                  {template.category === "fundamental" && (
                    <FileText className="h-10 w-10 text-primary/40" />
                  )}
                  {template.category === "technical" && (
                    <LineChart className="h-10 w-10 text-primary/40" />
                  )}
                  {template.category === "sector" && (
                    <PieChart className="h-10 w-10 text-primary/40" />
                  )}
                  {template.category === "market" && (
                    <BarChart className="h-10 w-10 text-primary/40" />
                  )}
                </div>
                {template.isPremium && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    Premium
                  </div>
                )}
                {template.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                    New
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: "#1E2B4F" }}
                >
                  {template.title}
                </h3>
                <p
                  className="text-xs text-muted-foreground line-clamp-2"
                  style={{ color: "#6A7C99" }}
                >
                  {template.description}
                </p>
                <div className="flex items-center mt-2 text-xs">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <span>{template.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    {template.reviews} reviews
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex justify-between">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Eye className="h-4 w-4" style={{ color: "#4B63FF" }} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Copy className="h-4 w-4" style={{ color: "#4B63FF" }} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" style={{ color: "#4B63FF" }} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Used Templates */}
      <div>
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 mr-2" style={{ color: "#4B63FF" }} />
          <h2 className="text-xl font-semibold" style={{ color: "#1E2B4F" }}>
            Recently Used
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            className="overflow-hidden border-dashed border-2"
            style={{ borderColor: "#A8BFFF" }}
          >
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
              <Plus className="h-12 w-12 mb-3" style={{ color: "#4B63FF" }} />
              <h3 className="font-semibold mb-2" style={{ color: "#1E2B4F" }}>
                Create New Dashboard
              </h3>
              <p
                className="text-sm text-muted-foreground mb-4"
                style={{ color: "#6A7C99" }}
              >
                Build a custom dashboard from scratch
              </p>
              <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
                Start Building
              </Button>
            </div>
          </Card>
          {popularTemplates.map((template) => (
            <Card
              key={template.id}
              className="overflow-hidden transition-all hover:shadow-md"
              style={{ borderColor: "#F0F4FF" }}
            >
              <div className="aspect-[16/9] bg-muted relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                  {template.category === "portfolio" && (
                    <BarChart3 className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "fundamental" && (
                    <FileText className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "technical" && (
                    <LineChart className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "sector" && (
                    <PieChart className="h-12 w-12 text-primary/40" />
                  )}
                  {template.category === "market" && (
                    <BarChart className="h-12 w-12 text-primary/40" />
                  )}
                </div>
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                  Last used 2 days ago
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1" style={{ color: "#1E2B4F" }}>
                  {template.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ color: "#6A7C99" }}
                >
                  Last edited on May 12, 2023
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Duplicate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Templates */}
      <div>
        <div className="flex items-center mb-4">
          <Users className="h-5 w-5 mr-2" style={{ color: "#4B63FF" }} />
          <h2 className="text-xl font-semibold" style={{ color: "#1E2B4F" }}>
            Community Templates
          </h2>
        </div>
        <Card
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          style={{ borderColor: "#A8BFFF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  Share your templates with the community
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6A7C99" }}>
                  Publish your custom dashboards to help others and get
                  recognized for your contributions. Earn rewards when others
                  use your templates.
                </p>
                <div className="flex gap-3">
                  <Button
                    style={{ backgroundColor: "#4B63FF", color: "white" }}
                  >
                    Publish Template
                  </Button>
                  <Button
                    variant="outline"
                    style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-primary/10">
                <Layout className="h-20 w-20 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
