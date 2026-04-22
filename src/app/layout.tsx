import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation for Ecommerce | Osmosis AI & Data Solutions",
  description:
    "Custom AI automation for ecommerce brands in the US, UK & Europe. Cut support costs by 68%, boost email revenue 3x, and automate operations without growing your team.",
  keywords: [
    "AI automation for ecommerce",
    "ecommerce AI automation",
    "AI customer support ecommerce",
    "ecommerce marketing automation",
    "Shopify AI automation",
    "ecommerce operations AI",
  ],
  openGraph: {
    title: "AI Automation for Ecommerce | Osmosis AI & Data Solutions",
    description:
      "Custom AI automation for ecommerce brands in the US, UK & Europe. Cut support costs, boost revenue, automate operations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Ecommerce | Osmosis AI & Data Solutions",
    description:
      "Custom AI automation for ecommerce brands in the US, UK & Europe.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Osmosis AI & Data Solutions",
      description:
        "AI automation agency specialising in ecommerce brands across the US, UK, and Europe.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "akash.anande66@gmail.com",
        contactType: "sales",
      },
    },
    {
      "@type": "Service",
      name: "AI Automation for Ecommerce",
      provider: { "@type": "Organization", name: "Osmosis AI & Data Solutions" },
      description:
        "Custom AI systems including chatbots, marketing automation, inventory forecasting, and checkout optimisation for ecommerce brands.",
      areaServed: ["US", "GB", "EU"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of ecommerce businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with DTC brands doing $300K-$20M+ ARR on Shopify, WooCommerce, Magento, and BigCommerce across the US, UK, and Europe.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build and deploy an AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects go live in 3-6 weeks. Simple automations like an AI support bot can be live in 2 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is the AI GDPR-compliant for European customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For EU clients we ensure full GDPR compliance including data minimization, consent flows, and regional data storage where required.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
