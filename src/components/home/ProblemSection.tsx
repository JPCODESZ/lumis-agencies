"use client";

import { motion } from "framer-motion";
import { Clock, PhoneOff, BatteryLow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const problems = [
  {
    icon: Clock,
    stat: "78%",
    title: "of leads go to the first company that responds",
    body: "Most roofing companies respond in hours. Your competitor responds in minutes. Speed isn't a nice-to-have. It's the difference between winning and losing the job.",
    color: "#F59E0B",
  },
  {
    icon: PhoneOff,
    stat: "$5K–$15K",
    title: "lost per missed call",
    body: "Every unanswered call during a job could be a $5,000–$15,000 project walking away. Voicemail doesn't close deals. Fast, personal follow-up does.",
    color: "#EF4444",
  },
  {
    icon: BatteryLow,
    stat: "3–4 hrs",
    title: "wasted per day on manual follow-up",
    body: "Your team is busy on jobs, not glued to a phone waiting for leads. Manual follow-up is inconsistent, exhausting, and doesn't scale.",
    color: "#A78BFA",
  },
];

export default function ProblemSection() {
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
            badge="The Problem"
            title="The Lead Response Problem Is Costing You Jobs"
            subtitle="It's not your service quality. It's not your pricing. The biggest growth bottleneck for most roofing and HVAC companies is response speed."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-[#1E293B] overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${problem.color}08, transparent 60%)`,
                }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${problem.color}15` }}
              >
                <problem.icon size={22} style={{ color: problem.color }} />
              </div>

              <div
                className="text-4xl font-bold mb-2"
                style={{ color: problem.color }}
              >
                {problem.stat}
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {problem.title}
              </h3>

              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {problem.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
