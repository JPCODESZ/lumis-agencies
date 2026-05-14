"use client";

import { motion } from "framer-motion";
import { Home, Thermometer, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const useCases = [
  {
    icon: Home,
    industry: "Roofing Companies",
    description:
      "Turn storm season chaos into booked estimates. Every lead (from hail damage calls to insurance claim inquiries) gets an instant response and professional follow-up.",
    points: [
      "Storm damage assessment requests",
      "Free estimate form fills",
      "Insurance claim follow-up",
      "Seasonal campaign responses",
      "Referral lead nurturing",
    ],
    color: "#0EA5E9",
    badge: "For Roofers",
  },
  {
    icon: Thermometer,
    industry: "HVAC Companies",
    description:
      "Never miss an emergency call again. AI handles after-hours urgent requests, seasonal maintenance campaigns, and new install inquiries, 24/7.",
    points: [
      "Emergency repair requests (nights & weekends)",
      "Seasonal maintenance reminders",
      "New system installation inquiries",
      "Tune-up campaign follow-up",
      "Service contract renewals",
    ],
    color: "#F59E0B",
    badge: "For HVAC",
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
            badge="Built For Your Industry"
            title="Automation Designed for Roofing and HVAC"
            subtitle="We don't offer a generic chatbot. We build workflows specifically for how your business gets and converts leads."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300"
              style={{ ["--hover-color" as string]: uc.color }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${uc.color}15` }}
                >
                  <uc.icon size={22} style={{ color: uc.color }} />
                </div>
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full border mb-2 inline-block"
                    style={{
                      color: uc.color,
                      backgroundColor: `${uc.color}10`,
                      borderColor: `${uc.color}30`,
                    }}
                  >
                    {uc.badge}
                  </span>
                  <h3 className="text-white font-bold text-xl">{uc.industry}</h3>
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                {uc.description}
              </p>

              <ul className="space-y-3">
                {uc.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle size={15} style={{ color: uc.color }} className="flex-shrink-0" />
                    <span className="text-[#CBD5E1] text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
