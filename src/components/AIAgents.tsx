"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, ArrowRight } from "lucide-react";

const whatsappAgents = [
  {
    title: "Customer Support Agent",
    desc: "Ready-to-use AI WhatsApp assistant for order tracking, returns, product queries, and complaint handling, automated 24/7.",
  },
  {
    title: "Sales & Upsell Agent",
    desc: "AI-powered WhatsApp agent that recommends products, shares promotions, and guides shoppers to checkout, fully automated.",
  },
  {
    title: "Post-Purchase Agent",
    desc: "AI WhatsApp agent that handles delivery updates, review requests, loyalty rewards, and re-engagement, all on autopilot.",
  },
];

const voiceAgents = [
  {
    title: "Order Status Confirmation",
    desc: "Voice AI confirms order status, delivery ETAs, and returns eligibility by answering customer calls automatically.",
  },
  {
    title: "Abandoned Cart Recovery",
    desc: "Voice AI calls abandoning shoppers with personalized offers, captures intent, and routes hot leads to sales reps.",
  },
  {
    title: "Reorder & Subscription Management",
    desc: "Automate reorder reminders and subscription management with Voice AI that books, adjusts, and confirms over the phone.",
  },
];

export default function AIAgents() {
  return (
    <>
      {/* WhatsApp Agents */}
      <section className="py-14 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle size={18} className="text-green-600" />
              <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                WhatsApp AI Agents
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI Agents for WhatsApp
              </h2>
              <a href="#contact" className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700">
                Explore All Agents <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whatsappAgents.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
                <a href="#contact" className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700">
                  Learn More <ArrowRight size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice AI Agents */}
      <section className="py-14 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-2">
              <PhoneCall size={18} className="text-blue-600" />
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                Voice AI Agents
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI Voice Agents for Ecommerce
              </h2>
              <a href="#contact" className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700">
                Explore All Agents <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {voiceAgents.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <PhoneCall size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
                <a href="#contact" className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700">
                  Learn More <ArrowRight size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
