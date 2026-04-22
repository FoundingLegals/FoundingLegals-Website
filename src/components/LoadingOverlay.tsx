"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LoadingOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds to match the GIF animation speed
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // Clean up
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
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
