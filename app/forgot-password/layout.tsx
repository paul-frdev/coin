import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "forgot password",
  description: "enter a new password",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}
