"use client";

import { motion } from "framer-motion";
import { Play, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

const messages = [
  { from: "lead", text: "Hi, I need a roof inspection after last night's storm." },
  { from: "ai", text: "Hi Sarah! Thanks for reaching out. We can help. Are you available for a free inspection this week?" },
  { from: "lead", text: "Yes, Thursday works for me." },
  { from: "ai", text: "✅ Booked! Your free inspection is confirmed for Thursday at 2 PM. See you then!" },
];

export default function DemoPreview() {
  return (
    <section className="py-24 bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              badge="Interactive Demo"
              title="See It In Action"
              subtitle="Watch how our AI system handles a real lead conversation from start to booked appointment, in under 3 minutes."
              centered={false}
            />

            <div className="mt-8 space-y-4">
              {[
                "AI responds within 60 seconds of lead submission",
                "Asks smart qualifying questions automatically",
                "Books the appointment without any human involvement",
                "Adds the lead to your CRM pipeline instantly",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
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

          {/* Right: Preview chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 p-4 border-b border-[#1E293B]">
                <div className="w-9 h-9 rounded-full bg-[#0EA5E9] flex items-center justify-center">
                  <MessageSquare size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Apex Roofing AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 text-xs">Online</span>
                  </div>
                </div>
                <div className="ml-auto text-xs text-[#94A3B8]">Response: 47s</div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4 min-h-[240px]">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.from === "ai"
                          ? "bg-[#1F2937] text-[#E2E8F0] rounded-tl-sm"
                          : "bg-[#0EA5E9] text-white rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="p-4 border-t border-[#1E293B] flex items-center gap-3">
                <div className="flex-1 bg-[#1F2937] rounded-xl px-4 py-2.5 text-[#475569] text-sm">
                  Type a message...
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#0EA5E9] flex items-center justify-center">
                  <ArrowRight size={15} className="text-white" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#F59E0B] text-[#0A0F1E] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              47s response time
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
