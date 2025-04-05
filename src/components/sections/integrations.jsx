"use client";
import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const brokers = [
  {
    name: "Zerodha",
    description: "India's largest stock broker by active retail clients",
    logo: "/logos/zerodha.jpg",
    link: "https://zerodha.com",
  },
  {
    name: "Fyers",
    description: "Modern trading platform with advanced charting",
    logo: "/logos/fyers.jpg",
    link: "https://fyers.in",
  },
  {
    name: "Dhan",
    description: "Next-generation trading platform",
    logo: "/logos/dhan.jpg",
    link: "https://dhan.co",
  },
  {
    name: "Angel One",
    description: "Full-service stock broker with research",
    logo: "/logos/angel-one.jpg",
    link: "https://angelone.in",
  },
  {
    name: "Interactive Brokers",
    description: "Global trading platform for international markets",
    logo: "/logos/ib.jpg",
    link: "https://www.interactivebrokers.com",
  },
  {
    name: "Tradier",
    description: "US-based broker with powerful API",
    logo: "/logos/tradier-logo.svg",
    link: "https://tradier.com",
  },
];

const dataProviders = [
  {
    name: "TrueData",
    description: "Real-time market data and analytics",
    logo: "/logos/true-data.jpg",
    link: "https://truedata.in",
  },
  {
    name: "Global Data Feed",
    description: "Comprehensive market data solution",
    logo: "/logos/gdf.jpg",
    link: "https://globaldatafeed.in",
  },
];

const partners = [
  {
    name: "TradingView",
    logo: "/logos/tradingview.jpg",
    link: "https://www.tradingview.com/",
    description: "Advanced charting platform for technical analysis",
  },
  {
    name: "AWS",
    logo: "/logos/aws.jpg",
    link: "https://aws.amazon.com/",
    description: "Cloud computing platform with scalable infrastructure",
  },
  {
    name: "DBT Packages",
    logo: "/logos/dbt.jpg",
    link: "https://hub.getdbt.com/",
    description: "Data transformation tools for analytics engineers",
  },
  {
    name: "FastAPI",
    logo: "/logos/fastapi.jpg",
    link: "https://fastapi.tiangolo.com/",
    description: "High-performance web framework for building APIs",
  },
  {
    name: "Interactive Brokers",
    logo: "/logos/ib.jpg",
    link: "https://www.interactivebrokers.com/",
    description: "Global brokerage platform for worldwide markets",
  },
  {
    name: "Coinbase",
    logo: "/logos/coinbase.jpg",
    link: "https://www.coinbase.com/",
    description: "Secure cryptocurrency exchange platform",
  },
];

export function Integrations() {
  return (
    <div className="pt-20 sm:pt-28 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#4B63FF]">
            Integrations
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#1E2B4F] sm:text-4xl">
            Connect Your Favorite Brokers
          </p>
          <p className="mt-6 text-lg leading-8 text-[#6A7C99] max-w-2xl mx-auto">
            Seamlessly integrate with popular Indian and international brokers,
            plus get real-time market data from trusted providers.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-semibold leading-7 text-[#1E2B4F] border-b border-[#A8BFFF] pb-2 text-center">
              Stock Brokers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brokers.map((broker) => (
                <Link
                  href={broker.link}
                  key={broker.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={broker.logo}
                        alt={broker.name}
                        width={50}
                        height={50}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={95}
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                      {broker.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                      {broker.description}
                    </p>
                    <div className="mt-5 pt-3 border-t border-[#A8BFFF]/30 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-4 py-2 text-sm text-[#4B63FF] hover:text-white hover:bg-[#4B63FF] rounded-full transition-all duration-300 mx-auto"
                      >
                        Learn more <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold leading-7 text-[#1E2B4F] border-b border-[#A8BFFF] pb-2 text-center">
              Market Data Providers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProviders.map((provider) => (
                <Link
                  href={provider.link}
                  key={provider.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={50}
                        height={50}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={95}
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                      {provider.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                      {provider.description}
                    </p>
                    <div className="mt-5 pt-3 border-t border-[#A8BFFF]/30 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-4 py-2 text-sm text-[#4B63FF] hover:text-white hover:bg-[#4B63FF] rounded-full transition-all duration-300 mx-auto"
                      >
                        Learn more <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#4B63FF] to-[#6A3AFF] hover:from-[#3A51E0] hover:to-[#5A2AE0] text-white font-medium shadow-lg hover:shadow-xl"
          >
            Coming Soon — Join the Waitlist for Early Access
          </Button>
        </div>
      </div>

      <div className="bg-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E2B4F] mb-4">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-xl text-[#6A7C99] max-w-3xl mx-auto">
              Connect your existing trading accounts and start analyzing your
              portfolio in minutes.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-semibold leading-7 text-[#1E2B4F] border-b border-[#A8BFFF] pb-2 text-center">
              Technology Partners
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <Link
                  href={partner.link}
                  key={partner.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={50}
                        height={50}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={95}
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                      {partner.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                      {partner.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="mt-20 text-center">
            <p className="text-[#6A7C99] mb-8 text-lg">
              Don&apos;t see your platform? We&apos;re constantly adding new
              integrations.
            </p>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-[#4B63FF] border-[#4B63FF] hover:bg-[#4B63FF] hover:text-white flex items-center mx-auto gap-2 transition-all duration-300 hover:gap-3 font-medium text-lg group shadow-md hover:shadow-lg"
            >
              Request an integration{" "}
              <ArrowRight className="h-5 w-5 group-hover:animate-pulse" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
