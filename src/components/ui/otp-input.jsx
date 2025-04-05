"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function OTPInput({
  length = 6,
  onComplete,
  className,
  disabled = false,
}) {
  const [otp, setOtp] = React.useState(new Array(length).fill(""));
  const inputRefs = React.useRef([]);

  // Auto-focus the first input on mount
  React.useEffect(() => {
    if (inputRefs.current[0] && !disabled) {
      inputRefs.current[0].focus();
    }
  }, [disabled]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    // Take the last character if multiple characters are pasted
    const digit = value.slice(-1);

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Call onComplete when all fields are filled
    const otpValue = newOtp.join("");
    if (otpValue.length === length && onComplete) {
      onComplete(otpValue);
    }

    // Move to next input if current field is filled
    if (digit && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }

    // Handle arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e, startIndex) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted data only contains digits
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.split("").slice(0, length - startIndex);

    // Fill the OTP inputs with pasted digits
    const newOtp = [...otp];
    digits.forEach((digit, idx) => {
      const targetIndex = startIndex + idx;
      if (targetIndex < length) {
        newOtp[targetIndex] = digit;
      }
    });

    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(
      (val, idx) => idx >= startIndex && !val
    );
    const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;

    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }

    // Call onComplete if all fields are filled
    const otpValue = newOtp.join("");
    if (otpValue.length === length && onComplete) {
      onComplete(otpValue);
    }
  };

  return (
    <div className={cn("flex gap-2 md:gap-3", className)}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={digit}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          disabled={disabled}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 text-center text-lg font-semibold transition-all",
            "focus:outline-none focus:ring-2 focus:ring-[#4B63FF] focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            digit ? "border-gray-400 bg-gray-50" : "border-gray-300"
          )}
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}
