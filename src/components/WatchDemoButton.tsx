"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type WatchDemoButtonProps = {
  videoId: string;
  label?: string;
  title?: string;
};

export default function WatchDemoButton({
  videoId,
  label = "Watch Demo",
  title = "Product demo video",
}: WatchDemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [isOpen]);

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?rel=0&modestbranding=1&autoplay=1`;

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-olive-600 bg-transparent px-7 py-3 text-[15px] font-semibold text-olive-700 transition-all duration-300 hover:bg-olive-600/10 hover:-translate-y-0.5"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-olive-600 text-white">
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 2.5v11a.5.5 0 0 0 .77.42l9-5.5a.5.5 0 0 0 0-.84l-9-5.5A.5.5 0 0 0 4 2.5z" />
          </svg>
        </span>
        {label}
      </button>

      {mounted && isOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brown-900/20 px-4 py-6 sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full"
            style={{
              maxWidth: "min(100%, calc(88vh * 16 / 9), 1800px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl bg-cream p-1.5 sm:p-2 shadow-2xl ring-2 ring-olive-600/70">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-brown-900/20">
                <iframe
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close demo video"
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-olive-600 text-white shadow-lg ring-2 ring-cream transition-all duration-200 hover:bg-olive-700 hover:scale-110 sm:-top-5 sm:-right-5 sm:h-12 sm:w-12"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 4l10 10M14 4L4 14" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
