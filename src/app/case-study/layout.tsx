import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Results | Lumis Agencies",
  description:
    "See a sample roofing automation implementation. This walkthrough shows projected outcomes, a 7-day build timeline, and the types of results our systems are designed to deliver.",
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
