"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Target,
  Boxes,
  ChevronRight,
} from "lucide-react";
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Multi-Broker Integration",
      description:
        "Effortlessly connect with major brokers—like Zerodha, Upstox, Angel One, Fyers, and Dhan—under one roof. Consolidate your trades, holdings, and positions in a single, user-friendly interface.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: "Real-Time Market Feeds",
      description:
        "Stay ahead of the curve with data from top providers such as TrueData and GlobalDataFeed. Access reliable, up-to-date market information for faster, smarter decisions.",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Secure Data Management",
      description:
        "Safely store and manage all your investment data—whether it's from your broker or a trusted third-party provider. Our secure system ensures your information remains protected and organized.",
    },
    {
      icon: <Boxes className="h-8 w-8 text-white" />,
      title: "Advanced Analytics & Insights",
      description:
        "Unlock in-depth analytics to visualize your portfolio performance and discover new investment opportunities. From interactive dashboards to customizable reports, we help you translate data into action.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="py-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <motion.span
                className="px-6 py-2 rounded-full text-[#4B63FF] font-medium"
                style={{
                  background: "rgba(75, 99, 255, 0.1)",
                  borderColor: "rgba(75, 99, 255, 0.3)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Features
              </motion.span>
            </div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-[#1E2B4F]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Manage Your Investments with
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Data Analytics
              </span>
            </motion.h2>

            <motion.p
              className="text-[#6A7C99] text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Make faster, smarter decisions with advanced analytics,
              interactive visualizations, and on-demand insights.
            </motion.p>

            <motion.button
              className="bg-[#4B63FF] hover:bg-[#3A51E0] text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Coming Soon</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            className="lg:col-span-8 grid md:grid-cols-2 gap-8 place-content-center lg:pt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                style={{ borderColor: "rgba(106, 124, 153, 0.2)" }}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  className="rounded-full p-3 w-max mb-6"
                  style={{ background: "rgba(75, 99, 255, 0.1)" }}
                >
                  {React.cloneElement(feature.icon, {
                    className: "h-6 w-6",
                    style: { color: "#4B63FF" },
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1E2B4F]">
                  {feature.title}
                </h3>
                <p className="text-[#6A7C99] flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
