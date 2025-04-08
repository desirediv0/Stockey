"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/components/contact-form";
import WishlistForm from "@/components/wishlist-form";

const plansData = {
  monthly: [
    {
      name: "Free",
      tagline: "For individual traders just getting started",
      price: "FREE",
      description: "Basic features for exploring the platform",
      features: [
        { name: "Connect up to 2 broker accounts", included: true },
        { name: "Basic portfolio analytics", included: true },
        { name: "Pre-built dashboard templates", included: true },
        { name: "7-day data history", included: true },
        { name: "Email support", included: true },
        { name: "Advanced charting capabilities", included: false },
        { name: "Unlimited dashboards", included: false },
        { name: "Custom alerts & notifications", included: false },
        { name: "Priority support", included: false },
        { name: "CSV data upload", included: false },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "outline",
      highlight: false,
      showRibbon: false,
      isWishlist: true,
    },
    {
      name: "Pro",
      tagline: "For serious traders and investors",
      price: "₹999",
      period: "/month",
      description: "All the tools you need for advanced trading analytics",
      features: [
        { name: "Connect unlimited broker accounts", included: true },
        { name: "Advanced portfolio analytics", included: true },
        { name: "All dashboard templates", included: true },
        { name: "Full historical data", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced charting capabilities", included: true },
        { name: "Unlimited dashboards", included: true },
        { name: "Custom alerts & notifications", included: true },
        { name: "Priority support", included: true },
        { name: "CSV data upload", included: true },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "default",
      highlight: true,
      showRibbon: true,
      isWishlist: true,
    },
    {
      name: "Team",
      tagline: "For professional trading teams",
      price: "Custom",
      description: "Tailored solutions for trading firms and teams",
      features: [
        { name: "Everything in Pro plan", included: true },
        { name: "Team collaboration features", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Security & compliance features", included: true },
        { name: "API access", included: true },
        { name: "White labeling options", included: true },
        { name: "Onboarding & training", included: true },
        { name: "SLA & uptime guarantees", included: true },
        { name: "Custom reports", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      isContactForm: true,
    },
  ],
  annual: [
    {
      name: "Free",
      tagline: "For individual traders just getting started",
      price: "FREE",
      description: "Basic features for exploring the platform",
      features: [
        { name: "Connect up to 2 broker accounts", included: true },
        { name: "Basic portfolio analytics", included: true },
        { name: "Pre-built dashboard templates", included: true },
        { name: "7-day data history", included: true },
        { name: "Email support", included: true },
        { name: "Advanced charting capabilities", included: false },
        { name: "Unlimited dashboards", included: false },
        { name: "Custom alerts & notifications", included: false },
        { name: "Priority support", included: false },
        { name: "CSV data upload", included: false },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "outline",
      highlight: false,
      showRibbon: false,
      isWishlist: true,
    },
    {
      name: "Pro",
      tagline: "For serious traders and investors",
      price: "₹799",
      period: "/month",
      description: "All the tools you need for advanced trading analytics",
      features: [
        { name: "Connect unlimited broker accounts", included: true },
        { name: "Advanced portfolio analytics", included: true },
        { name: "All dashboard templates", included: true },
        { name: "Full historical data", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced charting capabilities", included: true },
        { name: "Unlimited dashboards", included: true },
        { name: "Custom alerts & notifications", included: true },
        { name: "Priority support", included: true },
        { name: "CSV data upload", included: true },
      ],
      buttonText: "Coming Soon",
      buttonVariant: "default",
      highlight: true,
      showRibbon: true,
      isWishlist: true,
      discount: "20% off",
    },
    {
      name: "Team",
      tagline: "For professional trading teams",
      price: "Custom",
      description: "Tailored solutions for trading firms and teams",
      features: [
        { name: "Everything in Pro plan", included: true },
        { name: "Team collaboration features", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Security & compliance features", included: true },
        { name: "API access", included: true },
        { name: "White labeling options", included: true },
        { name: "Onboarding & training", included: true },
        { name: "SLA & uptime guarantees", included: true },
        { name: "Custom reports", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      isContactForm: true,
    },
  ],
};

const faqs = [
  {
    question: "How do I get started with Stockey?",
    answer:
      "Sign up for a free account, connect your broker accounts using our secure OAuth integration, and start exploring your portfolio data with our pre-built dashboards.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period.",
  },
  {
    question: "Do you offer discounts for annual subscriptions?",
    answer:
      "Yes, we offer a 20% discount when you choose annual billing for our Pro plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, UPI payments, and net banking for Indian users.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take security seriously. We use bank-level encryption and never store your broker credentials. We only access the data you authorize through secure OAuth connections.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const plans =
    billingCycle === "monthly" ? plansData.monthly : plansData.annual;
  const [showWishlistForm, setShowWishlistForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="container px-4 py-24 sm:py-32 mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E2B4F] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#6A7C99]">
            Choose the plan that&apos;s right for you. All plans include a
            14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="mt-12 inline-flex items-center justify-center gap-4 bg-[#ecf1fa] p-2 rounded-full border border-[#9eb6fa] shadow-sm">
            <span
              className={`text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                billingCycle === "monthly"
                  ? "font-semibold text-[#1E2B4F] bg-white  shadow-sm"
                  : "text-[#6A7C99]"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <div
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#DCE4FF] border border-[#A8BFFF] cursor-pointer"
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-[#4B63FF] transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
            <span
              className={`text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                billingCycle === "annual"
                  ? "font-semibold text-[#1E2B4F] bg-white shadow-sm"
                  : "text-[#6A7C99]"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual{" "}
              <span className="text-[#19C68B] font-medium ml-1 ">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl relative ${
                plan.highlight
                  ? "border-[#4b63ff50] ring-2 ring-[#4b63ff50] shadow-lg transform hover:-translate-y-1"
                  : "border-[#A8BFFF] hover:border-[#4B63FF]"
              }`}
            >
              {plan.showRibbon && (
                <div className="absolute -right-20 top-6 bg-[#19C68B] text-white py-2 px-20 transform rotate-45 shadow-md z-10 w-72 flex justify-center">
                  <span className="text-xs font-bold tracking-wider text-center ml-5 ">
                    MOST POPULAR SAVE 20%
                  </span>
                </div>
              )}
              <div className="p-8">
                {plan.highlight && (
                  <div className="mb-4">
                    <span className="rounded-full bg-[#4B63FF]/10 px-3 py-1 text-xs font-semibold leading-6 text-[#4B63FF] ring-1 ring-inset ring-[#4B63FF]/30 flex items-center w-fit gap-1">
                      <Sparkles className="h-3 w-3" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                {/* {plan.discount && (
                  <div className="mb-4">
                    <span className="rounded-full bg-[#6A7C99]/10 px-3 py-1 text-xs font-semibold leading-6 text-[#6A7C99] ring-1 ring-inset ring-[#6A7C99]/30">
                      {plan.discount}
                    </span>
                  </div>
                )} */}
                <h3 className="text-2xl font-bold text-[#1E2B4F]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[#6A7C99]">{plan.tagline}</p>
                <p className="mt-6 flex items-baseline">
                  <span className="text-5xl font-bold text-[#1E2B4F]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-[#6A7C99] ml-1">
                      {plan.period}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm text-[#6A7C99]">
                  {plan.description}
                </p>

                {plan.isWishlist ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`mt-8 w-full h-12 font-semibold shadow-sm ${
                          plan.buttonVariant === "default"
                            ? "bg-[#4B63FF] hover:bg-[#3A51E0] text-white"
                            : "bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] border border-[#A8BFFF]"
                        }`}
                        variant={plan.buttonVariant}
                        size="lg"
                        onClick={() => setSelectedPlan(plan.name)}
                      >
                        {plan.buttonText}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] p-6">
                      <DialogHeader>
                        <DialogTitle className="text-[#1E2B4F] text-xl">
                          Join the Waitlist for {selectedPlan}
                        </DialogTitle>
                        <DialogDescription className="text-[#6A7C99]">
                          Leave your details and we&apos;ll notify you when this
                          plan becomes available.
                        </DialogDescription>
                      </DialogHeader>
                      <WishlistForm planName={selectedPlan} />
                    </DialogContent>
                  </Dialog>
                ) : plan.isContactForm ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="mt-8 w-full bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] font-semibold border border-[#A8BFFF] shadow-sm h-12"
                        variant={plan.buttonVariant}
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] p-6">
                      <DialogHeader>
                        <DialogTitle className="text-[#1E2B4F] text-xl">
                          Contact Our Sales Team
                        </DialogTitle>
                        <DialogDescription className="text-[#6A7C99]">
                          Fill out this form and our team will get back to you
                          within 24 hours.
                        </DialogDescription>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    className={`mt-8 w-full h-12 font-semibold shadow-sm ${
                      plan.buttonVariant === "default"
                        ? "bg-[#4B63FF] hover:bg-[#3A51E0] text-white"
                        : "bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF] border border-[#A8BFFF]"
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                    disabled={plan.buttonText === "Coming Soon"}
                  >
                    {plan.buttonText}
                    {plan.buttonVariant === "default" &&
                      plan.buttonText !== "Coming Soon" && (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                  </Button>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between bg-[#F5F7FA] p-8">
                <div>
                  <h4 className="text-sm font-semibold text-[#1E2B4F]">
                    What&apos;s included:
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-start text-sm leading-6"
                      >
                        {feature.included ? (
                          <Check
                            className="mr-3 h-5 w-5 flex-shrink-0 text-[#19C68B]"
                            aria-hidden="true"
                          />
                        ) : (
                          <X
                            className="mr-3 h-5 w-5 flex-shrink-0 text-[#6A7C99]"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-[#1E2B4F]"
                              : "text-[#6A7C99]"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-32 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#1E2B4F] text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-[#A8BFFF] p-6 shadow-sm bg-white hover:shadow-md transition-all duration-200"
              >
                <dt className="font-semibold text-[#1E2B4F] text-lg">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-[#6A7C99]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-32 max-w-2xl rounded-2xl border border-[#A8BFFF] bg-gradient-to-br from-[#F5F7FA] to-white p-10 text-center shadow-md">
          <h2 className="text-2xl font-bold text-[#1E2B4F]">
            Need a custom solution?
          </h2>
          <p className="mt-3 text-[#6A7C99]">
            Contact our sales team to discuss your specific requirements.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="mt-8 bg-[#F0F4FF] hover:bg-[#DCE4FF] text-[#4B63FF]  border border-[#A8BFFF]  font-semibold px-8 h-12 shadow-md"
                size="lg"
              >
                Contact Sales
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-6">
              <DialogHeader>
                <DialogTitle className="text-[#1E2B4F] text-xl">
                  Contact Our Sales Team
                </DialogTitle>
                <DialogDescription className="text-[#6A7C99]">
                  Fill out this form and our team will get back to you within 24
                  hours.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
