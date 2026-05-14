"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    q: "How quickly does the AI respond to a lead?",
    a: "Within 60 seconds, 24/7/365, including nights, weekends, and holidays. The AI never sleeps, never takes a lunch break, and never misses a notification.",
  },
  {
    q: "Will it sound robotic to my customers?",
    a: "No. We spend time during onboarding learning your brand voice and customizing the AI's messaging to match. Most clients' customers assume they're texting with a real team member.",
  },
  {
    q: "Do I need to change my current software?",
    a: "Usually not. We integrate with most popular CRMs and scheduling tools (ServiceTitan, Jobber, HouseCall Pro, Google Calendar, etc.). Our team handles the setup for you.",
  },
  {
    q: "What if a customer asks something complex or unusual?",
    a: "The AI handles the most common questions automatically. For anything outside its scope, it flags the conversation and notifies your team so no one gets left hanging.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 5–7 business days. We handle everything: setup, integration, message customization, and testing. You approve before anything goes live.",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No long-term contracts. After the one-time setup fee, it's month-to-month. Cancel any time. Most clients stick around because the ROI is clear.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1E293B] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#111827]/50 transition-colors duration-200"
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
    <section className="py-24 bg-[#060B14]">
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
