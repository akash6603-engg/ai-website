"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Ecommerce Brands Served" },
  { value: "60+", label: "Automations Delivered" },
  { value: "3+", label: "Years of AI Experience" },
  { value: "4.9", label: "Average Client Rating" },
  { value: "15+", label: "Countries Served" },
  { value: "US · UK · EU", label: "Primary Markets" },
];

export default function Credibility() {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-10"
        >
          Our Track Record
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
