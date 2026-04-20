"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Osmosis AI built us a support bot that handles 80% of our customer queries without human touch. Our team now focuses on growth, not tickets.",
    name: "Sarah K.",
    role: "Head of Operations",
    company: "UK Fashion Brand · £4M ARR",
    initials: "SK",
  },
  {
    quote: "The AI email flows they set up added $180K in revenue in the first 3 months. The ROI was immediate and measurable.",
    name: "James R.",
    role: "Founder",
    company: "US DTC Supplement Brand",
    initials: "JR",
  },
  {
    quote: "We were drowning in manual inventory work across 4 EU warehouses. Their AI system now handles all of it automatically.",
    name: "Marc D.",
    role: "CEO",
    company: "German Home Goods · €7M ARR",
    initials: "MD",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Client Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
