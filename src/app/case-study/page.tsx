"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, TrendingUp, Clock, Calendar,
  Mail, Star, Quote, FlaskConical
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const beforeAfter = [
  { metric: "Lead source", before: "Referrals only", after: "Consistent outbound pipeline", color: "#22C55E" },
  { metric: "Outbound volume", before: "None", after: "200+ personalized emails/week", color: "#4ADE80" },
  { metric: "Qualified calls/month", before: "0-2 via referral", after: "8-12 from outbound", color: "#F59E0B" },
  { metric: "New clients/month", before: "1-2 unpredictable", after: "3-5 projected avg.", color: "#22C55E" },
  { metric: "Hours/week on prospecting", before: "6-10 hours manual", after: "Under 1 hour reviewing reports", color: "#A78BFA" },
];

const timeline = [
  { day: "Day 1", title: "Onboarding and ICP Research", desc: "We define the ideal client profile, research the niche, select geographic targets, and set up tracking. Campaign goals and metrics are confirmed." },
  { day: "Day 2-3", title: "Lead List Built and Enriched", desc: "AI builds a targeted list of roofing companies in the selected market. Every lead is enriched with owner name, verified email, and business context." },
  { day: "Day 4", title: "Outreach Sequences Written", desc: "AI generates personalized icebreakers for each prospect and builds the full multi-step email sequence. Subject lines are tested for deliverability." },
  { day: "Day 5", title: "CRM and Booking Workflow Setup", desc: "We connect the pipeline to GoHighLevel, configure lead stages, and set up the booking workflow so qualified prospects can schedule a call automatically." },
  { day: "Day 7", title: "System Launches", desc: "Outreach begins. In projected timelines based on similar implementations, first positive replies come in within 5-10 business days. Qualified calls follow shortly after." },
];

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#040810] min-h-screen">
        <section className="py-20 bg-[#040810] border-b border-[#1E293B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full uppercase tracking-widest">
                  Sample Implementation
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full">
                  Roofing
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-[#94A3B8] bg-[#94A3B8]/10 border border-[#1E293B] rounded-full flex items-center gap-1.5">
                  <FlaskConical size={11} />
                  Projected Outcomes
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Estimated Results: AI Outbound Growth System for a Roofing Company
              </h1>

              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                This page walks through a sample outbound system implementation for a mid-size roofing company. The scenario, workflow, and projected metrics are representative of how these systems are built and what outcomes to expect. This is not a verified client case study.
              </p>

              <div className="grid grid-cols-3 gap-6 p-6 bg-[#0A0F1E] border border-[#1E293B] rounded-2xl">
                {[
                  { label: "Projected qualified calls/month", value: "8-12", color: "#22C55E" },
                  { label: "Estimated outreach volume/week", value: "200+", color: "#4ADE80" },
                  { label: "Projected hours saved/week", value: "8+", color: "#F59E0B" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="text-3xl sm:text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stat.color }} />
                    </div>
                    <div className="text-[#94A3B8] text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Situation This Solves</h2>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                In this sample scenario, a well-established roofing company generates most of its revenue through referrals and word of mouth. The business is profitable but growth is unpredictable. When referrals slow down, so does revenue. There is no outbound system generating new leads on a consistent schedule.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                This pattern is common across roofing and service businesses of all sizes. The service quality is strong and the reputation is solid, but there is no proactive way to reach new commercial accounts or property managers who would be ideal clients.
              </p>
              <div className="mt-6 pl-5 border-l-2 border-[#EF4444]/40">
                <p className="text-[#EF4444]/80 text-sm font-medium">Estimated monthly revenue left on the table by not running outbound: $30,000 or more</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#040810]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projected Before and After</h2>
              <p className="text-[#94A3B8] text-sm mb-10">
                Projections are based on benchmarks from similar outbound system implementations for service businesses.
              </p>

              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 border-b border-[#1E293B] bg-[#040810]">
                  <div className="p-4 text-[#94A3B8] text-sm font-medium">Metric</div>
                  <div className="p-4 text-center text-[#EF4444] text-sm font-semibold">Without Outbound</div>
                  <div className="p-4 text-center text-[#22C55E] text-sm font-semibold">Projected After 30 Days</div>
                </div>
                {beforeAfter.map((row, i) => (
                  <motion.div
                    key={row.metric}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="grid grid-cols-3 border-b border-[#1E293B] last:border-0"
                  >
                    <div className="p-4 text-[#94A3B8] text-sm">{row.metric}</div>
                    <div className="p-4 text-center text-[#EF4444]/70 text-sm font-medium">{row.before}</div>
                    <div className="p-4 text-center text-sm font-semibold" style={{ color: row.color }}>{row.after}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Standard 7-Day Implementation</h2>
              <p className="text-[#94A3B8] text-sm mb-10">This is our typical build-and-launch timeline for a service business outbound system.</p>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-[#22C55E] text-xs font-mono font-semibold">{item.day}</span>
                    </div>
                    <div className="flex-shrink-0 w-px bg-[#1E293B] relative">
                      <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#22C55E]" />
                    </div>
                    <div className="pb-6 flex-1">
                      <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#040810]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0F1E] border border-[#22C55E]/20 rounded-2xl p-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full text-[#22C55E] text-xs font-semibold uppercase tracking-widest mb-6">
                Representative Sample Quote
              </div>
              <Quote size={36} className="text-[#22C55E]/30 mx-auto mb-5" />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <blockquote className="text-[#E2E8F0] text-lg leading-relaxed mb-8">
                &ldquo;Before this system we had zero outbound. Everything came from referrals. Now we have a consistent pipeline of qualified leads reaching out to commercial property managers every week. We closed two accounts in the first month we never would have found on our own.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold">
                  R
                </div>
                <div className="text-left">
                  <div className="text-[#94A3B8] text-xs">Roofing company owner, Denver area (sample quote, demonstration only)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projected 30-Day Outcomes</h2>
              <p className="text-[#94A3B8] text-sm mb-8">Based on benchmarks from similar outbound system deployments for service businesses.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, text: "Projected 8-12 qualified calls per month from outbound (estimated 4-6x increase vs. referral-only baseline)" },
                  { icon: Clock, text: "Prospecting time projected to drop from 6-10 hours per week to under 1 hour reviewing campaign reports" },
                  { icon: Calendar, text: "Booking workflow eliminates manual scheduling so qualified leads get on the calendar automatically" },
                  { icon: Mail, text: "200+ personalized outreach emails sent per week with reply tracking and follow-up automation" },
                  { icon: Star, text: "Pipeline visibility improves as all leads, replies, and outcomes are tracked in one place" },
                  { icon: CheckCircle, text: "Estimated 8+ hours of manual prospecting work eliminated per week through full automation" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#040810] border border-[#1E293B] rounded-xl p-4">
                    <item.icon size={16} className="text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#CBD5E1] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-[#040810] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                See What This Could Look Like for Your Business
              </h2>
              <p className="text-[#94A3B8] mb-8">
                Book a free outbound audit and we will map out a custom implementation plan with realistic outcome projections specific to your niche, lead volume, and goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Book My Free Outbound Audit
                  <ArrowRight size={18} />
                </CTAButton>
                <CTAButton href="/demo" variant="outline" size="lg">
                  See the Demo
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
