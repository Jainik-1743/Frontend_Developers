import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import RightTimeline from "@/components/RightTimeline";
import Sidebar from "@/components/Sidebar";
import { TransitionProvider } from "@/components/TransitionContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jainik Patel | React Developer",
  description:
    "Focusing on building and designing exceptional digital experiences with 3.5+ years of expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex`}
      >
        <TransitionProvider>
          <Sidebar />
          <div className="flex-1 lg:ml-64 lg:mr-24 flex flex-col min-h-screen relative overflow-hidden">
            {children}
          </div>
          <RightTimeline />
        </TransitionProvider>
      </body>
    </html>
  );
}
