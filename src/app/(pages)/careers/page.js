import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  LineChart,
  Users,
  Headphones,
  ChevronRight,
} from "lucide-react";

const benefits = [
  {
    title: "Flexible Work",
    description: "Remote-first culture with flexible working hours",
  },
  {
    title: "Competitive Salary",
    description: "Above-market compensation with equity options",
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage",
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences",
  },
  {
    title: "Wellness Program",
    description: "Monthly allowance for fitness and wellness activities",
  },
  {
    title: "Home Office Setup",
    description: "Budget to set up your ideal workspace",
  },
];

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    title: "Backend Developer (Python)",
    team: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    team: "Data",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Specialist",
    team: "Marketing",
    location: "Remote (India)",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    team: "Support",
    location: "Remote (India)",
    type: "Full-time",
  },
];

const departments = [
  {
    name: "Engineering",
    description:
      "Build and scale our platform using modern technologies like React, Node.js, Python, and AWS.",
    icon: Code,
  },
  {
    name: "Data Science",
    description:
      "Develop algorithms and models to provide valuable insights from financial and trading data.",
    icon: LineChart,
  },
  {
    name: "Customer Success",
    description:
      "Support our users and ensure they get the most value from our platform.",
    icon: Headphones,
  },
  {
    name: "Operations",
    description:
      "Keep our company running smoothly across finance, HR, and administration.",
    icon: Users,
  },
];

export default function CareersPage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container py-24 sm:py-32">
        {/* Hero Section */}
        <div className="relative">
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
              We&apos;re Hiring!
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Join Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Team
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              We&apos;re building the future of trading analytics and looking
              for talented individuals to join us on this mission. Explore our
              open positions below.
            </p>
          </div>
        </div>

        {/* About Working at Stockey */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-xl overflow-hidden shadow-xl"
              style={{ border: "1px solid rgba(168, 191, 255, 0.3)" }}
            >
              <div
                className="aspect-[4/3] w-full"
                style={{ background: "rgba(75, 99, 255, 0.05)" }}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <span style={{ color: "#6A7C99" }}>Team Image</span>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#1E2B4F" }}
              >
                Life at Stockey
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                At Stockey, we&apos;re building a platform that democratizes
                trading analytics and makes powerful data tools accessible to
                everyone. We&apos;re a remote-first company with team members
                across India, united by our passion for fintech and data-driven
                solutions.
              </p>
              <p
                className="text-lg mb-8"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                We value autonomy, innovation, and continuous learning. Our team
                members are encouraged to take ownership of their work and
                contribute ideas that shape our product and company culture.
              </p>
              <p
                className="text-lg"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                We believe in work-life balance and provide the flexibility and
                support our team needs to do their best work while maintaining
                personal wellbeing.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Benefits & Perks
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              We offer competitive compensation and a range of benefits to
              support our team members&apos; wellbeing and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl p-6 transition-all duration-300 hover:shadow-md"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#1E2B4F" }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "#6A7C99" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Our Teams
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              We&apos;re organized into cross-functional teams that collaborate
              to build and improve our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department) => (
              <div
                key={department.name}
                className="flex gap-6 p-6 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <div
                  className="h-12 w-12 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(75, 99, 255, 0.1)" }}
                >
                  <department.icon
                    className="h-6 w-6"
                    style={{ color: "#4B63FF" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#1E2B4F" }}
                  >
                    {department.name}
                  </h3>
                  <p style={{ color: "#6A7C99" }}>{department.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mx-auto mt-32 max-w-5xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Open Positions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              Join our team and help us build the future of trading analytics.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Link
                key={index}
                href={`/careers/${position.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl transition-all duration-300 hover:shadow-md group"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <div>
                  <h3
                    className="text-xl font-semibold mb-2 md:mb-0"
                    style={{ color: "#1E2B4F" }}
                  >
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: "rgba(75, 99, 255, 0.1)",
                        color: "#4B63FF",
                      }}
                    >
                      {position.team}
                    </span>
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: "rgba(25, 198, 139, 0.1)",
                        color: "#19C68B",
                      }}
                    >
                      {position.location}
                    </span>
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: "rgba(255, 159, 28, 0.1)",
                        color: "#FF9F1C",
                      }}
                    >
                      {position.type}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span
                    className="inline-flex items-center font-medium transition-all"
                    style={{ color: "#4B63FF" }}
                  >
                    View Position{" "}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* No Positions Section */}
        <div
          className="mx-auto mt-16 max-w-5xl rounded-xl overflow-hidden p-8"
          style={{
            background: "rgba(75, 99, 255, 0.05)",
            border: "1px solid rgba(75, 99, 255, 0.2)",
          }}
        >
          <div className="text-center">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#1E2B4F" }}
            >
              Don&apos;t see a position that fits?
            </h3>
            <p className="mb-6" style={{ color: "#6A7C99" }}>
              We&apos;re always looking for talented individuals to join our
              team. Send us your resume and we&apos;ll keep you in mind for
              future opportunities.
            </p>
            <Button
              className="rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-md"
              style={{
                background: "#4B63FF",
                color: "#FFFFFF",
              }}
            >
              Submit General Application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
              Join us in our mission
            </h2>
            <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
              Help us build the next generation of trading analytics tools and
              make a difference in how traders and investors make decisions.
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
                View All Positions
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
                Contact Recruiting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
