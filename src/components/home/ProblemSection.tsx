"use client";

import { motion } from "framer-motion";
import { TrendingDown, Users, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const problems = [
  {
    icon: TrendingDown,
    stat: "73%",
    title: "of service businesses have no consistent outbound system",
    body: "Most rely on referrals and word of mouth. When referrals slow down, revenue drops. Without a system generating new leads every week, growth becomes unpredictable.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    stat: "1,000s",
    title: "of qualified local businesses never hear from you",
    body: "There are thousands of companies in your target market actively looking for what you offer. Without a targeted outbound system, you never reach them before a competitor does.",
    color: "#EF4444",
  },
  {
    icon: Clock,
    stat: "10+ hrs",
    title: "wasted per week on manual prospecting with no system",
    body: "Cold calling lists, searching LinkedIn, writing one-off emails. Manual prospecting is inconsistent, exhausting, and impossible to scale. A system replaces the chaos.",
    color: "#A78BFA",
  },
];

export default function ProblemSection() {
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
            badge="The Problem"
            title="No System Means No Predictable Growth"
            subtitle="It is not your service quality. It is not your pricing. The biggest growth bottleneck for most service businesses is not having a reliable way to find and reach new leads."
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
              className="relative group bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-8 overflow-hidden"
            >
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
