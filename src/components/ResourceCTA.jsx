"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import WishlistForm from "@/components/wishlist-form";

export default function ResourceCTA() {
  const [showWishlistForm, setShowWishlistForm] = useState(false);

  return (
    <>
      <div
        className="mt-16 p-8 rounded-2xl text-center"
        style={{
          background: "linear-gradient(135deg, #27336D 0%, #4B63FF 100%)",
        }}
      >
        <h3 className="text-2xl font-bold mb-4 text-white">
          Ready to improve your trading?
        </h3>
        <p className="text-lg mb-8 text-white opacity-90">
          Join thousands of traders who use Stockey to analyze their portfolios
          and make better decisions.
        </p>
        <Button
          className="px-8 py-3 text-base rounded-full hover:scale-105 transition-all duration-300"
          style={{
            background: "#19C68B",
            color: "#FFFFFF",
          }}
          onClick={() => setShowWishlistForm(true)}
        >
          Join Waitlist
        </Button>
      </div>

      {showWishlistForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1E2B4F]">
                Join Waitlist
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
            <WishlistForm planName="Free" />
          </div>
        </div>
      )}
    </>
  );
}
