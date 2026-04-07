import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Persapt — From SaaS to AaaS",
  description:
    "We don't build software. We build AI agents that do the work. Persapt's AAAS engine monitors, analyzes, and executes — autonomously.",
  keywords: [
    "AI agents",
    "AaaS",
    "autonomous AI",
    "personalization engine",
    "AAAS",
    "Persapt",
  ],
  openGraph: {
    title: "Persapt — From SaaS to AaaS",
    description:
      "We don't build software. We build AI agents that do the work.",
    url: "https://persapt.com",
    siteName: "Persapt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Persapt — From SaaS to AaaS",
    description:
      "We don't build software. We build AI agents that do the work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
