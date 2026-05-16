"use client";

import { motion } from "framer-motion";
import { Home, Thermometer, Flower2, Car, Sparkles, Wrench, Building2, MapPin, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const niches = [
  {
    icon: Home,
    label: "Roofing",
    color: "#22C55E",
    points: ["Storm damage leads", "Commercial roofing B2B", "Contractor referrals"],
  },
  {
    icon: Thermometer,
    label: "HVAC",
    color: "#4ADE80",
    points: ["Residential installs", "Commercial service contracts", "Maintenance upsells"],
  },
  {
    icon: Flower2,
    label: "Landscaping",
    color: "#F59E0B",
    points: ["HOA accounts", "Commercial property leads", "Seasonal contract outreach"],
  },
  {
    icon: Car,
    label: "Detailing",
    color: "#22C55E",
    points: ["Fleet clients", "Dealership partnerships", "High-end vehicle owners"],
  },
  {
    icon: Sparkles,
    label: "Med Spas",
    color: "#A78BFA",
    points: ["Referral partnerships", "B2B wellness programs", "Corporate client outreach"],
  },
  {
    icon: Wrench,
    label: "Contractors",
    color: "#F59E0B",
    points: ["GC partnership outreach", "Commercial bidding leads", "Subcontractor networks"],
  },
  {
    icon: Building2,
    label: "Home Services",
    color: "#4ADE80",
    points: ["Property manager leads", "Multi-unit accounts", "Recurring service contracts"],
  },
  {
    icon: MapPin,
    label: "Local Services",
    color: "#22C55E",
    points: ["Hyper-local targeting", "Community business leads", "Niche vertical outreach"],
  },
];

export default function UseCases() {
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
            badge="Who We Serve"
            title="Outbound Systems Built for Your Industry"
            subtitle="We build niche-specific outbound systems. The targeting, messaging, and sequences are custom to your market and your offer."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {niches.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <motion.div
                key={niche.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-[#040810] border border-[#1E293B] rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 group"
                style={{ "--hover-border": niche.color } as React.CSSProperties}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${niche.color}15` }}
                >
                  <Icon size={18} style={{ color: niche.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{niche.label}</h3>
                <ul className="space-y-2">
                  {niche.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle size={12} style={{ color: niche.color }} className="flex-shrink-0 mt-0.5" />
                      <span className="text-[#94A3B8] text-xs">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <CTAButton href="/services" variant="outline" size="md">
            See All Services
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
