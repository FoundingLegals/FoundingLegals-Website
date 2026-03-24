"use client";

import { useState } from "react";
import { Shield, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 bg-olive-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-olive-600" />
        </div>
        <h2 className="text-3xl font-serif font-semibold text-brown-900 mb-4">Message Received</h2>
        <p className="text-brown-600 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A Founding Legals expert will contact you at the provided email to schedule your demo shortly.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-olive-600 font-semibold hover:text-olive-700 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 bg-[#F6F4F0] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-olive-900/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brown-100 rounded-md text-olive-700 text-[13px] font-semibold tracking-wide mb-8">
              <Shield className="w-4 h-4" />
              Schedule a Demo
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-brown-900 leading-[1.1] mb-8">
              Let's build your <br />
              <span className="italic text-olive-700">legal foundation</span> <br />
              together.
            </h1>
            
            <p className="text-lg text-brown-600 leading-relaxed mb-12 max-w-lg">
              Ready to see how Founding Legals can transform your startup's compliance and legal workflows? Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-brown-50">
                  <Mail className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-900 uppercase tracking-wider mb-1">Email Us</h4>
                  <a href="mailto:info@foundinglegals.com" className="text-lg text-brown-600 hover:text-olive-600 transition-colors">
                    info@foundinglegals.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-brown-50">
                  <MapPin className="w-5 h-5 text-olive-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-900 uppercase tracking-wider mb-1">Office</h4>
                  <p className="text-lg text-brown-600">
                    Tech Park, Sector 62 <br />
                    Noida, UP 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(43,39,35,0.08)] border border-brown-100/50 p-8 sm:p-10">
            <h3 className="text-2xl font-serif font-semibold text-brown-900 mb-8">Request a Personal Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold text-brown-400 uppercase tracking-widest mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-cream/20"
                    placeholder="Arjun"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold text-brown-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-cream/20"
                    placeholder="Mehta"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-brown-400 uppercase tracking-widest mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-cream/20"
                  placeholder="arjun@startup.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-xs font-bold text-brown-400 uppercase tracking-widest mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-cream/20"
                  placeholder="Unicorn Inc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brown-400 uppercase tracking-widest mb-2">How can we help?</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-brown-100 focus:outline-none focus:ring-2 focus:ring-olive-500/20 focus:border-olive-500 transition-all bg-cream/20 resize-none"
                  placeholder="Tell us about your startup or specific requirements..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-4 bg-olive-600 text-white rounded-xl font-bold text-[15px] shadow-lg shadow-olive-600/20 hover:bg-olive-700 hover:shadow-olive-600/30 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Request
                  </>
                )}
              </button>
              
              <p className="text-[11px] text-brown-400 text-center leading-relaxed">
                By submitting this form, you agree to our privacy policy and consent to receiving marketing communications.
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
