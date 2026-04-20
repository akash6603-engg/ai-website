"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type FormState = { name: string; email: string; company: string; platform: string; message: string };

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", platform: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Free Consultation
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Tell us about your business. We&apos;ll map out the highest-impact AI automations
              you can implement in the next 90 days, no commitment required.
            </p>
            <div className="space-y-4">
              {[
                "Free 30-minute strategy call",
                "Custom automation roadmap for your business",
                "No obligation - just honest advice",
                "Response within 24 hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {status === "success" ? (
              <div className="text-center py-14 px-8 rounded-2xl border border-green-200 bg-green-50">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={44} />
                <h3 className="text-gray-900 text-xl font-bold mb-2">We&apos;ll be in touch!</h3>
                <p className="text-gray-500 text-sm">Expect a response within 24 hours to confirm your call time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Alex Johnson"
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Work Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="alex@brand.com"
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-sm" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company / Store</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="My Store Co."
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Platform</label>
                    <select name="platform" value={form.platform} onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-sm bg-white">
                      <option value="">Select platform</option>
                      <option>Shopify</option>
                      <option>WooCommerce</option>
                      <option>Magento</option>
                      <option>BigCommerce</option>
                      <option>Custom</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">What&apos;s your biggest challenge? *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                    placeholder="e.g. We're spending 40 hrs/week on support and it's not scaling..."
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 text-sm resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Get Free Consultation <ArrowRight size={16} /></>
                  )}
                </button>
                <p className="text-center text-gray-400 text-xs">No spam. No pressure. Just a straight conversation.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
