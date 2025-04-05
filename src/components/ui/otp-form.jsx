"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { OTPInput } from "@/components/ui/otp-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function OTPVerificationForm({ email, onVerify, onResend, onCancel }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [otpValue, setOtpValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleComplete = (otp) => {
    setOtpValue(otp);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otpValue.length !== 6) {
      setError("Please enter a complete 6-digit OTP");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      if (onVerify) {
        await onVerify(otpValue);
      }
    } catch (err) {
      setError(err.message || "Failed to verify OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-center">Verify Your Email</CardTitle>
        <CardDescription className="text-center">
          We've sent a 6-digit code to{" "}
          <span className="font-medium">{email || "your email"}</span>. Enter
          the code below to verify your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="pb-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <OTPInput
                length={6}
                onComplete={handleComplete}
                className="justify-center"
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-6">
          <Button
            type="submit"
            className="w-full h-11 bg-[#4B63FF] hover:bg-[#3A4FCC] transition-colors"
            disabled={isSubmitting || otpValue.length !== 6}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </span>
            ) : (
              "Verify OTP"
            )}
          </Button>

          <div className="flex justify-between w-full text-sm">
            <Button
              variant="link"
              type="button"
              onClick={onResend}
              className="px-0 h-auto text-gray-500 hover:text-[#4B63FF]"
              disabled={isSubmitting}
            >
              Resend Code
            </Button>

            {onCancel && (
              <Button
                variant="link"
                type="button"
                onClick={onCancel}
                className="px-0 h-auto text-gray-500 hover:text-[#4B63FF]"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
