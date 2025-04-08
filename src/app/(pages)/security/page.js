"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Lock,
  AlertTriangle,
  Server,
  Mail,
} from "lucide-react";
import { useState } from "react";
import WishlistForm from "@/components/wishlist-form";

const securityMeasures = [
  {
    title: "Data Encryption",
    description:
      "All data transmitted to and from our servers is encrypted using industry-standard TLS/SSL protocols. Data at rest is encrypted using AES-256 encryption.",
    icon: Lock,
  },
  {
    title: "Secure Infrastructure",
    description:
      "Our platform is hosted on AWS with multiple security layers, including VPC, network ACLs, and security groups. We implement regular security updates and patches.",
    icon: Server,
  },
  {
    title: "Authentication Security",
    description:
      "We support multi-factor authentication and enforce strong password policies. OAuth 2.0 is used for secure broker connections without storing credentials.",
    icon: Shield,
  },
  {
    title: "Vulnerability Management",
    description:
      "Regular penetration testing and vulnerability scans are conducted by third-party security firms. We have a responsible disclosure program for security researchers.",
    icon: AlertTriangle,
  },
];

export default function SecurityPage() {
  const [showWishlistForm, setShowWishlistForm] = useState(false);

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
              Last Updated: June 15, 2024
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Security Policy
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              We take the security of your data seriously. Learn about the
              measures we have in place to protect your information and ensure
              the integrity of our platform.
            </p>
          </div>
        </div>

        {/* Security Measures */}
        <div className="mx-auto max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure) => (
              <div
                key={measure.title}
                className="rounded-xl overflow-hidden p-8 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{ background: "rgba(75, 99, 255, 0.1)" }}
                  >
                    <measure.icon
                      className="h-6 w-6"
                      style={{ color: "#4B63FF" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: "#1E2B4F" }}
                    >
                      {measure.title}
                    </h3>
                    <p style={{ color: "#6A7C99" }}>{measure.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
                <h2 style={{ color: "#1E2B4F" }}>Our Security Commitment</h2>
                <p>
                  At Stockey, security is a core part of our product, not an
                  afterthought. We&apos;ve built our platform from the ground up
                  with security best practices in mind. Our team continuously
                  monitors for threats and vulnerabilities, ensuring your data
                  remains protected.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>Data Protection</h2>
                <p>
                  We understand the sensitive nature of financial data.
                  That&apos;s why we never store your broker credentials.
                  Instead, we use secure OAuth integrations to access only the
                  data you explicitly authorize. All personal and financial data
                  is encrypted both in transit and at rest using
                  industry-standard encryption protocols.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>
                  Secure Development Practices
                </h2>
                <p>
                  Our development team follows secure coding practices and
                  conducts regular code reviews to identify and fix potential
                  security issues. We utilize automated security scanning tools
                  as part of our continuous integration pipeline to catch
                  vulnerabilities before code is deployed to production.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>
                  Third-Party Security Audits
                </h2>
                <p>
                  We undergo regular security assessments conducted by
                  independent security firms. These include penetration testing,
                  vulnerability scanning, and code reviews. We promptly address
                  any findings to maintain the highest level of security for our
                  platform.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>Incident Response</h2>
                <p>
                  We have a comprehensive incident response plan in place to
                  quickly address any security incidents. Our team is trained to
                  identify, contain, and remediate security threats. In the
                  event of a security incident that affects your data, we will
                  notify you promptly in accordance with applicable laws and
                  regulations.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>Compliance</h2>
                <p>
                  Our security practices align with industry standards and
                  regulations relevant to financial data. We regularly review
                  and update our security measures to ensure compliance with
                  evolving security requirements and best practices.
                </p>

                <h2 style={{ color: "#1E2B4F" }}>
                  Security Recommendations for Users
                </h2>
                <p>
                  To help ensure the security of your account, we recommend the
                  following practices:
                </p>
                <ul>
                  <li>Use strong, unique passwords for your Stockey account</li>
                  <li>Enable multi-factor authentication</li>
                  <li>
                    Keep your devices and browsers updated with the latest
                    security patches
                  </li>
                  <li>
                    Be vigilant against phishing attempts - we will never ask
                    for your password via email
                  </li>
                  <li>Log out from your account when using shared devices</li>
                  <li>
                    Regularly review your account activity for any suspicious
                    behavior
                  </li>
                </ul>

                <h2 style={{ color: "#1E2B4F" }}>Bug Bounty Program</h2>
                <p>
                  We value the security research community&apos;s input and have
                  established a responsible disclosure program for reporting
                  security vulnerabilities. If you believe you&apos;ve found a
                  security issue, please contact us at{" "}
                  <a
                    href="mailto:security@stockey.com"
                    style={{ color: "#4B63FF" }}
                  >
                    security@stockey.com
                  </a>
                  . We commit to investigating all legitimate reports and
                  addressing any vulnerabilities promptly.
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
                    Have security concerns?
                  </h3>
                  <p style={{ color: "#6A7C99" }}>
                    Our security team is available 24/7.
                  </p>
                </div>
              </div>
              <Button
                className="rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-md"
                style={{
                  background: "#4B63FF",
                  color: "#FFFFFF",
                }}
                onClick={() => setShowWishlistForm(true)}
              >
                Report Security Issue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Wishlist Form Modal */}
          {showWishlistForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div
                className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
                style={{ border: "1px solid rgba(168, 191, 255, 0.3)" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#1E2B4F" }}
                  >
                    Report Security Issue
                  </h3>
                  <button
                    onClick={() => setShowWishlistForm(false)}
                    className="text-[#6A7C99] hover:text-[#1E2B4F]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <WishlistForm planName="Security Issue Report" />
              </div>
            </div>
          )}

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
