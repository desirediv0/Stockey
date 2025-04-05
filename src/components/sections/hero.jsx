"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart2, Zap, Filter, Layout } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WishlistForm from "@/components/wishlist-form";

const features = [
  {
    title: "Create Custom Dashboards",
    description:
      "No code required. Drag and drop your way to powerful analytics.",
    icon: Layout,
  },
  {
    title: "Turn Trades Into Insights",
    description:
      "Transform your trading data into actionable insights instantly.",
    icon: BarChart2,
  },
  {
    title: "Slice and Dice Portfolio",
    description:
      "Dynamic filters and views to analyze your portfolio from every angle.",
    icon: Filter,
  },
  {
    title: "Get Started Fast",
    description: "Pre-built templates for quick setup and instant value.",
    icon: Zap,
  },
];

export function Hero() {
  return (
    <div
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
        {/* Status badge */}
        <div className="mx-auto mb-10 flex justify-center">
          <div
            className="rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ring-inset"
            style={{
              background: "rgba(75, 99, 255, 0.1)",
              color: "#4B63FF",
              borderColor: "rgba(75, 99, 255, 0.3)",
            }}
          >
            <span className="animate-pulse mr-2">●</span>
            Coming Soon — Join the Waitlist for Early Access
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center">
          <h1
            className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl my-2"
            style={{ color: "#1E2B4F" }}
          >
            Your Trading Analytics
          </h1>
          <span
            className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            style={{
              background: "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
            }}
          >
            No Code Required
          </span>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg md:text-xl"
            style={{ color: "#6A7C99" }}
          >
            Connect your broker accounts, visualize your trades, and create
            custom analytics dashboards without writing a single line of code.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="w-full sm:w-auto transition-all duration-300 hover:shadow-lg"
                style={{ background: "#4B63FF", color: "white" }}
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#1E2B4F]">
                  Join the Waitlist
                </DialogTitle>
              </DialogHeader>
              <WishlistForm planName="Standard" />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto transition-all duration-300"
                style={{
                  borderColor: "#4B63FF",
                  color: "#4B63FF",
                  background: "rgba(75, 99, 255, 0.05)",
                }}
              >
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#1E2B4F]">
                  Request More Information
                </DialogTitle>
              </DialogHeader>
              <WishlistForm planName="Information Request" />
            </DialogContent>
          </Dialog>
        </div>

        {/* App preview mockup */}
        <div className="mt-16 flex justify-center">
          <div
            className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl p-2 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(75, 99, 255, 0.05) 0%, rgba(168, 191, 255, 0.1) 100%)",
              borderColor: "rgba(30, 43, 79, 0.1)",
            }}
          >
            <div
              className="relative aspect-video w-full rounded-lg p-1"
              style={{ background: "#FFFFFF" }}
            >
              <div className="h-full w-full rounded"></div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-20">
          <h2
            className="mb-12 text-center text-3xl font-bold tracking-tight"
            style={{ color: "#1E2B4F" }}
          >
            Everything you need to master your trading analytics
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: "rgba(106, 124, 153, 0.2)",
                  background: "#FFFFFF",
                }}
              >
                <div className="p-6">
                  <div
                    className="rounded-full p-3 w-max"
                    style={{ background: "rgba(75, 99, 255, 0.1)" }}
                  >
                    <feature.icon
                      className="h-6 w-6"
                      style={{ color: "#4B63FF" }}
                    />
                  </div>
                  <h3
                    className="mt-4 text-xl font-semibold leading-8 tracking-tight"
                    style={{ color: "#1E2B4F" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-7"
                    style={{ color: "#6A7C99" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
