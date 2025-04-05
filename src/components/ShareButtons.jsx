"use client";

import { useState } from "react";
import { Twitter, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getShareUrl, copyToClipboard } from "@/lib/share";

export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const fullUrl =
    typeof window !== "undefined" ? url || window.location.href : url;

  const handleCopy = async () => {
    const success = await copyToClipboard(fullUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform) => {
    setIsSharing(true);
    try {
      window.open(getShareUrl(platform, fullUrl, title), "_blank");
    } catch (error) {
      console.error("Error sharing:", error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="flex space-x-3">
      <Button
        variant="outline"
        size="sm"
        className="rounded-full hover:scale-105 transition-all duration-300"
        style={{
          background: "white",
          color: "#4B63FF",
          borderColor: "rgba(75, 99, 255, 0.3)",
        }}
        onClick={() => handleShare("twitter")}
        disabled={isSharing}
      >
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full hover:scale-105 transition-all duration-300"
        style={{
          background: "white",
          color: "#4B63FF",
          borderColor: "rgba(75, 99, 255, 0.3)",
        }}
        onClick={() => handleShare("linkedin")}
        disabled={isSharing}
      >
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full hover:scale-105 transition-all duration-300"
        style={{
          background: "white",
          color: "#4B63FF",
          borderColor: "rgba(75, 99, 255, 0.3)",
        }}
        onClick={() => handleShare("email")}
        disabled={isSharing}
      >
        <Mail className="h-4 w-4 mr-2" />
        Email
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full hover:scale-105 transition-all duration-300"
        style={{
          background: "white",
          color: copied ? "#19C68B" : "#4B63FF",
          borderColor: copied
            ? "rgba(25, 198, 139, 0.3)"
            : "rgba(75, 99, 255, 0.3)",
        }}
        onClick={handleCopy}
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-2" />
            Copy Link
          </>
        )}
      </Button>
    </div>
  );
}
