"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Shield, Clock, TrendingUp } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const trustPoints = [
  "Response time under 60 seconds",
  "Works 24/7 while you're on the job",
  "No tech skills required",
];

const floatingStats = [
  { value: "47s", label: "AI Response", icon: Clock, color: "#0EA5E9", position: "top-8 right-8" },
  { value: "+23 jobs", label: "First month", icon: TrendingUp, color: "#34D399", position: "bottom-16 right-4" },
  { value: "Booked", label: "Auto appointment", icon: Shield, color: "#F59E0B", position: "bottom-8 left-4" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1E]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Primary glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#0EA5E9]/6 rounded-full blur-[140px] pointer-events-none" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#F59E0B]/4 rounded-full blur-[120px] pointer-events-none" />
        {/* Left accent */}
        <div className="absolute top-1/2 left-0 w-[300px] h-[500px] bg-[#A78BFA]/3 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
              <span className="text-sm text-[#0EA5E9] font-medium">
                AI Automation for Roofing &amp; HVAC
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Stop Losing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
                Roofing &amp; HVAC Leads
              </span>{" "}
              to Slow Response Times
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#94A3B8] mb-10 leading-relaxed max-w-xl"
            >
              Our AI system responds to leads in under 60 seconds, qualifies
              prospects automatically, and books appointments while your crew
              stays focused on the job.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <CTAButton href="/contact" variant="primary" size="lg">
                Book Your Free Automation Audit
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton href="/demo" variant="outline" size="lg">
                <Play size={16} />
                See the Demo
              </CTAButton>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#0EA5E9] flex-shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Chat Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Chat header */}
              <div className="flex items-center gap-3 p-4 bg-[#0D1623] border-b border-[#1E293B]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#34D399]/60" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div className="w-6 h-6 rounded-full bg-[#0EA5E9] flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">AI</span>
                  </div>
                  <span className="text-[#94A3B8] text-xs">Apex Roofing · AI Assistant</span>
                  <span className="flex items-center gap-1 text-emerald-400 text-[10px] ml-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {[
                  { from: "system", text: "New lead from website · 11:43 PM", type: "system" },
                  { from: "lead", text: "We have storm damage on our roof. Need an estimate ASAP." },
                  { from: "ai", text: "Hi! This is Apex Roofing. Sorry to hear about the damage. We can help. Are you looking to schedule a free inspection this week?" },
                  { from: "lead", text: "Yes, the sooner the better." },
                  { from: "ai", text: "✅ I have Thursday at 2 PM or Friday at 10 AM. Which works?" },
                ].map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className={
                      msg.type === "system"
                        ? "flex justify-center"
                        : `flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`
                    }
                  >
                    {msg.type === "system" ? (
                      <span className="text-[#475569] text-[10px] bg-[#1F2937] px-3 py-1 rounded-full">
                        {msg.text}
                      </span>
                    ) : (
                      <div
                        className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          msg.from === "ai"
                            ? "bg-[#1F2937] text-[#E2E8F0] rounded-tl-sm"
                            : "bg-[#0EA5E9] text-white rounded-tr-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Response time footer */}
              <div className="px-5 py-3 bg-[#0D1623] border-t border-[#1E293B] flex items-center justify-between">
                <span className="text-[#475569] text-xs">AI responded in</span>
                <span className="text-[#0EA5E9] text-xs font-bold">47 seconds</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-[#F59E0B] text-[#0A0F1E] text-xs font-bold px-3 py-2 rounded-xl shadow-xl"
            >
              47s response
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 bg-[#111827] border border-[#34D399]/30 text-[#34D399] text-xs font-semibold px-3 py-2 rounded-xl shadow-xl flex items-center gap-2"
            >
              <CheckCircle size={12} className="text-[#34D399]" />
              Appointment booked
            </motion.div>
          </motion.div>
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-[#1E293B] text-center"
        >
          <p className="text-sm text-[#475569] mb-5 uppercase tracking-widest font-medium">
            Trusted by roofing and HVAC companies across North America
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["Apex Roofing", "Summit HVAC", "ProRoof Solutions", "ClimateComfort Co.", "Eagle Contractors"].map((name) => (
              <span key={name} className="text-[#1E293B] font-bold text-xs tracking-widest uppercase hover:text-[#374151] transition-colors">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
