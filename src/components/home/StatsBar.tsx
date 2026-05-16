"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Leads found per campaign", accent: "#22C55E" },
  { value: "3-5x", label: "Higher reply rate vs generic outreach", accent: "#F59E0B" },
  { value: "7-14", label: "Days to first qualified call", accent: "#4ADE80" },
  { value: "100%", label: "Done for you", accent: "#22C55E" },
];

const niches = [
  "Roofing",
  "HVAC",
  "Landscaping",
  "Detailing",
  "Med Spas",
  "Contractors",
  "Home Services",
  "Local Service Businesses",
];

export default function StatsBar() {
  return (
    <>
      <section className="py-14 bg-[#040810] border-y border-[#1E293B]">
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
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div
                    className="text-4xl sm:text-5xl font-bold"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </div>
                  <span
                    className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                    style={{ backgroundColor: stat.accent }}
                  />
                </div>
                <div className="text-[#94A3B8] text-sm leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#475569] text-xs mt-8">
            Estimated benchmarks based on sample outbound system implementations
          </p>
        </div>
      </section>

      {/* Niche Ticker */}
      <section className="py-4 bg-[#040810] border-b border-[#1E293B] overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-widest whitespace-nowrap pl-4">
            Industries we serve:
          </span>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...niches, ...niches, ...niches].map((niche, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm text-[#94A3B8] px-4 py-1.5 bg-[#0A0F1E] border border-[#1E293B] rounded-full flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                {niche}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
