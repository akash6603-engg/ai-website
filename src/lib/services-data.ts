export type ServiceData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroTag: string;
  stats: { value: string; label: string }[];
  features: { num: string; title: string; desc: string }[];
  benefits: { title: string; desc: string; icon: string }[];
  technologies: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceData[] = [
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    subtitle: "Automate end-to-end business processes with AI-powered workflows",
    description:
      "Transform your ecommerce operations by replacing manual, repetitive tasks with intelligent AI workflows. We design and deploy custom n8n pipelines that connect your entire stack -from order management to fulfilment, support to finance -running 24/7 without human intervention.",
    heroTag: "Workflow Automation",
    stats: [
      { value: "80%", label: "Reduction in manual tasks" },
      { value: "60+", label: "Workflows delivered" },
      { value: "2-4 wks", label: "Average deployment time" },
      { value: "24/7", label: "Automated operations" },
    ],
    features: [
      { num: "01", title: "Order-to-Fulfilment Automation", desc: "Automatically route new orders, update inventory, trigger fulfilment partners, and notify customers -from purchase to delivery with zero manual steps." },
      { num: "02", title: "Multi-App Integration Pipelines", desc: "Connect Shopify, WooCommerce, Klaviyo, Gorgias, Airtable, Google Sheets, Slack, and 400+ apps into seamless automated workflows using n8n." },
      { num: "03", title: "AI-Triggered Decision Logic", desc: "Embed GPT-4 into workflow decision branches -letting AI classify, route, and act on data in real time rather than just passing it between apps." },
      { num: "04", title: "Error Handling & Monitoring", desc: "Every workflow includes retry logic, error alerts via Slack or email, and a monitoring dashboard so failures are caught and resolved instantly." },
      { num: "05", title: "Scheduled & Event-Driven Flows", desc: "Trigger automations on a schedule (daily reports, weekly reorders) or in real time from events (new order, form submission, low stock alert)." },
      { num: "06", title: "Custom Workflow Documentation", desc: "Every automation is fully documented with flow diagrams, credentials guide, and runbook so your team can understand, maintain, and extend it." },
    ],
    benefits: [
      { title: "Eliminate Repetitive Manual Work", desc: "Free your team from copy-pasting data, sending manual emails, and updating spreadsheets -let the AI do it.", icon: "⚡" },
      { title: "Faster Operations at Lower Cost", desc: "Automated workflows execute in seconds and run 24/7 -doing the work of multiple FTEs at a fraction of the cost.", icon: "💰" },
      { title: "Fewer Errors, More Consistency", desc: "AI workflows follow the same logic every time -no human error, no forgotten steps, no off-day mistakes.", icon: "✅" },
      { title: "Scales With Your Business", desc: "Whether you process 100 orders/day or 10,000, the same workflow handles it without adding headcount.", icon: "📈" },
    ],
    technologies: ["n8n", "OpenAI GPT-4", "Zapier", "Make (Integromat)", "Airtable", "Google Sheets", "Slack", "Webhooks", "REST APIs"],
    useCases: ["Order management automation", "Inventory reorder workflows", "Customer support triage", "Invoice & billing automation", "Report generation", "Lead routing pipelines"],
    faqs: [
      { q: "What tools do you use to build workflows?", a: "We primarily build on n8n (self-hosted or cloud) for maximum flexibility and control. We also use Make (Integromat) and Zapier depending on the client's existing stack and budget." },
      { q: "Do I need to know how to code?", a: "No. We handle the full build and give you a visual interface to monitor your workflows. You won't need to touch any code to manage or trigger them." },
      { q: "Can you automate workflows that involve AI decision-making?", a: "Yes -that's our speciality. We embed OpenAI, Claude, or Gemini into workflow branches so AI handles classification, drafting, scoring, and routing decisions in real time." },
      { q: "What happens if a workflow fails?", a: "Every workflow we build includes error handling with automatic retries and instant Slack/email alerts. We also provide a 30-day support window post-launch to fix any issues." },
    ],
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    subtitle: "24/7 intelligent chatbots trained on your brand, products, and policies",
    description:
      "We build custom AI chatbots for ecommerce brands that handle customer support, product discovery, order tracking, and returns -resolving 70%+ of queries automatically without human intervention. Every bot is trained on your data and deployed where your customers are.",
    heroTag: "Chatbot Development",
    stats: [
      { value: "70%+", label: "Queries resolved automatically" },
      { value: "< 5s", label: "Average response time" },
      { value: "24/7", label: "Always-on support" },
      { value: "68%", label: "Average ticket reduction" },
    ],
    features: [
      { num: "01", title: "Brand-Voice Training", desc: "Your chatbot is trained on your product catalogue, FAQs, return policies, and tone of voice -so it responds like your best support agent, not a generic bot." },
      { num: "02", title: "Live Order & Inventory Queries", desc: "Bot connects to your Shopify or WooCommerce store in real time -customers can check order status, delivery ETAs, and stock availability instantly." },
      { num: "03", title: "Returns & Refund Handling", desc: "Automated return eligibility checks, refund policy explanations, and step-by-step return initiation -all handled by the bot without human touch." },
      { num: "04", title: "Multi-Channel Deployment", desc: "Deploy your chatbot on your website, WhatsApp, Facebook Messenger, or Instagram DMs -wherever your customers message you most." },
      { num: "05", title: "Human Handoff & Escalation", desc: "When the bot can't resolve an issue, it smoothly escalates to a human agent via Gorgias, Zendesk, or your helpdesk -with full conversation context." },
      { num: "06", title: "Conversation Memory & Personalisation", desc: "The bot maintains session memory and recognises returning customers -delivering personalised, context-aware responses across every interaction." },
    ],
    benefits: [
      { title: "Reduce Support Costs by 60%+", desc: "Automate the 70% of tickets that are repetitive -order status, returns, FAQs -and free your team for high-value conversations.", icon: "💬" },
      { title: "Never Miss a Customer Message", desc: "Your chatbot responds in under 5 seconds, 24 hours a day -no missed messages, no long wait times, no frustrated customers.", icon: "🌍" },
      { title: "Consistent, Accurate Responses", desc: "Unlike human agents, the AI gives the same correct answer every time -no policy mistakes, no outdated information.", icon: "✅" },
      { title: "Boost Customer Satisfaction", desc: "Fast, accurate, always-available support directly improves CSAT scores and reduces negative reviews.", icon: "⭐" },
    ],
    technologies: ["OpenAI GPT-4", "n8n", "Airtable", "Shopify API", "WooCommerce API", "Gorgias", "Zendesk", "WhatsApp Business API", "Intercom"],
    useCases: ["Order tracking & status updates", "Return & refund processing", "Product availability queries", "FAQs & policy questions", "Lead qualification", "Post-purchase follow-up"],
    faqs: [
      { q: "How is the chatbot trained on my store's data?", a: "We extract your product catalogue, FAQs, policies, and order data, then use this as the knowledge base for your GPT-powered bot. Updates to your store data are synced automatically." },
      { q: "Will the bot work on WhatsApp?", a: "Yes. We build WhatsApp AI agents using the WhatsApp Business API -the same AI brain, delivered on the channel your customers use most." },
      { q: "What happens when the bot doesn't know the answer?", a: "The bot is programmed to gracefully escalate to a human agent via your helpdesk (Gorgias, Zendesk, or Freshdesk) with full conversation history attached." },
      { q: "Can the bot handle multiple languages?", a: "Yes -GPT-4 natively supports 50+ languages. For EU clients, we configure the bot to detect and respond in the customer's language automatically." },
    ],
  },
  {
    slug: "document-email-automation",
    title: "Document & Email Automation",
    subtitle: "Eliminate manual document processing and email workflows with AI",
    description:
      "Stop spending hours processing invoices, extracting data from PDFs, and sending templated emails manually. We build AI-powered document processing pipelines and intelligent email automation systems that handle the entire flow -from ingestion to action -automatically.",
    heroTag: "Document & Email Automation",
    stats: [
      { value: "90%", label: "Faster document processing" },
      { value: "99%+", label: "Data extraction accuracy" },
      { value: "10hrs+", label: "Saved per week per team" },
      { value: "0", label: "Manual copy-paste required" },
    ],
    features: [
      { num: "01", title: "AI Invoice & PO Processing", desc: "Automatically extract vendor names, amounts, line items, and due dates from invoices and purchase orders -then push to your accounting software." },
      { num: "02", title: "PDF & Document Data Extraction", desc: "Use AI OCR to extract structured data from any document -contracts, delivery notes, compliance forms -and store it in your database or CRM." },
      { num: "03", title: "Automated Email Parsing", desc: "Monitor shared inboxes (orders@, support@, returns@), extract key data from incoming emails, and trigger the right workflow automatically." },
      { num: "04", title: "Personalised Email Campaigns", desc: "AI-generated email sequences personalised per recipient using OpenAI -go beyond merge tags to truly individual messages at scale." },
      { num: "05", title: "Transactional Email Automation", desc: "Order confirmations, shipping updates, review requests, win-back emails -all automated, personalised, and triggered by real-time store events." },
      { num: "06", title: "Email Classification & Routing", desc: "AI reads incoming support emails, classifies intent (complaint, refund, delivery, enquiry), assigns priority, and routes to the right team member." },
    ],
    benefits: [
      { title: "Hours Back Every Week", desc: "Document processing that takes your team hours is done by AI in minutes -giving back 10+ hours per week per person.", icon: "⏰" },
      { title: "Near-Zero Data Entry Errors", desc: "AI extracts and validates data with 99%+ accuracy -eliminating the typos and missed fields that cost time and money to fix.", icon: "🎯" },
      { title: "Faster Payment & Fulfilment Cycles", desc: "Invoices processed and approved in minutes instead of days -improving cash flow and supplier relationships.", icon: "💸" },
      { title: "Scalable Without Extra Headcount", desc: "Process 10 documents or 10,000 with the same pipeline -no additional staff, no bottlenecks.", icon: "📈" },
    ],
    technologies: ["OpenAI GPT-4 Vision", "n8n", "Google Document AI", "Zapier", "Gmail API", "Outlook API", "Airtable", "Google Sheets", "QuickBooks API"],
    useCases: ["Invoice & PO automation", "Supplier document processing", "Order confirmation emails", "Support email routing", "Shipping notification flows", "Contract data extraction"],
    faqs: [
      { q: "Can you extract data from scanned paper documents?", a: "Yes -we use GPT-4 Vision and Google Document AI to process both digital PDFs and scanned images with high accuracy, even for handwritten or low-quality scans." },
      { q: "What email providers do you integrate with?", a: "We work with Gmail, Outlook/Microsoft 365, and any IMAP-compatible email service. For email sending, we integrate with Klaviyo, Mailchimp, Resend, and SendGrid." },
      { q: "Can the AI write personalised emails, not just send templates?", a: "Yes. We use OpenAI to generate genuinely personalised email content for each recipient -based on their purchase history, behaviour, and segment -not just variable substitution." },
      { q: "How do you handle sensitive financial documents?", a: "All document processing runs in your own secure environment. We never store financial data on third-party servers, and processing pipelines are built with encryption and access controls." },
    ],
  },
  {
    slug: "lead-scoring-qualification",
    title: "Lead Scoring & Qualification",
    subtitle: "AI that identifies your best leads and gets them to sales in seconds",
    description:
      "Stop wasting your sales team's time on cold leads. We build AI-powered lead qualification systems that enrich inbound leads with company data, score them against your ideal customer profile, route hot leads to the right rep instantly, and push everything into your CRM -automatically.",
    heroTag: "Lead Scoring & Qualification",
    stats: [
      { value: "3×", label: "More qualified meetings booked" },
      { value: "90s", label: "Lead response time (vs 48hrs)" },
      { value: "100%", label: "CRM data completeness" },
      { value: "40%", label: "More pipeline from same leads" },
    ],
    features: [
      { num: "01", title: "Instant Lead Capture & Enrichment", desc: "The moment a form is submitted, AI enriches the lead with job title, company size, LinkedIn profile, tech stack, and funding stage via Apollo or Clearbit." },
      { num: "02", title: "AI Lead Scoring", desc: "GPT-4 scores each lead against your ICP -considering industry, company size, role, behaviour, and intent signals -and assigns a priority tier (Hot / Warm / Cold)." },
      { num: "03", title: "Automated CRM Creation & Deduplication", desc: "Enriched leads are pushed into HubSpot, Salesforce, or Pipedrive with all fields populated -and duplicates are detected and merged automatically." },
      { num: "04", title: "Smart Lead Routing", desc: "Hot leads are instantly routed to the right sales rep based on territory, vertical, or deal size -with a Slack alert and full lead brief so they can call within minutes." },
      { num: "05", title: "Personalised Outreach Drafting", desc: "AI drafts a personalised first-touch email for each qualified lead -based on their company, role, and the product they enquired about -ready for one-click send." },
      { num: "06", title: "Lead Nurture Sequences", desc: "Warm leads that aren't sales-ready are enrolled in AI-personalised nurture sequences via Klaviyo or HubSpot -keeping your brand top of mind until they convert." },
    ],
    benefits: [
      { title: "Sales Team Focuses on Hot Leads Only", desc: "AI handles qualification so your reps spend 100% of their time on leads that are ready to buy -not sifting through noise.", icon: "🎯" },
      { title: "Respond Before Competitors Do", desc: "First-response times drop from hours to seconds. Studies show responding within 5 minutes increases conversion 9×.", icon: "⚡" },
      { title: "Full Pipeline Visibility", desc: "Every lead is scored, tracked, and logged in your CRM automatically -giving leadership a clean, accurate view of pipeline at all times.", icon: "📊" },
      { title: "More Revenue from the Same Traffic", desc: "Better qualification and faster follow-up means more pipeline from leads you're already generating -without spending more on ads.", icon: "💰" },
    ],
    technologies: ["n8n", "OpenAI GPT-4", "Apollo API", "Clearbit", "HubSpot", "Salesforce", "Pipedrive", "Slack", "Klaviyo"],
    useCases: ["Inbound lead qualification", "Demo request routing", "Event lead follow-up", "Freemium-to-paid conversion", "B2B sales pipeline automation", "Partner lead management"],
    faqs: [
      { q: "What data sources do you use to enrich leads?", a: "We primarily use Apollo.io and Clearbit for enrichment -providing company size, industry, revenue, job title, LinkedIn URL, tech stack, and more. We can also integrate with your existing data sources." },
      { q: "Which CRMs do you integrate with?", a: "We support HubSpot, Salesforce, Pipedrive, Zoho CRM, and most other major CRMs via API. The enriched lead is created with all custom fields populated and duplicates removed." },
      { q: "How does the AI scoring work?", a: "We define your Ideal Customer Profile (ICP) in a scoring prompt -industry, company size, job title, budget signals, etc. GPT-4 evaluates each enriched lead against the ICP and assigns a tier with a reasoning note." },
      { q: "Can you automate the first outreach email?", a: "Yes. For each hot lead, we can have GPT-4 draft a personalised first email referencing their company, role, and specific enquiry -sent to the rep for one-click sending, or triggered automatically." },
    ],
  },
  {
    slug: "custom-gpt-integration",
    title: "Custom GPT Integration",
    subtitle: "Embed the power of GPT-4 directly into your ecommerce operations",
    description:
      "We integrate OpenAI's GPT-4 -and other leading AI models like Claude and Gemini -directly into your existing tools, workflows, and customer-facing products. From AI-powered product descriptions to intelligent support agents, we build the exact AI features your business needs.",
    heroTag: "Custom GPT Integration",
    stats: [
      { value: "10×", label: "Content production speed" },
      { value: "GPT-4", label: "Latest OpenAI models" },
      { value: "48hrs", label: "Typical integration time" },
      { value: "100%", label: "Custom to your use case" },
    ],
    features: [
      { num: "01", title: "AI Product Description Generation", desc: "Connect GPT-4 to your product catalogue -automatically generate SEO-optimised, brand-voice descriptions for every SKU at scale." },
      { num: "02", title: "AI-Powered Search & Recommendations", desc: "Embed semantic search into your store so customers find products by describing what they want -not just exact keyword matching." },
      { num: "03", title: "GPT in Your Internal Tools", desc: "Add AI writing, summarisation, classification, or Q&A capabilities to your internal Notion, Google Sheets, Slack, or custom dashboards." },
      { num: "04", title: "Custom Knowledge Base AI", desc: "Build a GPT assistant trained on your internal docs, SOPs, and product knowledge -so your team gets instant, accurate answers without digging through files." },
      { num: "05", title: "AI Content & Copy Generation", desc: "Automate creation of ad copy, email subject lines, social posts, and blog outlines -personalised per audience segment and consistent with your brand voice." },
      { num: "06", title: "Multi-Model Architecture", desc: "We select the right model for each task -GPT-4 for reasoning, Claude for long documents, Gemini for multimodal tasks -optimising for quality and cost." },
    ],
    benefits: [
      { title: "Produce Content at Machine Speed", desc: "Write thousands of product descriptions, emails, or ads in the time it takes a human to write ten -with consistent quality and brand voice.", icon: "✍️" },
      { title: "AI That Knows Your Business", desc: "Unlike generic ChatGPT, your integration is trained on your data, policies, and tone -giving accurate, on-brand outputs every time.", icon: "🧠" },
      { title: "Reduce Dependency on Agencies", desc: "Generate high-quality marketing copy, support responses, and product content in-house -reducing external content costs by 60-80%.", icon: "💰" },
      { title: "Continuous Improvement", desc: "Models are updated, prompts are refined, and outputs improve over time as we learn what works best for your specific use cases.", icon: "🔄" },
    ],
    technologies: ["OpenAI GPT-4", "Claude (Anthropic)", "Google Gemini", "LangChain", "Pinecone", "n8n", "Python", "Shopify API", "REST APIs"],
    useCases: ["Product description generation", "AI-powered site search", "Email copy automation", "Internal knowledge base", "Ad creative generation", "Customer sentiment analysis"],
    faqs: [
      { q: "Which AI models do you work with?", a: "We primarily use OpenAI GPT-4 and GPT-4o, but we also work with Anthropic Claude, Google Gemini, and open-source models (Llama, Mistral) depending on cost, privacy, and capability requirements." },
      { q: "Can you integrate AI into our existing Shopify store?", a: "Yes. We can add AI capabilities to any Shopify store -product description generation, AI search, recommendation widgets, and chatbots -without requiring you to rebuild your store." },
      { q: "How do you ensure the AI outputs match our brand voice?", a: "We develop detailed system prompts and few-shot examples from your existing content. These act as instructions to the model so every output is consistent with your tone, style, and terminology." },
      { q: "What about data privacy with OpenAI?", a: "We use the OpenAI API (not ChatGPT), which means your data is not used for model training by default. For sensitive data, we can also deploy open-source models in your own infrastructure." },
    ],
  },
  {
    slug: "ai-business-intelligence",
    title: "AI-Powered Business Intelligence",
    subtitle: "Turn your store data into decisions with AI-driven dashboards and insights",
    description:
      "Stop drowning in spreadsheets and make smarter decisions faster. We build custom AI analytics systems for ecommerce brands -automated reporting dashboards, predictive forecasts, and AI-generated insights that tell you exactly what to do next to grow revenue.",
    heroTag: "Business Intelligence",
    stats: [
      { value: "92%", label: "Forecast accuracy" },
      { value: "10hrs+", label: "Saved on reporting per week" },
      { value: "Real-time", label: "Dashboard updates" },
      { value: "100%", label: "Custom to your metrics" },
    ],
    features: [
      { num: "01", title: "Automated KPI Dashboards", desc: "Custom dashboards built in Looker Studio, Metabase, or your tool of choice -auto-updated daily with revenue, AOV, LTV, CAC, and all your core ecommerce metrics." },
      { num: "02", title: "AI Demand Forecasting", desc: "Predict future sales and inventory needs using historical data, seasonality, and external signals -so you reorder at the right time and avoid stockouts or overstock." },
      { num: "03", title: "Customer Cohort & LTV Analysis", desc: "Understand which acquisition channels produce your best customers, how cohorts behave over time, and where to invest marketing budget for maximum LTV." },
      { num: "04", title: "AI Weekly Insight Reports", desc: "Every Monday, AI analyses your store's week-over-week performance and emails your team a plain-English summary with the 3 most important actions to take." },
      { num: "05", title: "Anomaly Detection & Alerts", desc: "AI monitors your key metrics in real time and fires an alert the moment something unusual happens -conversion drop, revenue spike, or traffic anomaly." },
      { num: "06", title: "Marketing Attribution Modelling", desc: "Go beyond last-click attribution -AI models the true contribution of each channel to revenue, so you know exactly where to increase or cut ad spend." },
    ],
    benefits: [
      { title: "Decisions Based on Data, Not Gut Feel", desc: "Every major decision -inventory, marketing spend, pricing -is backed by AI analysis of your actual data, not intuition.", icon: "📊" },
      { title: "Hours Saved on Reporting", desc: "Automated dashboards and weekly AI reports replace hours of manual spreadsheet work -every week, without fail.", icon: "⏰" },
      { title: "Catch Problems Before They Hurt Revenue", desc: "Real-time anomaly detection means you know about a conversion drop or a payment failure within minutes, not days.", icon: "🚨" },
      { title: "Predict and Prepare, Not React", desc: "AI demand forecasting means you're always stocked for what's coming -seasonal peaks, campaign spikes, and trend shifts included.", icon: "🔮" },
    ],
    technologies: ["OpenAI GPT-4", "n8n", "Looker Studio", "Metabase", "Google BigQuery", "Shopify Analytics API", "Google Sheets", "Python", "Airtable"],
    useCases: ["Revenue & conversion dashboards", "Inventory demand forecasting", "Marketing spend attribution", "LTV & cohort analysis", "Weekly AI performance reports", "Real-time anomaly alerts"],
    faqs: [
      { q: "What data sources can you pull into the dashboards?", a: "We connect to Shopify, WooCommerce, Google Analytics 4, Meta Ads, Google Ads, Klaviyo, and any platform with an API. All data is centralised into a single dashboard." },
      { q: "Do we need a data warehouse or BI tool?", a: "Not necessarily. For most ecommerce clients, we build directly on top of your existing tools (Shopify, Google Sheets, Looker Studio) without requiring expensive infrastructure. For larger brands, we can set up BigQuery or Redshift." },
      { q: "How does the AI weekly report work?", a: "Every Monday, an n8n workflow pulls your latest store data, sends it to GPT-4 for analysis, and emails your team a plain-English report with week-over-week changes and 3 prioritised action recommendations." },
      { q: "Can the AI predict stockouts before they happen?", a: "Yes. Our demand forecasting model analyses your sales velocity, seasonality, and lead times to predict when each SKU will run out -and triggers a reorder alert before you're ever out of stock." },
    ],
  },
  {
    slug: "n8n-workflow-automation-services",
    title: "n8n Workflow Automation Services",
    subtitle: "Expert n8n automation to connect your apps and eliminate manual work",
    description:
      "We specialise in building, hosting, and maintaining n8n workflows that connect your entire tech stack. From custom node development to AI-integrated pipelines, our n8n experts deliver production-ready automations that run 24/7 -reducing costs and scaling your operations without adding headcount.",
    heroTag: "n8n Automation",
    stats: [
      { value: "200+", label: "n8n workflows delivered" },
      { value: "400+", label: "Apps & APIs integrated" },
      { value: "99.9%", label: "Workflow uptime" },
      { value: "2 wks", label: "Average delivery time" },
    ],
    features: [
      { num: "01", title: "AI-Driven Workflow Development", desc: "We embed OpenAI, Cohere, and Gemini models directly into your n8n workflows -enabling AI-powered decision logic, classification, summarisation, and generation at every step." },
      { num: "02", title: "Custom n8n Node Development", desc: "When a native integration doesn't exist, we build custom n8n nodes for any API or service -giving you the exact trigger or action your workflow requires." },
      { num: "03", title: "n8n Integration Services", desc: "Connect Shopify, HubSpot, Salesforce, Google Workspace, Airtable, Slack, and 400+ apps into unified automated workflows tailored to your processes." },
      { num: "04", title: "Consulting & Audit", desc: "Already running n8n but need it optimised? We audit your existing workflows, identify performance bottlenecks, and redesign for reliability, speed, and maintainability." },
      { num: "05", title: "AI Chatbot Workflow Integration", desc: "We integrate AI chatbot systems with n8n so conversations trigger backend workflows -from CRM updates to order lookups and support ticket creation." },
      { num: "06", title: "Self-Hosted Setup & Management", desc: "We deploy and manage self-hosted n8n instances on AWS, DigitalOcean, or your own server -with Docker, SSL, backups, and monitoring fully configured." },
    ],
    benefits: [
      { title: "True Workflow Ownership", desc: "Self-hosted n8n means you own your automations -no per-task pricing, no vendor lock-in, full control over your data and logic.", icon: "🔐" },
      { title: "Unlimited Workflow Complexity", desc: "n8n handles multi-step, branching, and AI-powered workflows that simpler tools like Zapier can't -built exactly to your requirements.", icon: "⚙️" },
      { title: "AI Embedded at Every Step", desc: "Every workflow can include AI decision nodes -letting GPT-4, Gemini, or Cohere read, classify, and act on data in real time.", icon: "🤖" },
      { title: "Built for Scale", desc: "From 10 automations to 1,000, self-hosted n8n scales with your business without increasing per-workflow costs.", icon: "📈" },
    ],
    technologies: ["n8n", "Python", "TypeScript", "OpenAI", "Cohere", "Gemini", "Docker", "DigitalOcean", "AWS"],
    useCases: ["CRM & sales pipeline automation", "E-commerce order workflows", "AI content generation pipelines", "HR & onboarding automation", "Finance & invoice processing", "Multi-app data sync"],
    faqs: [
      { q: "Why use n8n instead of Zapier or Make?", a: "n8n is self-hosted and open-source -you pay a flat server cost instead of per-task fees, own all your data, and have full flexibility to build custom nodes and complex AI-integrated workflows that Zapier and Make cannot handle." },
      { q: "Do you offer ongoing n8n management?", a: "Yes. We offer monthly retainer packages that include workflow monitoring, error resolution, updates, and new automation builds -so you always have n8n expertise on call." },
      { q: "Can you migrate our existing Zapier or Make workflows to n8n?", a: "Absolutely. We map your existing automations, rebuild them in n8n with improved logic and error handling, and run parallel tests before cutting over -with zero downtime." },
      { q: "What hosting options do you recommend for n8n?", a: "For most clients, we recommend DigitalOcean or AWS EC2 with Docker. We configure SSL, automatic backups, and uptime monitoring as part of the setup. n8n Cloud is also an option if you prefer a managed service." },
    ],
  },
  {
    slug: "ai-agent-development-services",
    title: "Build Intelligent AI Agents",
    subtitle: "Custom AI agents that research, decide, and act autonomously on your behalf",
    description:
      "We design and deploy intelligent AI agents that go beyond chatbots -autonomous systems that can browse the web, query databases, execute multi-step workflows, and make decisions without human input. From research agents to multi-agent orchestration systems, we build agents that genuinely work.",
    heroTag: "AI Agent Development",
    stats: [
      { value: "50+", label: "AI agents deployed" },
      { value: "24/7", label: "Autonomous operation" },
      { value: "10×", label: "Task completion speed" },
      { value: "100%", label: "Custom-built to your needs" },
    ],
    features: [
      { num: "01", title: "n8n Workflow Agents", desc: "AI agents built inside n8n that autonomously trigger, branch, and execute multi-step workflows based on incoming data, schedules, or events -with full observability." },
      { num: "02", title: "Voice-Enabled AI Agents", desc: "Conversational voice agents powered by ElevenLabs and Vapi that handle inbound and outbound calls -from appointment booking to customer support -autonomously." },
      { num: "03", title: "AI Chatbot Agents", desc: "Intelligent chatbot agents with tool-use capabilities -they can look up orders, query databases, send emails, and book appointments mid-conversation." },
      { num: "04", title: "Research & Executive Agents", desc: "AI agents that browse the web, aggregate data from multiple sources, synthesise findings, and deliver structured reports or recommendations on demand." },
      { num: "05", title: "Multi-Agent Systems", desc: "Orchestrated systems where multiple specialised agents collaborate -one handles data retrieval, one analysis, one execution -enabling complex autonomous workflows." },
      { num: "06", title: "Agent Integration", desc: "We integrate your AI agents with any existing system -CRM, ERP, databases, APIs -so they operate natively within your current tech stack." },
    ],
    benefits: [
      { title: "Autonomous Task Completion", desc: "Agents execute complex multi-step tasks from start to finish without human involvement -freeing your team for strategic work.", icon: "🤖" },
      { title: "Always Learning & Improving", desc: "Agents built with LangChain and memory systems improve over time as they process more interactions and data.", icon: "🧠" },
      { title: "Scales Instantly", desc: "Deploy one agent or fifty -AI agents scale to handle any volume of tasks simultaneously without performance degradation.", icon: "📈" },
      { title: "Works Across Every Channel", desc: "Web, voice, chat, email, API -your agent operates wherever the task requires, switching context seamlessly.", icon: "🌐" },
    ],
    technologies: ["n8n", "Python", "LangChain", "OpenAI", "ChromaDB", "PineCone", "Cohere", "Gemini", "Weaviate"],
    useCases: ["Autonomous lead research", "Competitor monitoring agents", "Customer support agents", "Document analysis & summarisation", "Automated reporting agents", "Order & inventory agents"],
    faqs: [
      { q: "What's the difference between a chatbot and an AI agent?", a: "A chatbot responds to questions. An AI agent takes actions -it can browse the web, query your database, send emails, update your CRM, and execute workflows autonomously based on what it discovers." },
      { q: "What frameworks do you use to build AI agents?", a: "We primarily use LangChain and n8n for agent orchestration, combined with OpenAI function-calling, ChromaDB for vector memory, and Pinecone for long-term knowledge retrieval." },
      { q: "Can agents be connected to our internal databases?", a: "Yes. We build agents with tool-use capabilities that allow them to query your databases, call internal APIs, and read/write to your systems -all with appropriate access controls." },
      { q: "How do you ensure agents don't take wrong actions?", a: "We implement confidence thresholds, human-in-the-loop approval steps for high-risk actions, and full audit logging -so your agents act autonomously within defined guardrails." },
    ],
  },
  {
    slug: "voice-ai-agent-development-services",
    title: "Build Smart Human-Like Voice AI Agents",
    subtitle: "Autonomous voice agents that handle calls 24/7 with natural conversation",
    description:
      "We build production-ready voice AI agents powered by ElevenLabs, Vapi, and Retell AI that handle inbound and outbound calls autonomously -booking appointments, managing reservations, handling customer support, and acting as always-available receptionists. Natural, human-like conversations that convert.",
    heroTag: "Voice AI Agents",
    stats: [
      { value: "24/7", label: "Call handling availability" },
      { value: "< 1s", label: "Response latency" },
      { value: "95%", label: "Successful call resolution rate" },
      { value: "50+", label: "Voice agents deployed" },
    ],
    features: [
      { num: "01", title: "Appointment Booking Agent", desc: "AI voice agent that handles inbound booking calls -checks calendar availability via Cal.com or Calendly, confirms appointment details, and sends confirmation messages automatically." },
      { num: "02", title: "Event RSVP Agent", desc: "Outbound voice agent that calls your attendee list, collects RSVPs, answers event FAQs, and logs responses directly into your CRM or Airtable." },
      { num: "03", title: "Restaurant Reservation Agent", desc: "Inbound reservation agent for restaurants -takes booking details, checks availability, confirms reservations, and handles special requests without any staff involvement." },
      { num: "04", title: "Customer Support Voice Agent", desc: "Handle inbound support calls autonomously -answer FAQs, look up order status, process basic requests, and escalate to humans only when genuinely needed." },
      { num: "05", title: "Receptionist Voice Agent", desc: "Always-on AI receptionist that answers every inbound call, routes to the right department, takes messages, and handles common queries -24/7, never on hold." },
      { num: "06", title: "Custom Voice Agent", desc: "Any voice use case unique to your business -we design, build, and deploy custom voice agents integrated with your specific tools, data, and workflows." },
    ],
    benefits: [
      { title: "Never Miss a Call Again", desc: "Your AI receptionist picks up every call instantly, 24/7 -no hold times, no voicemail, no missed opportunities.", icon: "📞" },
      { title: "Human-Like Natural Conversations", desc: "Powered by ElevenLabs voice synthesis, your agent sounds indistinguishable from a real person -no robotic tone, no frustrating menus.", icon: "🗣️" },
      { title: "Reduce Staffing Costs", desc: "One voice agent handles the call volume of multiple phone staff -at a fraction of the cost, with no sick days or turnover.", icon: "💰" },
      { title: "Seamless Calendar & CRM Integration", desc: "Appointments, RSVPs, and call outcomes are logged automatically in your tools -zero manual data entry.", icon: "📅" },
    ],
    technologies: ["Eleven Labs", "Vapi", "Retell AI", "Twilio", "Cal.com", "Calendly", "Airtable"],
    useCases: ["Appointment booking via phone", "Outbound RSVP collection", "Restaurant reservation handling", "Inbound customer support", "24/7 AI receptionist", "Lead qualification calls"],
    faqs: [
      { q: "How natural do the voice agents sound?", a: "Very natural. We use ElevenLabs ultra-realistic voice synthesis combined with low-latency LLM inference -the result is human-like conversation with under 1 second response time." },
      { q: "Which platforms do you build voice agents on?", a: "We work with Vapi, Retell AI, and Twilio -selecting the best platform for your use case, call volume, and integration requirements." },
      { q: "Can the voice agent integrate with our booking system?", a: "Yes. We integrate with Cal.com, Calendly, Acuity, and custom booking systems -the agent checks real-time availability and confirms bookings live on the call." },
      { q: "What happens when the agent can't handle a call?", a: "We configure intelligent escalation -the agent recognises when a call needs a human and transfers it immediately, with a call summary passed to the receiving agent." },
    ],
  },
  {
    slug: "chatbot-development-services",
    title: "Expert ChatBot Development Company",
    subtitle: "Custom AI chatbots trained on your data, deployed on every channel",
    description:
      "We build enterprise-grade AI chatbots using the latest RAG architectures, Rasa frameworks, and LLM integrations -trained on your specific knowledge base and deployed across web, WhatsApp, and every channel your customers use. Bots that actually resolve queries, not just deflect them.",
    heroTag: "ChatBot Development",
    stats: [
      { value: "70%+", label: "Query resolution rate" },
      { value: "50+", label: "Languages supported" },
      { value: "< 3s", label: "Average response time" },
      { value: "60%", label: "Support cost reduction" },
    ],
    features: [
      { num: "01", title: "RAG ChatBot", desc: "Retrieval-Augmented Generation chatbots that answer questions from your proprietary documents, knowledge bases, and databases -with source citations and zero hallucination." },
      { num: "02", title: "Rasa Framework Chatbots", desc: "Open-source Rasa-based chatbots for enterprises requiring on-premise deployment, full data privacy, and custom NLU training on your domain-specific language." },
      { num: "03", title: "Custom Integration", desc: "Deep integration with your CRM, ERP, Shopify store, or custom databases -the bot pulls live data to give accurate, real-time answers to any query." },
      { num: "04", title: "Training & Optimisation", desc: "Continuous improvement cycles -we analyse conversation logs, identify failure points, retrain the model, and optimise prompts to increase resolution rate over time." },
      { num: "05", title: "Multi-Lingual Support", desc: "Serve customers in 50+ languages automatically -the bot detects the user's language and responds natively, with the same quality as English conversations." },
      { num: "06", title: "CRM ChatBot Integration", desc: "Chatbot actions sync directly to your CRM -leads captured, tickets created, customer profiles updated, and conversations logged without manual intervention." },
    ],
    benefits: [
      { title: "Answers From Your Actual Data", desc: "RAG architecture means the bot answers from your real documents and systems -not generic AI knowledge -giving accurate, business-specific responses.", icon: "📚" },
      { title: "Resolves, Not Just Deflects", desc: "Our bots are built to resolve queries end-to-end -taking actions, looking up data, processing requests -not just pointing customers to an FAQ page.", icon: "✅" },
      { title: "On-Premise Option Available", desc: "For regulated industries or privacy-sensitive businesses, we deploy fully on-premise Rasa bots with no data leaving your environment.", icon: "🔐" },
      { title: "Continuous Improvement", desc: "Every conversation is a training signal. We run monthly optimisation cycles to improve resolution rate and reduce escalation.", icon: "📈" },
    ],
    technologies: ["Python", "Rasa", "LangChain", "LlamaIndex", "ChromaDB", "PineCone", "OpenAI", "Cohere", "Gemini"],
    useCases: ["Customer support automation", "Internal knowledge base bot", "HR & IT helpdesk bot", "Product recommendation bot", "Lead qualification chatbot", "Document Q&A bot"],
    faqs: [
      { q: "What is a RAG chatbot and why is it better?", a: "RAG (Retrieval-Augmented Generation) combines vector search over your documents with LLM generation. The bot retrieves the most relevant information from your knowledge base before answering -giving accurate, sourced responses instead of hallucinated ones." },
      { q: "Can the chatbot be deployed on WhatsApp?", a: "Yes. We deploy chatbots across web widget, WhatsApp Business API, Facebook Messenger, Telegram, and more -the same AI brain, available on every channel." },
      { q: "How long does it take to build a chatbot?", a: "Simple FAQ bots take 1-2 weeks. Full RAG chatbots with CRM integration and multi-channel deployment typically take 3-5 weeks, depending on the complexity of your knowledge base." },
      { q: "Do you offer ongoing maintenance?", a: "Yes. We offer monthly support packages that include conversation log reviews, retraining runs, prompt optimisation, and new intent additions as your business evolves." },
    ],
  },
  {
    slug: "generative-ai-development-services",
    title: "Generative AI Development Company",
    subtitle: "Custom generative AI solutions that create, transform, and automate at scale",
    description:
      "We build custom generative AI applications -from fine-tuned text generation models to AI-powered data augmentation pipelines. Whether you need to automate content production, classify data at scale, or build a proprietary AI capability, our generative AI team delivers production-ready systems.",
    heroTag: "Generative AI Development",
    stats: [
      { value: "10×", label: "Content production speed" },
      { value: "99%+", label: "Classification accuracy" },
      { value: "50+", label: "Gen AI projects delivered" },
      { value: "GPT-4o", label: "Latest model access" },
    ],
    features: [
      { num: "01", title: "Custom AI Model Development", desc: "Fine-tuned language models trained on your proprietary data -delivering outputs that match your exact domain, tone, and output format requirements." },
      { num: "02", title: "Text Generation at Scale", desc: "Automated content pipelines that generate product descriptions, reports, emails, summaries, and articles at machine speed -with consistent brand voice." },
      { num: "03", title: "Text Classification & NLP", desc: "Train custom classifiers for your specific categories -support ticket routing, sentiment analysis, content moderation, intent detection -with 99%+ accuracy." },
      { num: "04", title: "AI-Powered Chatbots", desc: "Generative chatbots that produce natural, contextual responses -not scripted flows -trained on your data and optimised for your specific conversational use cases." },
      { num: "05", title: "Data Augmentation", desc: "Generate synthetic training data to expand your ML datasets -improving model performance without the cost and time of manual data collection." },
      { num: "06", title: "Consulting & Strategy", desc: "Not sure where AI fits in your business? We run workshops to identify your highest-value AI opportunities and build a phased implementation roadmap." },
    ],
    benefits: [
      { title: "Proprietary AI Capability", desc: "Models fine-tuned on your data give you a competitive AI advantage that off-the-shelf tools can't replicate.", icon: "🏆" },
      { title: "Scale Content Without Headcount", desc: "Generate thousands of high-quality, on-brand content pieces in the time it takes a human to write one.", icon: "✍️" },
      { title: "Automate Data Processing", desc: "AI classification and extraction replaces manual data labelling, routing, and categorisation -at 100× the speed and lower error rate.", icon: "⚙️" },
      { title: "Future-Proof AI Infrastructure", desc: "We build modular AI systems that can be updated as new models are released -ensuring your investment compounds over time.", icon: "🔮" },
    ],
    technologies: ["Python", "Rasa", "LangChain", "LlamaIndex", "ChromaDB", "PineCone", "OpenAI", "Cohere", "Gemini"],
    useCases: ["AI content generation pipelines", "Custom model fine-tuning", "Support ticket classification", "Synthetic data generation", "Document summarisation at scale", "AI strategy consulting"],
    faqs: [
      { q: "What's the difference between using the OpenAI API and fine-tuning a model?", a: "The OpenAI API gives you a general-purpose model. Fine-tuning trains the model on your specific data so outputs match your exact domain, format, and style -consistently, without lengthy prompts." },
      { q: "How do you ensure generated content is accurate?", a: "We combine RAG (grounding outputs in retrieved facts), output validation checks, and human review workflows for high-stakes content -ensuring accuracy without sacrificing speed." },
      { q: "Can you build AI for non-English languages?", a: "Yes. Modern LLMs have strong multilingual capabilities. We build and test generation systems across all major European and Asian languages with native-quality output." },
      { q: "What industries have you built generative AI for?", a: "E-commerce (product content), legal (document summarisation), healthcare (clinical note generation), HR (JD and policy writing), and logistics (report automation) -among others." },
    ],
  },
  {
    slug: "shopify-ai-automation-services",
    title: "Save Hours of Manual Work Weekly",
    subtitle: "AI automation built specifically for Shopify stores to cut costs and grow revenue",
    description:
      "We build Shopify-native AI automation systems that eliminate the manual work slowing your store down -from order processing to abandoned cart recovery, AI chatbots to review collection. Every automation is built around your Shopify store's specific workflows and integrated with your existing apps.",
    heroTag: "Shopify AI Automation",
    stats: [
      { value: "80%", label: "Reduction in manual tasks" },
      { value: "15%+", label: "Average revenue lift" },
      { value: "24/7", label: "Automated store operations" },
      { value: "2 wks", label: "First automation live" },
    ],
    features: [
      { num: "01", title: "Order & Fulfilment Automation", desc: "Automatically route orders to fulfilment partners, trigger warehouse pick-pack-ship, update inventory, and notify customers -all without touching an order manually." },
      { num: "02", title: "AI Chatbot for Shopify", desc: "A GPT-powered chatbot trained on your product catalogue and policies -answering order queries, recommending products, and processing returns 24/7 on your storefront." },
      { num: "03", title: "Review & Feedback Automation", desc: "Trigger post-purchase review request sequences via email and SMS, collect responses, and auto-publish positive reviews to your store and Google profile." },
      { num: "04", title: "Abandoned Cart Recovery", desc: "Multi-step AI-personalised cart recovery sequences via email and WhatsApp -sent at optimal times with product-specific messaging to recover 15-25% of abandoned carts." },
      { num: "05", title: "Marketing & Retargeting Automation", desc: "Automated post-purchase flows, win-back sequences, VIP tier triggers, and seasonal campaign automation -all driven by real Shopify customer behaviour data." },
      { num: "06", title: "Shopify + Third-Party Integrations", desc: "Connect Shopify with Klaviyo, Gorgias, Recharge, ShipStation, Xero, and 100+ other tools via n8n -creating a fully unified, automated ecommerce operation." },
    ],
    benefits: [
      { title: "Built for Shopify, Not Generic", desc: "Every automation is built around Shopify's native APIs and data structures -not generic tools bolted on -so integrations are fast, reliable, and deeply connected.", icon: "🛍️" },
      { title: "Revenue on Autopilot", desc: "Cart recovery, win-back sequences, and review automation generate revenue passively -running 24/7 without any manual input.", icon: "💰" },
      { title: "Fewer Tools, More Automation", desc: "We consolidate your Shopify automation stack into fewer, better-connected tools -reducing subscription costs while increasing automation coverage.", icon: "⚙️" },
      { title: "Data-Driven Personalisation", desc: "Every automated message is personalised using real Shopify data -purchase history, browsing behaviour, and customer segment -for maximum relevance.", icon: "🎯" },
    ],
    technologies: ["n8n", "Shopify", "Rasa", "LangChain", "OpenAI", "Cohere", "Gemini", "PineCone"],
    useCases: ["Automated order processing", "AI product recommendations", "Abandoned cart recovery", "Post-purchase review collection", "Customer win-back campaigns", "Inventory reorder automation"],
    faqs: [
      { q: "Do I need to be on a specific Shopify plan?", a: "Most automations work on Shopify Basic and above. Some advanced integrations (like the Shopify Flow API or certain webhooks) require Shopify Advanced or Plus. We'll confirm requirements during scoping." },
      { q: "Will these automations work with my existing Shopify apps?", a: "Yes. We build automations that integrate with your existing stack -Klaviyo, Gorgias, Recharge, ShipStation, etc. -rather than replacing them, so you keep what's working." },
      { q: "How long until I see results?", a: "Abandoned cart recovery and order automation typically show results within the first week. Review collection and win-back sequences build over 4-8 weeks as the audience grows." },
      { q: "Can you automate our wholesale or B2B Shopify operations too?", a: "Yes. We have experience automating Shopify Plus B2B operations including wholesale order processing, net terms workflows, and multi-location inventory management." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
