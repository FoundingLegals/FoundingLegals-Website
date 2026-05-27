import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Calendar,
  Coins,
  Clock,
  Lightbulb,
  GitMerge,
  CreditCard,
  FileText,
  FileSignature,
  Users,
  Globe,
  Presentation,
  FolderOpen,
  KeyRound,
  Banknote,
  TrendingUp,
  HandCoins,
  Building2,
  ClipboardCheck,
  Award,
  Globe2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "DPIIT Certification | Founding Legals",
  description:
    "Get your startup officially recognised by DPIIT. Unlock tax holidays, IPR rebates, government grants, and self-certification benefits under Startup India.",
};

const eligibility = [
  {
    icon: Building2,
    title: "Entity Type",
    text: "Incorporated as a Private Limited Company, LLP or Registered Partnership Firm.",
  },
  {
    icon: Coins,
    title: "Turnover Cap",
    text: "Turnover not exceeding ₹100 Cr in any financial year since incorporation.",
  },
  {
    icon: Clock,
    title: "Age of Entity",
    text: "Entity not older than 10 years from the date of incorporation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    text: "Working towards innovation, development or improvement of products, processes or services    or a scalable business model.",
  },
  {
    icon: GitMerge,
    title: "Original Formation",
    text: "Not formed by splitting up or reconstruction of an existing business.",
  },
];

const documents = [
  { icon: CreditCard, title: "PAN Card of the Entity" },
  { icon: FileSignature, title: "Certificate of Incorporation / LLP Agreement" },
  {
    icon: FileText,
    title: "Brief Write-up on the Startup",
    note: "Problem Statement, Solution, USP",
  },
  {
    icon: Users,
    title: "Details of Directors / Partners",
    note: "Name, DIN, PAN",
  },
  { icon: Globe, title: "Website Link", note: "if available" },
  { icon: Presentation, title: "Pitch Deck / Business Presentation" },
  { icon: FolderOpen, title: "Other Supporting Documents", note: "if any" },
  { icon: KeyRound, title: "Company DSC for Verification" },
];

const benefits = [
  {
    icon: Banknote,
    title: "Tax Benefits",
    text: "Income Tax holiday for 3 consecutive years out of the first 10 years.",
  },
  {
    icon: TrendingUp,
    title: "Capital Gains Exemption",
    text: "Exemption on long-term capital gains for eligible investments.",
  },
  {
    icon: HandCoins,
    title: "Easy Access to Funds",
    text: "Better visibility and trust with investors for fundraising.",
  },
  {
    icon: Building2,
    title: "Eligibility for Govt. Schemes",
    text: "Access to grants, subsidies, incubation programs and tenders.",
  },
  {
    icon: ClipboardCheck,
    title: "Self-Certification Benefit",
    text: "Relaxation in compliance under labour laws through self-certification.",
  },
  {
    icon: Award,
    title: "IPR Benefits",
    text: "80% rebate on patent filing fees and 50% rebate on trademark filing fees.",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    text: "Stronger credibility and visibility for your startup in India and abroad.",
  },
];

const journey = [
  { icon: ClipboardCheck, label: "Register" },
  { icon: ShieldCheck, label: "Recognise" },
  { icon: TrendingUp, label: "Scale" },
  { icon: Rocket, label: "Succeed" },
];

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F6F4F0] selection:bg-[#5C6E33] selection:text-white text-[#2c2b29]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#E5E1D6]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(90,115,56,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(155,107,57,0.08),transparent_55%)]" />

          <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 pt-[140px] pb-20 md:pt-[170px] md:pb-28">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-600/10 border border-olive-600/20 text-olive-700 text-[12px] font-semibold tracking-wide uppercase mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Startup India    DPIIT Programme
              </div>

              {/* Shield icon */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-3xl bg-olive-600/10 blur-2xl" />
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-olive-600 to-olive-700 flex items-center justify-center shadow-[0_10px_30px_rgba(90,115,56,0.25)]">
                  <ShieldCheck className="w-10 h-10 text-white" strokeWidth={2.2} />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#9c6a38] text-white text-[9px] font-bold tracking-widest uppercase shadow-md">
                    Recognised
                  </div>
                </div>
              </div>

              <h1 className="text-[44px] sm:text-[58px] lg:text-[72px] font-serif font-medium text-[#2b2723] leading-[1.05] tracking-[-0.02em] mb-6">
                DPIIT Recognised <span className="text-olive-700">Startup</span>
              </h1>
              <p className="text-[19px] sm:text-[22px] text-[#6b6965] leading-relaxed font-light max-w-2xl mb-4">
                Official Recognition. Stronger Foundation. Greater Opportunities.
              </p>
              <p className="text-[15px] sm:text-[16px] text-olive-700 font-semibold tracking-wide uppercase mb-10">
                Get Registered    Get Recognised    Grow Faster
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-olive-600 text-white text-[15px] font-semibold rounded-lg hover:bg-olive-700 transition-colors shadow-sm"
                >
                  Apply for DPIIT Recognition
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#eligibility"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-brown-200 text-brown-900 text-[15px] font-semibold rounded-lg hover:bg-cream transition-colors"
                >
                  Check Eligibility
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section id="eligibility" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F6F4F0]">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-olive-700 mb-4">
                01    Eligibility Criteria
              </span>
              <h2 className="text-[36px] sm:text-[46px] font-serif font-medium text-[#2b2723] leading-[1.1] mb-4">
                Are you eligible for DPIIT recognition?
              </h2>
              <p className="text-[17px] text-[#6b6965] leading-relaxed font-light">
                Per Startup India guidelines, your entity must meet all of the
                criteria below to qualify for official recognition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibility.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-7 border border-brown-100/60 shadow-[0_8px_28px_rgba(43,39,35,0.04)] hover:shadow-[0_14px_40px_rgba(43,39,35,0.08)] transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-olive-50 text-olive-700 flex items-center justify-center mb-5 group-hover:bg-olive-600 group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-serif text-[20px] font-semibold text-[#2b2723] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#6b6965] leading-[1.6] font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[13px] text-brown-400 italic">
              *As per DPIIT    Startup India guidelines.
            </p>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-y border-[#E5E1D6]">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-olive-700 mb-4">
                02    Documents Required
              </span>
              <h2 className="text-[36px] sm:text-[46px] font-serif font-medium text-[#2b2723] leading-[1.1] mb-4">
                What you&apos;ll need to apply
              </h2>
              <p className="text-[17px] text-[#6b6965] leading-relaxed font-light">
                Keep these documents ready before starting your DPIIT
                recognition application.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#f0ebe1]/60 rounded-2xl p-6 border border-[#e5e1d6]/80 hover:bg-[#f0ebe1] hover:shadow-[0_12px_30px_rgba(43,39,35,0.05)] transition-all"
                >
                  <div className="absolute top-4 right-4 text-[11px] font-bold text-olive-700/60 tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white text-olive-700 flex items-center justify-center mb-4 shadow-sm">
                    <doc.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#2b2723] leading-snug mb-1">
                    {doc.title}
                  </h3>
                  {doc.note && (
                    <p className="text-[12px] text-brown-500 italic">
                      {doc.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F6F4F0]">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-olive-700 mb-4">
                03    Key Benefits
              </span>
              <h2 className="text-[36px] sm:text-[46px] font-serif font-medium text-[#2b2723] leading-[1.1] mb-4">
                What DPIIT recognition unlocks
              </h2>
              <p className="text-[17px] text-[#6b6965] leading-relaxed font-light">
                A recognised startup gets meaningful tax, capital, IPR and
                regulatory advantages from day one.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-brown-100/60 shadow-[0_8px_28px_rgba(43,39,35,0.04)] hover:shadow-[0_16px_45px_rgba(43,39,35,0.08)] hover:-translate-y-0.5 transition-all flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-olive-600 to-olive-700 text-white flex items-center justify-center mb-6 shadow-[0_6px_20px_rgba(90,115,56,0.25)]">
                    <b.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-serif text-[22px] font-semibold text-[#2b2723] mb-3 leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-[#6b6965] leading-[1.65] font-light flex-1">
                    {b.text}
                  </p>
                  <div className="mt-6 pt-5 border-t border-brown-100/70 flex items-center gap-2 text-olive-700 text-[13px] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Included with recognition
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY / CTA */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white border-t border-[#E5E1D6]">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-br from-[#2b2723] to-[#1f1c19] rounded-[36px] px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-olive-600/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#9c6a38]/15 blur-3xl" />

              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-[34px] sm:text-[44px] font-serif font-medium text-white leading-[1.1] mb-5">
                    DPIIT Recognition is the first step.
                  </h2>
                  <p className="text-[18px] text-white/70 font-light leading-relaxed mb-8 max-w-md">
                    <span className="text-white font-semibold">Build today.</span>{" "}
                    <span className="text-white font-semibold">Scale tomorrow.</span>{" "}
                    Let us handle the application end-to-end so you can focus
                    on building your product.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2b2723] text-[15px] font-semibold rounded-lg hover:bg-cream transition-colors shadow-sm"
                    >
                      Get started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white text-[15px] font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Explore all services
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {journey.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-olive-600/30 text-olive-200 flex items-center justify-center">
                        <step.icon className="w-5 h-5" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/50 font-semibold mb-1">
                          Step {idx + 1}
                        </div>
                        <div className="text-[18px] font-serif font-semibold text-white">
                          {step.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
