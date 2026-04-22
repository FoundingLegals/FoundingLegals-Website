"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LoadingOverlay = () => {
  // Initialize to false to prevent flashing on internal navigation
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenFoundingLegalsSplash");

    if (!hasSeenSplash) {
      setIsVisible(true);
      setShouldRender(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenFoundingLegalsSplash", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  // If already seen or animation finished, don't render anything
  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {isVisible && (
        <motion.div
          id="loading-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] grid place-items-center bg-[#FFFFFF]"
        >
          <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px]">
            <Image
              src="/Founding Legals Page Over Lay..gif"
              alt="Founding Legals Loading..."
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
