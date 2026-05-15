"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0EA5E9]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full mb-6 uppercase tracking-widest">
            Get Started Today
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Stop Missing Leads?
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free 30-minute automation audit. We&apos;ll show you exactly how many leads
            you&apos;re losing to slow response times, and walk you through a custom plan for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book My Free Audit
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
              "Results in 5-7 days",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#0EA5E9]" />
                <span className="text-[#94A3B8] text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
