"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, HelpCircle, Calendar, BarChart2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Lead submits a form or calls your number",
    body: "Whether it's a web form fill, a missed call, or an inbound text, the system captures it instantly.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "AI sends an instant personalized text response",
    body: "Within 60 seconds, the lead gets a friendly, professional SMS that sounds like it came from your team.",
  },
  {
    number: "03",
    icon: HelpCircle,
    title: "AI asks 3–4 qualifying questions",
    body: "Ownership status, urgency, timeline, budget signals: the AI filters qualified buyers from browsers.",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Qualified lead gets a booking link or direct slot",
    body: "Serious prospects are sent to your calendar or given a direct slot. No phone tag, no delays.",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Job lands in your pipeline with full notes",
    body: "Every detail from the conversation is logged automatically. Your team shows up prepared.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="How It Works"
            title="From Lead to Booked Appointment in Minutes"
            subtitle="A simple, automated workflow that turns inquiries into revenue while you focus on delivering great work."
          />
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical line */}
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
                {/* Step indicator */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#111827] border border-[#1E293B] flex flex-col items-center justify-center relative z-10">
                  <step.icon size={18} className="text-[#0EA5E9] mb-0.5" />
                  <span className="text-[9px] text-[#94A3B8] font-mono">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 hover:border-[#0EA5E9]/20 transition-colors duration-300">
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
