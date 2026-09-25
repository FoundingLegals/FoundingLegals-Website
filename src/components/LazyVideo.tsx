"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

/**
 * LazyVideo
 * Highly optimized video player that:
 * 1. Defers setting `src` until the video element is within 300px of the viewport.
 * 2. Pauses decoding and playback when scrolled out of view to eliminate GPU/CPU bottlenecks.
 * 3. Automatically resumes playback when scrolled back into view.
 * 4. Preserves all existing attributes, styling, loop, muted, and responsive layout.
 */
export default function LazyVideo({
  src,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (autoPlay && video.paused) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Browser prevented autoplay before user interaction; ignore silently
                });
              }
            }
          } else {
            // Scrolled out of view: pause playback to free up hardware decoder & memory
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        rootMargin: "300px 0px 300px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      data-src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="none"
      className={className}
      style={style}
      {...props}
    />
  );
}
