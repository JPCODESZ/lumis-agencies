"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#22C55E]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-6 uppercase tracking-widest">
            Get Started Today
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Build a Predictable Lead Pipeline?
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free 30-minute outbound system audit. We will show you exactly how many leads your business is leaving on the table and walk you through a custom outbound plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book My Free Outbound Audit
              <ArrowRight size={18} />
            </CTAButton>
            <CTAButton href="/demo" variant="outline" size="lg">
              See the Demo First
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "No obligation",
              "No setup required to talk",
              "System live in 7 days",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#22C55E]" />
                <span className="text-[#94A3B8] text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
