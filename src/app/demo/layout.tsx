import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo | Lumis Agencies",
  description:
    "Watch the Lumis AI system handle a real roofing and HVAC lead conversation, from first contact to booked appointment, in under 60 seconds.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
