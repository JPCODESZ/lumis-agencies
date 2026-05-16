"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    attribution: "Roofing company owner, Denver area",
    industry: "Roofing",
    quote:
      "Before this system we had no outbound at all. Everything came from referrals. Now we have a consistent pipeline of targeted leads coming in every week. We closed two commercial accounts in the first month.",
    result: "2 commercial accounts, month one",
    rating: 5,
    color: "#22C55E",
  },
  {
    attribution: "HVAC operations manager, Austin area",
    industry: "HVAC",
    quote:
      "The personalization is what surprised me. These emails do not read like bulk spam. They reference the specific business and what we offer. Our reply rate is higher than anything we have tried before.",
    result: "Reply rate significantly above average",
    rating: 5,
    color: "#4ADE80",
  },
  {
    attribution: "Landscaping company owner, Phoenix area",
    industry: "Landscaping",
    quote:
      "I was spending hours a week trying to find and contact new commercial property leads. Now the system does it all. I just show up to the calls that are already booked on my calendar.",
    result: "10+ qualified calls booked in 30 days",
    rating: 5,
    color: "#F59E0B",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Sample Results"
            title="What Service Businesses Say"
            subtitle="Representative feedback based on the types of outcomes these outbound systems are built to deliver."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.attribution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-7 flex flex-col transition-colors duration-300 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-10"
                style={{ backgroundColor: t.color }}
              />

              <Quote size={24} className="text-[#1E293B] mb-4" />
              <StarRating rating={t.rating} />

              <p className="text-[#CBD5E1] text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold mb-5 w-fit"
                style={{ backgroundColor: `${t.color}12`, color: t.color }}
              >
                {t.result}
              </div>

              <div className="flex items-center gap-3 border-t border-[#1E293B] pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: `${t.color}25`, color: t.color }}
                >
                  {t.industry.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-[#94A3B8] text-sm">{t.attribution}</div>
                </div>
                <div
                  className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ color: t.color, backgroundColor: `${t.color}10` }}
                >
                  {t.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[#475569] text-xs mt-10">
          Sample results. Illustrative examples based on the types of outcomes these outbound systems are built to support.
        </p>
      </div>
    </section>
  );
}
