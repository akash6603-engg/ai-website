"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What types of ecommerce businesses do you work with?", a: "We work with DTC brands and online retailers doing $300K–$20M+ ARR on Shopify, WooCommerce, Magento, and BigCommerce across the US, UK, and Europe — in verticals like fashion, beauty, health & wellness, home goods, and electronics." },
  { q: "How long does it take to build and deploy an AI automation?", a: "Most projects go from discovery call to live deployment in 3–6 weeks. Simple automations like an AI support chatbot can be live in 2 weeks. Complex systems like multi-channel marketing automation or inventory forecasting typically take 4–8 weeks." },
  { q: "Do you integrate with our existing tools like Klaviyo, Gorgias, or Shopify?", a: "Yes — we build directly into your existing stack. We integrate with Shopify, WooCommerce, Klaviyo, Attentive, Gorgias, Zendesk, Recharge, n8n, Airtable, and most major ecommerce platforms. You won't need to migrate software." },
  { q: "What does AI automation for ecommerce actually cost?", a: "Projects start at $3,000–$5,000 for a single automation and $10,000–$25,000+ for full-stack systems. We also offer retainer support. Every engagement starts with a free strategy call." },
  { q: "Is the AI GDPR-compliant for European customers?", a: "Yes. EU projects are built with full GDPR compliance — proper consent flows, data minimization, data processing agreements, and regional data storage where required." },
  { q: "What ROI should I expect?", a: "AI customer support typically reduces ticket volume 50–75%. AI email personalization lifts email revenue 2–4×. Inventory AI reduces over/understock costs 30–50%. We track and report all metrics." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors" aria-expanded={open === i}>
                <span className="text-gray-800 font-medium text-sm">{faq.q}</span>
                <span className="shrink-0 text-blue-600">{open === i ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
