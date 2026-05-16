"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, RotateCcw, CheckCircle, Clock, Calendar,
  ArrowRight, Database, Target, Mail, MessageSquare,
  Home, Thermometer, Flower2, Car
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

type OutboundStep = {
  label: string;
  detail: string;
  sub: string;
  delay: number;
};

const scenarios = {
  roofing: {
    label: "Roofing",
    icon: Home,
    color: "#22C55E",
    niche: "Roofing companies, Denver CO",
    decision_maker: "Mike Torres, Owner",
    email: "mike@apexroofing.com",
    company: "Apex Roofing Supply Co.",
    email_preview: "Hi Mike, noticed Apex Roofing has been expanding commercial work in the Denver area. We help roofing companies land more commercial contracts through targeted outbound. Would a quick call make sense this week?",
    reply: "Hey, yeah I would be open to a quick chat. What does Tuesday look like for you?",
    booked: "Tue May 20, 2:00 PM - Discovery Call",
    steps: [
      { label: "Niche targeted", detail: "Roofing companies, Denver metro", sub: "ICP match confirmed", delay: 0 },
      { label: "247 companies found", detail: "Apex Roofing Supply Co.", sub: "Revenue: $2M-10M range", delay: 1400 },
      { label: "Decision maker enriched", detail: "Mike Torres, Owner", sub: "mike@apexroofing.com verified", delay: 2800 },
      { label: "Icebreaker generated", detail: "Personalized email written by AI", sub: "References their commercial expansion", delay: 4200 },
      { label: "Email sent", detail: "Sequence step 1 delivered", sub: "Open rate: tracking active", delay: 5600 },
      { label: "Reply received", detail: "Positive response from Mike", sub: "Flagged as qualified lead", delay: 7000 },
      { label: "Call booked", detail: "Tue May 20, 2:00 PM", sub: "Added to CRM pipeline", delay: 8400 },
    ] as OutboundStep[],
  },
  hvac: {
    label: "HVAC",
    icon: Thermometer,
    color: "#4ADE80",
    niche: "HVAC companies, Austin TX",
    decision_maker: "David Torres, Owner",
    email: "david@proairhvac.com",
    company: "ProAir HVAC Solutions",
    email_preview: "Hi David, came across ProAir HVAC while researching commercial HVAC providers in Austin. We help HVAC companies land more commercial service contracts through a targeted outbound system. Worth a quick call?",
    reply: "Interesting. We have been trying to grow our commercial accounts. Can we talk Thursday?",
    booked: "Thu May 22, 10:00 AM - Discovery Call",
    steps: [
      { label: "Niche targeted", detail: "HVAC companies, Austin TX", sub: "ICP match confirmed", delay: 0 },
      { label: "183 companies found", detail: "ProAir HVAC Solutions", sub: "Revenue: $1M-5M range", delay: 1400 },
      { label: "Decision maker enriched", detail: "David Torres, Owner", sub: "david@proairhvac.com verified", delay: 2800 },
      { label: "Icebreaker generated", detail: "Personalized email written by AI", sub: "References their commercial focus", delay: 4200 },
      { label: "Email sent", detail: "Sequence step 1 delivered", sub: "Open rate: tracking active", delay: 5600 },
      { label: "Reply received", detail: "Positive response from David", sub: "Flagged as qualified lead", delay: 7000 },
      { label: "Call booked", detail: "Thu May 22, 10:00 AM", sub: "Added to CRM pipeline", delay: 8400 },
    ] as OutboundStep[],
  },
  landscaping: {
    label: "Landscaping",
    icon: Flower2,
    color: "#F59E0B",
    niche: "Landscaping companies, Phoenix AZ",
    decision_maker: "Sarah Kim, Owner",
    email: "sarah@greenscapepro.com",
    company: "GreenScape Pro Landscaping",
    email_preview: "Hi Sarah, saw GreenScape Pro has been working with HOA properties in the Phoenix area. We help landscaping companies land more commercial and HOA contracts through targeted outreach. Open to a quick conversation?",
    reply: "Yes! We are always looking for more HOA accounts. Let us talk next week.",
    booked: "Mon May 19, 11:00 AM - Discovery Call",
    steps: [
      { label: "Niche targeted", detail: "Landscaping companies, Phoenix AZ", sub: "ICP match confirmed", delay: 0 },
      { label: "312 companies found", detail: "GreenScape Pro Landscaping", sub: "HOA and commercial focus", delay: 1400 },
      { label: "Decision maker enriched", detail: "Sarah Kim, Owner", sub: "sarah@greenscapepro.com verified", delay: 2800 },
      { label: "Icebreaker generated", detail: "Personalized email written by AI", sub: "References their HOA work", delay: 4200 },
      { label: "Email sent", detail: "Sequence step 1 delivered", sub: "Open rate: tracking active", delay: 5600 },
      { label: "Reply received", detail: "Positive response from Sarah", sub: "Flagged as qualified lead", delay: 7000 },
      { label: "Call booked", detail: "Mon May 19, 11:00 AM", sub: "Added to CRM pipeline", delay: 8400 },
    ] as OutboundStep[],
  },
  detailing: {
    label: "Detailing",
    icon: Car,
    color: "#A78BFA",
    niche: "Auto detailing shops, Dallas TX",
    decision_maker: "James Park, Owner",
    email: "james@elitedetailpro.com",
    company: "Elite Detail Pro",
    email_preview: "Hi James, noticed Elite Detail Pro has been growing in the Dallas area. We help detailing businesses land fleet and dealership accounts through targeted outreach. Would a quick call be worth your time?",
    reply: "Fleet accounts are exactly what we are trying to target. What does Friday look like?",
    booked: "Fri May 23, 3:00 PM - Discovery Call",
    steps: [
      { label: "Niche targeted", detail: "Auto detailing shops, Dallas TX", sub: "ICP match confirmed", delay: 0 },
      { label: "129 companies found", detail: "Elite Detail Pro", sub: "Fleet and premium focus", delay: 1400 },
      { label: "Decision maker enriched", detail: "James Park, Owner", sub: "james@elitedetailpro.com verified", delay: 2800 },
      { label: "Icebreaker generated", detail: "Personalized email written by AI", sub: "References fleet account growth", delay: 4200 },
      { label: "Email sent", detail: "Sequence step 1 delivered", sub: "Open rate: tracking active", delay: 5600 },
      { label: "Reply received", detail: "Positive response from James", sub: "Flagged as qualified lead", delay: 7000 },
      { label: "Call booked", detail: "Fri May 23, 3:00 PM", sub: "Added to CRM pipeline", delay: 8400 },
    ] as OutboundStep[],
  },
};

type ScenarioKey = keyof typeof scenarios;

const pipelineColumns = [
  { id: "targeted", label: "Niche Targeted", color: "#94A3B8" },
  { id: "enriched", label: "Lead Enriched", color: "#22C55E" },
  { id: "contacted", label: "Outreach Sent", color: "#4ADE80" },
  { id: "booked", label: "Call Booked", color: "#22C55E" },
];

export default function DemoPage() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("roofing");
  const [playing, setPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<OutboundStep[]>([]);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const scenario = scenarios[activeScenario];

  const reset = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setPlaying(false);
    setCurrentStep(0);
    setVisibleSteps([]);
    setPipelineStep(0);
    setCompleted(false);
    setShowEmail(false);
    setShowReply(false);
  };

  const switchScenario = (s: ScenarioKey) => {
    reset();
    setActiveScenario(s);
  };

  useEffect(() => {
    if (!playing) return;

    const steps = scenario.steps;
    timersRef.current = [];

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, step]);
        setCurrentStep(i + 1);
        if (i >= 3) setPipelineStep(Math.min(i - 2, 3));
        if (i === 3) setShowEmail(true);
        if (i === 5) setShowReply(true);
      }, step.delay + 500);
      timersRef.current.push(t);
    });

    const endTimer = setTimeout(() => {
      setCompleted(true);
      setPlaying(false);
    }, steps[steps.length - 1].delay + 2000);
    timersRef.current.push(endTimer);

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [playing, activeScenario, scenario.steps]);

  const progressSteps = [
    "Niche Targeted",
    "Leads Found",
    "Enriched",
    "Email Sent",
    "Reply Tracked",
    "Call Booked",
  ];

  const Icon = scenario.icon;

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#040810] min-h-screen">
        <section className="py-16 bg-[#040810] border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-4 uppercase tracking-widest">
                Interactive Demo
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Watch the Outbound System in Action
              </h1>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
                Select a niche below. Watch how AI finds targeted companies, enriches decision-maker data, writes personalized outreach, and books a qualified call. No manual work involved.
              </p>

              <div className="inline-flex items-center gap-2 p-1.5 bg-[#0A0F1E] border border-[#1E293B] rounded-2xl">
                {(Object.keys(scenarios) as ScenarioKey[]).map((key) => {
                  const s = scenarios[key];
                  const SIcon = s.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => switchScenario(key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        activeScenario === key
                          ? "bg-[#1F2937] text-white"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <SIcon size={14} style={{ color: activeScenario === key ? s.color : undefined }} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 overflow-x-auto pb-2">
            {progressSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    i < currentStep
                      ? "bg-[#22C55E] text-white"
                      : i === currentStep && playing
                      ? "bg-[#22C55E]/30 text-[#22C55E] border border-[#22C55E] animate-pulse"
                      : "bg-[#0A0F1E] text-[#94A3B8] border border-[#1E293B]"
                  }`}
                >
                  {i < currentStep ? <CheckCircle size={13} /> : i + 1}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                    i < currentStep ? "text-[#22C55E]" : i === currentStep && playing ? "text-white" : "text-[#475569]"
                  }`}
                >
                  {step}
                </span>
                {i < progressSteps.length - 1 && (
                  <div
                    className={`w-5 sm:w-8 h-px mx-1 transition-colors duration-500 ${
                      i < currentStep - 1 ? "bg-[#22C55E]" : "bg-[#1E293B]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left: Niche Card + Controls */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    <span className="text-[#22C55E] text-xs font-medium">Campaign Target</span>
                    <span className="ml-auto text-[#94A3B8] text-xs flex items-center gap-1">
                      <Clock size={11} /> Live
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${scenario.color}20` }}>
                      <Icon size={18} style={{ color: scenario.color }} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{scenario.label} Companies</div>
                      <div className="text-[#94A3B8] text-xs">{scenario.niche}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Target company</span>
                      <span className="text-white font-medium text-right max-w-[55%] text-xs">{scenario.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Contact</span>
                      <span className="text-white font-medium text-xs">{scenario.decision_maker}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Email</span>
                      <span className="text-white font-medium text-xs truncate max-w-[50%]">{scenario.email}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-5">
                <div className="text-[#94A3B8] text-xs mb-2 uppercase tracking-wide">System Status</div>
                <div className={`text-2xl font-bold ${playing || completed ? "text-[#22C55E]" : "text-[#1E293B]"}`}>
                  {playing ? "Running..." : completed ? "Campaign Live" : "Ready"}
                </div>
                <div className={`text-xs mt-1 ${playing || completed ? "text-[#22C55E]" : "text-[#475569]"}`}>
                  {playing || completed ? "Outbound system active" : "Press play to start"}
                </div>
              </div>

              <button
                onClick={() => {
                  if (!playing && !completed) setPlaying(true);
                  else if (completed) reset();
                }}
                disabled={playing}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  playing
                    ? "bg-[#0A0F1E] text-[#475569] border border-[#1E293B] cursor-not-allowed"
                    : completed
                    ? "bg-[#1F2937] text-white hover:bg-[#374151] border border-[#1E293B]"
                    : "bg-[#22C55E] text-white hover:bg-[#16A34A] shadow-lg shadow-[#22C55E]/20"
                }`}
              >
                {playing ? (
                  <><span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />AI Running...</>
                ) : completed ? (
                  <><RotateCcw size={15} />Reset Demo</>
                ) : (
                  <><Play size={15} fill="white" />Play Demo</>
                )}
              </button>
            </div>

            {/* Center: Outbound Pipeline Steps */}
            <div>
              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col" style={{ minHeight: 520 }}>
                <div className="flex items-center gap-3 p-4 border-b border-[#1E293B]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${scenario.color}25` }}
                  >
                    <Database size={15} style={{ color: scenario.color }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Outbound Pipeline</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: scenario.color }} />
                      <span className="text-xs" style={{ color: scenario.color }}>
                        {playing ? "Processing" : completed ? "Complete" : "Idle"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-3 overflow-y-auto" style={{ maxHeight: 420 }}>
                  <AnimatePresence>
                    {visibleSteps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-4 p-3 bg-[#040810] rounded-xl border border-[#1E293B]"
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${scenario.color}20` }}
                        >
                          <CheckCircle size={13} style={{ color: scenario.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium">{step.label}</div>
                          <div className="text-[#94A3B8] text-xs truncate">{step.detail}</div>
                          <div className="text-[#475569] text-[10px]">{step.sub}</div>
                        </div>
                      </motion.div>
                    ))}
                    {playing && visibleSteps.length < scenario.steps.length && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 p-3 bg-[#040810] rounded-xl border border-[#1E293B]"
                      >
                        <div className="flex gap-1 pl-2">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className="w-2 h-2 rounded-full animate-bounce"
                              style={{ backgroundColor: scenario.color, animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                        <span className="text-[#475569] text-xs">Processing...</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!playing && visibleSteps.length === 0 && (
                    <div className="h-full flex items-center justify-center text-center py-10">
                      <div>
                        <Target size={40} className="text-[#1E293B] mx-auto mb-3" />
                        <p className="text-[#475569] text-sm">Press Play Demo to watch the outbound system run</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Email + Pipeline + Booking */}
            <div className="space-y-4">
              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-5">
                <div className="text-[#94A3B8] text-xs uppercase tracking-wide mb-4">Lead Pipeline</div>
                <div className="space-y-2">
                  {pipelineColumns.map((col, i) => (
                    <div
                      key={col.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 border ${
                        i === pipelineStep ? "border-opacity-40" : "border-transparent"
                      }`}
                      style={
                        i === pipelineStep
                          ? { borderColor: col.color, backgroundColor: `${col.color}08` }
                          : { borderColor: "transparent" }
                      }
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: i <= pipelineStep ? col.color : "#1E293B" }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: i <= pipelineStep ? col.color : "#475569" }}
                      >
                        {col.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {showEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0A0F1E] border border-[#1E293B] rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Mail size={13} className="text-[#22C55E]" />
                      <span className="text-[#94A3B8] text-xs uppercase tracking-wide">Email Generated</span>
                    </div>
                    <div className="text-white text-xs font-medium mb-1">To: {scenario.email}</div>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">{scenario.email_preview}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showReply && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#22C55E]/8 border border-[#22C55E]/30 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare size={13} className="text-[#22C55E]" />
                      <span className="text-[#22C55E] text-xs font-medium uppercase tracking-wide">Positive Reply</span>
                    </div>
                    <p className="text-[#CBD5E1] text-xs leading-relaxed italic">&ldquo;{scenario.reply}&rdquo;</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {completed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-[#22C55E]" />
                      <span className="text-[#22C55E] font-semibold text-sm">Call Booked</span>
                    </div>
                    <div className="text-white text-sm font-medium">{scenario.decision_maker}</div>
                    <div className="text-[#94A3B8] text-xs mt-0.5">{scenario.booked}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-16 text-center border-t border-[#1E293B] pt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want This Running for Your Business?
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
              We build and launch this exact outbound system for service businesses in 7 business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="primary" size="lg">
                Book My Free Outbound Audit
                <ArrowRight size={18} />
              </CTAButton>
              <CTAButton href="/pricing" variant="outline" size="lg">
                View Pricing
              </CTAButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
