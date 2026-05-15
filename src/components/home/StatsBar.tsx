"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "< 60s", label: "Average AI response time", accent: "#0EA5E9" },
  { value: "3.2x", label: "More booked appointments", accent: "#F59E0B" },
  { value: "80%+", label: "Lead contact rate", accent: "#34D399" },
  { value: "5-7", label: "Days to go live", accent: "#A78BFA" },
];

export default function StatsBar() {
  return (
    <section className="py-14 bg-[#060B14] border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1E293B]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center lg:px-8"
            >
              <div
                className="text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>
              <div className="text-[#94A3B8] text-sm leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[#475569] text-xs mt-8">
          Example performance targets based on sample implementations
        </p>
      </div>
    </section>
  );
}
