"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Apollo.io", category: "Lead Data" },
  { name: "Hunter.io", category: "Email Verify" },
  { name: "Clay", category: "Enrichment" },
  { name: "Instantly.ai", category: "Cold Email" },
  { name: "GoHighLevel", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Calendly", category: "Booking" },
  { name: "Google Sheets", category: "Reporting" },
];

export default function Integrations() {
  return (
    <section className="py-20 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#475569] text-sm uppercase tracking-widest font-semibold mb-3">
            Tools powering your outbound system
          </p>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            We use best-in-class outbound tools to build, enrich, send, and track your lead generation system. Everything works together seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-[#040810] border border-[#1E293B] rounded-xl p-4 text-center hover:border-[#22C55E]/30 transition-colors duration-200 group"
            >
              <div className="text-white text-xs font-semibold leading-tight group-hover:text-[#22C55E] transition-colors duration-200">
                {integration.name}
              </div>
              <div className="text-[#475569] text-[10px] mt-1">{integration.category}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#475569] text-xs mt-6"
        >
          + many more via Zapier, webhooks, and API connections
        </motion.p>
      </div>
    </section>
  );
}
