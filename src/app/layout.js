import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stockey - No-Code Trading Analytics Platform",
  description:
    "Connect your broker accounts, visualize your trades, and create custom analytics dashboards without writing code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
