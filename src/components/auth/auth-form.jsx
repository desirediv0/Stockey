"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Mail, Loader2 } from "lucide-react";
import Link from "next/link";
import { OTPInput } from "@/components/ui/otp-input";

export function AuthForm({ type = "signin" }) {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [step, setStep] = React.useState("email");
  const [otpValue, setOtpValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleOtpComplete = (value) => {
    setOtpValue(value);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("OTP verified:", otpValue);
    }, 1500);
  };

  const handleResendCode = () => {
    console.log("Resending code to", email);
  };

  return (
    <Card className="w-full border-0 shadow-md">
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
              </svg>
              Apple
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {step === "email" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="text-sm font-medium leading-none text-gray-700 mb-2 block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4B63FF] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-[#4B63FF] hover:bg-[#3A4FCC] transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {type === "signin"
                      ? "Signing in..."
                      : "Creating account..."}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {type === "signin"
                      ? "Sign in with Email"
                      : "Sign up with Email"}
                  </span>
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center">
                <label
                  className="text-sm font-medium leading-none text-gray-700 mb-2 block"
                  htmlFor="otp"
                >
                  Enter verification code
                </label>
                <OTPInput
                  length={6}
                  onComplete={handleOtpComplete}
                  className="justify-center my-4"
                />
                <p className="text-xs text-gray-500">
                  We've sent a 6-digit code to{" "}
                  <span className="font-medium">{email}</span>
                </p>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[#4B63FF] hover:bg-[#3A4FCC] transition-colors"
                disabled={isLoading || otpValue.length !== 6}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    {type === "signin" ? "Sign in" : "Create account"}
                  </span>
                )}
              </Button>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="link"
                  className="text-xs text-gray-500 hover:text-[#4B63FF] px-0 h-auto"
                  onClick={handleResendCode}
                >
                  Resend code
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className="text-xs text-gray-500 hover:text-[#4B63FF] px-0 h-auto"
                  onClick={() => setStep("email")}
                >
                  Use a different email
                </Button>
              </div>
            </form>
          )}

          <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
            <Shield className="mr-1 h-3 w-3" />
            <span>Secure, passwordless authentication</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4 pb-2">
        <div className="w-full text-center text-sm">
          {type === "signin" ? (
            <span className="text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#4B63FF] hover:text-[#3A4FCC] font-medium"
              >
                Sign up
              </Link>
            </span>
          ) : (
            <span className="text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-[#4B63FF] hover:text-[#3A4FCC] font-medium"
              >
                Sign in
              </Link>
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
