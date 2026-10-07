
"use client";

import React, { useState, useEffect } from "react";
import { Share2, Check, Copy, MessageCircle, Linkedin, Twitter } from "lucide-react";

interface Props {
  slug: string;
  title: string;
}

export default function BlogShareBar({ slug, title }: Props) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      // Increment views
      fetch(`/api/blogs/${slug}`, { method: "POST" }).catch(() => {});
    }
  }, [slug]);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - Read more on Founding Legals: ${currentUrl}`
  )}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(currentUrl)}&via=FoundingLegals`;

  return (
    <div className="flex items-center gap-2 flex-wrap text-xs">
      <span className="text-gray-400 font-semibold mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share:</span>
      </span>

      {/* WhatsApp */}
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1.5 transition-colors"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* LinkedIn */}
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold flex items-center gap-1.5 transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5 text-blue-600" />
        <span>LinkedIn</span>
      </a>

      {/* Twitter / X */}
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 font-semibold flex items-center gap-1.5 transition-colors"
        title="Share on X"
      >
        <Twitter className="w-3.5 h-3.5 text-gray-700" />
        <span>Post</span>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-gray-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
