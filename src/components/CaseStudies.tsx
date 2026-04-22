"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedWorkflow from "./AnimatedWorkflow";
import type { WorkflowNode } from "./AnimatedWorkflow";

type Case = {
  tag: string;
  tagColor: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  toolColors: string[];
  workflow: WorkflowNode[];
};

const cases: Case[] = [
  {
    tag: "Lead Generation",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    title: "Website Lead Automation via n8n",
    client: "UK B2B Ecommerce SaaS · £1.6M ARR",
    challenge: "Sales team manually copy-pasting website form submissions into HubSpot, taking 20 min per lead, missing duplicates, and sending no instant reply to prospects. 30% of leads went uncontacted for 48+ hours, costing pipeline.",
    solution: "Built a 5-step n8n workflow: form submission fires instantly, a personalised thank-you email goes to the lead within seconds, Apollo enriches the contact with job title, LinkedIn, and company size, the enriched record is pushed into HubSpot with deduplication, then a Slack + email alert fires to the right sales rep with the full lead profile.",
    results: ["Lead response time: 48hrs → 90 secs", "100% CRM data completeness", "Zero duplicate contacts", "3× more discovery calls booked"],
    tools: ["Website Form", "n8n", "Apollo", "HubSpot", "Email", "Slack"],
    toolColors: [
      "bg-gray-100 text-gray-700",
      "bg-red-100 text-red-700",
      "bg-blue-100 text-blue-700",
      "bg-orange-100 text-orange-700",
      "bg-slate-100 text-slate-700",
      "bg-slate-100 text-slate-700",
    ],
    workflow: [
      { label: "Web Form", sublabel: "Lead Submitted", type: "trigger" as const },
      { label: "Thank-You Email", sublabel: "Auto Reply", type: "notify" as const },
      { label: "Apollo API", sublabel: "Enrich Contact", type: "action" as const },
      { label: "HubSpot CRM", sublabel: "Create / Dedupe", type: "database" as const },
      { label: "Slack + Email", sublabel: "Notify Sales Rep", type: "notify" as const },
    ],
  },
  {
    tag: "E-Commerce",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
    title: "AI Customer Support Chatbot",
    client: "US Shopify Fashion Brand · $2.4M ARR",
    challenge: "Support team handling 800+ tickets/week. 40% were repetitive: order status, returns, stock availability. Response times averaging 18 hours.",
    solution: "Built an AI chatbot triggered via Shopify's webhook, querying live order and inventory data from Airtable, with OpenAI GPT handling natural conversation and memory.",
    results: ["68% ticket reduction", "< 10s response time", "24/7 coverage", "$12K/mo support cost saved"],
    tools: ["Shopify", "n8n", "OpenAI", "Airtable"],
    toolColors: ["bg-green-100 text-green-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-yellow-100 text-yellow-700"],
    workflow: [
      { label: "Shopify", sublabel: "Customer Message", type: "trigger" as const },
      { label: "n8n Router", sublabel: "Intent Detect", type: "action" as const },
      { label: "OpenAI GPT", sublabel: "NLP Processing", type: "ai" as const },
      { label: "Airtable", sublabel: "Orders & Stock", type: "database" as const },
      { label: "Auto Reply", sublabel: "Resolve / Escalate", type: "notify" as const },
    ],
  },
  {
    tag: "Marketing",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100",
    title: "Abandoned Cart Recovery AI",
    client: "UK Beauty Brand · £1.8M ARR",
    challenge: "73% cart abandonment rate. Manual follow-up emails sent 24hrs later with no personalization, recovering only 4% of abandoned carts.",
    solution: "Built an n8n workflow that triggers 45 mins post-abandonment, uses OpenAI to generate personalized recovery messages based on cart items and customer history, then delivers via Klaviyo email + Twilio SMS.",
    results: ["31% cart recovery rate", "7× uplift vs manual", "£62K recovered in 90 days", "Full personalization"],
    tools: ["Shopify", "n8n", "OpenAI", "Klaviyo", "Twilio"],
    toolColors: ["bg-green-100 text-green-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700", "bg-red-100 text-red-700"],
    workflow: [
      { label: "Shopify", sublabel: "Cart Abandoned", type: "trigger" as const },
      { label: "Wait 45 min", sublabel: "n8n Timer", type: "action" as const },
      { label: "OpenAI GPT", sublabel: "Personalise Copy", type: "ai" as const },
      { label: "Klaviyo", sublabel: "Send Email", type: "notify" as const },
      { label: "Twilio SMS", sublabel: "SMS Follow-up", type: "notify" as const },
    ],
  },
  {
    tag: "Inventory",
    tagColor: "bg-green-50 text-green-700 border-green-100",
    title: "AI Inventory Reorder System",
    client: "EU Home Goods Brand · €3.1M ARR",
    challenge: "4 warehouses across Germany, Netherlands, and France. Stockouts on top SKUs costing €180K/year. Manual reorder process took 3 days.",
    solution: "Built an AI system that monitors Shopify inventory daily, uses OpenAI to predict reorder quantities based on velocity and seasonality, auto-generates POs, and sends Slack alerts with one-click approval.",
    results: ["92% forecast accuracy", "Zero stockouts in 6 months", "€180K revenue protected", "Reorder time: 3 days → 4 hours"],
    tools: ["Shopify", "n8n", "OpenAI", "Google Sheets", "Slack"],
    toolColors: ["bg-green-100 text-green-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-green-100 text-green-700", "bg-slate-100 text-slate-700"],
    workflow: [
      { label: "Shopify", sublabel: "Inventory Check", type: "trigger" as const },
      { label: "OpenAI GPT", sublabel: "Demand Forecast", type: "ai" as const },
      { label: "n8n Logic", sublabel: "Reorder Trigger", type: "action" as const },
      { label: "Google Sheets", sublabel: "Log & PO Draft", type: "database" as const },
      { label: "Slack Alert", sublabel: "1-Click Approve", type: "notify" as const },
    ],
  },
  {
    tag: "Post-Purchase",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    title: "Post-Purchase Review & LTV Automation",
    client: "US Health & Wellness Brand · $1.1M ARR",
    challenge: "Only 2% review rate. No structured post-purchase flow. Repeat purchase rate low at 18%, with no AI-driven re-engagement.",
    solution: "Built a 3-stage post-purchase journey: Day 7 AI-personalised delivery check-in, Day 14 OpenAI-generated review request matched to product type, Day 30 AI upsell recommendation via Klaviyo based on purchase history.",
    results: ["2% → 14% review rate", "Repeat purchase rate +22%", "LTV increased $47/customer", "Fully automated"],
    tools: ["Shopify", "n8n", "OpenAI", "Klaviyo"],
    toolColors: ["bg-green-100 text-green-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700"],
    workflow: [
      { label: "Shopify", sublabel: "Order Fulfilled", type: "trigger" as const },
      { label: "Wait 7 Days", sublabel: "n8n Timer", type: "action" as const },
      { label: "OpenAI GPT", sublabel: "Generate Message", type: "ai" as const },
      { label: "Klaviyo", sublabel: "Email Sequence", type: "notify" as const },
      { label: "Airtable", sublabel: "LTV Tracking", type: "database" as const },
    ],
  },
  {
    tag: "B2B Sales",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    title: "AI Lead Qualification & CRM Pipeline",
    client: "B2B Ecommerce SaaS · US Market",
    challenge: "Sales team spending 60% of time on unqualified leads from website forms. No automated enrichment or scoring. CRM updates done manually.",
    solution: "Built an n8n workflow that captures form submissions, enriches leads via Apollo, scores them with OpenAI, pushes qualified leads to HubSpot with full context, and fires Slack notifications to the right rep.",
    results: ["Sales time on qualified leads +3×", "Lead response time: 2hrs → 4mins", "CRM data completeness 95%", "40% more meetings booked"],
    tools: ["Website Form", "n8n", "OpenAI", "Apollo", "HubSpot", "Slack"],
    toolColors: ["bg-gray-100 text-gray-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700", "bg-orange-100 text-orange-700", "bg-slate-100 text-slate-700"],
    workflow: [
      { label: "Web Form", sublabel: "Lead Submitted", type: "trigger" as const },
      { label: "Apollo API", sublabel: "Enrich Lead", type: "action" as const },
      { label: "OpenAI GPT", sublabel: "Score & Qualify", type: "ai" as const },
      { label: "HubSpot", sublabel: "Create Contact", type: "database" as const },
      { label: "Slack", sublabel: "Notify Sales Rep", type: "notify" as const },
    ],
  },
  {
    tag: "Content",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100",
    title: "AI Product Description Generator",
    client: "WooCommerce Electronics Store · €900K ARR",
    challenge: "4,000 SKU catalogue. Product descriptions written manually, inconsistent, SEO-weak, took 20 min per product. New product launch times were 3-5 days.",
    solution: "Built an n8n pipeline that reads new product data from Google Sheets, sends specs to OpenAI with a brand-voice prompt and SEO instructions, writes descriptions directly to WooCommerce via API, and logs all outputs.",
    results: ["4,000 products described in 8 hours", "Organic traffic +34% in 60 days", "Launch time: 5 days → 2 hours", "Brand voice consistency 100%"],
    tools: ["Google Sheets", "n8n", "OpenAI", "WooCommerce"],
    toolColors: ["bg-green-100 text-green-700", "bg-red-100 text-red-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700"],
    workflow: [
      { label: "Google Sheets", sublabel: "New Product Row", type: "trigger" as const },
      { label: "n8n Router", sublabel: "Format Specs", type: "action" as const },
      { label: "OpenAI GPT", sublabel: "Write Description", type: "ai" as const },
      { label: "WooCommerce", sublabel: "Publish Product", type: "database" as const },
      { label: "Sheets Log", sublabel: "Track Output", type: "notify" as const },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h2>
              <p className="mt-2 text-gray-500 max-w-xl">
                Real AI automation workflows we built for ecommerce clients, with the actual n8n pipeline diagrams.
              </p>
            </div>
            <a href="#contact" className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 shrink-0">
              Start Your Project <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              {/* Workflow diagram header */}
              <div className="bg-slate-50 border-b border-gray-100 px-5 pt-5 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.tagColor}`}>
                    {c.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">n8n Workflow</span>
                </div>
                {/* Animated workflow diagram */}
                <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                  <div className="px-3 py-2 overflow-x-auto">
                    <AnimatedWorkflow nodes={c.workflow} uid={`case-${i}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{c.title}</h3>
                <p className="text-xs text-gray-400 font-medium mb-4">{c.client}</p>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Challenge</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Solution</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Results</p>
                  <div className="grid grid-cols-2 gap-2">
                    {c.results.map((r) => (
                      <div key={r} className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-2.5 py-1.5">
                        <span className="text-green-500 text-xs">✓</span>
                        <span className="text-green-800 text-xs font-medium">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {c.tools.map((t, ti) => (
                    <span key={t} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${c.toolColors[ti] ?? "bg-gray-100 text-gray-600"}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a href="#contact" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors">
                    Build This for My Store <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
