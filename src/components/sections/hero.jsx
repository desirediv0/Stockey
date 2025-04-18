"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Zap, Filter, Layout } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WishlistForm from "@/components/wishlist-form";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Card } from "../ui/card.jsx";

const Lottie = dynamic(() => import("../lottie.jsx"), {
  ssr: false,
});

 
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


export default function Hero() {
  return (
    <div
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Status badge */}
        <div className="flex justify-center mb-10">
          <div
            className="rounded-full px-4 py-1.5 text-sm font-semibold ring-1 ring-inset"
            style={{
              background: "rgba(75, 99, 255, 0.1)",
              color: "#4B63FF",
              borderColor: "rgba(75, 99, 255, 0.3)",
            }}
          >
            Join the Waitlist for Early Access
          </div>
        </div>

        {/* Main content with animations on sides - using grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-10">
          {/* Left animation */}
          <div className="hidden xl:flex justify-end items-start">
            <Lottie
              src="animations/Animation - 1743874606040.json"
              width={300}
              height={300}
            />
          </div>

          {/* Center content */}
          <div className="text-center col-span-1 xl:col-span-2">
            <h1
              className="mx-auto max-w-4xl text-5xl font-bold tracking-tight  sm:text-6xl md:text-7xl my-2"
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

          {/* Right animation */}
          <div className="hidden xl:flex justify-start items-start">
            <Lottie
              src="animations/Animation - 1743874185972.json"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* CTA buttons - using grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-16">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="w-full transition-all duration-300 hover:shadow-lg"
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
          <Link href="/demo">
            <Button
              variant="outline"
              size="lg"
              className="w-full transition-all duration-300"
              style={{
                borderColor: "#4B63FF",
                color: "#4B63FF",
                background: "rgba(75, 99, 255, 0.05)",
              }}
            >
              View Demo
            </Button>
          </Link>
        </div>

        {/* Dashboard preview centered - using grid */}
        <div className="grid grid-cols-1 justify-items-center">
          <div className="w-full max-w-3xl">
            <div
              className="relative mx-auto w-full overflow-hidden rounded-xl p-2 shadow-2xl"
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
                <Lottie
                  src="animations/Animation - 1743874670990.json"
                  width={450}
                  height={450}
                  className="flex items-center justify-center w-full h-full"
                />
              </div>
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
                    className="rounded-full p-3 w-max mx-auto md:mx-0"
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
