import { ArrowRight, Users, Award, Building, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "CEO & Co-Founder",
    bio: "Former quant trader with 10+ years experience at leading investment banks. B.Tech from IIT Bombay and MBA from IIM Ahmedabad.",
    image: "/team/arjun.png",
  },
  {
    name: "Priya Mehta",
    role: "CTO & Co-Founder",
    bio: "Data science expert with background in ML and analytics. Previously led engineering teams at fintech startups. B.Tech from IIT Delhi.",
    image: "/team/priya.png",
  },
  {
    name: "Rohit Kapoor",
    role: "Head of Product",
    bio: "Product leader with expertise in financial services. Previously at Zerodha and Groww. MBA from ISB Hyderabad.",
    image: "/team/rohit.png",
  },
  {
    name: "Anjali Desai",
    role: "Head of Operations",
    bio: "Operations specialist with experience scaling fintech platforms. Previously at Paytm and PhonePe. MBA from FMS Delhi.",
    image: "/team/anjali.png",
  },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "We build our platform with traders' needs at the center of every decision, constantly seeking feedback and making improvements.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to user experience to customer support.",
  },
  {
    icon: Building,
    title: "Transparency",
    description:
      "We believe in being open and honest with our customers about our products, pricing, and policies.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We're constantly exploring new technologies and approaches to solve complex problems in trading analytics.",
  },
];

export default function AboutPage() {
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
              Our Story
            </p>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
              style={{ color: "#1E2B4F" }}
            >
              About{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stockey
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: "#6A7C99" }}>
              We&apos;re building the next generation of trading analytics tools
              to help individual traders and investment firms make better
              decisions.
            </p>
          </div>
        </div>

        {/* Mission Section */}
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
                  <span style={{ color: "#6A7C99" }}>Company Image</span>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#1E2B4F" }}
              >
                Our Mission
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                Stockey was founded in 2023 with a clear mission: to democratize
                trading analytics and make powerful data tools accessible to
                everyone, from individual retail traders to professional trading
                desks.
              </p>
              <p
                className="text-lg mb-8"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                As traders ourselves, we were frustrated by the lack of
                intuitive, affordable analytics tools. The existing solutions
                were either too complex, too expensive, or required coding
                skills that many traders simply don&apos;t have.
              </p>
              <p
                className="text-lg"
                style={{ color: "#6A7C99", lineHeight: "1.7" }}
              >
                We built Stockey to solve this problem. Our no-code platform
                makes it easy for anyone to connect their broker accounts,
                visualize their trades, and create custom dashboards without
                writing a single line of code.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Our Values
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              These core principles guide everything we do at Stockey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value) => (
              <div
                key={value.title}
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
                  <value.icon
                    className="h-6 w-6"
                    style={{ color: "#4B63FF" }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#1E2B4F" }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "#6A7C99" }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1E2B4F" }}
            >
              Meet Our Team
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#6A7C99" }}
            >
              We&apos;re a group of traders, engineers, and data scientists
              passionate about building better trading tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 255, 0.3)",
                }}
              >
                <div
                  className="aspect-square w-full"
                  style={{ background: "rgba(75, 99, 255, 0.05)" }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span style={{ color: "#6A7C99" }}>Profile Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#1E2B4F" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#4B63FF" }}>
                    {member.role}
                  </p>
                  <p className="text-sm" style={{ color: "#6A7C99" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
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
              Join us on our mission
            </h2>
            <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
              We&apos;re looking for passionate people to help us build the
              future of trading analytics.
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
                View Open Positions
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
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
