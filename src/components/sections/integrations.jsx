"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WishlistForm from "@/components/wishlist-form";
import { toast } from "sonner";
import { saveFormToCSV } from "@/utils/form-handler";

const brokers = [
  {
    name: "Zerodha",
    description: "India's largest stock broker by active retail clients",
    logo: "/logo/zerodha.png",
    link: "https://zerodha.com",
  },
  {
    name: "Fyers",
    description: "Modern trading platform with advanced charting",
    logo: "/logo/fyers.jpg",
    link: "https://fyers.in",
  },
  {
    name: "Dhan",
    description: "Next-generation trading platform",
    logo: "/logo/dhan.jpeg",
    link: "https://dhan.co",
  },
  {
    name: "Angel One",
    description: "Full-service stock broker with research",
    logo: "/logo/AngelOne.png",
    link: "https://angelone.in",
  },
  {
    name: "Alpaca",
    description: "Commission-free stock trading API",
    logo: "/logo/alpaca.png",
    link: "https://alpaca.markets",
  },
  {
    name: "Tradier",
    description: "US-based broker with powerful API",
    logo: "/logo/Tradier.png",
    link: "https://tradier.com",
  },
];

const dataProviders = [
  {
    name: "TrueData",
    description: "Real-time market data and analytics",
    logo: "/logo/TrueData.png",
    link: "https://truedata.in",
  },
  {
    name: "Global Data Feed",
    description: "Comprehensive market data solution",
    logo: "/logo/global-data-feeds.png",
    link: "https://globaldatafeeds.in",
  },
];

const technologyProviders = [
  {
    name: "TradingView",
    description: "Comprehensive charting solutions for technical analysis",
    logo: "/logo/TradingView.jpg",
    link: "https://www.tradingview.com/",
  },
  {
    name: "AWS",
    description: "Reliable cloud infrastructure for scalable applications",
    logo: "/logos/aws.jpg",
    link: "https://aws.amazon.com/",
  },
  {
    name: "FastAPI",
    description: "High-performance API framework for backend services",
    logo: "/logos/fastapi.jpg",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    name: "DBT Packages",
    description: "Data transformation tools for financial analytics",
    logo: "/logos/dbt.jpg",
    link: "https://hub.getdbt.com/",
  },
];

export function Integrations() {
  const [open, setOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [api, setApi] = React.useState();
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingFeedback(true);

    try {
      // Convert feedbackForm to match the structure expected by saveFormToCSV
      const formattedData = {
        fullName: feedbackForm.name,
        email: feedbackForm.email,
        phone: "", // We don't collect phone in this form, but required by our CSV format
        company: "", // Not collected here but required
        integrationDetails: feedbackForm.feedback,
        useCase: "", // Not collected here but in our structure
      };

      // Save form data to CSV as integration type
      const result = await saveFormToCSV(formattedData, "integration");

      if (!result) {
        throw new Error("Failed to save form data");
      }

      console.log("Integration Suggestion:", feedbackForm);
      toast.success("Thank you for your feedback!");

      setFeedbackForm({
        name: "",
        email: "",
        feedback: "",
      });
      setFeedbackOpen(false);
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      toast.error(
        "There was an error submitting your suggestion. Please try again."
      );
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {});
  }, [api]);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto max-w-6xl">
              {brokers.map((broker) => (
                <Link
                  href={broker.link}
                  key={broker.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer max-w-[300px]">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={broker.logo}
                        alt={broker.name}
                        width={70}
                        height={70}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={100}
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

          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-semibold leading-7 text-[#1E2B4F] border-b border-[#A8BFFF] pb-2 text-center">
              Technology Providers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto max-w-6xl">
              {technologyProviders.map((provider) => (
                <Link
                  href={provider.link}
                  key={provider.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={65}
                        height={65}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={100}
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

          <div className="space-y-8">
            <h3 className="text-xl font-semibold leading-7 text-[#1E2B4F] border-b border-[#A8BFFF] pb-2 text-center">
              Market Data Providers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 justify-items-center mx-auto max-w-xl">
              {dataProviders.map((provider) => (
                <Link
                  href={provider.link}
                  key={provider.name}
                  target="_blank"
                  className="block h-full"
                >
                  <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-full bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#4B63FF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={65}
                        height={65}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                        quality={100}
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

        <div className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-full hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#4B63FF] to-[#6A3AFF] hover:from-[#3A51E0] hover:to-[#5A2AE0] text-white font-medium shadow-lg hover:shadow-xl max-w-full mx-auto break-words"
              >
                <span className="whitespace-normal">
                  Coming Soon — Join the Waitlist for Early Access
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-[#1E2B4F]">
                  Join the Waitlist
                </DialogTitle>
                <DialogDescription className="text-center text-[#6A7C99]">
                  Be the first to know when we launch our platform.
                </DialogDescription>
              </DialogHeader>
              <WishlistForm planName="Early Access" />
            </DialogContent>
          </Dialog>

          <Link href="/suggest-integration">
            <Button
              size="lg"
              variant="outline"
              className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-full hover:scale-105 transition-all duration-300 border-[#4B63FF] text-[#4B63FF] hover:bg-[#4B63FF]/10 font-medium shadow-lg hover:shadow-xl max-w-full mx-auto break-words"
            >
              <span className="whitespace-normal flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Suggest an Integration
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E2B4F] mb-4">
              <span className="bg-gradient-to-r from-[#4B63FF] to-[#6A3AFF] bg-clip-text text-transparent">
                Industry-Leading Technology Ecosystem
              </span>
            </h2>
            <p className="text-xl text-[#6A7C99] max-w-3xl mx-auto">
              Connect your existing trading accounts and start analyzing your
              portfolio in minutes.
            </p>
          </div>

          <div className="space-y-8 mb-16 overflow-hidden">
            <div className="flex justify-center items-center pb-2 mb-8">
              <h3 className="text-2xl font-bold text-center relative">
                <span className="text-gray-800 ">Powered By</span>
              </h3>
            </div>

            <Carousel
              setApi={setApi}
              className="w-full max-w-6xl mx-auto px-4"
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
            >
              <CarouselContent>
                {brokers.map((partner) => (
                  <CarouselItem
                    key={partner.name}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full py-10"
                  >
                    <Link
                      href={partner.link}
                      target="_blank"
                      className="block h-full"
                    >
                      <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-[300px] bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#4B63FF]/10 to-[#6A3AFF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto group-hover:shadow-md transition-all duration-300">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={65}
                            height={65}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                            quality={100}
                          />
                        </div>
                        <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                          {partner.name}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                          {partner.description}
                        </p>
                        <div className="mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#4B63FF]/10 to-[#6A3AFF]/10 text-[#4B63FF] text-center font-medium max-w-fit mx-auto">
                          Broker Partner
                        </div>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}

                {technologyProviders.map((partner) => (
                  <CarouselItem
                    key={partner.name}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full py-10"
                  >
                    <Link
                      href={partner.link}
                      target="_blank"
                      className="block h-full"
                    >
                      <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-[300px] bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#4B63FF]/10 to-[#6A3AFF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto group-hover:shadow-md transition-all duration-300">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={65}
                            height={65}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                            quality={100}
                          />
                        </div>
                        <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                          {partner.name}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                          {partner.description}
                        </p>
                        <div className="mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#4B63FF]/10 to-[#6A3AFF]/10 text-[#4B63FF] text-center font-medium max-w-fit mx-auto">
                          Technology Partner
                        </div>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}

                {dataProviders.map((partner) => (
                  <CarouselItem
                    key={partner.name}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full py-10"
                  >
                    <Link
                      href={partner.link}
                      target="_blank"
                      className="block h-full"
                    >
                      <Card className="p-6 border border-[#A8BFFF]/30 shadow-lg hover:shadow-xl hover:border-[#4B63FF]/50 transition-all duration-300 flex flex-col h-[300px] bg-white rounded-xl overflow-hidden group hover:translate-y-[-5px] cursor-pointer">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#4B63FF]/10 to-[#6A3AFF]/10 mb-5 border border-[#4B63FF]/20 relative mx-auto group-hover:shadow-md transition-all duration-300">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={65}
                            height={65}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                            quality={100}
                          />
                        </div>
                        <h3 className="text-xl font-semibold leading-7 tracking-tight text-[#1E2B4F] text-center">
                          {partner.name}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#6A7C99] flex-grow text-center">
                          {partner.description}
                        </p>
                        <div className="mt-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#4B63FF]/10 to-[#6A3AFF]/10 text-[#4B63FF] text-center font-medium max-w-fit mx-auto">
                          Data Provider
                        </div>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8 gap-4">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border border-[#E2E8F0] bg-white text-[#1E2B4F] shadow-sm hover:bg-gray-50" />
                <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border border-[#E2E8F0] bg-white text-[#1E2B4F] shadow-sm hover:bg-gray-50" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
