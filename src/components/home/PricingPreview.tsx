"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const plans = [
  {
    name: "Starter",
    setup: "$497",
    monthly: "$297",
    period: "/mo",
    description: "For businesses ready to start generating outbound leads",
    features: ["Basic lead list build", "Outreach system setup", "Simple follow-up sequence", "CRM tracking"],
    popular: false,
  },
  {
    name: "Growth",
    setup: "$997",
    monthly: "$597",
    period: "/mo",
    description: "For businesses that want a full AI-powered outbound engine",
    features: ["Larger targeted lead lists", "AI personalization per lead", "Multi-step follow-up", "Weekly optimization", "Booking workflow"],
    popular: true,
  },
  {
    name: "Pro",
    setup: "Custom",
    monthly: "Custom",
    period: "",
    description: "For multi-market or high-volume outbound campaigns",
    features: ["Multi-domain outbound", "Advanced enrichment", "Reporting dashboard", "CRM integrations", "Scaled campaigns"],
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="One-time setup plus a flat monthly fee. No hidden charges, no long-term contracts."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                plan.popular
                  ? "bg-gradient-to-b from-[#22C55E]/10 to-[#0A0F1E] border-[#22C55E]/40"
                  : "bg-[#040810] border-[#1E293B]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-[#94A3B8] text-sm font-medium mb-1">{plan.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">{plan.monthly}</span>
                  <span className="text-[#94A3B8] text-sm pb-1">{plan.period}</span>
                </div>
                {plan.setup !== "Custom" && (
                  <div className="text-[#94A3B8] text-xs">{plan.setup} one-time setup</div>
                )}
                <p className="text-[#94A3B8] text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[#22C55E] flex-shrink-0" />
                    <span className="text-[#CBD5E1] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                href="/contact"
                variant={plan.popular ? "primary" : "outline"}
                size="md"
                className="w-full justify-center"
              >
                Get Started
              </CTAButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <CTAButton href="/pricing" variant="outline" size="md">
            See Full Pricing Details
            <ArrowRight size={16} />
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
