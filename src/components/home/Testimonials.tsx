"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Marcus Webb",
    title: "Owner",
    company: "Webb Roofing Solutions",
    location: "Nashville, TN",
    industry: "Roofing",
    quote:
      "We were losing leads every single day because we couldn't respond fast enough. Now the AI texts back within a minute. We booked 11 extra jobs in our first month just from leads we would have lost. It's paid for itself 20 times over.",
    result: "+11 jobs in month one",
    rating: 5,
    color: "#0EA5E9",
  },
  {
    name: "Darlene Kowalski",
    title: "Operations Manager",
    company: "Peak Climate HVAC",
    location: "Dallas, TX",
    industry: "HVAC",
    quote:
      "Our techs are always on jobs. Nobody was sitting at a desk answering calls. We had leads going cold for 3–4 hours. The AI system handles everything automatically now. Our contact rate went from 34% to over 80%.",
    result: "34% → 80% contact rate",
    rating: 5,
    color: "#F59E0B",
  },
  {
    name: "Ryan Castellano",
    title: "CEO",
    company: "Skyline Roofing Co.",
    location: "Phoenix, AZ",
    industry: "Roofing",
    quote:
      "I was skeptical at first. I didn't think customers would respond to an AI. But honestly, the messages sound completely natural. We've had customers book appointments and then compliment our 'team' on being so responsive. Nobody knows it's AI.",
    result: "87% lead response rate",
    rating: 5,
    color: "#34D399",
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
    <section className="py-24 bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Client Results"
            title="Real Owners. Real Numbers."
            subtitle="These aren't hypothetical results. These are actual outcomes from roofing and HVAC companies running our AI systems."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-7 flex flex-col hover:border-[#1E293B]/80 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-10"
                style={{ backgroundColor: t.color }}
              />

              {/* Quote icon */}
              <Quote size={24} className="text-[#1E293B] mb-4" />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote text */}
              <p className="text-[#CBD5E1] text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold mb-5 w-fit"
                style={{ backgroundColor: `${t.color}12`, color: t.color }}
              >
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#1E293B] pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: `${t.color}25`, color: t.color }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#94A3B8] text-xs">
                    {t.title}, {t.company} · {t.location}
                  </div>
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
      </div>
    </section>
  );
}
