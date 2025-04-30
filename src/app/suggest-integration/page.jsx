"use client";

import IntegrationForm from "@/components/integration-form";
import Image from "next/image";

export default function SuggestIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-[#4B63FF]/10 text-[#4B63FF] text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              Integration Request
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E2B4F] mb-6">
              Suggest an{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Integration
              </span>
            </h1>

            <p className="text-lg text-[#6A7C99] max-w-2xl mx-auto">
              Have a platform or tool you&apos;d like to see integrated with
              Stockey? Let us know your ideas, and we&apos;ll consider adding it
              to our roadmap.
            </p>
          </div>

          {/* Main Content with Split Design */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Side - Form */}
            <div className="w-full lg:w-3/5 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-[#E2E8F0]">
              <h2 className="text-2xl font-bold text-[#1E2B4F] mb-6">
                Submit Your Integration Idea
              </h2>
              <IntegrationForm />
            </div>

            {/* Right Side - Information */}
            <div className="w-full lg:w-2/5 bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border border-[#E2E8F0] flex flex-col">
              <h3 className="text-xl font-bold text-[#1E2B4F] mb-4">
                Why Suggest an Integration?
              </h3>

              <div className="space-y-4 mb-auto">
                <div className="flex items-start">
                  <div className="bg-[#4B63FF]/10 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#4B63FF]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E2B4F]">
                      Expand Platform Capabilities
                    </p>
                    <p className="text-sm text-[#6A7C99]">
                      Help us connect with the tools and services you use most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#4B63FF]/10 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#4B63FF]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E2B4F]">
                      Shape Our Roadmap
                    </p>
                    <p className="text-sm text-[#6A7C99]">
                      Your suggestions directly influence our development
                      priorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#4B63FF]/10 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#4B63FF]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                      <path d="M12 13v8"></path>
                      <path d="M12 3v3"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E2B4F]">
                      Get Early Access
                    </p>
                    <p className="text-sm text-[#6A7C99]">
                      Be among the first to try new integrations you&apos;ve
                      suggested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
