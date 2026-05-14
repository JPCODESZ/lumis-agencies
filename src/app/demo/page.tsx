"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, RotateCcw, CheckCircle, Clock, Calendar,
  ArrowRight, MessageSquare, User, Home, Thermometer
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

type Message = {
  from: "ai" | "lead";
  text: string;
  delay: number;
};

const scenarios = {
  roofing: {
    label: "Roofing: Storm Damage",
    icon: Home,
    color: "#0EA5E9",
    lead: {
      name: "Sarah Johnson",
      phone: "(555) 847-2910",
      type: "Roofing: Storm Damage",
      source: "Website Form",
      location: "Nashville, TN",
    },
    company: "Apex Roofing",
    messages: [
      { from: "lead" as const, text: "Hi, I'm interested in getting a roof inspection after last night's storm. The damage looks pretty bad.", delay: 0 },
      { from: "ai" as const, text: "Hi Sarah! This is Mike from Apex Roofing. Thanks for reaching out. Sorry to hear about the storm damage. We specialize in helping homeowners through exactly this. Are you looking to schedule a free inspection?", delay: 1200 },
      { from: "lead" as const, text: "Yes please. A big section near the chimney looks really damaged.", delay: 2400 },
      { from: "ai" as const, text: "Got it. Chimney area damage is very common after hail storms. Quick question: is your home owner-occupied, and roughly how old is your roof?", delay: 3600 },
      { from: "lead" as const, text: "Yes I own it. The roof is about 12 years old.", delay: 4800 },
      { from: "ai" as const, text: "Perfect. One more: have you already filed an insurance claim, or are you still at the inspection stage?", delay: 6000 },
      { from: "lead" as const, text: "Haven't filed yet. Wasn't sure if it was worth it.", delay: 7200 },
      { from: "ai" as const, text: "It's definitely worth getting a professional assessment first. That's the smart move. I have Thursday May 15th at 2:00 PM or Friday May 16th at 10:00 AM available. Which works better for you?", delay: 8400 },
      { from: "lead" as const, text: "Thursday at 2pm works perfectly.", delay: 9600 },
      { from: "ai" as const, text: "✅ You're all set! Your free roofing inspection is confirmed for Thursday, May 15th at 2:00 PM. You'll receive a confirmation text shortly and a reminder 24 hours before. Is there anything else I can help with?", delay: 10800 },
    ],
    booked: "Thu, May 15 · 2:00 PM | Free Roofing Inspection",
  },
  hvac: {
    label: "HVAC: Emergency Repair",
    icon: Thermometer,
    color: "#F59E0B",
    lead: {
      name: "David Torres",
      phone: "(555) 293-7741",
      type: "HVAC: Emergency Repair",
      source: "Missed Call",
      location: "Austin, TX",
    },
    company: "Summit HVAC",
    messages: [
      { from: "lead" as const, text: "My AC unit stopped working. It's 95 degrees outside and I have two young kids at home. I need help today if possible.", delay: 0 },
      { from: "ai" as const, text: "Hi David! This is Summit HVAC. Sorry you're dealing with this, especially in this heat. We handle emergency calls and want to get you sorted today. Can I ask: is the unit completely off, or is it running but not cooling?", delay: 1200 },
      { from: "lead" as const, text: "It's running but just blowing hot air. Has been like this since this morning.", delay: 2400 },
      { from: "ai" as const, text: "That narrows it down. Likely a refrigerant issue or a failed capacitor, both of which our techs can diagnose and often fix same-day. Is the unit a central system, and roughly how old is it?", delay: 3600 },
      { from: "lead" as const, text: "Yes central, it's about 7 years old.", delay: 4800 },
      { from: "ai" as const, text: "Good. A 7-year-old unit is very much worth repairing. Are you the homeowner, and is there any time today you're NOT available?", delay: 6000 },
      { from: "lead" as const, text: "Yes I own it. I'm home all day, just need someone as soon as possible.", delay: 7200 },
      { from: "ai" as const, text: "Understood. I have a technician available today between 1:00–3:00 PM. They'll call 30 minutes before arrival. Does that work?", delay: 8400 },
      { from: "lead" as const, text: "Yes please, that would be amazing.", delay: 9600 },
      { from: "ai" as const, text: "✅ Confirmed! A Summit HVAC technician will be at your home today, 1:00–3:00 PM. You'll get a text when they're 30 minutes out. Service call is $89, applied toward any repair. Stay cool. We've got you covered.", delay: 10800 },
    ],
    booked: "Today · 1:00–3:00 PM | Emergency AC Repair",
  },
};

const pipelineColumns = [
  { id: "new", label: "New Leads", color: "#94A3B8" },
  { id: "contacted", label: "Contacted", color: "#0EA5E9" },
  { id: "qualified", label: "Qualified", color: "#A78BFA" },
  { id: "booked", label: "Booked", color: "#34D399" },
];

const followUps = [
  { label: "Confirmation text", time: "Sent immediately", done: true },
  { label: "24-hour reminder", time: "Day before appointment", done: false },
  { label: "Post-visit follow-up", time: "Same evening", done: false },
  { label: "Review request", time: "2 days after", done: false },
];

export default function DemoPage() {
  const [activeScenario, setActiveScenario] = useState<"roofing" | "hvac">("roofing");
  const [playing, setPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const scenario = scenarios[activeScenario];

  const reset = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setPlaying(false);
    setCurrentStep(0);
    setVisibleMessages([]);
    setPipelineStep(0);
    setCompleted(false);
  };

  const switchScenario = (s: "roofing" | "hvac") => {
    reset();
    setActiveScenario(s);
  };

  useEffect(() => {
    if (!playing) return;

    const msgs = scenario.messages;
    timersRef.current = [];

    msgs.forEach((msg, i) => {
      const t = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
        setCurrentStep(i + 1);
        if (i >= 6) setPipelineStep(Math.min(i - 5, 3));
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, msg.delay + 500);
      timersRef.current.push(t);
    });

    const endTimer = setTimeout(() => {
      setCompleted(true);
      setPlaying(false);
    }, msgs[msgs.length - 1].delay + 2000);
    timersRef.current.push(endTimer);

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [playing, activeScenario, scenario.messages]);

  const steps = [
    "Lead Submitted",
    "AI Responds",
    "AI Qualifies",
    "Appt. Booked",
    "In Pipeline",
    "Follow-ups Set",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0A0F1E] min-h-screen">
        {/* Header */}
        <section className="py-16 bg-[#060B14] border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full mb-4 uppercase tracking-widest">
                Interactive Demo
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Watch the AI System in Action
              </h1>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
                Select a scenario below. Watch how the AI responds, qualifies, and books an appointment automatically. No human involved.
              </p>

              {/* Scenario Tabs */}
              <div className="inline-flex items-center gap-2 p-1.5 bg-[#111827] border border-[#1E293B] rounded-2xl">
                {(["roofing", "hvac"] as const).map((key) => {
                  const s = scenarios[key];
                  const Icon = s.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => switchScenario(key)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        activeScenario === key
                          ? "bg-[#1F2937] text-white"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <Icon size={15} style={{ color: activeScenario === key ? s.color : undefined }} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Step Progress */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    i < currentStep
                      ? "bg-[#0EA5E9] text-white"
                      : i === currentStep && playing
                      ? "bg-[#0EA5E9]/30 text-[#0EA5E9] border border-[#0EA5E9] animate-pulse"
                      : "bg-[#111827] text-[#94A3B8] border border-[#1E293B]"
                  }`}
                >
                  {i < currentStep ? <CheckCircle size={13} /> : i + 1}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                    i < currentStep ? "text-[#0EA5E9]" : i === currentStep && playing ? "text-white" : "text-[#475569]"
                  }`}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`w-5 sm:w-8 h-px mx-1 transition-colors duration-500 ${
                      i < currentStep - 1 ? "bg-[#0EA5E9]" : "bg-[#1E293B]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left: Lead Card + Controls */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">New Lead</span>
                    <span className="ml-auto text-[#94A3B8] text-xs flex items-center gap-1">
                      <Clock size={11} /> Just now
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center">
                      <User size={18} className="text-[#94A3B8]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{scenario.lead.name}</div>
                      <div className="text-[#94A3B8] text-xs">{scenario.lead.phone}</div>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Type</span>
                      <span className="text-white font-medium text-right max-w-[55%]">{scenario.lead.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Source</span>
                      <span className="text-white font-medium">{scenario.lead.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94A3B8]">Location</span>
                      <span className="text-white font-medium">{scenario.lead.location}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Response timer */}
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
                <div className="text-[#94A3B8] text-xs mb-2 uppercase tracking-wide">AI Response Time</div>
                <div className={`text-3xl font-bold ${playing || completed ? "text-[#0EA5E9]" : "text-[#1E293B]"}`}>
                  {playing || completed ? "47s" : "--"}
                </div>
                <div className={`text-xs mt-1 ${playing || completed ? "text-emerald-400" : "text-[#475569]"}`}>
                  {playing || completed ? "↑ Industry avg: 4.2 hours" : "Press play to start"}
                </div>
              </div>

              {/* Controls */}
              <button
                onClick={() => {
                  if (!playing && !completed) setPlaying(true);
                  else if (completed) reset();
                }}
                disabled={playing}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  playing
                    ? "bg-[#111827] text-[#475569] border border-[#1E293B] cursor-not-allowed"
                    : completed
                    ? "bg-[#1F2937] text-white hover:bg-[#374151] border border-[#1E293B]"
                    : "bg-[#0EA5E9] text-white hover:bg-[#0284C7] shadow-lg shadow-[#0EA5E9]/20"
                }`}
              >
                {playing ? (
                  <><span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />AI Running...</>
                ) : completed ? (
                  <><RotateCcw size={15} />Reset Demo</>
                ) : (
                  <><Play size={15} fill="white" />Play Demo</>
                )}
              </button>
            </div>

            {/* Center: SMS Chat */}
            <div>
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col" style={{ minHeight: 520 }}>
                <div className="flex items-center gap-3 p-4 border-b border-[#1E293B]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${scenario.color}25` }}
                  >
                    <MessageSquare size={15} style={{ color: scenario.color }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{scenario.company}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-emerald-400 text-xs">AI Active</span>
                    </div>
                  </div>
                </div>

                <div ref={chatRef} className="flex-1 p-4 space-y-3 overflow-y-auto" style={{ maxHeight: 420 }}>
                  <AnimatePresence>
                    {visibleMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[88%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                            msg.from === "ai"
                              ? "bg-[#1F2937] text-[#E2E8F0] rounded-tl-sm"
                              : "text-white rounded-tr-sm"
                          }`}
                          style={msg.from !== "ai" ? { backgroundColor: scenario.color } : {}}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {playing && visibleMessages.length < scenario.messages.length && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#1F2937] px-4 py-3 rounded-2xl rounded-tl-sm">
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <span
                                key={i}
                                className="w-2 h-2 rounded-full bg-[#94A3B8] animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!playing && visibleMessages.length === 0 && (
                    <div className="h-full flex items-center justify-center text-center py-10">
                      <div>
                        <MessageSquare size={40} className="text-[#1E293B] mx-auto mb-3" />
                        <p className="text-[#475569] text-sm">Press Play Demo to watch the AI conversation unfold</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Pipeline + Follow-ups */}
            <div className="space-y-4">
              {/* Pipeline */}
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
                <div className="text-[#94A3B8] text-xs uppercase tracking-wide mb-4">Lead Pipeline</div>
                <div className="space-y-2">
                  {pipelineColumns.map((col, i) => (
                    <div
                      key={col.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 border ${
                        i === pipelineStep
                          ? "border-opacity-40"
                          : "border-transparent"
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
                      {i === pipelineStep && (
                        <motion.div initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} className="ml-auto">
                          <div
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ color: col.color, backgroundColor: `${col.color}15` }}
                          >
                            {scenario.lead.name.split(" ")[0]} {scenario.lead.name.split(" ")[1]?.charAt(0)}.
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow-ups */}
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
                <div className="text-[#94A3B8] text-xs uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Calendar size={13} />
                  Automated Follow-ups
                </div>
                <div className="space-y-3">
                  {followUps.map((fu, i) => (
                    <motion.div
                      key={fu.label}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: completed || i === 0 ? 1 : 0.4 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          fu.done || completed ? "bg-emerald-400/20" : "bg-[#1F2937] border border-[#1E293B]"
                        }`}
                      >
                        {(fu.done || completed) && (
                          <CheckCircle size={12} className="text-emerald-400" />
                        )}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{fu.label}</div>
                        <div className="text-[#94A3B8] text-xs">{fu.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Booked confirmation */}
              <AnimatePresence>
                {completed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-400/10 border border-emerald-400/30 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">Appointment Booked</span>
                    </div>
                    <div className="text-white text-sm font-medium">{scenario.lead.name}</div>
                    <div className="text-[#94A3B8] text-xs mt-0.5">{scenario.booked}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center border-t border-[#1E293B] pt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want This Working for Your Business?
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
              We build and launch this exact system for roofing and HVAC companies in 5–7 business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="primary" size="lg">
                Book My Free Automation Audit
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
