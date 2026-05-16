import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumis Agencies | AI Outbound Growth Systems for Service Businesses",
  description:
    "We build done-for-you AI outbound systems that find targeted business leads, enrich decision-maker data, send personalized outreach, and book qualified calls for service businesses.",
  keywords: "AI outbound, lead generation, cold email, lead enrichment, service business, roofing, HVAC, landscaping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
