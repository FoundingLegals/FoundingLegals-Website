"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ArrowUp, RotateCcw, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

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

export default function Chatbot() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there 👋\n\nYou are now speaking with Founding Legals Assistant. How can I help?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        text: "Hi there 👋\n\nConversation cleared. How can I assist you with your legal agreements, compliance, or startup queries?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

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
          query: userText,
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

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("data:")) {
              const dataStr = trimmed.replace(/^data:\s*/, "");
              if (!dataStr) continue;
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.chunk) {
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
      } else {
        const data = await response.json();
        const answerText = data.answer || data.text || "Sorry, I couldn't understand that.";

        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: botMsgId, text: answerText, sender: "bot", timestamp: new Date() },
        ]);
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Chat Assistant"
          className="absolute bottom-0 right-0 w-[56px] h-[56px] rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center border-none shadow-[0_4px_16px_rgba(22,163,74,0.35)] cursor-grab transition-colors"
        >
          <MessageCircle size={24} />
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
            <img
              src="/founding-legals-logo.png"
              alt="Founding Legals"
              className="h-7 max-w-[180px] object-contain"
            />
          </div>

          <div className="flex items-center gap-1">
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
                    <div className="w-[28px] h-[28px] rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 overflow-hidden self-start mt-0.5">
                      <img
                        src="/logo.png"
                        alt="Bot Logo"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                  )}
                  <div
                    className={`px-[18px] py-[14px] rounded-[20px] text-[14px] leading-[1.55] ${
                      isUser
                        ? "bg-[#16a34a] text-white rounded-br-[4px]"
                        : msg.isError
                        ? "bg-red-50 border border-red-200 text-red-700 rounded-bl-[4px]"
                        : "bg-[#F3F4F6] text-[#111827] rounded-bl-[4px]"
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
                className="w-9 h-9 rounded-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-35 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all hover:scale-105 ml-auto cursor-pointer border-none"
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
