"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import { Briefcase, Users, Handshake, CheckCircle2, ArrowRight, Send } from "lucide-react";

export default function CareersPage() {
  const [state, handleSubmit] = useForm("xqeyrnpp"); // Using existing formspree ID

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-[#F6F4F0] pt-32 pb-20 px-6">
        <Header />
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-sm border border-brown-100">
           <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-olive-600" />
          </div>
          <h2 className="text-3xl font-serif font-semibold text-brown-900 mb-4">Application Received</h2>
          <p className="text-brown-600 leading-relaxed mb-8">
            Thank you for your interest in joining Founding Legals. Our talent acquisition team will review your application and get back to you soon.
          </p>
          <a href="/" className="text-olive-600 font-semibold hover:underline">Return to Home</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F6F4F0]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-600/10 border border-olive-600/20 rounded-md text-olive-700 text-[13px] font-semibold tracking-wide mb-8">
            <Briefcase className="w-4 h-4" />
            Careers at Founding Legals
          </div>
          <h1 className="text-[44px] sm:text-[60px] font-serif font-medium text-brown-900 leading-[1.05] tracking-tight mb-8">
            Build the future of <br />
            <span className="italic text-olive-700">Legal Infrastructure.</span>
          </h1>
          <p className="text-[20px] text-brown-600 leading-relaxed max-w-2xl font-light">
            We're on a mission to simplify the complex legal landscape for Indian startups. Join a team of legal experts, engineers, and visionaries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 sm:px-12 lg:px-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            {/* CA Hiring Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-[40px] p-10 sm:p-12 border border-brown-100/50 shadow-[0_8px_30px_rgba(43,39,35,0.04)] relative overflow-hidden group transition-all duration-500 hover:shadow-[0_24px_60px_rgba(43,39,35,0.08)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-olive-50/50 -mr-16 -mt-16 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:bg-olive-100/50" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-olive-600/10 rounded-2xl flex items-center justify-center mb-8 border border-olive-600/10 transition-transform duration-500">
                  <Users className="w-7 h-7 text-olive-600" />
                </div>
                <h2 className="text-[28px] font-serif font-semibold text-brown-900 mb-6 tracking-tight text-left">We are hiring for CA's</h2>
                <p className="text-brown-600 text-[16px] leading-[1.6] mb-8 font-light italic text-left">
                  Searching for ambitious Chartered Accountants (CAs) to lead our compliance team. If you're passionate about tax technology and the startup ecosystem, we want to hear from you.
                </p>
                <ul className="space-y-4 mb-4">
                  {["Experience in Indirect Tax & GST", "Knowledge of Startup Compliance", "Ability to lead a team of analysts"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[15px] text-brown-500 font-light">
                      <div className="w-5 h-5 bg-olive-500/10 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-olive-600" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partnership Section */}
            <div className="bg-[#5A7338] rounded-[40px] p-10 sm:p-12 text-white relative overflow-hidden group transition-all duration-500 hover:shadow-[0_24px_60px_rgba(90,115,56,0.3)]">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 -mr-20 -mb-20 rounded-full transition-transform duration-700 group-hover:scale-150 group-hover:bg-white/10" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 transition-transform duration-500">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-[28px] font-serif font-semibold mb-6 tracking-tight text-left">Partnership for CA Firms</h2>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-12 font-light text-left">
                  Partner with Founding Legals to offer premium legal and secretarial services to your clients. We provide the infrastructure, you provide the expertise. Join our network of certified partners.
                </p>
                <div className="mt-auto">
                  <a href="#apply" className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300">
                    Learn about partnership <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div id="apply" className="bg-white rounded-[32px] p-8 sm:p-12 border border-brown-100 shadow-[0_20px_60px_rgba(43,39,35,0.05)] sticky top-32">
            <h3 className="text-[32px] font-serif font-semibold text-brown-900 mb-10 tracking-tight text-left">Apply or Inquire</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
                </div>
                <div>
                  <label htmlFor="type" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">I am an...</label>
                  <select
                    id="type"
                    name="applicationType"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 font-medium cursor-pointer text-left"
                  >
                    <option value="individual-ca">Individual CA (Applying)</option>
                    <option value="ca-firm">CA Firm (Partnership)</option>
                    <option value="other">Other Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@startup.com"
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Message / Portfolio Link</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 resize-none text-left"
                    placeholder="Tell us about yourself or your firm..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-[#5A7338] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-olive-900/20 hover:bg-[#4a5f2e] transition-all flex items-center justify-center"
              >
                {state.submitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Send Application"
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
