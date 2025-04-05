"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  LineChart,
  PieChart,
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
  Globe,
  Eye,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    name: "Portfolio Analytics",
    href: "/dashboard/portfolio",
    icon: Briefcase,
  },
  {
    name: "Market Insights",
    href: "/dashboard/market",
    icon: TrendingUp,
  },
  {
    name: "Data Integration",
    href: "/dashboard/integration",
    icon: LinkIcon,
  },
  {
    name: "Watchlist",
    href: "/dashboard/watchlist",
    icon: Eye,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: Layers,
  },
];

const bottomNav = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    name: "Help & Support",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
];

export function Sidebar({ className }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-card px-2 py-4",
        className
      )}
      style={{ borderColor: "#F0F4FF" }}
    >
      <div className="flex h-14 items-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="font-semibold" style={{ color: "#4B63FF" }}>
            Stockey
          </span>
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
