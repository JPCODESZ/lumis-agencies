import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Lumis Agencies",
  description:
    "Simple, transparent pricing for AI outbound growth systems. One-time setup fee plus a flat monthly retainer. No hidden fees, no long-term contracts.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
