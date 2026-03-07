import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import RightTimeline from "@/components/RightTimeline";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { TransitionProvider } from "@/components/TransitionContext";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen flex`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <TransitionProvider>
            <Sidebar />
            <div className="flex-1 lg:ml-72 lg:mr-24 flex flex-col min-h-screen relative overflow-hidden">
              {children}
            </div>
            <RightTimeline />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
