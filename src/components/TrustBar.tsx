"use client";

import { motion } from "framer-motion";

const platforms = ["Shopify", "WooCommerce", "Klaviyo", "Gorgias", "n8n", "OpenAI", "Airtable", "BigCommerce", "Magento"];

export default function TrustBar() {
  return (
    <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-5"
        >
          Globally Trusted Stack — We Integrate With
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {platforms.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="text-gray-400 font-bold text-sm tracking-wide hover:text-gray-600 transition-colors cursor-default"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
