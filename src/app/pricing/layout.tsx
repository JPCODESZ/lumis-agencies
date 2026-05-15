import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Lumis Agencies",
  description:
    "Simple, transparent pricing for roofing and HVAC AI automation. One-time setup fee plus a flat monthly retainer. No hidden fees, no long-term contracts.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
