import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container py-24 sm:py-32">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div
            className="absolute inset-0 opacity-10 z-0"
            style={{
              backgroundImage: "url('/patterns/grid.svg')",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              style={{
                background: "rgba(75, 99, 255, 0.1)",
                color: "#4B63FF",
                border: "1px solid rgba(75, 99, 255, 0.3)",
              }}
            >
              Last Updated: June 1, 2023
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Terms of Service
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              Please read these terms carefully before using our platform. By
              accessing or using Stockey, you agree to be bound by these terms.
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
                <h2 style={{ color: "#1E2B4F" }}>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Stockey platform ("Service"), you
                  agree to be bound by these Terms of Service ("Terms"). If you
                  do not agree to all the terms and conditions of this
                  agreement, you may not access or use the Service.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>2. Description of Service</h2>
                <p>
                  Stockey provides a trading analytics platform that allows
                  users to connect their brokerage accounts, visualize their
                  trading data, and create custom analytics dashboards. The
                  Service may change from time to time without prior notice.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>3. Account Registration</h2>
                <p>
                  To use certain features of the Service, you must register for
                  an account. You agree to provide accurate, current, and
                  complete information during the registration process and to
                  update such information to keep it accurate, current, and
                  complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all
                  activities that occur under your account. You agree to notify
                  us immediately of any unauthorized use of your account.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>4. User Conduct</h2>
                <p>You agree not to use the Service to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe the rights of any third party</li>
                  <li>
                    Transmit any material that is unlawful, harmful,
                    threatening, abusive, or otherwise objectionable
                  </li>
                  <li>
                    Interfere with or disrupt the Service or servers or networks
                    connected to the Service
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Service
                  </li>
                </ul>

                <h2 style={{ color: "#1E2B4F" }}>
                  5. Billing and Subscriptions
                </h2>
                <p>
                  Some features of the Service require a subscription. By
                  subscribing to a paid plan, you agree to pay the subscription
                  fees as described on our pricing page. Subscription fees are
                  billed in advance and are non-refundable.
                </p>
                <p>
                  You may cancel your subscription at any time, and your service
                  will continue until the end of your current billing period. We
                  reserve the right to change our prices upon 30 days' notice.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>6. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Stockey and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </p>
                <p>
                  You may not duplicate, copy, or reuse any portion of the HTML,
                  CSS, JavaScript, visual design elements, or concepts without
                  express written permission from Stockey.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>
                  7. Disclaimer of Warranties
                </h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                  BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Service will be uninterrupted or
                  error-free, that defects will be corrected, or that the
                  Service is free of viruses or other harmful components.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>8. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL STOCKEY, ITS OFFICERS, DIRECTORS, EMPLOYEES,
                  OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                  LIMITATION, LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES,
                  RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS
                  OR USE THE SERVICE.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>9. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice or liability, for
                  any reason, including without limitation if you breach these
                  Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will
                  immediately cease. All provisions of the Terms which by their
                  nature should survive termination shall survive termination.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>10. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. We will provide notice of any
                  changes by posting the new Terms on our website and updating
                  the "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Service after any such changes
                  constitutes your acceptance of the new Terms.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, without regard to its conflict of law
                  provisions.
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
                  <HelpCircle
                    className="h-6 w-6"
                    style={{ color: "#4B63FF" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: "#1E2B4F" }}
                  >
                    Have questions about our Terms?
                  </h3>
                  <p style={{ color: "#6A7C99" }}>
                    Our legal team is happy to help clarify any points.
                  </p>
                </div>
              </div>
              <Button
                className="rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-md"
                style={{
                  background: "#4B63FF",
                  color: "#FFFFFF",
                }}
              >
                Contact Legal Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
                href="/privacy"
                className="rounded-full px-6 py-2.5 transition-all duration-200 text-center hover:shadow-md"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  color: "#4B63FF",
                  border: "1px solid rgba(75, 99, 255, 0.3)",
                }}
              >
                Privacy Policy
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
