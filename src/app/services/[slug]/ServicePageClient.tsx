"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ServiceData } from "@/lib/services-data";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleNetwork = dynamic(() => import("@/components/ParticleNetwork"), { ssr: false });

export default function ServicePageClient({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-16 px-6 bg-white overflow-hidden">
          <ParticleNetwork className="opacity-40" color="37, 99, 235" count={45} maxDist={120} />
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 50%, #eff6ff 0%, transparent 50%)",
            }}
          />
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-500">Services</span>
              <span>/</span>
              <span className="text-blue-600 font-medium">{service.heroTag}</span>
            </div>

            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
              >
                {service.heroTag}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-4"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-gray-500 mb-6 leading-relaxed"
              >
                {service.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 leading-relaxed mb-8 max-w-2xl"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/#contact"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Get Free Consultation <ArrowRight size={16} />
                </a>
                <a
                  href="/#case-studies"
                  className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 bg-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  View Case Studies
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-10 px-6 bg-blue-600">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
                <div className="text-blue-100 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Features (01-06) ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                What&apos;s Included
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything in Our {service.heroTag} Service
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {service.features.map((f, i) => (
                <motion.div
                  key={f.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white p-7 hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-3xl font-black text-gray-100 group-hover:text-blue-100 transition-colors select-none">
                    {f.num}
                  </span>
                  <h3 className="text-gray-900 font-bold text-base mt-3 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Key Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Invest in {service.heroTag}?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                  Use Cases
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Automate for You
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Every engagement is scoped to your exact needs. These are the most common{" "}
                  {service.heroTag.toLowerCase()} use cases we deliver for ecommerce clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {service.useCases.map((u, i) => (
                  <motion.div
                    key={u}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  >
                    <CheckCircle size={15} className="text-blue-600 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{u}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-14 px-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium text-center mb-8">
              Technologies We Use
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-2">
              {service.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-gray-800 font-medium text-sm">{faq.q}</span>
                    <span className="shrink-0 text-blue-600">
                      {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Book a free 30-minute strategy call. We&apos;ll map out exactly what{" "}
                {service.title.toLowerCase()} can do for your store, no commitment required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/#contact"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Get Free Consultation <ArrowRight size={16} />
                </a>
                <a
                  href="/#case-studies"
                  className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
