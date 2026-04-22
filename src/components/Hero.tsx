"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const AIWorkflowAnimation = dynamic(() => import("./AIWorkflowAnimation"), { ssr: false });

const easeExpo: Easing = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeExpo } },
};

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-white min-h-screen flex items-center">
      {/* Animated blobs */}
      <div className="blob blob-1 w-96 h-96 bg-blue-300 top-10 -left-20" />
      <div className="blob blob-2 w-80 h-80 bg-violet-300 top-32 right-10" />
      <div className="blob blob-3 w-64 h-64 bg-sky-200 bottom-20 left-1/3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
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
            "radial-gradient(ellipse 80% 60% at 20% 50%, #eff6ff 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-block bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            >
              AI-Powered Business Automation
            </motion.span>

            <motion.h1
              variants={item}
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-5"
            >
              AI-Powered Solutions
              <br />
              for Modern{" "}
              <span className="shimmer-text">Businesses</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed"
            >
              Empowering businesses worldwide with smart, scalable AI automation. Cut costs, boost revenue, and scale without scaling your team.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 text-sm"
              >
                Get Free Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#case-studies"
                className="flex items-center gap-2 border border-gray-300 hover:border-blue-400 hover:text-blue-600 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm bg-white"
              >
                View Case Studies
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              {[
                { value: "40+",       label: "Brands Served" },
                { value: "US · UK · EU", label: "Markets" },
                { value: "4.9★",     label: "Client Rating" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <div className="h-8 w-px bg-gray-200" />}
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — live workflow animation */}
          <div className="hidden md:flex justify-center items-center">
            <AIWorkflowAnimation />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" className="scroll-indicator z-10" aria-label="Scroll down">
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="text-gray-400" />
      </a>
    </section>
  );
}
