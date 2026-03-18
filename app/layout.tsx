import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oneflow.com";
const SITE_URL = RAW_URL.startsWith("http") ? RAW_URL : `https://${RAW_URL}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "One Flow — Run Lean. Win Time. Stay a Team of One.",
    template: "%s | One Flow",
  },
  description:
    "Simple automation tools for small business owners, solopreneurs, and side hustlers. One Flow gives you your time back. From day one.",
  keywords: [
    "small business automation",
    "solopreneur tools",
    "business workflow",
    "time-saving tools",
    "one-person business",
    "side hustle tools",
  ],
  openGraph: {
    type: "website",
    siteName: "One Flow",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
