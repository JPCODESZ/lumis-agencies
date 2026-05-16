import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Free Audit | Lumis Agencies",
  description:
    "Book a free 30-minute outbound system audit with Jonathan Pepper, founder of Lumis Agencies. We will map out a custom outbound plan for your service business.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
