"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/analytics")) {
    return null;
  }

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=%2B919791222557&text&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_22px_rgba(37,211,102,0.6)] group"
    >
      {/* Soft pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 z-0" />
      
      {/* Official WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 relative z-10"
        viewBox="0 0 175.216 175.552"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M87.697 15.52c-34.912 0-63.327 28.411-63.327 63.323 0 11.156 2.915 22.046 8.448 31.636l1.312 2.274-5.546 20.297 20.785-5.451 2.2 1.306c9.255 5.485 19.866 8.375 30.687 8.375 34.912 0 63.324-28.412 63.324-63.327 0-16.924-6.589-32.83-18.558-44.795-11.968-11.969-27.876-18.558-44.801-18.558zm36.883 90.076c-1.517 4.281-7.575 7.838-10.515 8.328-2.825.469-6.495.66-10.51-.627-2.428-.778-5.539-1.996-9.52-3.719-16.945-7.33-28.026-24.526-28.877-25.66-.848-1.134-6.887-9.16-6.887-17.472 0-8.311 4.354-12.399 5.897-14.103 1.542-1.704 3.37-2.13 4.498-2.13 1.127 0 2.254.01 3.238.058.983.048 2.308-.372 3.606 2.748 1.385 3.327 4.743 11.582 5.155 12.422.412.84.687 1.82.127 2.94-.56 1.12-1.127 1.82-2.106 2.96-.98 1.141-1.782 1.956-2.617 2.871-.924 1.012-.497 2.083.024 2.977 1.189 2.04 4.254 7.028 9.123 11.365 6.262 5.578 11.534 7.297 13.167 8.106 1.633.808 2.585.69 3.541-.413.957-1.103 4.104-4.787 5.201-6.43 1.096-1.644 2.193-1.371 3.68-.823 1.488.549 9.444 4.453 11.066 5.265 1.623.812 2.705 1.218 3.104 1.905.399.687.399 3.978-1.118 8.259z"
        />
      </svg>

      {/* Pop-up helper text on hover */}
      <span className="absolute left-16 bg-[#2b2723] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        Chat on WhatsApp
      </span>
    </a>
  );
}
