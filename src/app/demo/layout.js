"use client";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Footer } from "@/components/dashboard/footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative flex min-h-screen bg-white">
      <div className="fixed top-0 bottom-0 left-0 z-40 hidden md:block">
        <Sidebar className="w-64 h-screen" />
      </div>
      <div className="flex flex-1 flex-col md:ml-64">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
