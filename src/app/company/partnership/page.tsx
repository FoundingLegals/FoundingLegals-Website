import { ArrowRight, Handshake, Users, Globe, TrendingUp, Shield, Zap, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Sharing",
    description: "Earn competitive commissions on every client you refer. Our transparent model ensures fair rewards for quality partnerships.",
  },
  {
    icon: Users,
    title: "Co-Branded Solutions",
    description: "Leverage our platform under your brand. Offer your clients a premium compliance experience powered by Founding Legals.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description: "Get a dedicated partner success manager, priority support queue, and direct access to our leadership team.",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description: "Tap into our nationwide network of legal experts, CAs, and compliance professionals to serve clients across India.",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description: "Get started in days, not months. Our streamlined partner onboarding ensures you&apos;re up and running quickly.",
  },
  {
    icon: Building2,
    title: "Enterprise Tools",
    description: "Access partner dashboards, analytics, and white-label tools designed to scale your referral business.",
  },
];

const partnerTypes = [
  {
    title: "Referral Partner",
    description: "Recommend Founding Legals to startups and founders in your network. Earn commissions on every successful onboarding.",
    cta: "Ideal for: Advisors, Mentors, Angel Investors",
  },
  {
    title: "Channel Partner",
    description: "Integrate our compliance and legal services into your existing offerings. Provide end-to-end solutions to your clients.",
    cta: "Ideal for: CA Firms, Law Firms, Consultancies",
  },
  {
    title: "Technology Partner",
    description: "Build on our APIs and embed compliance workflows into your platform. Create seamless user experiences.",
    cta: "Ideal for: SaaS Platforms, Fintech, HR Tech",
  },
];

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans text-[#2b2723] pt-[70px] sm:pt-[82px]">
      <Header />

      {/* HERO */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-4 mb-24">
        <section className="w-full rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-[#5A6E3B]">
          {/* Left Block */}
          <div className="w-full md:w-1/2 p-12 sm:p-16 lg:py-24 lg:px-20 xl:px-24 flex flex-col justify-center items-start">

            <h1 className="text-4xl sm:text-[56px] font-serif font-medium text-white mb-6 tracking-[-0.01em] leading-[1.1]">
              Grow Together,<br />Win Together.
            </h1>
            <p className="text-white/85 text-[17px] sm:text-[19px] leading-[1.6] max-w-md font-medium mb-10">
              Join India&apos;s fastest-growing legal compliance ecosystem. Partner with Founding Legals and unlock new revenue streams while delivering exceptional value to startups.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#5A6E3B] text-[15px] font-bold rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/10"
            >
              Become a Partner

            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Partnership"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* WHY PARTNER */}
      <section className="px-6 py-24 md:py-32 flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 bg-[#e1f0c2] text-[#4d6b1d] text-[13px] font-semibold tracking-wide rounded border border-[#c4e38e] mb-12">
          Why Partner With Us
        </div>
        <h2 className="text-[36px] sm:text-[50px] lg:text-[56px] font-serif font-medium text-[#2b2723] leading-[1.15] max-w-[900px]">
          Build a <span className="text-[#5A6E3B]">thriving business</span> by helping startups succeed
        </h2>
      </section>

      {/* BENEFITS GRID */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-white rounded-2xl p-8 border border-[#E5E1D6] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#5A6E3B]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-olive-600/10 flex items-center justify-center mb-5 group-hover:bg-olive-600/15 transition-colors duration-300">
                <b.icon className="w-5 h-5 text-olive-600" />
              </div>
              <h3 className="text-[18px] font-bold text-[#2b2723] mb-3">{b.title}</h3>
              <p className="text-[14px] text-[#6b6560] leading-[1.7]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNER TYPES */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-[#e1f0c2] text-[#4d6b1d] text-[13px] font-semibold tracking-wide rounded border border-[#c4e38e] mb-6">
            Partnership Models
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-serif font-medium text-[#2b2723] leading-[1.15]">
            Choose the right fit for you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerTypes.map((p, i) => (
            <div
              key={p.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${i === 1
                ? "bg-[#5A6E3B] text-white border-[#5A6E3B] shadow-xl shadow-[#5A6E3B]/20"
                : "bg-white border-[#E5E1D6] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                }`}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-[#5A6E3B] text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className={`text-[22px] font-bold mb-4 ${i === 1 ? "text-white" : "text-[#2b2723]"}`}>
                {p.title}
              </h3>
              <p className={`text-[14px] leading-[1.7] mb-6 ${i === 1 ? "text-white/80" : "text-[#6b6560]"}`}>
                {p.description}
              </p>
              <div className={`text-[12px] font-semibold italic ${i === 1 ? "text-white/60" : "text-[#9b9590]"}`}>
                {p.cta}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="w-full relative min-h-[600px] bg-[#d7dacb] overflow-hidden">
        <div className="absolute inset-0 bg-[#e4e3d9]" />
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Partnership meeting"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
          <div className="bg-white/80 backdrop-blur-xl w-full max-w-[1100px] rounded-[48px] p-10 sm:p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between shadow-[0_40px_100px_rgba(43,39,35,0.12)] border border-white/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-olive-100/30 -ml-32 -mt-32 rounded-full transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-[44px] sm:text-[60px] lg:text-[72px] font-serif font-medium leading-none text-[#2b2723] mb-8 tracking-tight">
                Ready to<br /><span className="italic text-olive-700">partner up?</span>
              </h2>
              <p className="text-brown-600 text-[18px] font-light leading-relaxed mb-10 md:mb-0">
                Let&apos;s discuss how we can create mutual value. Our partnership team is ready to tailor a program that fits your business.
              </p>
            </div>
            <div className="relative z-10">
              <a
                href="/contact"
                className="group/btn inline-flex items-center gap-4 px-10 py-5 bg-[#5A6E3B] text-white text-[17px] font-bold rounded-[20px] hover:bg-[#4A5D2A] transition-all duration-300 shadow-xl shadow-olive-900/20 hover:shadow-olive-900/40"
              >
                Get in Touch

              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
