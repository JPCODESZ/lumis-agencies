import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lumis Agencies",
  description:
    "Eight AI automation systems built for roofing and HVAC companies. From instant lead response to appointment booking and review automation, deployed in 5-7 days.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
