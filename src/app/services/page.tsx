"use client";

import { motion } from "framer-motion";
import {
  PhoneMissed, Globe, MessageSquare, Filter, Calendar,
  LayoutDashboard, Star, RefreshCw, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const services = [
  {
    icon: PhoneMissed,
    title: "AI Missed-Call Text Back",
    description:
      "When a customer calls and you can't answer, the AI sends a personalized text within 30 seconds, keeping the conversation alive before they call a competitor.",
    benefit: "Never lose a lead to voicemail again",
    detail: "Works on your main business line. Customizable message. Triggers on every missed call, 24/7.",
    color: "#0EA5E9",
  },
  {
    icon: Globe,
    title: "Website Lead Response",
    description:
      "Every form submission triggers an instant AI follow-up sequence, engaging leads before they've had time to check another company.",
    benefit: "3x higher contact rates on web leads",
    detail: "Integrates with any web form. Fires within 60 seconds. Works with your existing website.",
    color: "#38BDF8",
  },
  {
    icon: MessageSquare,
    title: "Instant SMS Follow-Up",
    description:
      "Automated SMS sequences nurture cold or unresponsive leads with strategically timed messages until they're ready to book or opt out.",
    benefit: "Revive leads you'd otherwise forget",
    detail: "3-7 step sequences. Smart delays. Stops automatically when lead responds.",
    color: "#F59E0B",
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description:
      "AI asks targeted questions to separate serious buyers from window shoppers, saving your team hours of back-and-forth with unqualified prospects.",
    benefit: "Only talk to ready-to-buy prospects",
    detail: "Custom qualification criteria. Scores leads by urgency and fit. Flags hot leads instantly.",
    color: "#A78BFA",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Qualified leads get a booking link or direct calendar slot. No phone tag, no scheduling back-and-forth, no manual work required.",
    benefit: "Fill your calendar on autopilot",
    detail: "Integrates with Google Calendar, ServiceTitan, Jobber, HouseCall Pro. Sends confirmation texts.",
    color: "#34D399",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Pipeline Automation",
    description:
      "Every lead, conversation note, and follow-up task is automatically logged and tracked in your pipeline so nothing slips through the cracks.",
    benefit: "Nothing falls through the cracks",
    detail: "Works with GoHighLevel, HubSpot, or a custom pipeline. Auto-updates stages. Assigns tasks.",
    color: "#FB923C",
  },
  {
    icon: Star,
    title: "Review Request Automation",
    description:
      "After a completed job, AI sends a personalized review request at the perfect moment: when satisfaction is highest and the job is fresh.",
    benefit: "More 5-star Google reviews, less effort",
    detail: "Timed to job completion. Links directly to your Google Business profile. Tracks response rate.",
    color: "#FBBF24",
  },
  {
    icon: RefreshCw,
    title: "Old Lead Reactivation",
    description:
      "We run targeted campaigns on your dormant leads with AI-crafted messages designed to bring cold prospects back to life. Revenue from leads you already paid for.",
    benefit: "Generate revenue from your existing lead list",
    detail: "Works on leads 30 days to 2 years old. Custom messaging by lead source. Full reporting.",
    color: "#F472B6",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0EA5E9]/6 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Our Services"
                title="Everything You Need to Capture and Convert More Leads"
                subtitle="Eight automation systems built for roofing and HVAC companies, deployed, managed, and optimized."
              />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-[#060B14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 group"
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

        {/* CTA */}
        <section className="py-24 bg-[#0A0F1E] text-center">
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
                Book a free audit and we'll show you which services will have the biggest impact on your business.
              </p>
              <CTAButton href="/contact" variant="primary" size="lg">
                Book My Free Audit
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
