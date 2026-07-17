"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=%2B919791222557&text&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_22px_rgba(37,211,102,0.6)] group"
    >
      {/* Soft pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 z-0" />
      
      {/* Official WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 relative z-10 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.908 1.488 5.45.004 9.885-4.385 9.888-9.775.002-2.613-1.015-5.07-2.866-6.924C16.726 2.09 14.27 1.071 11.66 1.07 6.212 1.066 1.777 5.455 1.774 10.846c-.001 1.7.45 3.355 1.309 4.792l-.999 3.647 3.753-.984H6.647zm11.215-6.572c-.303-.15-1.793-.883-2.073-.984-.279-.101-.483-.15-.687.15-.203.3-.79.984-.969 1.185-.18.201-.359.227-.662.076-.303-.15-1.28-.471-2.438-1.502-.901-.802-1.509-1.793-1.686-2.094-.177-.302-.019-.465.132-.614.136-.134.303-.353.454-.529.152-.177.203-.303.303-.505.1-.202.05-.379-.025-.53-.076-.15-.687-1.65-.94-2.259-.247-.597-.5-.516-.687-.526-.178-.009-.382-.01-.586-.01s-.535.076-.814.379c-.279.3-1.063 1.037-1.063 2.529 0 1.492 1.085 2.93 1.237 3.131.152.202 2.136 3.261 5.176 4.57.723.311 1.287.497 1.727.637.726.23 1.387.198 1.91.12.583-.087 1.793-.733 2.047-1.439.254-.706.254-1.314.178-1.44-.076-.124-.279-.201-.583-.352z" />
      </svg>

      {/* Pop-up helper text on hover */}
      <span className="absolute right-16 bg-[#2b2723] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Chat on WhatsApp
      </span>
    </a>
  );
}
