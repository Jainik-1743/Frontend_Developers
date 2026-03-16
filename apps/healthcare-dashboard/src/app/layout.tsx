import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";

import "./globals.css";

import { AppProviders } from "@/providers/app-providers";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Healthcare Management & Analytics Dashboard",
  description:
    "A fully mocked healthcare dashboard using Next.js, Zustand, TanStack Query, Recharts, Plotly, D3, React Flow, Prisma types, GraphQL, and AI SDK.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
