"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useReveal } from "@/lib/useReveal";
import {
  Users,
  FileText,
  Receipt,
  PenSquare,
  BarChart3,
  Search,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Bell,
  FileSignature,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";

/* ─── Reveal wrapper ─── */
function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Feature bullet row ─── */
function FeatureBullet({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-0.5 w-5 h-5 text-olive-600">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-brown-900 mb-1">{title}</h3>
        <p className="text-brown-500 text-[15px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Image placeholder ─── */
function ImagePlaceholder({ label, aspectClass = "aspect-[16/10]" }: { label: string; aspectClass?: string }) {
  return (
    <div
      className={`w-full ${aspectClass} rounded-2xl border-2 border-dashed border-olive-200 bg-olive-50/50 flex flex-col items-center justify-center gap-3 text-olive-500`}
    >
      <div className="w-12 h-12 rounded-xl bg-olive-100 flex items-center justify-center">
        <FileText className="w-6 h-6 text-olive-600" />
      </div>
      <p className="text-[13px] font-medium text-olive-600 text-center px-4">{label}</p>
      <p className="text-[11px] text-olive-400">Image will be placed here</p>
    </div>
  );
}

/* ─── Stat card ─── */
function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <div className="bg-white rounded-2xl border border-brown-100 p-6 flex flex-col gap-3 shadow-[0_4px_20px_rgba(43,39,35,0.04)]">
      <div className="w-10 h-10 rounded-xl bg-olive-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-olive-600" />
      </div>
      <p className="text-[32px] font-serif font-semibold text-brown-900 leading-none">{value}</p>
      <p className="text-[13px] text-brown-500 font-medium">{label}</p>
    </div>
  );
}

/* ─── Feature block card ─── */
function FeatureCard({
  number,
  icon: Icon,
  tag,
  heading,
  subheading,
  bullets,
  imageLabel,
  reversed = false,
}: {
  number: string;
  icon: React.ElementType;
  tag: string;
  heading: string;
  subheading: string;
  bullets: { icon: React.ElementType; title: string; desc: string }[];
  imageLabel: string;
  reversed?: boolean;
}) {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 border-t border-brown-100 ${reversed ? "bg-cream-light" : "bg-cream"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image side */}
          <div className={`reveal-${reversed ? "right" : "left"} ${reversed ? "order-2 lg:order-2" : ""}`}>
            <div className="bg-cream-dark rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              {/* Step number badge */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-olive-600 flex items-center justify-center text-white text-xs font-bold z-10">
                {number}
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
                <ImagePlaceholder label={imageLabel} aspectClass="aspect-[16/10]" />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal-${reversed ? "left" : "right"} ${reversed ? "order-1 lg:order-1" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center">
                <Icon className="w-5 h-5 text-lime-bg" />
              </div>
              <span className="text-sm font-medium text-olive-700 bg-lime-bg px-3 py-1 rounded-full">{tag}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-[42px] lg:text-[46px] font-medium text-brown-900 leading-[1.15] mb-4">
              {heading}
            </h2>
            <p className="text-[17px] text-brown-500 leading-relaxed mb-10 max-w-lg font-light">{subheading}</p>

            <div className="space-y-8">
              {bullets.map((b, i) => (
                <FeatureBullet key={i} icon={b.icon} title={b.title} desc={b.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   PAGE
════════════════════════════════════ */
export default function ClientManagementPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden bg-cream border-b border-brown-100">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#5C6F2D 1px, transparent 1px), linear-gradient(90deg, #5C6F2D 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(92,111,45,0.06),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left text */}
            <div>
              {/* Badge */}
              <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 px-3 py-1.5 bg-lime-bg border border-olive-200 rounded-full text-olive-700 text-[13px] font-medium mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Client Workspace · Founding Legals
              </div>

              <h1 className="hero-animate hero-animate-delay-2 font-serif text-[48px] sm:text-[58px] lg:text-[64px] font-medium text-brown-900 leading-[1.08] tracking-[-0.02em] mb-6">
                Run your client relationships from one calm, capable workspace.
              </h1>

              <p className="hero-animate hero-animate-delay-3 text-[18px] sm:text-[20px] text-brown-500 leading-relaxed mb-10 max-w-xl font-light">
                From the first invoice to the final signature, Founding Legals gives founders a single place to manage
                clients, get paid, and close documents: without spreadsheets, email threads, or guesswork.
              </p>

              <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4">
                <a
                  href="/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-olive-600 text-lime-bg font-semibold rounded-full hover:bg-olive-700 hover:scale-[1.02] transition-all duration-300 shadow-md shadow-olive-900/20 text-[15px]"
                >
                  Start Free
                   
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-brown-200 text-brown-700 font-semibold rounded-full hover:bg-cream hover:border-brown-300 transition-all duration-300 text-[15px]"
                >
                  See the features
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust strip */}
              <div className="hero-animate hero-animate-delay-4 mt-12 flex flex-wrap gap-6 text-[13px] text-brown-400 font-medium">
                {["GST-ready by default", "E-sign built in", "No spreadsheets"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-olive-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right hero image */}
            <div className="hero-animate hero-animate-delay-3">
              <div className="bg-cream-dark rounded-3xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(43,39,35,0.08)] border border-brown-100">
                {/* Dashboard stats row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-2xl p-4 border border-brown-100 shadow-sm">
                    <p className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1">Revenue</p>
                    <p className="text-[26px] font-serif font-semibold text-brown-900">₹4.2L</p>
                    <p className="text-[11px] text-olive-600 font-medium mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +18% this month
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-brown-100 shadow-sm">
                    <p className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1">Outstanding</p>
                    <p className="text-[26px] font-serif font-semibold text-brown-900">₹68K</p>
                    <p className="text-[11px] text-[#CD412B] font-medium mt-1 flex items-center gap-1">
                      <Bell className="w-3 h-3" /> 3 overdue
                    </p>
                  </div>
                </div>

                {/* Hero image placeholder: will be replaced with actual screenshot */}
                <ImagePlaceholder
                  label="Dashboard / Client List Screenshot: Place your screenshot here"
                  aspectClass="aspect-[16/9]"
                />

                {/* Status badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    { label: "12 Clients", color: "bg-lime-bg text-olive-700" },
                    { label: "Paid ✓", color: "bg-[#d4ebd4] text-[#2d6b2d]" },
                    { label: "3 Overdue", color: "bg-[#ffecd4] text-[#995500]" },
                    { label: "In Progress", color: "bg-[#e8d5e8] text-[#7a3d7a]" },
                  ].map((b) => (
                    <span key={b.label} className={`text-[11px] font-semibold px-3 py-1 rounded-full ${b.color}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <RevealSection>
        <section className="py-16 bg-white border-b border-brown-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="1 place" label="For every client, invoice & signature" icon={Users} />
              <StatCard value="GST-ready" label="CGST / SGST / IGST auto-calculated" icon={Receipt} />
              <StatCard value="Real-time" label="E-sign status: sent → completed" icon={FileSignature} />
              <StatCard value="12-month" label="Revenue trend on your dashboard" icon={BarChart3} />
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── FEATURE BLOCKS ── */}
      <div id="features">

        {/* Block 1: Client Management */}
        <FeatureCard
          number="01"
          icon={Users}
          tag="Client Management"
          heading="A clean record for every client you work with."
          subheading="Keep each client's full profile in one place: company details, signatory, GSTIN, PAN, CIN, and billing and shipping addresses: so every invoice and document is accurate the moment you create it."
          imageLabel="Client profile page screenshot: company details, GSTIN, PAN, CIN, billing address"
          bullets={[
            {
              icon: Building2,
              title: "One profile per client, with GST and statutory details built in",
              desc: "Company name, signatory, email, phone, GSTIN, PAN, CIN, company type, billing and shipping address: all in one place.",
            },
            {
              icon: Search,
              title: "Instant search across company, contact, and email",
              desc: "Find any client in seconds. Search by company name, signatory name, or email: no scrolling through lists.",
            },
            {
              icon: TrendingUp,
              title: "Revenue and invoice count visible at a glance",
              desc: "See total revenue collected and number of invoices per client without opening a single file.",
            },
            {
              icon: Clock,
              title: "A complete activity timeline for every client",
              desc: "Every invoice, reminder, receipt, and signature event logged chronologically: full audit trail, zero effort.",
            },
          ]}
        />

        {/* Block 2: GST Invoicing */}
        <FeatureCard
          number="02"
          icon={Receipt}
          tag="GST-Ready Invoicing"
          heading="Professional invoices that are compliant by default."
          subheading="Create payment invoices, reminders, and receipts in minutes. GST is handled for you: CGST, SGST, and IGST calculated automatically, with HSN/SAC codes and flexible payment terms."
          imageLabel="Invoice creation screen: GST rates, HSN/SAC, letterhead, PDF preview"
          reversed
          bullets={[
            {
              icon: FileText,
              title: "Auto-numbered invoices in your financial-year format",
              desc: "Invoices are numbered automatically in your FY format (e.g. INV-2024-001): no manual tracking.",
            },
            {
              icon: CreditCard,
              title: "CGST/SGST or IGST applied correctly based on the transaction",
              desc: "Inter-state or intra-state: the right tax is applied automatically at 0%, 5%, 12%, 18%, or 28%.",
            },
            {
              icon: Star,
              title: "Add your letterhead, signature, stamp, and watermark",
              desc: "Brand every document with your logo, digital signature, company stamp, and draft watermark.",
            },
            {
              icon: Mail,
              title: "Send a polished PDF to your client in a single click",
              desc: "One click sends a professional PDF to your client's inbox. Track status: Draft → Sent → Paid / Overdue.",
            },
          ]}
        />

        {/* Block 3: Reminders & Receipts */}
        <FeatureCard
          number="03"
          icon={Bell}
          tag="Reminders & Receipts"
          heading="Get paid, gracefully."
          subheading="Send a courteous payment reminder when an invoice is due, and issue a receipt the moment it's settled: each one linked back to the original invoice, so nothing slips through."
          imageLabel="Reminder and receipt screen: linked to invoice, outstanding amount"
          bullets={[
            {
              icon: FileText,
              title: "Linked reminders and receipts for a clean paper trail",
              desc: "Every reminder and receipt is tied to the original invoice: one thread, complete context.",
            },
            {
              icon: BarChart3,
              title: "Outstanding amounts surfaced on your dashboard",
              desc: "See exactly what's owed at a glance. No hunting through spreadsheets or email threads.",
            },
            {
              icon: CheckCircle2,
              title: "Mark invoices paid and update revenue instantly",
              desc: "One click marks an invoice paid, issues a receipt, and updates your revenue dashboard in real time.",
            },
          ]}
        />

        {/* Block 4: E-Signatures */}
        <FeatureCard
          number="04"
          icon={FileSignature}
          tag="E-Signatures"
          heading="Close documents without the back-and-forth."
          subheading="Send agreements and documents for signature directly to your clients. Place the signature where it belongs, send, and watch the status update in real time."
          imageLabel="E-signature flow: template upload, signature placement, status tracker"
          reversed
          bullets={[
            {
              icon: FileText,
              title: "Send a template or upload your own PDF",
              desc: "Use a pre-built agreement template or upload any PDF. You control what gets signed.",
            },
            {
              icon: MapPin,
              title: "Choose exactly where signatures go",
              desc: "Place signature fields precisely on any page. No ambiguity, no back-and-forth.",
            },
            {
              icon: Clock,
              title: "Live status: In Progress, Completed, Declined, Expired",
              desc: "Track every document in real time. Get notified the moment your client signs: or declines.",
            },
            {
              icon: CheckCircle2,
              title: "Every signed document stored and retrievable",
              desc: "All executed documents are stored securely and always retrievable: ready for diligence or audit.",
            },
          ]}
        />

        {/* Block 5: Insights / Dashboard */}
        <FeatureCard
          number="05"
          icon={BarChart3}
          tag="Insights at a Glance"
          heading="Know where your business stands."
          subheading="A quiet, powerful dashboard shows revenue collected, outstanding amounts, total clients, and a 12-month revenue trend: so you always know your position without opening a spreadsheet."
          imageLabel="Dashboard screenshot: revenue area chart, total clients, outstanding amount"
          bullets={[
            {
              icon: TrendingUp,
              title: "12-month revenue area chart",
              desc: "See your revenue trajectory at a glance: toggle between Month and Year view.",
            },
            {
              icon: Users,
              title: "Total clients, invoices, and revenue collected",
              desc: "Four key metrics always visible: clients, invoices, revenue collected, and outstanding amount.",
            },
            {
              icon: Bell,
              title: "Outstanding amounts surfaced automatically",
              desc: "No mental math. Overdue and outstanding amounts are calculated and surfaced on your dashboard.",
            },
          ]}
        />
      </div>

      {/* ── HOW IT WORKS ── */}
      <RevealSection>
        <section className="py-20 lg:py-28 bg-white border-t border-brown-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-bg border border-olive-200 rounded-full text-olive-700 text-[13px] font-medium mb-6">
                How it works
              </span>
              <h2 className="font-serif text-[36px] sm:text-[44px] font-medium text-brown-900 leading-[1.15] mb-4">
                From onboarding to payment,<br />in one place.
              </h2>
              <p className="text-[17px] text-brown-500 max-w-xl mx-auto font-light leading-relaxed">
                A workflow designed for founders who bill clients, manage agreements, and want to stay compliant: without the operational overhead.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brown-100 z-0" />

              {[
                { step: "01", icon: Users, title: "Add your client", desc: "One profile with all GST, statutory, and billing details." },
                { step: "02", icon: Receipt, title: "Create an invoice", desc: "GST-ready, auto-numbered, one-click PDF send." },
                { step: "03", icon: Bell, title: "Send & remind", desc: "Gentle reminders. Issue receipts when paid." },
                { step: "04", icon: FileSignature, title: "Get it signed", desc: "Send for e-signature. Status updates in real time." },
              ].map((s) => (
                <div key={s.step} className="reveal flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-cream-dark border border-brown-100 flex items-center justify-center mb-5 shadow-sm">
                    <s.icon className="w-8 h-8 text-olive-600" />
                  </div>
                  <span className="text-[11px] font-bold text-brown-300 uppercase tracking-widest mb-2">{s.step}</span>
                  <h3 className="font-semibold text-brown-900 text-[16px] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-brown-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── FEATURE GRID ── */}
      <RevealSection>
        <section className="py-20 lg:py-28 bg-cream border-t border-brown-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
              <h2 className="font-serif text-[36px] sm:text-[42px] font-medium text-brown-900 mb-4">
                Everything in one workspace
              </h2>
              <p className="text-[17px] text-brown-500 font-light max-w-lg mx-auto">
                Built for Indian startup founders. GST-compliant, beautifully designed, and ready to use today.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-scale">
              {[
                { icon: Building2, title: "Client Profiles", desc: "Company details, GSTIN, PAN, CIN, signatory, billing & shipping address: all in one record." },
                { icon: Receipt, title: "GST Invoices", desc: "CGST/SGST/IGST auto-applied. HSN/SAC codes. Net 30, Due on Receipt, or custom payment terms." },
                { icon: Mail, title: "One-click PDF Send", desc: "Generate a branded PDF with letterhead, watermark, and digital signature: sent in seconds." },
                { icon: Bell, title: "Reminders & Receipts", desc: "Linked to the original invoice. Mark paid, issue receipt, update revenue: one click." },
                { icon: FileSignature, title: "E-Signatures", desc: "Send any PDF for signature. Place fields, track status, store executed documents." },
                { icon: BarChart3, title: "Revenue Dashboard", desc: "12-month trend, total clients, invoices, revenue collected, and outstanding: always visible." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group bg-white rounded-[28px] p-8 border border-brown-100 flex flex-col h-full min-h-[220px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(43,39,35,0.06)] hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-olive-50 flex items-center justify-center mb-5 text-olive-600 transition-all duration-300 group-hover:bg-olive-600 group-hover:text-lime-bg">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-brown-900 text-[17px] mb-3">{card.title}</h3>
                  <p className="text-[14px] text-brown-500 leading-relaxed font-light">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── CLOSING CTA ── */}
      <RevealSection>
        <section className="py-20 lg:py-28 bg-olive-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-lime-bg text-[13px] font-medium mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              The legal &amp; financial back office your startup deserves
            </div>

            <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[60px] font-medium text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Founding Legals
            </h2>
            <p className="text-[18px] sm:text-[20px] text-lime-bg/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Manage clients. Send invoices. Collect signatures. All in one place.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-olive-700 font-bold rounded-full hover:bg-lime-bg transition-all duration-300 text-[16px] shadow-lg"
              >
                Start Free: No credit card
                 
              </a>
            </div>

            <p className="mt-8 text-[13px] text-white/40 font-light">
              Indian GST-compliant · E-signatures · Revenue insights · Client workspace
            </p>
          </div>
        </section>
      </RevealSection>

      <Footer />
    </main>
  );
}
