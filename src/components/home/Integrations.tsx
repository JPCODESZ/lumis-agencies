"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "GoHighLevel", category: "CRM" },
  { name: "ServiceTitan", category: "Field Mgmt" },
  { name: "Jobber", category: "Scheduling" },
  { name: "HouseCall Pro", category: "Field Ops" },
  { name: "Google Calendar", category: "Booking" },
  { name: "Calendly", category: "Scheduling" },
  { name: "HubSpot", category: "CRM" },
  { name: "Stripe", category: "Payments" },
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
            Works with your existing tools
          </p>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            Our system integrates with the software roofing and HVAC companies already use. No ripping out what&apos;s working.
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
              className="bg-[#111827] border border-[#1E293B] rounded-xl p-4 text-center hover:border-[#0EA5E9]/30 transition-colors duration-200 group"
            >
              <div className="text-white text-xs font-semibold leading-tight group-hover:text-[#0EA5E9] transition-colors duration-200">
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
