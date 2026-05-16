"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    q: "How do you find the leads?",
    a: "We use a combination of AI-powered databases, niche research tools, and enrichment platforms to build a targeted list of businesses that match your ideal client profile. Every lead is filtered by industry, location, company size, and fit before it enters your system.",
  },
  {
    q: "How is the outreach personalized?",
    a: "AI analyzes each company's profile and generates a custom first-touch email that references their specific business. It does not use generic templates. Every message is written to feel like a hand-crafted outreach, not a mass email blast.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients get their system live within 7 business days. First replies typically come in within the first 2 weeks of outreach. Booked calls usually follow within 2 to 4 weeks depending on your niche and offer.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in service businesses including roofing, HVAC, landscaping, detailing, med spas, contractors, and other local high-ticket service companies. If you have a defined niche and a strong offer, the system can work for you.",
  },
  {
    q: "Do I need to change my current software?",
    a: "Usually not. We integrate with most popular CRMs and scheduling tools including GoHighLevel, HubSpot, Calendly, and Google Calendar. We handle all the integration and setup for you.",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No long-term contracts. After the one-time setup fee it is month-to-month. Cancel any time. Most clients stay because the pipeline speaks for itself.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1E293B] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#0A0F1E]/50 transition-colors duration-200"
      >
        <span className="text-white font-medium text-sm sm:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[#94A3B8]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-[#94A3B8] text-sm leading-relaxed border-t border-[#1E293B] pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#040810]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know before getting started."
          />
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
