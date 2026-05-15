import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Free Audit | Lumis Agencies",
  description:
    "Book a free 30-minute automation audit with Jonathan Pepper, founder of Lumis Agencies. We'll show you exactly how many leads you're losing and walk you through a custom plan.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
