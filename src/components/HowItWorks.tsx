"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Chat-Triggered Workflow",
    desc: "Automation fires the moment a customer sends a message — no queue, no delay, every conversation captured instantly.",
  },
  {
    step: "02",
    title: "Smart AI Layer",
    desc: "OpenAI GPT handles natural conversations using a system prompt trained on your brand voice, policies, and catalogue.",
  },
  {
    step: "03",
    title: "Live Inventory Queries",
    desc: "The AI queries your product database in real time — providing stock status, alternatives, and restock timelines.",
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
    desc: "Full conversation history maintained for seamless, human-like interactions — no customer ever repeats themselves.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            A six-step AI workflow running 24/7 — handling your customers so your team doesn&apos;t have to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-black text-gray-100 select-none">{s.step}</span>
              <h3 className="text-gray-900 font-bold mt-3 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
