"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { useForm, ValidationError } from "@formspree/react";
import { Sparkles, CheckCircle2, Send, ChevronDown, ArrowRight, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [state, handleSubmit] = useForm("xqeyrnpp");
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-[#F6F4F0] pt-32 pb-20 px-6">
        <Header />
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-10 text-center shadow-sm border border-brown-100">
          <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-olive-600" />
          </div>
          <h2 className="text-2xl font-serif font-semibold text-brown-900 mb-4">Request Received</h2>
          <p className="text-brown-600 text-sm leading-relaxed mb-8">
            Thank you for selecting Founding Legals. One of our experts will contact you within 24 hours.
          </p>
          <a href="/" className="text-olive-600 font-semibold hover:underline text-sm">Return to Home</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF9]">
      <Header />

      <section className="pt-32 pb-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Visuals and Contact */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-50 border border-olive-100 rounded-lg text-olive-700 text-[13px] font-medium mb-8">
                <Calendar className="w-4 h-4" />
                Schedule a Demo
              </div>
              
              <h1 className="text-[48px] sm:text-[64px] font-serif font-medium text-brown-900 leading-[1.1] mb-8 text-left">
                Choose the services <br />
                <span className="italic text-olive-700">that fit </span>
                your stage.
              </h1>
              
              <p className="text-[18px] text-brown-600 leading-relaxed max-w-lg font-light mb-12 text-left">
                From Day 0 incorporation to institutional rounds, we provide the legal foundation for every milestone of your startup journey.
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brown-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-[16px] text-brown-700 font-medium">info@foundinglegals.com</div>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brown-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-[16px] text-brown-700 font-medium">+91 9791222557</div>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white border border-brown-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brown-400 uppercase tracking-widest mb-1">Office</div>
                    <div className="text-[15px] text-brown-600 leading-relaxed max-w-[320px]">
                      The Herbt's Square building, 5th Floor APIIC I.T Park, Mangalagiri AMARAVATI-522503, AP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Form */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-brown-100 shadow-[0_20px_60px_rgba(43,39,35,0.05)]">
            <h3 className="text-[32px] font-serif font-semibold text-brown-900 mb-10 tracking-tight text-left">Select Your Services</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                    placeholder="Arjun"
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                    placeholder="Mehta"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                  placeholder="arjun@startup.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[11px] mt-1.5" />
              </div>

              <div>
                <label htmlFor="company" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 text-left"
                  placeholder="Unicorn Inc."
                />
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">Desired Legal Support</label>
                <input type="hidden" name="service" value={selectedService} required />
                
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-5 py-3 bg-[#FAF9F6] border border-brown-100 rounded-xl text-[14px] text-brown-900 text-left focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all shadow-sm"
                >
                  <span className={selectedService ? "text-brown-900" : "text-brown-400"}>
                    {selectedService || "Select a service..."}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-olive-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-brown-100 rounded-xl shadow-[0_20px_50px_rgba(43,39,35,0.1)] max-h-60 overflow-y-auto overflow-x-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => {
                          setSelectedService(s.title);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-5 py-2.5 text-[13px] text-brown-600 hover:bg-olive-50 hover:text-olive-700 transition-colors border-b border-brown-50 last:border-0"
                      >
                        {s.title}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService("Custom Legal Assistance");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[13px] text-brown-600 hover:bg-olive-50 hover:text-olive-700 transition-colors"
                    >
                      Custom Legal Assistance
                    </button>
                  </div>
                )}
                <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-500 text-[10px] mt-1.5" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-brown-400 uppercase tracking-[0.15em] mb-3 text-left">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-[#FAF9F6] text-brown-900 placeholder-brown-300 resize-none text-left"
                  placeholder="Tell us about your startup or specific requirements..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-[#5A7338] hover:bg-[#4a5f2e] text-white rounded-xl font-bold text-[16px] shadow-lg shadow-olive-900/20 transition-all flex items-center justify-center"
                >
                  {state.submitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Submit Request"
                  )}
                </button>
                <p className="text-[10px] text-brown-400 text-left mt-6 leading-relaxed font-light px-1">
                  By submitting this form, you agree to our privacy policy and consent to receiving marketing communications.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
