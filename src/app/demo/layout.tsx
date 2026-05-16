import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Demo | Lumis Agencies",
  description:
    "Watch the Lumis AI outbound system find targeted leads, enrich decision-maker data, generate personalized outreach, and book a qualified call. Interactive demo.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
