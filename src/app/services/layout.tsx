import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lumis Agencies",
  description:
    "Eight AI outbound systems for service businesses. Lead list building, enrichment, cold email, follow-up automation, CRM pipeline, booking workflows, and reporting.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
