"use client";

import { motion } from "framer-motion";
import { Database, Mail, MessageSquare, LayoutDashboard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    icon: Database,
    title: "Lead List Building",
    body: "AI researches your niche and builds a targeted list of qualified local businesses, including company name, size, location, and fit score.",
    metric: "500+",
    metricLabel: "leads per campaign",
  },
  {
    icon: Mail,
    title: "Lead Enrichment",
    body: "Every lead gets enriched with decision-maker name, verified email, and business context so outreach lands in the right inbox with the right message.",
    metric: "98%",
    metricLabel: "delivery accuracy",
  },
  {
    icon: MessageSquare,
    title: "Personalized Outreach",
    body: "AI writes custom icebreakers for each prospect based on their business. No generic templates. Every email reads like it was written by hand.",
    metric: "3-5x",
    metricLabel: "higher reply rate",
  },
  {
    icon: LayoutDashboard,
    title: "Pipeline Automation",
    body: "Replies get tracked, qualified leads get booked, and every touchpoint is logged in your CRM. Nothing slips. No manual follow-up required.",
    metric: "Zero",
    metricLabel: "leads lost to follow-up",
  },
];

export default function SolutionSection() {
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
            badge="The Solution"
            title="AI That Finds, Reaches, and Books Leads For You"
            subtitle="We build and manage a complete AI outbound growth system for your service business, from lead research to qualified calls on your calendar."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-6 hover:border-[#22C55E]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mb-5">
                <item.icon size={20} className="text-[#22C55E]" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{item.body}</p>

              <div className="border-t border-[#1E293B] pt-4">
                <div className="flex items-center gap-2">
                  <div className="text-[#22C55E] font-bold text-xl">{item.metric}</div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                </div>
                <div className="text-[#94A3B8] text-xs">{item.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
