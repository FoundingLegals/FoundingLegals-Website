"use client";

import { Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "Company Incorporation", href: "/services/CAservices/company-incorporation" },
    { name: "GST & Compliance", href: "/services/CAservices/gst-registration" },
    { name: "DPIIT Certification", href: "/services/CAservices/dpiit-recognition" },
    { name: "Agreements & Documents", href: "/services/LegalServices/agreements/founders-agreement" },
    { name: "Fund Raising", href: "/services/LegalServices/pitch-to-investors" },
    { name: "Marketplace", href: "/services/LegalServices/marketplace" },
  ],
  Company: [
    { name: "About Us", href: "/company/about-us" },
    { name: "Free Consultation", href: "/consultation" },
    { name: "Contact", href: "/contact" },
    { name: "Partner CAs", href: "#partners" },
    { name: "Careers", href: "/company/careers" },
    { name: "Client Feedback", href: "/client-feedback" },
    { name: "Blogs & Insights", href: "/blogs" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Help Center", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-30 bg-[#F5F0EB] border-t border-brown-300 shadow-sm">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center mb-6 group">
              <img
                src="/founding-legals-logo.png"
                alt="Founding Legals"
                className="h-14 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-brown-700 font-medium leading-relaxed max-w-xs mb-6">
              India&apos;s all-in-one legal and compliance platform built for founders. From incorporation to fundraising, we handle the paperwork so you can focus on building.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/showcase/foundinglegals/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brown-200/70 text-brown-700 hover:bg-olive-600 hover:text-white transition-all duration-300 shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/foundinglegals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brown-200/70 text-brown-700 hover:bg-olive-600 hover:text-white transition-all duration-300 shadow-2xs"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3.5 h-3.5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/foundinglegals.india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brown-200/70 text-brown-700 hover:bg-olive-600 hover:text-white transition-all duration-300 shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@foundinglegals?si=wCFdbHLqYCVhz3sm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-brown-200/70 text-brown-700 hover:bg-olive-600 hover:text-white transition-all duration-300 shadow-2xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-brown-900 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-brown-700 hover:text-olive-700 font-medium transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-brown-700 hover:text-olive-700 font-medium transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-300/80 bg-[#EFE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
          <div className="text-xs text-brown-700 leading-relaxed">
            <p>
              <span className="font-bold text-brown-900">Arvya Tech Pvt. Ltd.</span>{" "}
              &middot; CIN: U62011AP2025PTC121416
            </p>
            <p className="mt-1 text-brown-600">
              Registered Office: 5th Floor, The Herbt&apos;s Square Building, Autonagar, APIIC IT Park, Mangalagiri, Amaravati, Andhra Pradesh 522503, India.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-brown-600 font-medium">
            &copy; {new Date().getFullYear()} Founding Legals (Arvya Tech Pvt. Ltd.) All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brown-600 font-medium">
            <Link href="/privacy-policy" className="hover:text-olive-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-olive-700 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-olive-700 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/refund-policy" className="hover:text-olive-700 transition-colors">
              Refund &amp; Cancellation Policy
            </Link>
            <Link href="/contact" className="hover:text-olive-700 transition-colors">
              Help Center
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("fl:open-cookie-preferences"));
                }
              }}
              className="hover:text-olive-700 transition-colors cursor-pointer"
            >
              Cookie preferences
            </button>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
