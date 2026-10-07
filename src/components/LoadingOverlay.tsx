"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LoadingOverlay = () => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }

    try {
      const hasSeenSplash = sessionStorage.getItem("hasSeenFoundingLegalsSplash");
      if (hasSeenSplash) {
        setIsVisible(false);
        setShouldRender(false);
        return;
      }

      sessionStorage.setItem("hasSeenFoundingLegalsSplash", "true");
      setIsVisible(true);
      setShouldRender(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 180);

      return () => clearTimeout(timer);
    } catch {
      setIsVisible(false);
      setShouldRender(false);
    }
  }, [isAdmin]);

  // If on admin or already seen, never render
  if (isAdmin || !shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {isVisible && (
        <motion.div
          id="loading-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] grid place-items-center bg-[#FFFFFF] pointer-events-none select-none"
        >
          <div className="relative w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
            <Image
              src="/page-loader.gif"
              alt="Founding Legals"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
