"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import WishlistForm from "./wishlist-form";
import { CalendarClock, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ComingSoon({ title, description, pageName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-4 relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
          style={{
            background: "rgba(75, 99, 255, 0.1)",
            color: "#4B63FF",
            border: "1px solid rgba(75, 99, 255, 0.3)",
          }}
        >
          <CalendarClock className="mr-2 h-4 w-4" />
          Coming Soon
        </p>

        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
          style={{ color: "#1E2B4F" }}
        >
          {title || "This Page is"}{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4B63FF 0%, #A8BFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Coming Soon
          </span>
        </h1>

        <p
          className="mt-6 text-lg leading-8 mb-12"
          style={{ color: "#6A7C99" }}
        >
          {description ||
            "We're working hard to bring you this feature soon. Join our waitlist to be the first to know when it's available."}
        </p>

        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg"
          style={{
            background: "#4B63FF",
            color: "#FFFFFF",
          }}
        >
          Join Waitlist
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
          </DialogHeader>
          <WishlistForm planName={pageName || "Coming Soon"} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
