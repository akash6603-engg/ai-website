"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const industryItems = [
  { icon: "🛍️", label: "E-Commerce", href: "/industries/ai-automation-in-e-commerce", desc: "Abandoned cart recovery, inventory sync, order automation, and AI chatbots." },
  { icon: "🏪", label: "Retail", href: "/industries/ai-automation-in-retail", desc: "Smart inventory replenishment, POS automation, and loyalty programme management." },
  { icon: "🚚", label: "Logistics", href: "/industries/ai-automation-in-logistics", desc: "Route optimisation, freight documentation, and real-time delivery notifications." },
  { icon: "🏥", label: "Healthcare", href: "/industries/ai-automation-in-healthcare", desc: "Patient scheduling, EMR management, billing, and HIPAA-compliant reporting." },
  { icon: "🏡", label: "Real Estate", href: "/industries/ai-automation-in-real-estate", desc: "Lead qualification, listing sync, viewing scheduling, and document processing." },
  { icon: "🏨", label: "Hospitality", href: "/industries/ai-automation-in-hospitality", desc: "Reservation management, guest communication, upselling, and feedback collection." },
  { icon: "🏭", label: "Manufacturing", href: "/industries/ai-automation-in-manufacturing", desc: "Order-to-production workflows, quality control, and predictive maintenance alerts." },
  { icon: "🛡️", label: "Insurance", href: "/industries/ai-automation-in-insurance", desc: "Claims processing, fraud detection, underwriting automation, and compliance." },
  { icon: "🤝", label: "Recruitment", href: "/industries/ai-automation-in-recruitment", desc: "Resume screening, interview scheduling, candidate communication, and onboarding." },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Industries
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI Automation Across Every Industry
            </h2>
            <p className="text-gray-500 text-sm max-w-sm md:text-right leading-relaxed">
              Custom AI workflows built for the specific processes, tools, and compliance requirements of your sector.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {industryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white p-7 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-gray-900 font-bold text-base mt-3 mb-2">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <Link
                href={item.href}
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
