"use client";
import {
  Cpu,
  LineChart,
  Link2,
  AlertTriangle,
  ArrowRight,
  Check,
} from "lucide-react";

import WishlistForm from "@/components/wishlist-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    name: "Low-Code Analytics",
    description:
      "Create powerful analytics dashboards without writing a single line of code. Our Superset-powered interface makes it easy to visualize your trading data.",
    icon: Cpu,
    image: "/screenshots/low-code-analytics.png",
    benefits: [
      "Intuitive drag-and-drop interface",
      "Real-time data visualization",
      "Customizable dashboards and reports",
    ],
  },
  {
    name: "Broker & Data Integrations",
    description:
      "Connect with your favorite brokers through secure OAuth flows. Import your trading data automatically and keep it in sync.",
    icon: Link2,
    image: "/screenshots/broker-integrations.png",
    benefits: [
      "Secure OAuth authentication",
      "Automatic data syncing",
      "Support for major Indian brokers",
    ],
  },
  {
    name: "Advanced Charting & Portfolio Analytics",
    description:
      "Visualize your portfolio performance with customizable charts and metrics. Track your progress and identify opportunities.",
    icon: LineChart,
    image: "/screenshots/advanced-charting.png",
    benefits: [
      "Performance attribution analysis",
      "Risk and return metrics",
      "Historical performance tracking",
    ],
  },
  {
    name: "Alerts & Automations",
    description:
      "Set up custom alerts and notifications based on your trading criteria. Stay informed about market movements and portfolio changes.",
    icon: AlertTriangle,
    image: "/screenshots/alerts-automations.png",
    badge: "Coming Soon",
    benefits: [
      "Custom price alerts",
      "Portfolio change notifications",
      "Trading strategy automations",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container py-24 sm:py-32">
        {/* Hero Section */}
        <div className="relative">
          <div
            className="absolute inset-0 opacity-10 z-0"
            style={{
              backgroundImage: "url('/patterns/grid.svg')",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
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
              Trading Analytics Platform
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Powerful{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Features
              </span>{" "}
              for Traders
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              Stockey gives you everything you need to analyze your trades,
              track your portfolio, and make better trading decisions.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-x-12 gap-y-16`}
              >
                <div className="flex-1 space-y-8">
                  <div
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(75, 99, 255, 0.1)" }}
                  >
                    <feature.icon
                      className="h-8 w-8"
                      style={{ color: "#4B63FF" }}
                    />
                  </div>

                  <div>
                    <div className="flex items-center">
                      <h2
                        className="text-2xl font-bold tracking-tight"
                        style={{ color: "#1E2B4F" }}
                      >
                        {feature.name}
                      </h2>
                      {feature.badge && (
                        <span
                          className="ml-4 rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            background: "rgba(75, 99, 255, 0.1)",
                            color: "#4B63FF",
                            border: "1px solid rgba(75, 99, 255, 0.3)",
                          }}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-4 text-lg" style={{ color: "#6A7C99" }}>
                      {feature.description}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <div
                          className="mr-3 flex h-6 w-6 items-center justify-center rounded-full"
                          style={{ background: "rgba(25, 198, 139, 0.1)" }}
                        >
                          <Check
                            className="h-3.5 w-3.5"
                            style={{ color: "#19C68B" }}
                          />
                        </div>
                        <span style={{ color: "#6A7C99" }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="rounded-full transition-all duration-300 hover:shadow-md"
                          style={{
                            background: "rgba(75, 99, 255, 0.1)",
                            color: "#4B63FF",
                            border: "1px solid rgba(75, 99, 255, 0.3)",
                          }}
                        >
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="text-[#1E2B4F]">
                            Join Waitlist for {feature.name}
                          </DialogTitle>
                          <DialogDescription className="text-[#6A7C99]">
                            Sign up to get early access to our {feature.name}{" "}
                            feature.
                          </DialogDescription>
                        </DialogHeader>
                        <WishlistForm planName={feature.name} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div
                  className="flex-1 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ border: "1px solid rgba(168, 191, 255, 0.3)" }}
                >
                  <div
                    className="border-b px-6 py-4"
                    style={{ borderColor: "rgba(168, 191, 255, 0.2)" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div
                        className="ml-2 text-xs font-medium"
                        style={{ color: "#6A7C99" }}
                      >
                        Stockey - {feature.name}
                      </div>
                    </div>
                  </div>
                  <div
                    className="aspect-[16/9] w-full p-2"
                    style={{ background: "#FFFFFF" }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center rounded"
                      style={{ background: "rgba(75, 99, 255, 0.05)" }}
                    >
                      <span style={{ color: "#6A7C99" }}>
                        {feature.name} Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mx-auto mt-32 max-w-4xl rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: "linear-gradient(135deg, #27336D 0%, #4B63FF 100%)",
          }}
        >
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to transform your trading analytics?
            </h2>
            <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
              Join our waitlist to be the first to know when we launch and get
              exclusive early access.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{
                      background: "#19C68B",
                      color: "#FFFFFF",
                    }}
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-[#1E2B4F]">
                      Join Our Waitlist
                    </DialogTitle>
                    <DialogDescription className="text-[#6A7C99]">
                      Sign up to get early access to our platform.
                    </DialogDescription>
                  </DialogHeader>
                  <WishlistForm planName="Premium" />
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
