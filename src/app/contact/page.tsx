"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar, Search, Wrench, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormData = {
  businessName: string;
  industry: string;
  leadSource: string;
  monthlyGoal: string;
  website: string;
  email: string;
  message: string;
};

const initialForm: FormData = {
  businessName: "",
  industry: "",
  leadSource: "",
  monthlyGoal: "",
  website: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.businessName) newErrors.businessName = "Required";
    if (!form.industry) newErrors.industry = "Required";
    if (!form.leadSource) newErrors.leadSource = "Required";
    if (!form.monthlyGoal) newErrors.monthlyGoal = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
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

  const textField = (
    id: keyof FormData,
    label: string,
    type: string = "text",
    placeholder: string = "",
    required = true
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
        {label} {required && <span className="text-[#EF4444]">*</span>}
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
        className={`w-full bg-[#0A0F1E] border rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors ${
          errors[id] ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#22C55E]/50"
        }`}
      />
      {errors[id] && <p className="mt-1 text-xs text-[#EF4444]">{errors[id]}</p>}
    </div>
  );

  const processSteps = [
    { icon: Search, label: "We review your niche", desc: "We learn your target market and current lead sources" },
    { icon: Wrench, label: "We build your outbound plan", desc: "Custom outbound blueprint for your business" },
    { icon: CheckCircle, label: "You approve the setup", desc: "Nothing goes live without your sign-off" },
    { icon: Zap, label: "System live in 7 days", desc: "Full outbound pipeline running in under a week" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#040810] min-h-screen">
        <section className="py-20 bg-[#040810] border-b border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-full mb-4 uppercase tracking-widest">
                Free Audit
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Book a Free Outbound System Audit
              </h1>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                In 30 minutes, we will review your business, map out a custom outbound system, and show you exactly how many qualified leads you could be generating every month.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#0A0F1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="bg-[#040810] border border-[#1E293B] rounded-2xl p-8 space-y-5"
                    >
                      {textField("businessName", "Business Name", "text", "Apex Roofing LLC")}

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
                          className={`w-full bg-[#0A0F1E] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors ${
                            form.industry ? "text-white" : "text-[#475569]"
                          } ${errors.industry ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#22C55E]/50"}`}
                        >
                          <option value="" disabled>Select your industry</option>
                          <option value="roofing">Roofing</option>
                          <option value="hvac">HVAC</option>
                          <option value="landscaping">Landscaping</option>
                          <option value="detailing">Auto Detailing</option>
                          <option value="med-spa">Med Spa</option>
                          <option value="contractor">General Contractor</option>
                          <option value="home-services">Home Services</option>
                          <option value="other">Other Local Service Business</option>
                        </select>
                        {errors.industry && <p className="mt-1 text-xs text-[#EF4444]">{errors.industry}</p>}
                      </div>

                      <div>
                        <label htmlFor="leadSource" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Current Lead Source <span className="text-[#EF4444]">*</span>
                        </label>
                        <select
                          id="leadSource"
                          value={form.leadSource}
                          onChange={(e) => {
                            setForm({ ...form, leadSource: e.target.value });
                            if (errors.leadSource) setErrors({ ...errors, leadSource: undefined });
                          }}
                          className={`w-full bg-[#0A0F1E] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors ${
                            form.leadSource ? "text-white" : "text-[#475569]"
                          } ${errors.leadSource ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#22C55E]/50"}`}
                        >
                          <option value="" disabled>How do you currently get leads?</option>
                          <option value="referrals">Referrals only</option>
                          <option value="google-ads">Google Ads</option>
                          <option value="cold-outreach">Manual cold outreach</option>
                          <option value="mix">Mix of channels</option>
                          <option value="none">No consistent source</option>
                        </select>
                        {errors.leadSource && <p className="mt-1 text-xs text-[#EF4444]">{errors.leadSource}</p>}
                      </div>

                      <div>
                        <label htmlFor="monthlyGoal" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Monthly Lead Goal <span className="text-[#EF4444]">*</span>
                        </label>
                        <select
                          id="monthlyGoal"
                          value={form.monthlyGoal}
                          onChange={(e) => {
                            setForm({ ...form, monthlyGoal: e.target.value });
                            if (errors.monthlyGoal) setErrors({ ...errors, monthlyGoal: undefined });
                          }}
                          className={`w-full bg-[#0A0F1E] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 transition-colors ${
                            form.monthlyGoal ? "text-white" : "text-[#475569]"
                          } ${errors.monthlyGoal ? "border-[#EF4444]" : "border-[#1E293B] focus:border-[#22C55E]/50"}`}
                        >
                          <option value="" disabled>How many qualified calls do you want per month?</option>
                          <option value="5-10">5-10 qualified calls/month</option>
                          <option value="10-20">10-20 qualified calls/month</option>
                          <option value="20+">20+ qualified calls/month</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                        {errors.monthlyGoal && <p className="mt-1 text-xs text-[#EF4444]">{errors.monthlyGoal}</p>}
                      </div>

                      {textField("website", "Website", "text", "https://yourbusiness.com", false)}
                      {textField("email", "Email Address", "email", "you@yourbusiness.com")}

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#CBD5E1] mb-1.5">
                          Anything else we should know?
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your business, who you want to target, or your biggest growth challenge."
                          className="w-full bg-[#0A0F1E] border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E]/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#22C55E]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Submitting...</>
                        ) : (
                          <>Book My Free Outbound Audit <ArrowRight size={18} /></>
                        )}
                      </button>

                      <p className="text-[#475569] text-xs text-center">
                        No spam. No obligation. We will confirm within 1 business day.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#040810] border border-[#22C55E]/30 rounded-2xl p-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-[#22C55E]" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">You are booked!</h2>
                      <p className="text-[#94A3B8] leading-relaxed">
                        Thanks for reaching out. We will be in touch within 1 business day to confirm your free outbound audit time.
                      </p>
                      <div className="mt-6 p-4 bg-[#0A0F1E] rounded-xl">
                        <p className="text-[#94A3B8] text-sm">Check your email at <span className="text-white font-medium">{form.email}</span> for a confirmation.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#040810] border border-[#1E293B] rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold text-lg mb-5">What You Get in the Audit</h3>
                  <ul className="space-y-4">
                    {[
                      { text: "A clear picture of how many leads you could be generating each month", color: "#22C55E" },
                      { text: "A custom outbound plan mapped to your niche, market, and offer", color: "#F59E0B" },
                      { text: "Honest recommendations with no pressure and no obligation", color: "#4ADE80" },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#040810] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Calendar size={16} className="text-[#22C55E]" />
                    <h3 className="text-white font-semibold text-lg">What to Expect</h3>
                  </div>
                  <div className="space-y-4">
                    {processSteps.map((step) => (
                      <div key={step.label} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#0A0F1E] border border-[#1E293B] flex items-center justify-center flex-shrink-0">
                          <step.icon size={14} className="text-[#22C55E]" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{step.label}</div>
                          <div className="text-[#94A3B8] text-xs mt-0.5">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#040810] border border-[#1E293B] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] font-bold text-sm flex-shrink-0">
                      JP
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Jonathan Pepper</div>
                      <div className="text-[#94A3B8] text-xs">Founder, Lumis Agencies</div>
                    </div>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    You will be speaking directly with me on the audit call.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#22C55E]/5 border border-[#22C55E]/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#22C55E] mb-1">30-Day</div>
                  <div className="text-white font-semibold text-sm mb-2">Satisfaction Guarantee</div>
                  <p className="text-[#94A3B8] text-xs">
                    If you are not happy with the system in the first 30 days, we will refund your setup fee. No questions asked.
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
