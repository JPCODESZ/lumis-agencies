"use client";

import { motion } from "framer-motion";
import { Target, Database, Sparkles, Send, BarChart2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "We research your niche and build a targeted lead list",
    body: "We identify the exact types of businesses you want to reach, then build a database of qualified prospects in your market complete with company info and fit scores.",
  },
  {
    number: "02",
    icon: Database,
    title: "AI enriches each lead with decision-maker data",
    body: "Every company gets matched to the right contact: owner, manager, or decision-maker. Verified emails and business context are pulled and attached to each record.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI writes a personalized icebreaker for each prospect",
    body: "Using business-specific context, AI generates a custom first-touch message for each lead. No copy-paste templates. Every email reads like it was written by hand.",
  },
  {
    number: "04",
    icon: Send,
    title: "Outreach sequences launch and replies get tracked",
    body: "Emails go out on a smart schedule. Replies are monitored, positive responses are flagged, and follow-up sequences run automatically until a lead responds or opts out.",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Qualified leads get booked and logged in your CRM",
    body: "Interested prospects get booked directly onto your calendar. Every conversation and outcome is logged in your pipeline so nothing falls through the cracks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="How It Works"
            title="From Niche Research to Booked Calls"
            subtitle="A fully automated outbound workflow that turns a blank list into qualified calls on your calendar."
          />
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1E293B] hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 md:gap-10 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0F1E] border border-[#1E293B] flex flex-col items-center justify-center relative z-10">
                  <step.icon size={18} className="text-[#22C55E] mb-0.5" />
                  <span className="text-[9px] text-[#94A3B8] font-mono">{step.number}</span>
                </div>

                <div className="flex-1 bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-6 hover:border-[#22C55E]/20 transition-colors duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
