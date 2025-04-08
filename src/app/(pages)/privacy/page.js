"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactForm from "@/components/contact-form";

export default function PrivacyPolicyPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container py-24 sm:py-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 opacity-10 z-0"></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              style={{
                background: "rgba(75, 99, 255, 0.1)",
                color: "#4B63FF",
                border: "1px solid rgba(75, 99, 255, 0.3)",
              }}
            >
              Last Updated: June 15, 2024
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              We take your privacy seriously. This policy explains what
              information we collect, how we use it, and your choices regarding
              your data.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-xl overflow-hidden mb-16"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(168, 191, 255, 0.3)",
            }}
          >
            <div className="p-8">
              <div className="prose max-w-none" style={{ color: "#6A7C99" }}>
                <h2 style={{ color: "#1E2B4F" }}>1. Information We Collect</h2>
                <p>
                  At Stockey, we collect several types of information to provide
                  and improve our services:
                </p>
                <h3 style={{ color: "#1E2B4F" }}>1.1 Account Information</h3>
                <p>
                  When you create an account, we collect your name, email
                  address, and other contact details. For paid plans, we collect
                  payment information, which is securely processed by our
                  payment providers.
                </p>

                <h3 style={{ color: "#1E2B4F" }}>1.2 Broker Connection Data</h3>
                <p>
                  When you connect your brokerage accounts, we access your
                  trading data through secure OAuth connections. This includes
                  your portfolio holdings, transaction history, and account
                  balances. We never store your broker credentials.
                </p>

                <h3 style={{ color: "#1E2B4F" }}>1.3 Usage Data</h3>
                <p>
                  We collect information about how you interact with our
                  platform, including features you use, pages you visit, and
                  time spent on the platform. This helps us improve our services
                  and user experience.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>
                    Send administrative messages, updates, and security alerts
                  </li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Prevent fraudulent use of our services</li>
                </ul>

                <h2 style={{ color: "#1E2B4F" }}>
                  3. Data Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, rent, or share your personal information with
                  third parties for their marketing purposes. We may share your
                  information in the following circumstances:
                </p>
                <ul>
                  <li>
                    With service providers who perform services on our behalf
                  </li>
                  <li>To comply with legal obligations</li>
                  <li>
                    To protect the rights, property, or safety of Stockey, our
                    users, or others
                  </li>
                  <li>
                    In connection with a merger, acquisition, or sale of all or
                    a portion of our assets
                  </li>
                </ul>

                <h2 style={{ color: "#1E2B4F" }}>4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>5. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have the following rights:
                </p>
                <ul>
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict certain processing of your data</li>
                  <li>
                    Data portability (receiving your data in a structured,
                    commonly used format)
                  </li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@stockey.com"
                    style={{ color: "#4B63FF" }}
                  >
                    privacy@stockey.com
                  </a>
                  .
                </p>

                <h2 style={{ color: "#1E2B4F" }}>6. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of significant changes by posting the new policy on
                  our website and, where appropriate, by email. Your continued
                  use of our services after such modifications will constitute
                  your acknowledgment of the modified Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="rounded-xl overflow-hidden p-8 mb-16"
            style={{
              background: "rgba(75, 99, 255, 0.05)",
              border: "1px solid rgba(75, 99, 255, 0.2)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <div
                  className="p-2 rounded-full mr-4"
                  style={{ background: "rgba(75, 99, 255, 0.1)" }}
                >
                  <Mail className="h-6 w-6" style={{ color: "#4B63FF" }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: "#1E2B4F" }}
                  >
                    Questions about our Privacy Policy?
                  </h3>
                  <p style={{ color: "#6A7C99" }}>
                    Our privacy team is here to help.
                  </p>
                </div>
              </div>
              <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                <Button
                  className="rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-md"
                  style={{
                    background: "#4B63FF",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setShowContactForm(true)}
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <DialogContent className="sm:max-w-[500px] p-6">
                  <DialogHeader>
                    <DialogTitle className="text-[#1E2B4F] text-xl">
                      Contact Our Privacy Team
                    </DialogTitle>
                    <DialogDescription className="text-[#6A7C99]">
                      Fill out this form and our privacy team will get back to
                      you within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Related Links */}
          <div className="mx-auto max-w-2xl">
            <h3
              className="text-xl font-semibold mb-6 text-center"
              style={{ color: "#1E2B4F" }}
            >
              Related Documents
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/terms"
                className="rounded-full px-6 py-2.5 transition-all duration-200 text-center hover:shadow-md"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  color: "#4B63FF",
                  border: "1px solid rgba(75, 99, 255, 0.3)",
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/security"
                className="rounded-full px-6 py-2.5 transition-all duration-200 text-center hover:shadow-md"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  color: "#4B63FF",
                  border: "1px solid rgba(75, 99, 255, 0.3)",
                }}
              >
                Security Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
