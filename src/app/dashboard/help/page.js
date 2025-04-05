"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Search,
  HelpCircle,
  FileText,
  MessageCircle,
  Play,
  Mail,
  ExternalLink,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I create a new portfolio?",
    answer:
      "To create a new portfolio, navigate to the Portfolio page and click on the '+ New Portfolio' button. Fill in the required details like portfolio name, description, and initial balance. You can then add stocks, ETFs, or other securities to your portfolio.",
  },
  {
    id: 2,
    question: "How do I track my investment performance?",
    answer:
      "You can track your investment performance in the Portfolio Analytics section. The dashboard provides various metrics such as total returns, annualized returns, volatility, and other key performance indicators. You can also view historical performance with interactive charts.",
  },
  {
    id: 3,
    question: "Can I import my existing portfolio data?",
    answer:
      "Yes, you can import your existing portfolio data from various sources. Go to Settings > Import Data and select your data source. We support imports from CSV files, Excel spreadsheets, and direct connections with popular brokerages.",
  },
  {
    id: 4,
    question: "How do I set up price alerts?",
    answer:
      "To set up price alerts, go to the Watchlist page, find the security you want to monitor, and click on the bell icon. You can set alerts for price movements, percentage changes, volume spikes, and other technical indicators.",
  },
  {
    id: 5,
    question: "What market data sources do you use?",
    answer:
      "We use a combination of premium market data sources to provide accurate and timely information. Our primary data providers include major exchanges, financial data aggregators, and specialized data vendors for specific asset classes.",
  },
  {
    id: 6,
    question: "How do I customize my dashboard layout?",
    answer:
      "You can customize your dashboard layout by going to Settings > Preferences > Dashboard Layout. You can drag and drop widgets, resize them, and create custom views based on your preferences. Your layouts are automatically saved to your profile.",
  },
  {
    id: 7,
    question: "Is my financial data secure?",
    answer:
      "Yes, your financial data is secured with industry-standard encryption. We use SSL/TLS for all data transfers, and sensitive information is encrypted at rest. We also implement multi-factor authentication and regular security audits to ensure the highest level of protection.",
  },
];

const categories = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: <Play className="h-4 w-4" />,
  },
  {
    id: "portfolios",
    name: "Portfolios",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "analysis",
    name: "Market Analysis",
    icon: <ChevronDown className="h-4 w-4" />,
  },
  {
    id: "watchlists",
    name: "Watchlists",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    id: "alerts",
    name: "Alerts & Notifications",
    icon: <MessageCircle className="h-4 w-4" />,
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(1);

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="space-y-8">
      <div>
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: "#1E2B4F" }}
        >
          Help Center
        </h1>
        <p className="text-muted-foreground" style={{ color: "#6A7C99" }}>
          Find answers to common questions and get support
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          style={{ borderColor: "#A8BFFF" }}
        >
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4 max-w-lg mx-auto">
              <HelpCircle className="h-12 w-12" style={{ color: "#4B63FF" }} />
              <h2
                className="text-xl font-bold text-center"
                style={{ color: "#1E2B4F" }}
              >
                How can we help you today?
              </h2>
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for help, articles, topics..."
                  className="h-10 w-full rounded-md border border-input bg-white px-9 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderColor: "#A8BFFF" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2B4F" }}>
          Browse by Topic
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-md transition-all cursor-pointer"
              style={{ borderColor: "#F0F4FF" }}
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="font-medium" style={{ color: "#1E2B4F" }}>
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2B4F" }}>
          Frequently Asked Questions
        </h2>
        <Card style={{ borderColor: "#F0F4FF" }}>
          <CardContent
            className="p-6 divide-y"
            style={{ borderColor: "#F0F4FF" }}
          >
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="py-3">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                >
                  <h3 className="font-medium" style={{ color: "#1E2B4F" }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      expandedFaq === faq.id ? "transform rotate-180" : ""
                    }`}
                    style={{ color: "#4B63FF" }}
                  />
                </button>
                {expandedFaq === faq.id && (
                  <p className="mt-2 text-sm" style={{ color: "#6A7C99" }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="py-6 text-center">
                <p
                  className="text-muted-foreground"
                  style={{ color: "#6A7C99" }}
                >
                  No FAQs match your search query. Try a different search term
                  or contact support.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2B4F" }}>
          Video Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-md"
              style={{ borderColor: "#F0F4FF" }}
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play
                      className="h-6 w-6 ml-1"
                      style={{ color: "#4B63FF" }}
                    />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1" style={{ color: "#1E2B4F" }}>
                  {index === 1
                    ? "Getting Started with Portfolio Analysis"
                    : index === 2
                    ? "Advanced Technical Analysis Tools"
                    : "Setting Up Custom Alerts and Notifications"}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ color: "#6A7C99" }}
                >
                  {index === 1
                    ? "Learn how to create and analyze your investment portfolio"
                    : index === 2
                    ? "Deep dive into technical indicators and chart patterns"
                    : "Customize notifications for price movements and market events"}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  variant="outline"
                  style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2B4F" }}>
          Still Need Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card style={{ borderColor: "#F0F4FF" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle
                  className="h-6 w-6"
                  style={{ color: "#4B63FF" }}
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1E2B4F" }}>
                Live Chat
              </h3>
              <p
                className="text-sm text-muted-foreground mb-4"
                style={{ color: "#6A7C99" }}
              >
                Chat with our support team in real-time
              </p>
              <Button style={{ backgroundColor: "#4B63FF", color: "white" }}>
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card style={{ borderColor: "#F0F4FF" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" style={{ color: "#4B63FF" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1E2B4F" }}>
                Email Support
              </h3>
              <p
                className="text-sm text-muted-foreground mb-4"
                style={{ color: "#6A7C99" }}
              >
                Get help via email within 24 hours
              </p>
              <Button
                variant="outline"
                style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
              >
                support@example.com
              </Button>
            </CardContent>
          </Card>

          <Card style={{ borderColor: "#F0F4FF" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" style={{ color: "#4B63FF" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#1E2B4F" }}>
                Knowledge Base
              </h3>
              <p
                className="text-sm text-muted-foreground mb-4"
                style={{ color: "#6A7C99" }}
              >
                Browse our detailed documentation
              </p>
              <Button
                variant="outline"
                style={{ borderColor: "#A8BFFF", color: "#4B63FF" }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
