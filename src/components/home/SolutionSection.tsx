"use client";

import { motion } from "framer-motion";
import { Zap, Brain, CalendarCheck, LayoutDashboard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    icon: Zap,
    title: "Instant Response",
    body: "AI contacts every new lead within 60 seconds via SMS, any time of day or night, even when your team is on a job.",
    metric: "< 60 sec",
    metricLabel: "average response",
  },
  {
    icon: Brain,
    title: "Smart Qualification",
    body: "Asks the right questions to filter serious buyers from tire-kickers, so your team only talks to people ready to book.",
    metric: "3-4 questions",
    metricLabel: "to qualify",
  },
  {
    icon: CalendarCheck,
    title: "Auto Booking",
    body: "Qualified leads get a booking link or direct calendar slot. No phone tag, no back-and-forth, no manual work.",
    metric: "24/7",
    metricLabel: "booking available",
  },
  {
    icon: LayoutDashboard,
    title: "Pipeline Management",
    body: "Every lead, note, and follow-up task is automatically tracked so nothing slips through the cracks.",
    metric: "0 missed",
    metricLabel: "follow-ups",
  },
];

export default function SolutionSection() {
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
            badge="The Solution"
            title="AI That Works 24/7 So Your Team Doesn't Have To"
            subtitle="We build and manage a complete AI lead automation system for your roofing or HVAC company, from first contact to booked appointment."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 hover:border-[#0EA5E9]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center mb-5">
                <item.icon size={20} className="text-[#0EA5E9]" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.body}</p>

              <div className="border-t border-[#1E293B] pt-4">
                <div className="text-[#0EA5E9] font-bold text-xl">{item.metric}</div>
                <div className="text-[#94A3B8] text-xs">{item.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
