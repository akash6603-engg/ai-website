# AI Automation Services Website — Design & Content Skills

## Site Identity
- **Brand:** AutomateAI
- **Target:** Ecommerce brands ($300K–$20M+ ARR) in US, UK, EU
- **Tone:** Professional, direct, ROI-focused — no buzzwords
- **Design Reference:** infyom.com (clean light theme, professional B2B)

## Color System
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#ffffff` | Page base |
| Muted bg | `#f8f9fa` / `#f5f5f5` | Alternating sections, gray-50 |
| Dark section | `#111827` / `gray-900` | WhyChooseUs, Footer |
| Text primary | `#212529` / `gray-900` | Headings |
| Text secondary | `#6c757d` / `gray-500` | Body copy |
| Accent | `#0d6efd` / `blue-600` | CTAs, links, highlights |
| Border | `#e9ecef` / `gray-200` | Cards, dividers |

## Section Alternation Pattern (Infyom Style)
```
Hero         → white bg
TrustBar     → gray-50 + border-y
Services     → white
AIAgents     → gray-50 (WhatsApp) / white (Voice)
HowItWorks   → gray-50
WhyChooseUs  → gray-900 (DARK)
Credibility  → white + border-y
CaseStudies  → gray-50
Results      → white
FAQ          → gray-50
Contact      → white
Footer       → gray-900 (DARK)
```

## Page Structure (Full Component Order)
```
Navbar → Hero → TrustBar → Services → AIAgents → HowItWorks
→ WhyChooseUs → Credibility → CaseStudies → Results → FAQ → Contact → Footer
```

## Numbered Services Cards (01–06)
Infyom-style numbered grid — large faded number, title, description, "Learn More →" link.
Use `grid-cols-3` on desktop with `gap-px bg-gray-200` border trick for seamless grid lines.

## Section Header Pattern
Every section starts with:
```tsx
<p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
  Section Label
</p>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900">Section Title</h2>
```

## Card Pattern (Light)
```tsx
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
```

## Dark Section Pattern (WhyChooseUs / Footer)
- Background: `bg-gray-900`
- Headings: `text-white`
- Body: `text-gray-400`
- Accent: `text-blue-400`
- Stat cards: `bg-gray-800 rounded-xl`

## Navbar
- White bg, dark text, dropdown menus on hover
- Right CTA: "Get Free Quote" — `bg-blue-600` button
- Sticky with `border-b border-gray-200 shadow-sm`

## CTAs
- Primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg`
- Secondary: `border border-gray-300 text-gray-700 bg-white px-6 py-3 rounded-lg`
- Text link: `text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1.5`

## Services Offered (Content)
1. AI Automation Services
2. Workflow Automation (n8n, Zapier)
3. AI Agent Development
4. Custom ChatBot Development
5. Marketing Automation
6. Analytics & AI Insights

## AI Agent Types (Content)
**WhatsApp:** Customer Support Agent, Sales & Upsell Agent, Post-Purchase Agent
**Voice:** Order Status Confirmation, Abandoned Cart Recovery, Reorder & Subscription Management

## Case Studies (Content)
1. AI Chatbot for Ecommerce Support (n8n + OpenAI + Airtable) — 68% ticket reduction
2. Shopify New Order Notification to Slack (n8n + Shopify + Slack) — Zero missed orders
3. Shopify Low Stock Notification (n8n + Shopify + Twilio) — Zero stockouts
4. AI-Powered 3D Product Video Generator (n8n + OpenAI + Runway ML) — 90% cost reduction

## Key Stats / Credibility Numbers
- 40+ ecommerce brands served
- 60+ automations delivered
- 3+ years AI experience
- 4.9★ average client rating
- 15+ countries served
- US · UK · EU markets

## Framer Motion Patterns Used
- `initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}` — standard section entrance
- `transition={{ delay: i * 0.07 }}` — staggered cards
- `initial={{ opacity: 0, x: ±20 }}` — two-column left/right entrance (Contact, WhyChooseUs)
- AnimatePresence + height animation for FAQ accordion

## Contact Form Fields
name, email, company, platform (dropdown: Shopify/WooCommerce/Magento/BigCommerce/Custom/Other), message
Backend: not yet wired — see `docs/api-guide.md` for Resend or Formspree setup.

## Footer Structure (5-column)
Brand + contact info | Services | Industries | Company | (social links optional)
Dark bg: `bg-gray-900`, copyright at bottom border-t

## Deployment
- Next.js 16 static export → Vercel (zero config)
- No backend, no database
- JSON-LD structured data in layout.tsx (Organization + Service + FAQPage)
