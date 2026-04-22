"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Chat-Triggered Workflow",
    desc: "Automation fires the moment a customer sends a message: no queue, no delay, every conversation captured instantly.",
  },
  {
    step: "02",
    title: "Smart AI Layer",
    desc: "OpenAI GPT handles natural conversations using a system prompt trained on your brand voice, policies, and catalogue.",
  },
  {
    step: "03",
    title: "Live Inventory Queries",
    desc: "The AI queries your product database in real time, providing stock status, alternatives, and restock timelines.",
  },
  {
    step: "04",
    title: "Order Tracking",
    desc: "Customers provide an order ID to instantly receive live status and delivery ETAs from your order management system.",
  },
  {
    step: "05",
    title: "Returns & Policy Handling",
    desc: "Return eligibility, refund timelines, and step-by-step guidance handled automatically from your live policy database.",
  },
  {
    step: "06",
    title: "Memory & Context",
    desc: "Full conversation history maintained for seamless, human-like interactions so no customer ever repeats themselves.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            A six-step AI workflow running 24/7, handling your customers so your team doesn&apos;t have to.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-colors duration-300 group gradient-border"
            >
              {/* Step number with animated background */}
              <div className="relative inline-block mb-3">
                <span className="text-4xl font-black text-gray-100 group-hover:text-blue-100 transition-colors duration-300 select-none">
                  {s.step}
                </span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: -1 }}
                />
              </div>

              <h3 className="text-gray-900 font-bold mt-1 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
