import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Results | Lumis Agencies",
  description:
    "Estimated results from a sample AI outbound growth system implementation for a roofing company. Projected outcomes, 7-day build timeline, and before and after comparison.",
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
