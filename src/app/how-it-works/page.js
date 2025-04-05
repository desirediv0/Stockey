import { Button } from "@/components/ui/button";
import { ArrowRight, Link, BarChart2, PanelTop, Check } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Connect Your Broker",
    description:
      "Easily connect your brokerage accounts using our secure OAuth integration. We support all major Indian brokers like Zerodha, Fyers, Dhan, and Angel One, as well as international brokers like Interactive Brokers and Tradier.",
    image: "/screenshots/connect-broker.png",
    icon: Link,
    benefits: [
      "Secure OAuth authentication",
      "No storage of your broker credentials",
      "Continuous data synchronization",
    ],
  },
  {
    id: "02",
    name: "Analyze Your Data",
    description:
      "Your trading data is automatically imported and processed. Visualize your portfolio performance, analyze trade patterns, and discover insights with our powerful analytics engine.",
    image: "/screenshots/analyze-data.png",
    icon: BarChart2,
    benefits: [
      "Comprehensive portfolio analysis",
      "Performance tracking over time",
      "Risk assessment metrics",
    ],
  },
  {
    id: "03",
    name: "Customize Dashboards",
    description:
      "Create custom dashboards tailored to your trading style with our drag-and-drop interface. Choose from a library of pre-built widgets or create your own. No coding required.",
    image: "/screenshots/customize-dashboards.png",
    icon: PanelTop,
    benefits: [
      "Drag-and-drop dashboard builder",
      "Customizable charts and widgets",
      "Save and share multiple views",
    ],
  },
];

const profiles = [
  {
    name: "Day Trader",
    description:
      "Track daily performance, analyze intraday patterns, and optimize execution strategies.",
    dashboardItems: [
      "Trade journal",
      "Intraday P&L charts",
      "Execution analysis",
    ],
  },
  {
    name: "Swing Trader",
    description:
      "Monitor position performance, identify market trends, and track sector rotations.",
    dashboardItems: [
      "Position tracker",
      "Market correlation analysis",
      "Sector heat maps",
    ],
  },
  {
    name: "Long-term Investor",
    description:
      "Evaluate portfolio allocation, track performance against benchmarks, and monitor risk metrics.",
    dashboardItems: [
      "Asset allocation view",
      "Benchmark comparison",
      "Dividend tracker",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container py-24 sm:py-32">
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
              Platform Overview
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              How{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stockey
              </span>{" "}
              Works
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              Transform your trading data into actionable insights in just a few
              simple steps. Our platform makes analytics accessible to everyone.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-[39px] top-24 h-[calc(100%+5rem)] w-0.5 hidden md:block"
                    style={{
                      background:
                        "linear-gradient(to bottom, #4B63FF 0%, rgba(75, 99, 255, 0.1) 100%)",
                    }}
                  ></div>
                )}

                <div className="flex flex-col md:flex-row gap-12">
                  {/* Step number and icon */}
                  <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                    <div
                      className="flex items-center justify-center w-20 h-20 rounded-full z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #4B63FF 0%, #A8BFFF 100%)",
                        boxShadow: "0 8px 20px rgba(75, 99, 255, 0.3)",
                      }}
                    >
                      <span className="text-2xl font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                    <div className="flex md:hidden items-center mt-4 mb-6">
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: "#1E2B4F" }}
                      >
                        {step.name}
                      </h2>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="hidden md:block mb-6">
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: "#1E2B4F" }}
                      >
                        {step.name}
                      </h2>
                    </div>

                    <p className="text-lg" style={{ color: "#6A7C99" }}>
                      {step.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {step.benefits.map((benefit) => (
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

                    <div
                      className="mt-10 overflow-hidden rounded-xl shadow-lg"
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
                            Stockey - {step.name}
                          </div>
                        </div>
                      </div>
                      <div
                        className="aspect-video w-full p-2"
                        style={{ background: "#FFFFFF" }}
                      >
                        <div
                          className="flex h-full w-full items-center justify-center rounded"
                          style={{ background: "rgba(75, 99, 255, 0.05)" }}
                        >
                          <span style={{ color: "#6A7C99" }}>
                            {step.name} Screenshot
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Tailored for Every Trader
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              See how different types of traders are using Stockey to improve
              their performance and make more informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <div
                  className="h-3"
                  style={{
                    background:
                      "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  }}
                ></div>
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#1E2B4F" }}
                  >
                    {profile.name}
                  </h3>
                  <p className="mb-6" style={{ color: "#6A7C99" }}>
                    {profile.description}
                  </p>

                  <h4
                    className="text-sm font-semibold mb-3"
                    style={{ color: "#4B63FF" }}
                  >
                    KEY DASHBOARD COMPONENTS
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {profile.dashboardItems.map((item) => (
                      <li key={item} className="flex items-center text-sm">
                        <div
                          className="mr-2 h-1.5 w-1.5 rounded-full"
                          style={{ background: "#4B63FF" }}
                        ></div>
                        <span style={{ color: "#6A7C99" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

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
              Join thousands of traders who are making better decisions with
              Stockey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  background: "#19C68B",
                  color: "#FFFFFF",
                }}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
