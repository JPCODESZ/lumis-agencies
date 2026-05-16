"use client";

import { motion } from "framer-motion";
import {
  Database, Search, Mail, RefreshCw, LayoutDashboard,
  Calendar, BarChart2, Zap, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    icon: Search,
    title: "AI Lead List Building",
    description:
      "We research your exact niche and build a targeted database of qualified local businesses. Every lead is filtered by industry, location, company size, and fit score before entering your system.",
    benefit: "500+ targeted leads per campaign",
    detail: "Custom ICP research. Niche-specific databases. Location and size filtering. Updated weekly.",
    color: "#22C55E",
  },
  {
    icon: Database,
    title: "Lead Enrichment",
    description:
      "Every company in your list gets matched to the right decision-maker. We pull verified owner or manager emails, LinkedIn profiles, and business context so outreach lands in the right inbox.",
    benefit: "Verified decision-maker contact data",
    detail: "Owner and manager identification. Email verification. Business context attached. CRM-ready format.",
    color: "#4ADE80",
  },
  {
    icon: Mail,
    title: "Personalized Cold Email Systems",
    description:
      "AI writes a custom icebreaker for each prospect based on their specific business. No generic templates. Every email reads like it was written by hand and sent one at a time.",
    benefit: "3-5x higher reply rate vs generic outreach",
    detail: "Business-specific icebreakers. Multi-step sequences. Smart send scheduling. Deliverability optimized.",
    color: "#F59E0B",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-Up",
    description:
      "Prospects who do not reply on the first email get a smart follow-up sequence that runs automatically. Follow-up stops the moment a lead responds, so nothing ever feels spammy.",
    benefit: "2-3x more replies from follow-up alone",
    detail: "3 to 7 step sequences. Smart delays. Auto-stops on reply. Tone varies per step.",
    color: "#A78BFA",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Pipeline Automation",
    description:
      "Every lead, reply, and outcome is automatically logged and tracked in your pipeline. Stages update in real time so your team always knows where each prospect stands without doing manual data entry.",
    benefit: "Zero leads lost to manual tracking gaps",
    detail: "Works with GoHighLevel, HubSpot, and custom pipelines. Auto-updates stages. Assigns tasks.",
    color: "#FB923C",
  },
  {
    icon: Zap,
    title: "Lead Reactivation",
    description:
      "We run targeted AI outreach campaigns on your cold or dormant leads with messaging designed to bring them back. This turns contacts you already paid for into pipeline revenue.",
    benefit: "Revenue from leads you already own",
    detail: "Works on leads 30 days to 2 years old. Custom messaging by lead source. Full reporting included.",
    color: "#F472B6",
  },
  {
    icon: Calendar,
    title: "Booking Workflow Setup",
    description:
      "Qualified leads get routed directly to a booking flow so interested prospects can get on your calendar without back-and-forth. No phone tag, no manual scheduling, no delays.",
    benefit: "Fill your calendar with qualified calls",
    detail: "Integrates with Calendly, Google Calendar, and GoHighLevel. Sends confirmation and reminders.",
    color: "#34D399",
  },
  {
    icon: BarChart2,
    title: "Reporting and Optimization",
    description:
      "We track every key metric across your outbound system including open rates, reply rates, booked calls, and pipeline value. We review and optimize weekly to keep performance improving.",
    benefit: "Clear data, continuous improvement",
    detail: "Weekly reporting dashboard. Reply analysis. A/B testing on subject lines. Strategy calls included.",
    color: "#22C55E",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-[#040810] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#22C55E]/6 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Our Services"
                title="Everything You Need to Generate and Convert Outbound Leads"
                subtitle="Eight systems built for service businesses, deployed, managed, and optimized by our team."
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                  className="bg-[#040810] border border-[#1E293B] rounded-2xl p-8 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${svc.color}15` }}
                    >
                      <svc.icon size={22} style={{ color: svc.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2">{svc.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{svc.description}</p>

                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4"
                        style={{ backgroundColor: `${svc.color}10`, color: svc.color }}
                      >
                        <ArrowRight size={12} />
                        {svc.benefit}
                      </div>

                      <p className="text-[#475569] text-xs leading-relaxed">{svc.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#040810] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Put These Systems to Work?
              </h2>
              <p className="text-[#94A3B8] mb-8">
                Book a free outbound audit and we will show you which services will have the biggest impact on your business.
              </p>
              <CTAButton href="/contact" variant="primary" size="lg">
                Book My Free Outbound Audit
                <ArrowRight size={18} />
              </CTAButton>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
