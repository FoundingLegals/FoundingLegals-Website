"use client";

import { useEffect } from "react";

export default function StartPage() {
  useEffect(() => {
    window.location.href = "https://app.foundinglegals.com/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <p className="font-serif text-2xl text-brown-900 mb-2">
          Launching your founder workspace…
        </p>
        <p className="text-brown-500 text-sm">
          You will be redirected in a moment.
        </p>
      </div>
    </div>
  );
}
