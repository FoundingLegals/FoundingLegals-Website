import { Shield, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Company Incorporation", href: "#services" },
    { name: "GST & Compliance", href: "#services" },
    { name: "DPIIT Certification", href: "#services" },
    { name: "Agreements & Documents", href: "#services" },
    { name: "Fund Raising", href: "#services" },
    { name: "Marketplace", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "/company/about-us" },
    { name: "Contact", href: process.env.NEXT_PUBLIC_APP_URL || "#" },
    { name: "Partner CAs", href: "#partners" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-brown-200">
      {/* Main Footer — founding leals.ai style: cream bg, multi-column, clean text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-olive-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-brown-900 italic font-serif">
                Founding Legals
              </span>
            </a>
          </div>

          {/* Link Columns — founding leals style: simple text links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-brown-900 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-brown-500 hover:text-olive-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar — founding leals style */}
      <div className="border-t border-brown-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Social icons */}
            <a
              href="#"
              className="text-brown-400 hover:text-olive-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-brown-400 hover:text-olive-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brown-400">
            <span>
              &copy; {new Date().getFullYear()} Founding Legals. All rights
              reserved.
            </span>
            <a
              href="#privacy"
              className="hover:text-olive-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-olive-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
