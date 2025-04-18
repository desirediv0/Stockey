"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, CalendarClock } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WishlistForm from "../wishlist-form";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Integrations", href: "/integrations" },
  { name: "Resources", href: "/resources" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <nav className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link
              href="/"
              className="mr-6 flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src={"/1.svg"}
                alt="Logo"
                width={100}
                height={100}
                className="h-28 w-28"
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div className="flex md:hidden items-center justify-between w-full">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={"/1.svg"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-28 w-28"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1E2B4F] hover:text-[#4B63FF] hover:bg-[#F0F4FF]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            <div className="hidden md:flex md:items-center text-nowrap  md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#4B63FF]",
                    pathname === item.href
                      ? "text-[#4B63FF] font-semibold"
                      : "text-[#6A7C99]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex md:items-center">
                <Button
                  onClick={() => setWaitlistOpen(true)}
                  className="bg-[#4B63FF] text-white hover:bg-[#3A51E0] shadow-md shadow-[#4B63FF]/20 font-medium ml-2 px-2  lg:px-5 py-2 h-10 rounded-lg"
                >
                  <CalendarClock className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu positioned outside the header to avoid overflow issues */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-white p-6 shadow-2xl overflow-y-auto"
              style={{ height: "100%", overflowY: "auto" }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src={"/1.svg"}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-28 w-28"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#1E2B4F] hover:text-[#4B63FF] hover:bg-[#F0F4FF] rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-[#4B63FF] py-2",
                      pathname === item.href
                        ? "text-[#4B63FF] font-semibold"
                        : "text-[#6A7C99]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-[#F5F7FA]">
                  <div className="space-y-4 mt-4">
                    <Button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setWaitlistOpen(true);
                      }}
                      className="w-full justify-center bg-[#4B63FF] text-white hover:bg-[#3A51E0] shadow-lg shadow-[#4B63FF]/30 font-medium h-12 rounded-xl"
                    >
                      <CalendarClock className="mr-3 h-5 w-5" />
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Waitlist Dialog */}
      <Dialog open={waitlistOpen} onOpenChange={setWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
          </DialogHeader>
          <WishlistForm planName="Early Access" />
        </DialogContent>
      </Dialog>
    </>
  );
}
