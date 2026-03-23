import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] font-sans text-[#2b2723] pt-[70px] sm:pt-[82px]">
      <Header />
      
      {/* 1. HERO SECTION (Screenshot 1) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mt-4 mb-24">
        <section className="w-full rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-[#5A6E3B]">
          {/* Left Olive Block */}
          <div className="w-full md:w-1/2 p-12 sm:p-16 lg:py-24 lg:px-20 xl:px-24 flex flex-col justify-center items-start">
            <h1 className="text-4xl sm:text-[64px] font-serif font-medium text-white mb-6 tracking-[-0.01em]">
              About us
            </h1>
            <p className="text-white/90 text-[17px] sm:text-[19px] leading-[1.6] max-w-sm font-medium">
              Helping founders bring their vision to life faster while ensuring ironclad corporate compliance and business strategy.
            </p>
          </div>

          {/* Right Image Box */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* using unoptimized img to avoid next.config domain issues, keeping matching fidelity */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Founding Legals Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* 2. OUR VISION (Screenshot 2) */}
      <section className="px-6 py-24 md:py-32 flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 bg-[#e1f0c2] text-[#4d6b1d] text-[13px] font-semibold tracking-wide rounded border border-[#c4e38e] mb-12">
          Our vision
        </div>
        <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-serif font-regular text-[#2b2723] leading-[1.15] max-w-[900px]">
          Founding Legals is on a mission to reduce the <span className="text-[#5A6E3B]">time, effort and cost</span> spent on corporate compliance
        </h2>
      </section>

      {/* 3. OUR STORY (Screenshot 3) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <section className="flex flex-col md:flex-row min-h-auto md:min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-white border border-[#E5E1D6]">
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
          <div className="w-full md:w-1/2 p-10 sm:p-16 lg:py-24 lg:px-20 xl:p-28 flex flex-col justify-center items-start bg-white">
            <h2 className="text-[44px] sm:text-[52px] font-serif font-medium text-[#2b2723] mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.7]">
              <p>
                Founding Legals was founded by top-tier legal practitioners and built by a team of technologists, compliance officers, and operators with deep experience in corporate structures. We've experienced firsthand how manual, fragmented registration workflows slow down business, introduce risk, and drain founder energy.
              </p>
              <p>
                That perspective informed our flagship platform: An AI-assisted compliance engine that helps startups register faster—without compromising legal integrity.
              </p>
              <p>
                Since then, Founding Legals has grown into a broader platform, serving not just incorporation, but also intellectual property, fund-raising support, and recurring compliances. We are proud to support some of the most innovative startups in India and beyond.
              </p>
            </div>
          </div>
        </section>
      </div>



      {/* 6. WE'RE HIRING (Screenshot 5) */}
      <section className="w-full relative min-h-[500px] bg-[#d7dacb]">
         <div className="absolute inset-0 bg-[#e4e3d9]" />
         <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
             alt="Office"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
         />
         <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-[#FAF9F6] w-full max-w-[1000px] rounded-[24px] p-8 sm:p-14 lg:p-20 flex flex-col md:flex-row items-start md:items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
               <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] font-serif font-medium leading-[1.05] text-[#2b2723] mb-8 md:mb-0">
                  We're hiring.<br/>Join us.
               </h2>
               <a 
                 href="#careers"
                 className="px-8 py-3.5 bg-[#5A6E3B] text-white text-[16px] font-semibold rounded-lg hover:bg-[#4A5D2A] transition-colors shadow-sm"
               >
                  Careers
               </a>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
