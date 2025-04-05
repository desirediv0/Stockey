import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const resourcesPosts = [
  {
    id: "mastering-risk-management",
    title: "Mastering Risk Management in Volatile Markets",
    excerpt:
      "Learn how to protect your portfolio and optimize returns even during market turbulence.",
    category: "Strategy",
    date: "June 12, 2023",
    readTime: "5 min read",
  },
  {
    id: "technical-analysis-guide",
    title: "The Complete Guide to Technical Analysis for Beginners",
    excerpt:
      "Start your journey into technical analysis with these fundamental concepts and tools.",
    category: "Education",
    date: "May 28, 2023",
    readTime: "8 min read",
  },
  {
    id: "portfolio-diversification",
    title: "How to Properly Diversify Your Trading Portfolio",
    excerpt:
      "Discover strategies to balance your investments across different assets and sectors.",
    category: "Portfolio Management",
    date: "April 15, 2023",
    readTime: "6 min read",
  },
];

export function Resources() {
  return (
    <div className="py-24 sm:py-32" style={{ background: "#F5F7FA" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-base font-semibold leading-7"
            style={{ color: "#4B63FF" }}
          >
            Resources
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#1E2B4F" }}
          >
            Latest Insights from Our Experts
          </p>
          <p
            className="mt-6 text-lg leading-8 max-w-3xl mx-auto"
            style={{ color: "#6A7C99" }}
          >
            Trading knowledge and platform updates to help you stay ahead of the
            curve and make better trading decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {resourcesPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 hover:translate-y-[-5px] transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
              style={{ background: "#FFFFFF" }}
            >
              <div className="p-6">
                <div
                  className="flex items-center text-sm mb-4"
                  style={{ color: "#6A7C99" }}
                >
                  <span
                    className="rounded-full px-3 py-1"
                    style={{
                      background: "rgba(75, 99, 255, 0.1)",
                      color: "#4B63FF",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/resources/${post.id}`} className="block">
                  <h3
                    className="text-xl font-semibold tracking-tight hover:text-primary transition-colors duration-200"
                    style={{ color: "#1E2B4F" }}
                  >
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-4 text-base" style={{ color: "#6A7C99" }}>
                  {post.excerpt}
                </p>

                <Link
                  href={`/resources/${post.id}`}
                  className="mt-5 inline-flex items-center font-medium hover:underline group"
                  style={{ color: "#4B63FF" }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href={"/resources"}>
            <Button
              className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                color: "#FFFFFF",
              }}
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
