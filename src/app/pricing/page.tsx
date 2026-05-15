"use client";

import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Stop missing leads",
    setup: 497,
    monthly: 297,
    bestFor: "Small roofing or HVAC companies (0-50 leads/month)",
    features: [
      "AI missed-call text back",
      "Website lead response (1 form)",
      "3-step SMS follow-up sequence",
      "Basic lead qualification",
      "Email support",
      "Setup & onboarding included",
    ],
    notIncluded: [
      "Multi-channel response",
      "Appointment booking automation",
      "CRM pipeline integration",
      "Review automation",
      "Old lead reactivation",
    ],
    cta: "Get Started",
    popular: false,
    color: "#94A3B8",
  },
  {
    name: "Growth",
    tagline: "Full automation engine",
    setup: 997,
    monthly: 597,
    bestFor: "Growing companies (50-200 leads/month)",
    features: [
      "Everything in Starter",
      "Multi-channel lead response (calls + web + ads)",
      "Advanced qualification flows",
      "Appointment booking automation",
      "CRM pipeline integration (GHL, Jobber, etc.)",
      "Review request automation",
      "Priority support",
      "Monthly strategy call",
    ],
    notIncluded: [
      "Old lead reactivation",
      "Custom AI workflows",
      "Multiple locations",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    popular: true,
    color: "#0EA5E9",
  },
  {
    name: "Pro",
    tagline: "Enterprise-grade automation",
    setup: null,
    monthly: null,
    bestFor: "Multi-location or high-volume (200+ leads/month)",
    features: [
      "Everything in Growth",
      "Old lead reactivation campaigns",
      "Custom AI workflow design",
      "Multiple locations & numbers",
      "White-glove onboarding",
      "Dedicated account manager",
      "Custom integrations (GHL, Salesforce, etc.)",
      "Weekly strategy calls",
    ],
    notIncluded: [],
    cta: "Contact Us",
    popular: false,
    color: "#F59E0B",
  },
];

const comparisonFeatures = [
  { label: "AI missed-call text back", starter: true, growth: true, pro: true },
  { label: "Website lead response", starter: "1 form", growth: "Unlimited", pro: "Unlimited" },
  { label: "SMS follow-up sequences", starter: "3-step", growth: "Custom", pro: "Custom" },
  { label: "Lead qualification", starter: "Basic", growth: "Advanced", pro: "Custom" },
  { label: "Appointment booking", starter: false, growth: true, pro: true },
  { label: "CRM pipeline integration", starter: false, growth: true, pro: true },
  { label: "Review request automation", starter: false, growth: true, pro: true },
  { label: "Old lead reactivation", starter: false, growth: false, pro: true },
  { label: "Multiple locations", starter: false, growth: false, pro: true },
  { label: "Dedicated account manager", starter: false, growth: false, pro: true },
  { label: "Support", starter: "Email", growth: "Priority + calls", pro: "Dedicated" },
];

const pricingFaqs = [
  {
    q: "Is there a setup fee?",
    a: "Yes. A one-time setup fee covers onboarding, system configuration, message customization, integration work, and testing. This is billed once and never again.",
  },
  {
    q: "Can I upgrade my plan?",
    a: "Yes, you can upgrade at any time. We'll credit your remaining monthly balance toward the new plan and handle the migration for you.",
  },
  {
    q: "What's the refund policy?",
    a: "We offer a 30-day satisfaction guarantee on the setup fee. If you're not happy with the system in the first 30 days, we'll refund your setup fee in full.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The setup fee and monthly fee are all-inclusive. The only possible add-on is SMS usage costs for very high-volume businesses, which we'll discuss upfront.",
  },
];

function ValueCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle size={18} className="text-[#0EA5E9] mx-auto" />;
  if (value === false) return <X size={16} className="text-[#1E293B] mx-auto" />;
  return <span className="text-[#94A3B8] text-sm">{value}</span>;
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0A0F1E]">
        {/* Header */}
        <section className="py-24 bg-[#060B14] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0EA5E9]/6 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Pricing"
                title="Simple, Transparent Pricing"
                subtitle="One-time setup fee + a flat monthly retainer. No hidden fees, no long-term contracts, no surprises."
              />
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl p-8 border flex flex-col ${
                    plan.popular
                      ? "bg-gradient-to-b from-[#0EA5E9]/10 to-[#111827] border-[#0EA5E9]/40 shadow-2xl shadow-[#0EA5E9]/10"
                      : "bg-[#111827] border-[#1E293B]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0EA5E9] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5">
                      <Zap size={10} fill="white" />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="text-sm font-medium mb-1" style={{ color: plan.color }}>{plan.name}</div>
                    <div className="text-[#94A3B8] text-sm mb-4">{plan.tagline}</div>

                    {plan.monthly !== null ? (
                      <>
                        <div className="flex items-end gap-1 mb-1">
                          <span className="text-4xl font-bold text-white">${plan.monthly}</span>
                          <span className="text-[#94A3B8] pb-1.5">/mo</span>
                        </div>
                        <div className="text-[#94A3B8] text-sm">+ ${plan.setup} one-time setup</div>
                      </>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-white mb-1">Custom</div>
                        <div className="text-[#94A3B8] text-sm">Pricing based on your needs</div>
                      </>
                    )}

                    <div className="mt-4 pt-4 border-t border-[#1E293B]">
                      <p className="text-[#94A3B8] text-xs">Best for: {plan.bestFor}</p>
                    </div>
                  </div>

                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[#CBD5E1] text-sm">{f}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-3 opacity-40">
                          <X size={15} className="text-[#94A3B8] flex-shrink-0 mt-0.5" />
                          <span className="text-[#94A3B8] text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CTAButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                    <ArrowRight size={16} />
                  </CTAButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <p className="text-center text-[#475569] text-xs mt-6 mb-2">
          Pricing shown is current as of 2026.
        </p>

        {/* Comparison Table */}
        <section className="py-16 bg-[#060B14]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Feature Comparison</h2>
              <p className="text-[#94A3B8]">See exactly what's included in each plan</p>
            </motion.div>

            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-[#1E293B]">
                <div className="p-4 text-[#94A3B8] text-sm font-medium">Feature</div>
                {["Starter", "Growth", "Pro"].map((name, i) => (
                  <div
                    key={name}
                    className={`p-4 text-center text-sm font-semibold ${
                      name === "Growth" ? "text-[#0EA5E9] bg-[#0EA5E9]/5" : "text-white"
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {comparisonFeatures.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 border-b border-[#1E293B] last:border-0 ${
                    i % 2 === 0 ? "" : "bg-[#111827]/50"
                  }`}
                >
                  <div className="p-4 text-[#94A3B8] text-sm">{row.label}</div>
                  <div className="p-4 flex items-center justify-center">
                    <ValueCell value={row.starter} />
                  </div>
                  <div className="p-4 flex items-center justify-center bg-[#0EA5E9]/3">
                    <ValueCell value={row.growth} />
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    <ValueCell value={row.pro} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Pricing Questions</h2>
            </motion.div>

            <div className="space-y-3">
              {pricingFaqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#1F2937]/50 transition-colors"
                  >
                    <span className="text-white font-medium text-sm">{faq.q}</span>
                    <span className="text-[#94A3B8] text-lg leading-none">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-[#94A3B8] text-sm leading-relaxed border-t border-[#1E293B] pt-4">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#060B14] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Not Sure Which Plan Is Right?
              </h2>
              <p className="text-[#94A3B8] mb-8">
                Book a free audit and we'll recommend the right plan based on your lead volume and goals.
              </p>
              <CTAButton href="/contact" variant="primary" size="lg">
                Book My Free Audit
                <ArrowRight size={18} />
              </CTAButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
