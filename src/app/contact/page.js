import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
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
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Get in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Touch
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              Have questions, feedback, or need assistance? Our team is here to
              help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div
              className="rounded-xl p-6 flex flex-col items-center text-center"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(75, 99, 255, 0.1)" }}
              >
                <Mail className="h-6 w-6" style={{ color: "#4B63FF" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                Email Us
              </h3>
              <p className="text-sm mb-4" style={{ color: "#6A7C99" }}>
                Our support team is ready to assist you
              </p>
              <a
                href="mailto:support@stockey.com"
                className="font-medium"
                style={{ color: "#4B63FF" }}
              >
                support@stockey.com
              </a>
            </div>

            {/* Live Chat */}
            <div
              className="rounded-xl p-6 flex flex-col items-center text-center"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(75, 99, 255, 0.1)" }}
              >
                <MessageSquare
                  className="h-6 w-6"
                  style={{ color: "#4B63FF" }}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                Live Chat
              </h3>
              <p className="text-sm mb-4" style={{ color: "#6A7C99" }}>
                Chat with our support team in real-time
              </p>
              <Button
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  color: "#4B63FF",
                  border: "1px solid rgba(75, 99, 255, 0.3)",
                }}
              >
                Start Chat
              </Button>
            </div>

            {/* Phone */}
            <div
              className="rounded-xl p-6 flex flex-col items-center text-center"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(75, 99, 255, 0.1)" }}
              >
                <Phone className="h-6 w-6" style={{ color: "#4B63FF" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                Call Us
              </h3>
              <p className="text-sm mb-4" style={{ color: "#6A7C99" }}>
                Available during business hours
              </p>
              <a
                href="tel:+919876543210"
                className="font-medium"
                style={{ color: "#4B63FF" }}
              >
                +91 9876 543 210
              </a>
            </div>

            {/* Office */}
            <div
              className="rounded-xl p-6 flex flex-col items-center text-center"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(75, 99, 255, 0.1)" }}
              >
                <MapPin className="h-6 w-6" style={{ color: "#4B63FF" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                Visit Us
              </h3>
              <p className="text-sm mb-4" style={{ color: "#6A7C99" }}>
                Our headquarters location
              </p>
              <address
                className="not-italic text-sm"
                style={{ color: "#6A7C99" }}
              >
                123 Trading Street, <br />
                Financial District, Mumbai <br />
                India 400001
              </address>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mx-auto max-w-7xl mb-20">
          <div
            className="rounded-xl p-8 border"
            style={{ borderColor: "rgba(168, 191, 255, 0.3)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5" style={{ color: "#4B63FF" }} />
              <h3
                className="text-xl font-semibold"
                style={{ color: "#1E2B4F" }}
              >
                Business Hours
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4
                  className="text-sm font-medium mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  Customer Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span style={{ color: "#6A7C99" }}>Monday - Friday</span>
                    <span style={{ color: "#1E2B4F" }}>
                      9:00 AM - 6:00 PM IST
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span style={{ color: "#6A7C99" }}>Saturday</span>
                    <span style={{ color: "#1E2B4F" }}>
                      10:00 AM - 2:00 PM IST
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span style={{ color: "#6A7C99" }}>Sunday</span>
                    <span style={{ color: "#1E2B4F" }}>Closed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  className="text-sm font-medium mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  Sales & Enterprise Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span style={{ color: "#6A7C99" }}>Monday - Friday</span>
                    <span style={{ color: "#1E2B4F" }}>
                      9:00 AM - 6:00 PM IST
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span style={{ color: "#6A7C99" }}>Weekend</span>
                    <span style={{ color: "#1E2B4F" }}>
                      By appointment only
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#1E2B4F" }}
              >
                Send us a message
              </h2>

              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#1E2B4F" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg outline-none"
                        style={{
                          border: "1px solid rgba(168, 191, 255, 0.3)",
                          backgroundColor: "white",
                        }}
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#1E2B4F" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg outline-none"
                        style={{
                          border: "1px solid rgba(168, 191, 255, 0.3)",
                          backgroundColor: "white",
                        }}
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#1E2B4F" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg outline-none"
                      style={{
                        border: "1px solid rgba(168, 191, 255, 0.3)",
                        backgroundColor: "white",
                      }}
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#1E2B4F" }}
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg outline-none"
                      style={{
                        border: "1px solid rgba(168, 191, 255, 0.3)",
                        backgroundColor: "white",
                        color: "#6A7C99",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="billing">Billing Issue</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#1E2B4F" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg outline-none"
                      style={{
                        border: "1px solid rgba(168, 191, 255, 0.3)",
                        backgroundColor: "white",
                        resize: "vertical",
                      }}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      className="w-full md:w-auto px-8 py-6 rounded-full text-white"
                      style={{
                        background: "#4B63FF",
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#1E2B4F" }}
              >
                Our Location
              </h2>
              <div
                className="w-full h-[450px] rounded-xl overflow-hidden shadow-sm"
                style={{ border: "1px solid rgba(168, 191, 255, 0.3)" }}
              >
                <div
                  className="w-full h-full bg-gray-100 flex items-center justify-center"
                  style={{ background: "rgba(75, 99, 255, 0.05)" }}
                >
                  <span style={{ color: "#6A7C99" }}>Map Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-32 max-w-4xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              Find quick answers to common questions about contacting us
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="rounded-xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                What's the fastest way to get support?
              </h3>
              <p style={{ color: "#6A7C99" }}>
                For fastest support, we recommend using our live chat feature
                during business hours. Email support is available 24/7, though
                response times may be longer outside of business hours.
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                How quickly will I get a response to my email?
              </h3>
              <p style={{ color: "#6A7C99" }}>
                We aim to respond to all emails within 24 hours during business
                days. Pro plan subscribers receive priority support with
                responses typically within 8 hours.
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                Do you provide support in languages other than English?
              </h3>
              <p style={{ color: "#6A7C99" }}>
                Yes, we currently provide support in English and Hindi. Support
                in additional Indian languages is available upon request for
                enterprise customers.
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(168, 191, 255, 0.3)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1E2B4F" }}
              >
                How do I schedule a sales demo?
              </h3>
              <p style={{ color: "#6A7C99" }}>
                To schedule a sales demo, please use the contact form on this
                page and select "Sales Question" as the subject. Our sales team
                will reach out to arrange a convenient time for a demo.
              </p>
            </div>
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
              Looking for more resources?
            </h2>
            <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
              Check out our help center for detailed guides, tutorials, and
              documentation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/help">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: "#19C68B",
                    color: "#FFFFFF",
                  }}
                >
                  Visit Help Center
                </Button>
              </Link>
              <Link href="/faq">
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
                  Browse FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
