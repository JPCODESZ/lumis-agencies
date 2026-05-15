"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, TrendingUp, Clock, Calendar,
  PhoneCall, Star, Quote, FlaskConical
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const beforeAfter = [
  { metric: "Lead response time", before: "3-4 hours avg.", after: "Under 60 seconds", color: "#0EA5E9" },
  { metric: "Lead contact rate", before: "34%", after: "81%", color: "#34D399" },
  { metric: "Monthly jobs booked", before: "38 jobs/mo", after: "61 jobs/mo", color: "#F59E0B" },
  { metric: "Missed call recovery", before: "~5%", after: "72%", color: "#A78BFA" },
  { metric: "Hours/week on follow-up", before: "18 hrs", after: "3 hrs", color: "#FB923C" },
];

const timeline = [
  { day: "Day 1", title: "Onboarding and Discovery", desc: "We map the client's current lead sources, review their qualification criteria, and capture their brand voice and service area details." },
  { day: "Day 2-3", title: "System Build", desc: "We configure the AI missed-call text back, website lead response, and a 5-step SMS nurture sequence using the client's actual pricing and service language." },
  { day: "Day 4", title: "Integration and Testing", desc: "We connect to the client's calendar and CRM, then run 40+ test conversations to ensure the AI handles edge cases correctly." },
  { day: "Day 5", title: "Client Review and Approval", desc: "The client reviews every message template, requests any adjustments, and gives the green light. Nothing goes live without their sign-off." },
  { day: "Day 7", title: "Go Live", desc: "The full system launches. In early results across similar implementations, qualified leads begin converting within the first 48 hours, including jobs worth $5,000-$10,000+." },
];

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0A0F1E] min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-[#060B14] border-b border-[#1E293B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full uppercase tracking-widest">
                  Example Implementation
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
                Example Roofing Automation Workflow: From 34% to 81% Lead Contact Rate
              </h1>

              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                This demonstration walks through a sample automation implementation for a mid-size roofing company. The scenario, workflow, and projected metrics are representative of the systems we build, illustrating the types of outcomes our clients can expect.
              </p>

              <div className="grid grid-cols-3 gap-6 p-6 bg-[#111827] border border-[#1E293B] rounded-2xl">
                {[
                  { label: "Projected additional jobs/mo", value: "+23", color: "#34D399" },
                  { label: "Estimated revenue uplift (mo 1)", value: "$41K", color: "#0EA5E9" },
                  { label: "Projected hours saved/week", value: "15", color: "#F59E0B" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-[#94A3B8] text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Situation */}
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
                In this sample scenario, a well-established roofing company is generating 45-55 inbound leads per month from Google Ads, their website, and referrals. The owner and office manager are regularly on job sites or handling active projects. By the time someone gets back to a new lead, it is often 3-4 hours later, and sometimes the next day.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                This pattern is common across roofing and HVAC businesses of all sizes. The service quality is strong, the reputation is solid, but inbound leads are slipping through the cracks before anyone has a chance to respond.
              </p>
              <div className="mt-6 pl-5 border-l-2 border-[#EF4444]/40">
                <p className="text-[#EF4444]/80 text-sm font-medium">Estimated monthly revenue loss from unconverted leads: $35,000-$60,000</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before / After Table */}
        <section className="py-16 bg-[#060B14]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Projected Before and After</h2>
              </div>
              <p className="text-[#94A3B8] text-sm mb-10">
                Projections are based on benchmarks observed across similar roofing automation deployments.
              </p>

              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 border-b border-[#1E293B] bg-[#0D1623]">
                  <div className="p-4 text-[#94A3B8] text-sm font-medium">Metric</div>
                  <div className="p-4 text-center text-[#EF4444] text-sm font-semibold">Before Automation</div>
                  <div className="p-4 text-center text-[#34D399] text-sm font-semibold">Projected After 30 Days</div>
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

        {/* Implementation Timeline */}
        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Standard 7-Day Implementation</h2>
              <p className="text-[#94A3B8] text-sm mb-10">This is our typical build-and-launch timeline for a roofing automation system.</p>
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
                      <span className="text-[#0EA5E9] text-xs font-mono font-semibold">{item.day}</span>
                    </div>
                    <div className="flex-shrink-0 w-px bg-[#1E293B] relative">
                      <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#0EA5E9]" />
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

        {/* Sample Client Perspective */}
        <section className="py-16 bg-[#060B14]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-[#0EA5E9]/20 rounded-2xl p-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full text-[#0EA5E9] text-xs font-semibold uppercase tracking-widest mb-6">
                Representative Client Perspective
              </div>
              <Quote size={36} className="text-[#0EA5E9]/30 mx-auto mb-5" />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <blockquote className="text-[#E2E8F0] text-lg leading-relaxed mb-8">
                &ldquo;We were losing leads every day because we couldn&apos;t respond fast enough. Now the AI texts back within a minute. We booked extra jobs in our first month just from leads we would have lost. It paid for itself many times over. Honestly, I wish I&apos;d done this two years ago.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center text-[#0EA5E9] font-bold">
                  R
                </div>
                <div className="text-left">
                  <div className="text-[#94A3B8] text-xs">Roofing company owner, Nashville area (representative example)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projected Results Summary */}
        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Projected 30-Day Outcomes</h2>
              <p className="text-[#94A3B8] text-sm mb-8">Based on benchmarks from similar automation implementations in the roofing industry.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, text: "Projected 61 jobs/mo vs. 38 pre-automation (estimated 61% increase)" },
                  { icon: Clock, text: "Lead response time projected to drop from 3.5 hrs to under 60 seconds" },
                  { icon: Calendar, text: "Calendar booked 2 weeks in advance based on similar deployments" },
                  { icon: PhoneCall, text: "Estimated 72% of missed calls recovered via AI text-back" },
                  { icon: Star, text: "Google review average projected to improve through post-job automation" },
                  { icon: CheckCircle, text: "Estimated 15 hours of manual follow-up work eliminated per week" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#111827] border border-[#1E293B] rounded-xl p-4">
                    <item.icon size={16} className="text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#CBD5E1] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#060B14] text-center">
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
                Book a free automation audit and we&apos;ll map out a custom implementation plan, with realistic outcome projections specific to your lead volume and current workflow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Book My Free Audit
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
