"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Layers,
  Link as LinkIcon,
  Settings,
  HelpCircle,
  Bell,
  ChevronDown,
  CreditCard,
  LogOut,
  User,
  Briefcase,
  TrendingUp,
  Eye,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Dashboard",
    href: "/demo",
    icon: BarChart3,
  },
  {
    name: "Advanced Analytics",
    href: "/demo/templates",
    icon: TrendingUp,
  },
  {
    name: "Portfolio",
    href: "/demo/portfolio",
    icon: Briefcase,
  },

  {
    name: "Market insights",
    href: "/demo/market",
    icon: Layers,
  },
  {
    name: "Watchlist",
    href: "/demo/watchlist",
    icon: Eye,
  },
  
  {
    name: "Integration",
    href: "/demo/integration",
    icon: LinkIcon,
  },
];

const bottomNav = [
  {
    name: "Settings",
    href: "/demo/settings",
    icon: Settings,
  },
  {
    name: "Help & Support",
    href: "/demo/help",
    icon: HelpCircle,
  },
];

export function Sidebar({ className }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-white px-2 py-4",
        className
      )}
      style={{ borderColor: "#F0F4FF" }}
    >
      <div className="flex h-14 items-center px-4">
        <Link href="/demo" className="flex items-center gap-2">
          <Image src="/1.svg" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-1 px-2">
        <div className="rounded-lg p-2">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href
                      ? ""
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={
                    pathname === item.href
                      ? { backgroundColor: "#4B63FF", color: "white" }
                      : { color: "#6A7C99" }
                  }
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-1 px-2">
        <div className="rounded-lg p-2">
          {bottomNav.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === item.href
                    ? ""
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={
                  pathname === item.href
                    ? { backgroundColor: "#4B63FF", color: "white" }
                    : { color: "#6A7C99" }
                }
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-2 border-t pt-4" style={{ borderColor: "#F0F4FF" }}>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1E2B4F" }}>
                John Doe
              </p>
              <p
                className="text-xs text-muted-foreground"
                style={{ color: "#6A7C99" }}
              >
                Pro Plan
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            style={{ color: "#4B63FF" }}
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", {
                "rotate-180": open,
              })}
            />
          </Button>
        </div>
        {open && (
          <div className="mt-2 space-y-1 px-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              style={{ color: "#6A7C99" }}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              style={{ color: "#6A7C99" }}
            >
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              style={{ color: "#6A7C99" }}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              style={{ color: "#6A7C99" }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
