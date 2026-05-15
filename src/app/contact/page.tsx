"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar, Search, Wrench, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  monthlyLeads: string;
  message: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  monthlyLeads: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.company) newErrors.company = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.industry) newErrors.industry = "Required";
    if (!form.monthlyLeads) newErrors.monthlyLeads = "Required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const field = (
    id: keyof FormData,
    label: string,
    type: string = "text",
    placeholder: string = ""
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
        {label} <span className="text-[#EF4444]">*</span>
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
          if (errors[id]) setErrors({ ...errors, [id]: undefined });
        }}
        placeholder={placeholder}
        className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/50 transition-colors ${
          errors[id] ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#0EA5E9]/50"
        }`}
      />
      {errors[id] && <p className="mt-1 text-xs text-[#EF4444]">{errors[id]}</p>}
    </div>
  );

  const processSteps = [
    { icon: Search, label: "We review your process", desc: "We learn how you currently handle leads" },
    { icon: Wrench, label: "We build your plan", desc: "Custom automation blueprint for your business" },
    { icon: CheckCircle, label: "You approve the setup", desc: "Nothing goes live without your sign-off" },
    { icon: Zap, label: "Go live in 5-7 days", desc: "Full system running in less than a week" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0A0F1E] min-h-screen">
        {/* Header */}
        <section className="py-20 bg-[#060B14] border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0EA5E9] bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full mb-4 uppercase tracking-widest">
                Free Audit
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Book Your Free Automation Audit
              </h1>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                In 30 minutes, we&apos;ll show you exactly how many leads you&apos;re losing to slow response times and walk you through a custom automation plan for your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 space-y-5"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {field("firstName", "First Name", "text", "Jane")}
                        {field("lastName", "Last Name", "text", "Smith")}
                      </div>
                      {field("company", "Company Name", "text", "Smith Roofing LLC")}
                      <div className="grid grid-cols-2 gap-4">
                        {field("email", "Email Address", "email", "jane@smithroofing.com")}
                        {field("phone", "Phone Number", "tel", "(555) 000-0000")}
                      </div>

                      {/* Industry select */}
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Industry <span className="text-[#EF4444]">*</span>
                        </label>
                        <select
                          id="industry"
                          value={form.industry}
                          onChange={(e) => {
                            setForm({ ...form, industry: e.target.value });
                            if (errors.industry) setErrors({ ...errors, industry: undefined });
                          }}
                          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/50 transition-colors ${
                            form.industry ? "text-white" : "text-[#475569]"
                          } ${errors.industry ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#0EA5E9]/50"}`}
                        >
                          <option value="" disabled>Select your industry</option>
                          <option value="roofing">Roofing</option>
                          <option value="hvac">HVAC</option>
                          <option value="both">Both (Roofing + HVAC)</option>
                          <option value="other">Other Home Services</option>
                        </select>
                        {errors.industry && <p className="mt-1 text-xs text-[#EF4444]">{errors.industry}</p>}
                      </div>

                      {/* Monthly leads select */}
                      <div>
                        <label htmlFor="monthlyLeads" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Monthly Leads (approx.) <span className="text-[#EF4444]">*</span>
                        </label>
                        <select
                          id="monthlyLeads"
                          value={form.monthlyLeads}
                          onChange={(e) => {
                            setForm({ ...form, monthlyLeads: e.target.value });
                            if (errors.monthlyLeads) setErrors({ ...errors, monthlyLeads: undefined });
                          }}
                          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/50 transition-colors ${
                            form.monthlyLeads ? "text-white" : "text-[#475569]"
                          } ${errors.monthlyLeads ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#0EA5E9]/50"}`}
                        >
                          <option value="" disabled>How many leads per month?</option>
                          <option value="under-25">Under 25</option>
                          <option value="25-50">25-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100+">100+</option>
                          <option value="unknown">I don&apos;t know</option>
                        </select>
                        {errors.monthlyLeads && <p className="mt-1 text-xs text-[#EF4444]">{errors.monthlyLeads}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Tell us about your current lead process
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How do you currently handle inbound leads? What's your biggest challenge?"
                          className="w-full bg-[#111827] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/50 focus:border-[#0EA5E9]/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Submitting...</>
                        ) : (
                          <>Book My Free Audit <ArrowRight size={18} /></>
                        )}
                      </button>

                      <p className="text-[#475569] text-xs text-center">
                        No spam. No obligation. We&apos;ll confirm within 1 business day.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#111827] border border-emerald-400/30 rounded-2xl p-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-emerald-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">You&apos;re Booked!</h2>
                      <p className="text-[#94A3B8] leading-relaxed">
                        Thanks, {form.firstName}. We&apos;ll be in touch within 1 business day to confirm your free automation audit time.
                      </p>
                      <div className="mt-6 p-4 bg-[#1F2937] rounded-xl">
                        <p className="text-[#94A3B8] text-sm">Check your email at <span className="text-white font-medium">{form.email}</span> for a confirmation.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right sidebar */}
              <div className="lg:col-span-2 space-y-8">
                {/* Why book */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold text-lg mb-5">What You Get in the Audit</h3>
                  <ul className="space-y-4">
                    {[
                      { text: "See exactly how many leads you're losing per month", color: "#0EA5E9" },
                      { text: "Get a custom automation blueprint for your business", color: "#F59E0B" },
                      { text: "Honest recommendations (no pressure, no obligation)", color: "#34D399" },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* What to expect */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Calendar size={16} className="text-[#0EA5E9]" />
                    <h3 className="text-white font-semibold text-lg">What to Expect</h3>
                  </div>
                  <div className="space-y-4">
                    {processSteps.map((step, i) => (
                      <div key={step.label} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#1F2937] border border-[#1E293B] flex items-center justify-center flex-shrink-0">
                          <step.icon size={14} className="text-[#0EA5E9]" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{step.label}</div>
                          <div className="text-[#94A3B8] text-xs mt-0.5">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Founder trust */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] font-bold text-sm flex-shrink-0">
                      JP
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Jonathan Pepper</div>
                      <div className="text-[#94A3B8] text-xs">Founder, Lumis Agencies</div>
                    </div>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    You&apos;ll be speaking directly with me on the audit call.
                  </p>
                </motion.div>

                {/* Trust badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#0EA5E9] mb-1">30-Day</div>
                  <div className="text-white font-semibold text-sm mb-2">Satisfaction Guarantee</div>
                  <p className="text-[#94A3B8] text-xs">
                    If you&apos;re not happy with the system in the first 30 days, we&apos;ll refund your setup fee. No questions asked.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
