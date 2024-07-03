import { cn } from '@/lib/utils';
import "./globals.css";
import type { Metadata } from "next";
import { googleSans } from '@/fonts';

export const metadata: Metadata = {
  title: "Academy",
  description: "Investing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(`bg-body bg-main antialiased`, googleSans.variable)}>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
