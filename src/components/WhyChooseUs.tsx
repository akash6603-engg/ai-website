"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Custom AI, Not Cookie-Cutter",
    desc: "Every automation is built specifically for your store, stack, and goals, not recycled templates or off-the-shelf SaaS.",
  },
  {
    title: "Ecommerce-First Expertise",
    desc: "We only work with ecommerce brands. We know Shopify, WooCommerce, Klaviyo, Gorgias, and the full stack inside-out.",
  },
  {
    title: "Measurable ROI from Day One",
    desc: "Every build comes with KPI tracking. You see exactly what the AI is saving: tickets reduced, revenue added, hours freed.",
  },
  {
    title: "Rapid Deployment (2–6 Weeks)",
    desc: "From discovery call to live automation in weeks, not months. We move fast without compromising quality or reliability.",
  },
  {
    title: "GDPR-Compliant for EU Clients",
    desc: "All EU projects are built with full GDPR compliance, with proper consent flows, data minimization, and regional storage.",
  },
  {
    title: "Ongoing Support & Optimisation",
    desc: "We don't disappear after launch. Retainer support includes monitoring, retraining, and continuous improvement.",
  },
];

const stats = [
  { value: "40+", label: "Ecommerce Brands Served" },
  { value: "15+", label: "Countries Reached" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "3+", label: "Years in AI Automation" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leaders in Ecommerce
              <br />AI Automation
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We build AI systems that genuinely transform how ecommerce brands operate,
              not just chatbots, but end-to-end automation that touches every part of your business.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                  className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 transition-colors duration-200 cursor-default"
                >
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — reasons list */}
          <div className="space-y-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4"
              >
                <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
