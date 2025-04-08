"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import resourcesData from "../../data.json";
import { generateArticleListSchema } from "@/lib/schema";
import { useState } from "react";
import { toast } from "sonner";

export default function ResourcesPage() {
  const { resourcesPosts, categories } = resourcesData;
  const articleListSchema = generateArticleListSchema(
    resourcesPosts,
    "https://stockey.com/resources"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  // Filter posts based on search query and selected category
  const filteredPosts = resourcesPosts.filter((post) => {
    // Filter by search query (title, excerpt, or content)
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by category
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;

    // Return posts that match both filters
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleListSchema),
        }}
      />

      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
        }}
      >
        <div className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-10 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  color: "#4B63FF",
                  border: "1px solid rgba(75, 99, 255, 0.3)",
                }}
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#4B63FF" }}
                  ></span>
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "#4B63FF" }}
                  ></span>
                </span>
                Knowledge Center
              </p>

              <h1
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{ color: "#1E2B4F" }}
              >
                Trading Insights{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Resources
                </span>
              </h1>

              <p className="text-xl" style={{ color: "#6A7C99" }}>
                Expert analysis, tutorials, and market insights to improve your
                trading skills and make more informed decisions.
              </p>
            </div>

            <div className="max-w-xl mx-auto mt-10">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5" style={{ color: "#6A7C99" }} />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-3 pl-12 pr-4 rounded-full shadow-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    background: "white",
                    color: "#1E2B4F",
                    border: "1px solid rgba(168, 191, 255, 0.3)",
                    boxShadow: "0 10px 25px rgba(75, 99, 255, 0.1)",
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all`}
                  style={{
                    background:
                      category === selectedCategory
                        ? "#4B63FF"
                        : "rgba(75, 99, 255, 0.1)",
                    color: category === selectedCategory ? "white" : "#4B63FF",
                    border: "1px solid",
                    borderColor:
                      category === selectedCategory
                        ? "#4B63FF"
                        : "rgba(75, 99, 255, 0.3)",
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
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
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  No articles found
                </h3>
                <p style={{ color: "#6A7C99" }}>
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>

          <div
            className="mt-20 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #27336D 0%, #4B63FF 100%)",
            }}
          >
            <div className="px-6 py-12 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-lg opacity-80 text-white">
                Get the latest trading insights, market updates, and educational
                content delivered directly to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-full focus:outline-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    height: "48px",
                  }}
                  id="newsletter-email"
                />
                <Button
                  className="sm:flex-shrink-0 px-8 rounded-full hover:scale-105 transition-all duration-300"
                  style={{
                    background: "#19C68B",
                    color: "#FFFFFF",
                    height: "48px",
                  }}
                  onClick={() => {
                    const email =
                      document.getElementById("newsletter-email").value;
                    if (email) {
                      console.log("Email submitted:", email);
                      document.getElementById("newsletter-email").value = "";
                      toast.success("Thank you for subscribing!", {
                        description: `We'll send updates to ${email}`,
                        duration: 3000,
                      });
                    } else {
                      toast.error("Please enter a valid email", {
                        duration: 3000,
                      });
                    }
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
