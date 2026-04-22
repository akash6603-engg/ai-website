"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const inputCls =
  "w-full border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent py-2 text-sm text-gray-800 placeholder:text-gray-400 transition-colors";

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus("idle"), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between px-8 pt-8 pb-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Ready to cut costs and scale faster with AI? Drop your details and we'll map out exactly what automation can do for your business, free, in 30 minutes.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="ml-4 shrink-0 text-gray-400 hover:text-gray-600 transition-colors mt-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Success state */}
              {status === "success" ? (
                <div className="px-8 py-12 flex flex-col items-center text-center gap-4">
                  <CheckCircle2 size={48} className="text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We will get back to you within 24 hours.</p>
                  <button
                    onClick={handleClose}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 pb-8 pt-6">
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set("name")}
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Email ID *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={set("email")}
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={set("phone")}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-4 text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                    {status === "loading" ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
