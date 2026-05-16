"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Search, Mail, CalendarCheck, TrendingUp } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const trustPoints = [
  "Targeted lead lists built for your niche",
  "Personalized outreach at scale",
  "Qualified calls booked automatically",
];

const pipelineSteps = [
  { label: "Leads Found", detail: "247 roofing companies", sub: "Denver metro area", color: "#22C55E", icon: Search },
  { label: "Contacts Enriched", detail: "Owner: Mike Torres", sub: "mike@apexroofing.com", color: "#4ADE80", icon: TrendingUp },
  { label: "Email Generated", detail: "Hi Mike, noticed you...", sub: "Personalized icebreaker", color: "#F59E0B", icon: Mail },
  { label: "Call Booked", detail: "Thu May 22, 10:00 AM", sub: "Qualified discovery call", color: "#22C55E", icon: CalendarCheck },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#040810]">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#22C55E]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#F59E0B]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[500px] bg-[#22C55E]/4 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-sm text-[#22C55E] font-medium">
                AI Outbound Systems for Service Businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#4ADE80]">
                Predictable Pipeline
              </span>{" "}
              of Qualified Leads
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#94A3B8] mb-10 leading-relaxed max-w-xl"
            >
              We build done-for-you AI outbound systems that find targeted business leads,
              enrich them with decision-maker data, send personalized outreach, and book
              qualified calls directly onto your calendar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <CTAButton href="/contact" variant="primary" size="lg">
                Book Your Free Outbound Audit
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton href="/demo" variant="outline" size="lg">
                <Play size={16} />
                See the Demo
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3 p-4 bg-[#040810] border-b border-[#1E293B]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]/60" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">AI</span>
                  </div>
                  <span className="text-[#94A3B8] text-xs">Outbound System · Live Campaign</span>
                  <span className="flex items-center gap-1 text-[#22C55E] text-[10px] ml-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Running
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 min-h-[280px]">
                {pipelineSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.25 }}
                      className="flex items-center gap-4 p-3 bg-[#040810] rounded-xl border border-[#1E293B]"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon size={14} style={{ color: step.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#94A3B8] text-[10px] uppercase tracking-widest mb-0.5">{step.label}</div>
                        <div className="text-white text-xs font-medium truncate">{step.detail}</div>
                        <div className="text-[#475569] text-[10px] truncate">{step.sub}</div>
                      </div>
                      <CheckCircle size={13} style={{ color: step.color }} className="flex-shrink-0" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="px-5 py-3 bg-[#040810] border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-[#475569] text-xs">Leads found this week</span>
                <span className="text-[#22C55E] text-xs font-bold">247 prospects</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-[#F59E0B] text-[#040810] text-xs font-bold px-3 py-2 rounded-xl shadow-xl"
            >
              Done for you
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 bg-[#0A0F1E] border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold px-3 py-2 rounded-xl shadow-xl flex items-center gap-2"
            >
              <CheckCircle size={12} className="text-[#22C55E]" />
              Call booked automatically
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-[#1E293B] text-center"
        >
          <p className="text-sm text-[#475569] font-medium">
            Built for roofing, HVAC, landscaping, detailing, and high-ticket service businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
