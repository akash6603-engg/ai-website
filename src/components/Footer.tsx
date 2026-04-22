import { Zap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["AI Automation", "Workflow Automation", "AI Agent Development", "ChatBot Development", "Marketing Automation", "Analytics & Insights"],
  Industries: ["E-Commerce", "Retail", "Logistics", "Healthcare", "Real Estate", "Hospitality"],
  Company: ["About Us", "Case Studies", "Blog", "Contact Us", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Zap className="text-blue-400" size={20} />
              Osmosis<span className="text-blue-400"> AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering businesses worldwide with intelligent AI automation, no matter where you are.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <a href="mailto:akash.anande66@gmail.com" className="hover:text-white transition-colors">
                  akash.anande66@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <a href="tel:+917208581082" className="hover:text-white transition-colors">+91 7208581082</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Remote-First · Global</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            All rights reserved &copy; 2024 - {new Date().getFullYear()} Osmosis AI &amp; Data Solutions
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
