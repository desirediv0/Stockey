import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import Link from "next/link";

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
          <Navigation />
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="container py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Product</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/features" className="hover:text-foreground">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="hover:text-foreground">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/integrations"
                        className="hover:text-foreground"
                      >
                        Integrations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/about" className="hover:text-foreground">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources" className="hover:text-foreground">
                        resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="hover:text-foreground">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/docs" className="hover:text-foreground">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/help" className="hover:text-foreground">
                        Help Center
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/privacy" className="hover:text-foreground">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:text-foreground">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/security" className="hover:text-foreground">
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} Stockey. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}