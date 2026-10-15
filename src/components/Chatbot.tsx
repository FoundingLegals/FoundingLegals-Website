"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  User,
  X,
  ArrowUp,
  RotateCcw,
  Copy,
  Check,
  Calendar,
  Sparkles,
  Volume2,
  VolumeX,
  Building2,
  FileSpreadsheet,
  ShieldCheck,
  FileText,
  PhoneCall,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { openFreeConsultation } from "@/components/FreeConsultationModal";
import { usePathname } from "next/navigation";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isError?: boolean;
}

const formatTime = (date: Date) => {
  if (!date || isNaN(new Date(date).getTime())) return "";
  return new Date(date).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });
};

// Peaceful, gentle sound notification using Web Audio API (smooth pentatonic chord chime)
function playPeacefulNotificationSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;

    // Harmonic crystalline pentatonic notes (G5, B5, E6)
    const notes = [
      { freq: 783.99, start: 0, dur: 0.42, gain: 0.04 },
      { freq: 987.77, start: 0.06, dur: 0.38, gain: 0.035 },
      { freq: 1318.51, start: 0.12, dur: 0.45, gain: 0.03 },
    ];

    notes.forEach(({ freq, start, dur, gain: targetGain }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + start);

      // Smooth envelope: 20ms attack, exponential decay
      gainNode.gain.setValueAtTime(0, now + start);
      gainNode.gain.linearRampToValueAtTime(targetGain, now + start + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now + start);
      osc.stop(now + start + dur + 0.02);
    });

    setTimeout(() => {
      try {
        ctx.close();
      } catch {}
    }, 750);
  } catch (err) {
    // Graceful fallback if audio is restricted by browser policy
  }
}

// Markdown styling wrapper matching chatbot_theme
function MarkdownWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[13.5px] leading-[1.55] break-words text-inherit">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-[15px] font-semibold mt-2.5 mb-1.5 leading-tight text-inherit first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-[14.5px] font-semibold mt-2.5 mb-1.5 leading-tight text-inherit first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-[14px] font-semibold mt-2 mb-1 leading-tight text-inherit first:mt-0">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-[13.5px] font-semibold mt-2 mb-1 leading-tight text-inherit">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 leading-[1.55]">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-inherit">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-inherit">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-[18px] mb-2 space-y-1 last:mb-0">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-[18px] mb-2 space-y-1 last:mb-0">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1 leading-[1.45] last:mb-0">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-3 border-[#D1D5DB] pl-2.5 my-2 italic text-[#4B5563]">
              {children}
            </blockquote>
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="bg-black/6 text-[12px] font-mono px-1 py-0.5 rounded"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-[#1F2937] text-[#F9FAFB] p-2 sm:p-3 rounded-md text-[12px] font-mono overflow-x-auto my-2">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] underline hover:text-[#1d4ed8]"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-2.5 border-t border-[#E5E7EB]" />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-2">
              <table className="border-collapse w-full text-[12.5px]">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-[#E5E7EB] bg-[#F3F4F6] px-2 py-1 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[#E5E7EB] px-2 py-1 text-left">
              {children}
            </td>
          ),
        }}
      >
        {typeof children === "string" ? children : ""}
      </ReactMarkdown>
    </div>
  );
}
const INLINE_SERVICES = [
  "Private Limited (Pvt Ltd) Company Incorporation",
  "LLP (Limited Liability Partnership) Registration",
  "One Person Company (OPC) Registration",
  "GST Registration & Monthly Compliance Filings",
  "Trademark Registration & Brand IP Protection",
  "Founders' Agreement & Custom Legal Contracts",
  "Startup India (DPIIT) & 80-IAC Tax Exemption",
  "General Startup Legal & CA Consultation",
];

function detectServiceFromText(text: string): string | null {
  if (!text) return null;
  const lower = text.toLowerCase();

  if (
    lower.includes("pvt ltd") ||
    lower.includes("private limited") ||
    lower.includes("pvt. ltd") ||
    lower.includes("incorporat") ||
    lower.includes("company setup") ||
    lower.includes("register company") ||
    lower.includes("start a company") ||
    lower.includes("company registration") ||
    lower.includes("mca") ||
    lower.includes("moa") ||
    lower.includes("aoa") ||
    lower.includes("spice+")
  ) {
    return "Private Limited (Pvt Ltd) Company Incorporation";
  }
  if (lower.includes("llp") || lower.includes("limited liability") || lower.includes("llp-01")) {
    return "LLP (Limited Liability Partnership) Registration";
  }
  if (lower.includes("opc") || lower.includes("one person company")) {
    return "One Person Company (OPC) Registration";
  }
  if (lower.includes("gst") || lower.includes("tax filing") || lower.includes("tax return")) {
    return "GST Registration & Monthly Compliance Filings";
  }
  if (
    lower.includes("trademark") ||
    lower.includes("brand name") ||
    lower.includes("logo") ||
    lower.includes("copyright") ||
    lower.includes("ip protection") ||
    lower.includes("patent")
  ) {
    return "Trademark Registration & Brand IP Protection";
  }
  if (
    lower.includes("agreement") ||
    lower.includes("contract") ||
    lower.includes("founder") ||
    lower.includes("term sheet") ||
    lower.includes("sha") ||
    lower.includes("nda")
  ) {
    return "Founders' Agreement & Custom Legal Contracts";
  }
  if (
    lower.includes("startup india") ||
    lower.includes("dpiit") ||
    lower.includes("80-iac") ||
    lower.includes("tax exemption")
  ) {
    return "Startup India (DPIIT) & 80-IAC Tax Exemption";
  }
  if (
    lower.includes("consult") ||
    lower.includes("advisory") ||
    lower.includes("expert") ||
    lower.includes("quote") ||
    lower.includes("pricing") ||
    lower.includes("cost") ||
    lower.includes("fee")
  ) {
    return "General Startup Legal & CA Consultation";
  }

  return null;
}
const QUICK_SERVICES = [
  {
    id: "incorporation",
    title: "Company Setup",
    desc: "Pvt Ltd, LLP, OPC",
    icon: Building2,
    query: "What is the process, timeline, and fee structure for Private Limited or LLP company incorporation?",
  },
  {
    id: "gst",
    title: "GST & Returns",
    desc: "Registration & Filings",
    icon: FileSpreadsheet,
    query: "Can you assist with GST registration and monthly compliance return filing for my business?",
  },
  {
    id: "trademark",
    title: "Trademark & IP",
    desc: "Brand Name Protection",
    icon: ShieldCheck,
    query: "How do I register and protect my startup brand name and logo in India?",
  },
  {
    id: "agreements",
    title: "Legal Contracts",
    desc: "Founders & Investors",
    icon: FileText,
    query: "What is included in a Founders' Agreement, Term Sheet, or SHA advisory?",
  },
];

export default function Chatbot() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/analytics")) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      text: "Welcome to Founding Legals. How can our legal and compliance advisory team assist your startup today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ── Inline lead capture form state ──────────────────────────────
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadService, setLeadService] = useState("Private Limited (Pvt Ltd) Company Incorporation");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [leadFormDismissed, setLeadFormDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Auto-open for new users when scrolled ────────────────────────
  useEffect(() => {
    if (!isMounted) return;
    if (typeof window === "undefined") return;

    const STORAGE_KEY = "fl_has_seen_auto_chat_v1";
    let hasSeen = false;
    try {
      hasSeen = !!localStorage.getItem(STORAGE_KEY);
    } catch {}

    if (hasSeen) return;

    let triggered = false;
    const handleScroll = () => {
      if (triggered) return;
      // Trigger when scrolled down by 260px or more
      if (window.scrollY > 260) {
        triggered = true;
        try {
          localStorage.setItem(STORAGE_KEY, "true");
        } catch {}

        setTimeout(() => {
          setIsOpen(true);
        }, 600);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  // ── Live page scraper ─────────────────────────────────────────────
  const scrapeLivePage = (): string => {
    try {
      const parts: string[] = [];
      parts.push(`Page: ${document.title}`);
      parts.push(`URL: ${window.location.pathname}`);

      const EXCLUDED_HEADINGS = ["Founding Legals Assistant", "Fin"];
      const headings = Array.from(document.querySelectorAll("h1, h2, h3"))
        .map((el) => `${el.tagName}: ${el.textContent?.trim()}`)
        .filter((h) => h && !EXCLUDED_HEADINGS.some((ex) => h.includes(ex)));
      if (headings.length) parts.push("Headings:\n" + headings.join("\n"));

      const activeTabs = Array.from(
        document.querySelectorAll('[role="tab"][aria-selected="true"], [data-active="true"]')
      )
        .map((el) => el.textContent?.trim())
        .filter(Boolean);
      if (activeTabs.length) parts.push("Active Tabs: " + activeTabs.join(", "));

      const formFields: string[] = [];
      document.querySelectorAll("label").forEach((label) => {
        const labelText = label.textContent?.replace(/[*?]/g, "").trim();
        if (!labelText) return;
        const forId = label.getAttribute("for");
        let inputEl: any = null;
        if (forId) {
          inputEl = document.getElementById(forId);
        } else {
          inputEl = label.querySelector("input, select, textarea");
        }
        if (inputEl) {
          let value = "";
          if (inputEl.tagName === "SELECT") {
            value = inputEl.options?.[inputEl.selectedIndex]?.text || "";
          } else {
            value = inputEl.value || "";
          }
          formFields.push(`${labelText}: ${value || "(empty)"}`);
        } else {
          formFields.push(`${labelText}: (no input)`);
        }
      });
      if (formFields.length) parts.push("Form Fields:\n" + formFields.join("\n"));

      const hints = Array.from(
        document.querySelectorAll("small, .hint, [data-tooltip], [aria-description]")
      )
        .map((el) => el.textContent?.trim())
        .filter(Boolean)
        .slice(0, 10);
      if (hints.length) parts.push("Help Text:\n" + hints.join("\n"));

      const banners = Array.from(
        document.querySelectorAll('[role="alert"], .alert, .error-message, .warning')
      )
        .map((el) => el.textContent?.trim())
        .filter(Boolean)
        .slice(0, 5);
      if (banners.length) parts.push("Alerts:\n" + banners.join("\n"));

      return parts.join("\n\n");
    } catch {
      return "";
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        text: "Conversation cleared. How can our legal and compliance advisory team assist your startup today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setShowLeadForm(false);
    setLeadFormDismissed(false);
    setLeadSubmitted(false);
    setLeadError("");
  };

  const sendMessage = async (userText: string) => {
    if (!userText.trim()) return;

    const trimmed = userText.trim();
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: trimmed,
      sender: "user",
      timestamp: new Date(),
    };

    // Auto-detect service from user message (e.g. Pvt Ltd, LLP, GST, Trademark, etc.)
    const detected = detectServiceFromText(trimmed);
    if (detected) {
      setLeadService(detected);
      if (!leadSubmitted) {
        setShowLeadForm(true);
        setLeadFormDismissed(false);
      }
    }

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setIsTyping(true);

    const livePageData = scrapeLivePage();
    const botMsgId = (Date.now() + 1).toString();

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_CHATBOT_API_URL ||
        process.env.NEXT_PUBLIC_HELP_CHATBOT_URL ||
        "http://localhost:5005";
      const endpoint = baseUrl.endsWith("/api/chat/web") || baseUrl.endsWith("/api/chat/app")
        ? baseUrl
        : `${baseUrl}/api/chat/web`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          query: trimmed,
          live_page: livePageData,
          bot_type: "web",
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type") || "";

      if ((contentType.includes("text/event-stream") || contentType.includes("text/plain")) && response.body) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: botMsgId, text: "", sender: "bot", timestamp: new Date() },
        ]);
        setStreamingId(botMsgId);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let fullBotReply = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith("data:")) {
              const dataStr = trimmedLine.replace(/^data:\s*/, "");
              if (!dataStr) continue;
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
                  fullBotReply += parsed.chunk;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === botMsgId ? { ...m, text: m.text + parsed.chunk } : m
                    )
                  );
                }
              } catch (err) {
                console.error("SSE parse error", err);
              }
            }
          }
        }
        setStreamingId(null);
        if (soundEnabled) {
          playPeacefulNotificationSound();
        }

        // Auto-detect service from bot response if not yet detected
        if (!leadSubmitted && !leadFormDismissed) {
          const detectedFromBot = detectServiceFromText(fullBotReply);
          if (detectedFromBot) {
            setLeadService(detectedFromBot);
            setShowLeadForm(true);
          }
        }
      } else {
        const data = await response.json();
        const answerText = data.answer || data.text || "Sorry, I couldn't understand that.";

        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: botMsgId, text: answerText, sender: "bot", timestamp: new Date() },
        ]);
        if (soundEnabled) {
          playPeacefulNotificationSound();
        }

        if (!leadSubmitted && !leadFormDismissed) {
          const detectedFromBot = detectServiceFromText(answerText);
          if (detectedFromBot) {
            setLeadService(detectedFromBot);
            setShowLeadForm(true);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setIsTyping(false);
      setStreamingId(null);
      const errorMsg: Message = {
        id: botMsgId,
        text: "Sorry, I am having trouble connecting to the server.",
        sender: "bot",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => {
        const exists = prev.some((m) => m.id === botMsgId);
        if (exists) {
          return prev.map((m) => (m.id === botMsgId ? errorMsg : m));
        }
        return [...prev, errorMsg];
      });
    }
  };

  const handleSend = () => {
    sendMessage(inputValue);
  };

  const handleQuickOption = (queryText: string) => {
    const detected = detectServiceFromText(queryText);
    if (detected) {
      setLeadService(detected);
      if (!leadSubmitted) {
        setShowLeadForm(true);
        setLeadFormDismissed(false);
      }
    }
    sendMessage(queryText);
  };

  const handleRequestConsultation = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setShowLeadForm(true);
    setLeadFormDismissed(false);
    setTimeout(scrollToBottom, 120);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError("");

    if (!leadName.trim() || leadName.trim().length < 2) {
      setLeadError("Please enter your full name (at least 2 characters).");
      return;
    }

    const cleanDigits = leadPhone.trim().replace(/\D/g, "");
    if (cleanDigits.length < 10) {
      setLeadError("Please enter a valid 10-digit mobile / WhatsApp number.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!leadEmail.trim() || !emailRegex.test(leadEmail.trim())) {
      setLeadError("Please enter a valid email address.");
      return;
    }

    if (!leadService.trim()) {
      setLeadError("Please select your service requirement.");
      return;
    }

    setLeadSubmitting(true);

    const formattedMobile = cleanDigits.length === 10 ? `+91 ${cleanDigits}` : leadPhone.trim();

    const payload = {
      name: leadName.trim(),
      email: leadEmail.trim(),
      mobile: formattedMobile,
      phone: formattedMobile,
      service: leadService.trim(),
      service_name: leadService.trim(),
      source_page: typeof window !== "undefined" ? window.location.pathname : "/chatbot",
      source: "Website Chatbot Inline Form",
      message: `Direct inquiry via website chatbot for ${leadService.trim()}`,
    };

    const formspreePayload = {
      _subject: `New Chatbot Lead: ${leadService.trim()} from ${leadName.trim()}`,
      name: leadName.trim(),
      email: leadEmail.trim(),
      _replyto: leadEmail.trim(),
      phone: formattedMobile,
      mobile: formattedMobile,
      service: leadService.trim(),
      requirement: leadService.trim(),
      source: "Website Chatbot Inline Form",
      source_url: typeof window !== "undefined" ? window.location.href : "https://foundinglegals.com",
      helpline: "+91 9791222557",
    };

    try {
      await Promise.allSettled([
        fetch("/api/service-requests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        fetch("https://formspree.io/f/xqeyrnpp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formspreePayload),
        }),
      ]);

      setLeadSubmitted(true);
      setLeadSubmitting(false);

      if (soundEnabled) {
        playPeacefulNotificationSound();
      }

      // Append confirmation message to chat
      const confirmationBotMsg: Message = {
        id: "lead-confirm-" + Date.now(),
        text: `**Thank you, ${leadName.trim()}!**\n\nWe have received your requirement for **${leadService.trim()}**.\n\nA Senior CA & Legal Specialist will contact you at **+91 ${cleanDigits.slice(-10)}** and **${leadEmail.trim()}** shortly to share the complete procedure, fee breakdown, and documentation.\n\nFor instant priority assistance, call or WhatsApp us directly at **+91 9791222557**.`,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, confirmationBotMsg]);
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    } catch (err) {
      console.warn("Lead form dispatch error:", err);
      setLeadSubmitted(true);
      setLeadSubmitting(false);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);

  const handleCloseChat = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      localStorage.setItem("fl_has_seen_auto_chat_v1", "true");
    } catch {}
    setIsOpen(false);
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 320);
  };

  // ── Viewport boundaries constraint ────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const padding = 12;

      if (isOpen) {
        const winWidth = 450;
        const winHeight = 620;
        const minX = padding - (screenWidth - 24 - winWidth);
        const maxX = 24 - padding;
        const minY = padding - (screenHeight - 24 - winHeight);
        const maxY = 24 - padding;

        setPosition((prev) => ({
          x: Math.max(minX, Math.min(maxX, prev.x)),
          y: Math.max(minY, Math.min(maxY, prev.y)),
        }));
      } else {
        const btnSize = 56;
        const minX = padding - (screenWidth - 24 - btnSize);
        const maxX = 24 - padding;
        const minY = padding - (screenHeight - 24 - btnSize);
        const maxY = 24 - padding;

        setPosition((prev) => ({
          x: Math.max(minX, Math.min(maxX, prev.x)),
          y: Math.max(minY, Math.min(maxY, prev.y)),
        }));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;

    const target = e.target as HTMLElement;
    if (
      target.closest("#chat-close-button") ||
      target.closest("#chat-reset-button") ||
      target.closest("textarea") ||
      (target.closest("button") &&
        !target.closest("#floating-chat-button") &&
        !target.closest("#chat-header-drag"))
    ) {
      return;
    }

    isDraggingRef.current = true;
    setIsDraggingState(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    target.setPointerCapture(e.pointerId);
    e.stopPropagation();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    let newX = e.clientX - dragStartRef.current.x;
    let newY = e.clientY - dragStartRef.current.y;

    const startX = dragStartRef.current.x + position.x;
    const startY = dragStartRef.current.y + position.y;
    const distance = Math.sqrt(
      Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2)
    );

    if (distance > 4) {
      hasMovedRef.current = true;
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const padding = 12;

    if (isOpen) {
      const winWidth = 450;
      const winHeight = 620;
      const minX = padding - (screenWidth - 24 - winWidth);
      const maxX = 24 - padding;
      const minY = padding - (screenHeight - 24 - winHeight);
      const maxY = 24 - padding;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
    } else {
      const btnSize = 56;
      const minX = padding - (screenWidth - 24 - btnSize);
      const maxX = 24 - padding;
      const minY = padding - (screenHeight - 24 - btnSize);
      const maxY = 24 - padding;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
    }

    setPosition({ x: newX, y: newY });
    e.stopPropagation();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingState(false);
    const target = e.target as HTMLElement;
    try {
      target.releasePointerCapture(e.pointerId);
    } catch (err) {}
    e.stopPropagation();
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsOpen(true);
  };

  if (!isMounted) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] w-0 h-0"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Floating Launcher Button */}
      {!isOpen && (
        <motion.button
          id="floating-chat-button"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={handleButtonClick}
          style={{ touchAction: "none" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Chat Assistant"
          className="absolute bottom-0 right-0 w-[60px] h-[60px] rounded-full p-[2px] bg-white border-2 border-[#16a34a] shadow-[0_6px_24px_rgba(22,163,74,0.35)] cursor-grab transition-transform overflow-visible select-none"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF9F5]">
            <img
              src="/support-agent-avatar.jpg"
              alt="Legal Support Specialist"
              className="w-full h-full object-cover object-top pointer-events-none select-none"
            />
          </div>
          {/* Active Online Indicator */}
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#22c55e] border-2 border-white rounded-full shadow-xs pointer-events-none" />
        </motion.button>
      )}

      {/* Chat Window */}
      <div
        className={`absolute bottom-0 right-0 w-[450px] h-[620px] max-h-[calc(100vh-80px)] max-w-[calc(100vw-32px)] bg-white rounded-[24px] shadow-[0_12px_36px_rgba(0,0,0,0.14)] flex flex-col overflow-hidden border border-[#E5E7EB] transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "visible opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "invisible opacity-0 scale-95 translate-y-5 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div
          id="chat-header-drag"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ cursor: "grab", touchAction: "none" }}
          className="px-4 py-3.5 bg-white border-b border-[#F3F4F6] flex items-center justify-between select-none shrink-0"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E5E7EB] shrink-0 shadow-2xs">
              <img
                src="/support-agent-avatar.jpg"
                alt="Legal Specialist"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-brown-900 leading-none">Founding Legals</div>
              <div className="text-[11px] text-[#16a34a] font-medium leading-tight mt-0.5">Online • Legal Specialist</div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              title={soundEnabled ? "Mute notification sound" : "Enable notification sound"}
              className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              id="chat-reset-button"
              type="button"
              onClick={handleReset}
              title="Clear conversation"
              className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
            >
              <RotateCcw size={16} />
            </button>
            <button
              id="chat-close-button"
              type="button"
              onClick={handleCloseChat}
              title="Close chat"
              className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-5 pb-3 flex flex-col gap-5 bg-white scrollbar-thin scrollbar-thumb-[#E5E7EB]">
          {messages.map((msg) => {
            const timeStr = isMounted && msg.timestamp ? formatTime(msg.timestamp) : "";
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? "items-end" : "items-start"} animate-fadeIn w-full`}
              >
                <div
                  className={`flex gap-2 max-w-[88%] items-start ${
                    isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {!isUser && (
                    <div className="w-[30px] h-[30px] rounded-full border border-[#E5E7EB] flex items-center justify-center shrink-0 overflow-hidden self-start mt-0.5 shadow-2xs bg-cream">
                      <img
                        src="/support-agent-avatar.jpg"
                        alt="Legal Assistant"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div
                    className={`px-[18px] py-[13px] rounded-[18px] text-[13.5px] leading-[1.55] ${
                      isUser
                        ? "bg-[#4a5f2e] text-white rounded-br-[4px] shadow-xs"
                        : msg.isError
                        ? "bg-red-50 border border-red-200 text-red-700 rounded-bl-[4px]"
                        : "bg-[#FAF9F5] border border-[#EBE7DE] text-[#2B2723] rounded-bl-[4px] shadow-2xs"
                    }`}
                  >
                    {!isUser && !msg.isError ? (
                      <MarkdownWrapper>{msg.text}</MarkdownWrapper>
                    ) : (
                      <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                    )}
                  </div>
                </div>

                <div
                  className={`text-[11px] text-[#9CA3AF] mt-1 px-1 flex items-center gap-1.5 ${
                    isUser ? "text-right self-end" : "text-left ml-[36px]"
                  }`}
                >
                  <span>
                    {isUser
                      ? `You${timeStr ? ` • ${timeStr}` : ""}`
                      : `Founding Legals${timeStr ? ` • ${timeStr}` : ""}`}
                  </span>
                  {!isUser && !msg.isError && msg.text && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="inline-flex items-center gap-1 text-[10px] text-[#9CA3AF] hover:text-[#111827] transition-colors cursor-pointer ml-1"
                      title="Copy message"
                    >
                      {copiedId === msg.id ? (
                        <Check size={11} className="text-emerald-600" />
                      ) : (
                        <Copy size={11} />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Organized, Classy Requirement Grid */}
          {messages.length === 1 && !isTyping && (
            <div className="flex flex-col gap-2 mt-1 ml-0 sm:ml-[38px] animate-fadeIn">
              <div className="flex items-center gap-1.5 px-0.5">
                <span className="text-[10px] font-bold text-brown-400 uppercase tracking-widest">
                  Quick Service Inquiries
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {QUICK_SERVICES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleQuickOption(item.query)}
                      className="group flex items-center gap-2.5 p-2.5 bg-white hover:bg-[#FAF9F5] border border-brown-200/70 hover:border-[#4a5f2e]/50 rounded-xl text-left transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-olive-50/70 border border-olive-100/60 flex items-center justify-center shrink-0 group-hover:bg-[#4a5f2e] group-hover:text-white text-[#4a5f2e] transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11.5px] font-semibold text-brown-900 group-hover:text-[#384823] truncate">
                          {item.title}
                        </div>
                        <div className="text-[9.5px] text-brown-400 truncate">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Classy 1-on-1 Consultation Action Card */}
              <div className="mt-1 p-3 bg-gradient-to-r from-[#3D4A26] to-[#4a5f2e] rounded-xl text-white shadow-sm flex items-center justify-between gap-3 border border-olive-900/30">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11.5px] font-bold text-white leading-tight">
                      Talk to a Senior CA & Advocate
                    </div>
                    <div className="text-[10px] text-olive-200 leading-tight">
                      Free 30-min strategy session
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRequestConsultation}
                  className="px-2.5 py-1 bg-white hover:bg-cream text-[#3D4A26] rounded-lg text-[11px] font-bold tracking-wide shadow-2xs hover:scale-[1.02] active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  Book Free
                </button>
              </div>
            </div>
          )}

          {/* Inline Lead Capture Form */}
          {showLeadForm && !leadSubmitted && (
            <div className="w-full bg-[#FAF9F5] border border-[#4a5f2e]/30 rounded-2xl p-4 shadow-sm animate-fadeIn text-[#2B2723]">
              <div className="flex items-start justify-between gap-2 mb-3 pb-2.5 border-b border-[#EBE7DE]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#4a5f2e]/10 border border-[#4a5f2e]/20 flex items-center justify-center text-[#4a5f2e] shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-brown-900 leading-tight">
                      Get Official Quotation & Free CA Advice
                    </div>
                    <div className="text-[10px] text-brown-500 leading-tight mt-0.5">
                      Share contact details to receive fee structure & expert callback
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowLeadForm(false);
                    setLeadFormDismissed(true);
                  }}
                  title="Dismiss form"
                  className="text-brown-400 hover:text-brown-700 p-1 rounded-md transition-colors cursor-pointer shrink-0"
                >
                  <X size={15} />
                </button>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                {/* Service Requirement */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-brown-800 flex items-center justify-between">
                    <span>
                      Service Requirement <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={leadService}
                      onChange={(e) => setLeadService(e.target.value)}
                      className="w-full text-[12px] bg-white border border-brown-200 focus:border-[#4a5f2e] focus:ring-1 focus:ring-[#4a5f2e] rounded-xl px-3 py-2 text-brown-900 outline-none appearance-none cursor-pointer pr-8 font-medium shadow-2xs transition-colors"
                    >
                      {INLINE_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-brown-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-brown-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-3.5 h-3.5 text-brown-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-[12px] bg-white border border-brown-200 focus:border-[#4a5f2e] focus:ring-1 focus:ring-[#4a5f2e] rounded-xl pl-9 pr-3 py-2 text-brown-900 outline-none placeholder-brown-300 shadow-2xs transition-colors"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-brown-800 flex items-center justify-between">
                    <span>
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </span>
                    <span className="text-[9.5px] text-brown-400 font-normal">Call or WhatsApp</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-[11px] font-semibold text-brown-500 select-none pointer-events-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full text-[12px] bg-white border border-brown-200 focus:border-[#4a5f2e] focus:ring-1 focus:ring-[#4a5f2e] rounded-xl pl-11 pr-3 py-2 text-brown-900 outline-none placeholder-brown-300 shadow-2xs transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-brown-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="w-3.5 h-3.5 text-brown-400 absolute left-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full text-[12px] bg-white border border-brown-200 focus:border-[#4a5f2e] focus:ring-1 focus:ring-[#4a5f2e] rounded-xl pl-9 pr-3 py-2 text-brown-900 outline-none placeholder-brown-300 shadow-2xs transition-colors"
                    />
                  </div>
                </div>

                {/* Error message */}
                {leadError && (
                  <div className="text-[11px] text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 leading-tight">
                    {leadError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={leadSubmitting}
                  className="w-full mt-2 py-2.5 px-3.5 bg-[#4a5f2e] hover:bg-[#384823] active:scale-[0.98] disabled:opacity-50 text-white font-semibold text-[12px] rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {leadSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting requirement...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Requirement & Get Free Call</span>
                      <ArrowUp className="w-3.5 h-3.5 rotate-90" />
                    </>
                  )}
                </button>

                {/* Security trust badge */}
                <div className="flex items-center justify-center gap-1.5 text-[9.5px] text-brown-400 pt-0.5">
                  <ShieldCheck className="w-3 h-3 text-[#4a5f2e]" />
                  <span>100% Confidential • Verified MCA & Legal Team</span>
                </div>
              </form>
            </div>
          )}

          {/* Inline Success Card */}
          {leadSubmitted && (
            <div className="w-full p-3.5 bg-emerald-50/90 border border-emerald-200/90 rounded-2xl shadow-2xs animate-fadeIn text-emerald-950">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-bold text-emerald-900 leading-tight">
                    Details Received Successfully!
                  </div>
                  <div className="text-[11px] text-emerald-700 leading-snug mt-1">
                    Our Senior CA & Legal Specialist will review your requirement and call you at{" "}
                    <strong>+91 {leadPhone.replace(/^\+?91/, "").trim()}</strong> shortly.
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between gap-2">
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B919791222557&text=Hi%20Founding%20Legals%2C%20I%20just%20submitted%20my%20service%20requirement%20on%20the%20chat."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 underline"
                    >
                      Chat directly on WhatsApp →
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setLeadSubmitted(false);
                        setShowLeadForm(false);
                      }}
                      className="text-[10px] text-emerald-600 hover:text-emerald-800 cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Re-open subtle chip if user dismissed or closed form */}
          {!showLeadForm && !leadSubmitted && messages.length > 1 && (
            <div className="flex items-center justify-center my-0.5 animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  setShowLeadForm(true);
                  setLeadFormDismissed(false);
                  setTimeout(scrollToBottom, 100);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-olive-50 hover:bg-olive-100/90 border border-olive-200 text-[11px] font-semibold text-[#3D4A26] transition-all shadow-2xs hover:scale-[1.02] cursor-pointer"
              >
                <Building2 className="w-3 h-3 text-[#4a5f2e]" />
                <span>Need an official quote or CA call? Tap here</span>
              </button>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex flex-col items-start animate-fadeIn w-full">
              <div className="flex gap-2 max-w-[88%] items-start">
                <div className="w-[28px] h-[28px] rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 overflow-hidden self-start mt-0.5">
                  <img
                    src="/logo.png"
                    alt="Bot Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="bg-[#F3F4F6] px-[18px] py-[12px] rounded-[20px] rounded-bl-[4px] flex items-center gap-1.5">
                  <span className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full animate-bounce [animation-delay:-0.32s]" />
                  <span className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full animate-bounce [animation-delay:-0.16s]" />
                  <span className="w-[6px] h-[6px] bg-[#9CA3AF] rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white flex flex-col shrink-0">
          <div className="mx-4 mt-2 mb-1 bg-white border border-[#E5E7EB] rounded-[20px] p-[12px_14px] flex flex-col gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)] focus-within:border-[#9CA3AF] focus-within:shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Write a message..."
              rows={1}
              className="w-full border-none outline-none resize-none bg-transparent text-[#111827] text-sm leading-normal min-h-[24px] max-h-[160px] font-sans overflow-y-auto placeholder-[#9CA3AF]"
            />
            <div className="flex items-center justify-end w-full mt-1">
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                title="Send message"
                className="w-8 h-8 rounded-full bg-[#4a5f2e] hover:bg-[#384823] disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 ml-auto cursor-pointer border-none shadow-2xs"
              >
                <ArrowUp size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="text-[11px] text-[#9CA3AF] text-center pt-2 pb-[14px] px-4 select-none">
            By chatting with us, you agree to our{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] underline hover:text-[#111827]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
