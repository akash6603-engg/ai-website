"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "AI Workflow Automation",
    desc: "Transform your ecommerce operations with cutting-edge AI to streamline support, logistics, and fulfillment, boosting productivity at every touchpoint.",
    href: "/services/ai-workflow-automation",
  },
  {
    num: "02",
    title: "AI Chatbot Development",
    desc: "Tailor-made AI chatbot solutions trained on your brand voice, product catalogue, and policies, deployed on your site, WhatsApp, or any channel.",
    href: "/services/ai-chatbot-development",
  },
  {
    num: "03",
    title: "Document & Email Automation",
    desc: "Eliminate manual invoice processing, document extraction, and email workflows with AI pipelines that handle the entire flow automatically.",
    href: "/services/document-email-automation",
  },
  {
    num: "04",
    title: "Lead Scoring & Qualification",
    desc: "AI-driven lead enrichment, scoring, and CRM routing so your sales team only speaks to hot prospects. Response time drops from hours to seconds.",
    href: "/services/lead-scoring-qualification",
  },
  {
    num: "05",
    title: "Custom GPT Integration",
    desc: "Embed GPT-4 directly into your store, tools, and workflows: from AI product descriptions to semantic search and internal knowledge bases.",
    href: "/services/custom-gpt-integration",
  },
  {
    num: "06",
    title: "AI Business Intelligence",
    desc: "Custom dashboards and AI reporting that surface the decisions that drive revenue, from inventory forecasting to campaign attribution and LTV modeling.",
    href: "/services/ai-business-intelligence",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI Services We Offer
            </h2>
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors shrink-0"
            >
              View All Services <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-7 hover:bg-blue-50 transition-colors group relative"
            >
              {/* Live pulse indicator */}
              <span className="absolute top-5 right-5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>

              <span className="text-3xl font-black text-gray-100 group-hover:text-blue-100 transition-colors select-none">
                {s.num}
              </span>
              <h3 className="text-gray-900 font-bold text-base mt-3 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link
                href={s.href}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
