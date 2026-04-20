"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "AI Workflow Automation", href: "/services/ai-workflow-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "Document & Email Automation", href: "/services/document-email-automation" },
      { label: "Lead Scoring & Qualification", href: "/services/lead-scoring-qualification" },
      { label: "Custom GPT Integration", href: "/services/custom-gpt-integration" },
      { label: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
      { label: "n8n Workflow Automation", href: "/services/n8n-workflow-automation-services" },
      { label: "AI Agent Development", href: "/services/ai-agent-development-services" },
      { label: "Voice AI Agents", href: "/services/voice-ai-agent-development-services" },
      { label: "ChatBot Development", href: "/services/chatbot-development-services" },
      { label: "Generative AI Development", href: "/services/generative-ai-development-services" },
      { label: "Shopify AI Automation", href: "/services/shopify-ai-automation-services" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "E-Commerce", href: "/industries/ai-automation-in-e-commerce" },
      { label: "Retail", href: "/industries/ai-automation-in-retail" },
      { label: "Logistics", href: "/industries/ai-automation-in-logistics" },
      { label: "Healthcare", href: "/industries/ai-automation-in-healthcare" },
      { label: "Real Estate", href: "/industries/ai-automation-in-real-estate" },
      { label: "Hospitality", href: "/industries/ai-automation-in-hospitality" },
      { label: "Manufacturing", href: "/industries/ai-automation-in-manufacturing" },
      { label: "Insurance", href: "/industries/ai-automation-in-insurance" },
      { label: "Recruitment", href: "/industries/ai-automation-in-recruitment" },
    ],
  },
  { label: "Case Studies", href: "/#case-studies" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/#" },
      { label: "Blog", href: "/#" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-xl text-gray-900 tracking-tight">
          Osmosis<span className="text-blue-600"> AI</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded transition-colors">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium rounded transition-colors"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Contact Us
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 px-6 pb-6"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className="text-gray-700 font-medium py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
