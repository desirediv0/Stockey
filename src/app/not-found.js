"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WishlistForm from "@/components/wishlist-form";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-24 px-4 relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "rgba(75, 99, 255, 0.15)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main Text */}
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "#1E2B4F" }}
        >
          Something exciting is
          <span
            className="block py-3"
            style={{
              background: "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            coming soon
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ color: "#6A7C99" }}
        >
          We&apos;re working on something amazing. Be the first to know when we
          launch by joining our waitlist.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {/* Return Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                style={{ background: "#4B63FF" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
                Return to Homepage
              </motion.button>
            </Link>
          </motion.div>

          {/* Coming Soon Button with Wishlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                  style={{
                    background: "rgba(75, 99, 255, 0.1)",
                    border: "1px solid rgba(75, 99, 255, 0.3)",
                    color: "#4B63FF",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar size={20} />
                  Join Waitlist
                </motion.button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-white">
                <DialogHeader>
                  <DialogTitle className="text-xl text-[#1E2B4F]">
                    Join the Waitlist
                  </DialogTitle>
                </DialogHeader>
                <WishlistForm planName="Coming Soon Page" />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
