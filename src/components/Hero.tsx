"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #eff6ff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f0fdf4 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
          >
            AI-Powered Ecommerce Automation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-5"
          >
            AI-Powered Solutions
            <br />
            for Modern{" "}
            <span className="text-blue-600">Ecommerce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed"
          >
            Driving growth through smart, scalable AI automation solutions for ecommerce brands
            in the US, UK, and Europe. Cut costs, boost revenue, and scale without scaling your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#case-studies"
              className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm bg-white"
            >
              View Case Studies
            </a>
          </motion.div>

          {/* Trust stat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            <div>
              <div className="text-2xl font-bold text-gray-900">40+</div>
              <div className="text-xs text-gray-500">Ecommerce Brands Served</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-gray-900">US · UK · EU</div>
              <div className="text-xs text-gray-500">Markets We Operate In</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9★</div>
              <div className="text-xs text-gray-500">Average Client Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
