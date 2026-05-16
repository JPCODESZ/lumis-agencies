"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle, ArrowRight, Database, Mail, MessageSquare } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

const outboundSteps = [
  { label: "Target niche selected", sub: "Roofing companies, Denver CO", done: true },
  { label: "147 companies found", sub: "Filtered by size, location, fit", done: true },
  { label: "Decision makers enriched", sub: "Owner emails verified", done: true },
  { label: "Personalized emails generated", sub: "Custom icebreaker per lead", done: false },
];

export default function DemoPreview() {
  return (
    <section className="py-24 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              badge="Interactive Demo"
              title="See the Outbound System in Action"
              subtitle="Watch how we find targeted leads, enrich decision-maker data, write personalized emails, and book qualified calls without any manual work."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              {[
                "AI finds targeted companies in your exact niche",
                "Decision-maker emails verified and enriched automatically",
                "Personalized icebreakers written for each prospect",
                "Positive replies tracked and qualified calls booked",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8] text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <CTAButton href="/demo" variant="primary" size="lg">
                <Play size={16} />
                Try the Interactive Demo
              </CTAButton>
              <CTAButton href="/contact" variant="outline" size="lg">
                Get This For My Business
                <ArrowRight size={16} />
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 p-4 border-b border-[#1E293B]">
                <div className="w-9 h-9 rounded-full bg-[#22C55E]/15 flex items-center justify-center">
                  <Database size={15} className="text-[#22C55E]" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">AI Outbound Campaign</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    <span className="text-[#22C55E] text-xs">Running</span>
                  </div>
                </div>
                <div className="ml-auto text-xs text-[#94A3B8]">147 leads found</div>
              </div>

              <div className="p-5 space-y-3 min-h-[220px]">
                {outboundSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-4 p-3 bg-[#040810] rounded-xl border border-[#1E293B]"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.done ? "bg-[#22C55E]/20" : "bg-[#1E293B]"
                      }`}
                    >
                      {step.done ? (
                        <CheckCircle size={12} className="text-[#22C55E]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{step.label}</div>
                      <div className="text-[#475569] text-xs">{step.sub}</div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-4 p-4 bg-[#22C55E]/5 border border-[#22C55E]/20 rounded-xl"
                >
                  <div className="w-9 h-9 rounded-full bg-[#22C55E]/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-[#22C55E]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-1">Sample Email Generated</div>
                    <div className="text-[#94A3B8] text-xs leading-relaxed">
                      Hi Mike, noticed Apex Roofing has been expanding in the Denver metro. We help roofing companies land more commercial contracts through targeted outreach...
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-4 border-t border-[#1E293B] flex items-center gap-3">
                <MessageSquare size={14} className="text-[#22C55E]" />
                <span className="text-[#475569] text-xs">3 positive replies received today</span>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[#22C55E] text-xs">Live</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#F59E0B] text-[#040810] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              147 leads enriched
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
