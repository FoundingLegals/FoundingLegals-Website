"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  isError?: boolean;
}

// Markdown renderer for Bot responses
function MarkdownMessage({ content }: { content: string }) {
  return (
    <div className="markdown-content text-[13px] text-[#2B2723] leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-sm font-bold text-[#2B2723] mt-2 mb-1.5 border-b border-[#D7CEC6]/60 pb-1">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-[13px] font-bold text-[#2B2723] mt-2 mb-1 text-olive-900">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs font-bold text-olive-800 uppercase tracking-wide mt-2 mb-1">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs font-semibold text-[#2B2723] mt-1.5 mb-0.5">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#2B2723]">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[#3D3733]">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-4 space-y-1 my-1.5 marker:text-olive-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-4 space-y-1 my-1.5 marker:text-olive-700 marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-0.5">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-olive-500 pl-2.5 my-1.5 italic text-xs text-[#524B44] bg-olive-50/50 py-1 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="bg-cream-dark/90 text-olive-900 px-1.5 py-0.5 rounded text-[11px] font-mono border border-[#D7CEC6]/60"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-[#2B2723] text-white p-2.5 rounded-lg text-xs font-mono overflow-x-auto my-2 border border-[#3D3733]">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive-700 underline font-medium hover:text-olive-900 transition-colors"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-2.5 border-[#D7CEC6]" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-welcome",
      sender: "bot",
      text: "Hello! I am your **FoundingLegals AI Assistant** 🏛️\n\nI can answer questions about startup legal compliance, contracts, company registration, DPIIT recognition, agreements, and more. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, isMinimized]);

  // Copy message handler
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reset chat
  const handleReset = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "bot",
        text: "Conversation cleared. Feel free to ask another question about legal agreements, incorporation, or startup compliance!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const abortControllerRef = useRef<AbortController | null>(null);

  // API Call Handler with Streaming Support
  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText || inputQuery).trim();
    if (!textToSend || isLoading) return;

    // Abort previous in-flight request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const userMessage: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const botMessageId = "bot-" + Date.now();
    const initialBotMessage: Message = {
      id: botMessageId,
      sender: "bot",
      text: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage, initialBotMessage]);
    setInputQuery("");
    setIsLoading(true);

    const apiUrl =
      process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://localhost:5005/api/chat/web";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: textToSend, stream: true }),
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const contentType = response.headers.get("content-type") || "";

      // If Server-Sent Events / Stream
      if (response.body && (contentType.includes("text/event-stream") || contentType.includes("text/plain") || !contentType.includes("application/json"))) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let accumulatedText = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last partial line in buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data:")) continue;

            const jsonStr = trimmed.replace(/^data:\s*/, "");
            try {
              const data = JSON.parse(jsonStr);
              if (data.chunk) {
                accumulatedText += data.chunk;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText }
                      : msg
                  )
                );
              } else if (data.done) {
                break;
              }
            } catch (err) {
              // If line is plain text chunk
              if (jsonStr && !jsonStr.startsWith("{")) {
                accumulatedText += jsonStr;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, text: accumulatedText }
                      : msg
                  )
                );
              }
            }
          }
        }

        // If after stream finishes we have leftover in buffer
        if (buffer.trim().startsWith("data:")) {
          try {
            const data = JSON.parse(buffer.trim().replace(/^data:\s*/, ""));
            if (data.chunk) {
              accumulatedText += data.chunk;
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId
                    ? { ...msg, text: accumulatedText }
                    : msg
                )
              );
            }
          } catch (e) {}
        }

        // If nothing was accumulated, fallback message
        if (!accumulatedText.trim()) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? {
                    ...msg,
                    text: "I received an empty response. Please try rephrasing your question.",
                  }
                : msg
            )
          );
        }
      } else {
        // Fallback for direct JSON response
        const data = await response.json();
        const finalAnswer =
          data.answer ||
          data.text ||
          "I received an empty response. Please try rephrasing your question.";

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, text: finalAnswer } : msg
          )
        );
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        return;
      }
      console.error("Chatbot API Error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: "Sorry, I am currently unable to reach the legal knowledge server. Please ensure the backend service at `http://localhost:5005` is running, or contact us directly.",
                isError: true,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          aria-label="Open Legal AI Assistant"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#5C6F2D] text-white rounded-full shadow-[0_6px_24px_rgba(92,111,45,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#4a5a24] hover:shadow-[0_8px_30px_rgba(92,111,45,0.6)] group cursor-pointer focus:outline-none focus:ring-4 focus:ring-olive-300"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#5C6F2D]/30 animate-ping opacity-60 pointer-events-none" />

          {/* AI Badge icon */}
          <div className="relative z-10 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            <Sparkles className="w-3 h-3 text-[#D4E157] absolute -top-1 -right-1 animate-pulse" />
          </div>

          {/* Pop-up helper pill on hover */}
          <span className="absolute right-16 bg-[#2B2723] text-white text-[12px] font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4E157]" />
            Ask Legal Assistant
          </span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-out shadow-2xl rounded-2xl border border-[#D7CEC6] bg-[#FAF7F4] flex flex-col overflow-hidden ${
            isMinimized
              ? "bottom-6 right-6 w-72 h-14"
              : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[85vh]"
          }`}
        >
          {/* Header */}
          <div className="bg-[#2B2723] text-white px-4 py-3 flex items-center justify-between select-none shrink-0 border-b border-[#3D3733]">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#5C6F2D] text-white font-semibold text-xs shadow-inner">
                <Bot className="w-4 h-4" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#5C6F2D] rounded-full border-2 border-[#2B2723] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-[#D4E157] rounded-full" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-sm leading-tight text-cream-light">
                    FoundingLegals AI
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#5C6F2D]/60 text-[#D4E157]">
                    Legal Copilot
                  </span>
                </div>
                <p className="text-[11px] text-[#9E9890] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  Instant startup legal answers
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              {!isMinimized && (
                <button
                  onClick={handleReset}
                  title="Clear conversation"
                  aria-label="Clear chat"
                  className="p-1.5 text-[#9E9890] hover:text-white hover:bg-[#3D3733] rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand chat" : "Minimize chat"}
                aria-label="Toggle minimize"
                className="p-1.5 text-[#9E9890] hover:text-white hover:bg-[#3D3733] rounded-lg transition-colors cursor-pointer"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMinimized ? "rotate-180" : ""
                  }`}
                />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 text-[#9E9890] hover:text-white hover:bg-[#CD412B]/80 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Body - Hidden when Minimized */}
          {!isMinimized && (
            <>
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF7F4] text-[#2B2723]">
                {messages
                  .filter((msg) => msg.text.trim().length > 0)
                  .map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div className="flex items-start gap-2 max-w-[88%]">
                        {msg.sender === "bot" && (
                          <div className="w-6 h-6 rounded-full bg-[#5C6F2D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                        )}

                        <div
                          className={`relative group rounded-2xl px-3.5 py-2.5 shadow-sm transition-all ${
                            msg.sender === "user"
                              ? "bg-[#5C6F2D] text-white rounded-br-xs"
                              : msg.isError
                              ? "bg-[#CD412B]/10 border border-[#CD412B]/30 text-[#2B2723] rounded-bl-xs"
                              : "bg-[#FFFFFF] border border-[#D7CEC6]/70 text-[#2B2723] rounded-bl-xs"
                          }`}
                        >
                          {msg.isError ? (
                            <div className="flex items-start gap-2 text-sm text-[#CD412B]">
                              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              <div>{msg.text}</div>
                            </div>
                          ) : msg.sender === "bot" ? (
                            <MarkdownMessage content={msg.text} />
                          ) : (
                            <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                          )}
                        </div>

                        {msg.sender === "user" && (
                          <div className="w-6 h-6 rounded-full bg-[#2B2723] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <User className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      {/* Footer: Timestamp & Action buttons */}
                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-[#9E9890]">
                        <span>{msg.timestamp}</span>
                        {msg.sender === "bot" && !msg.isError && (
                          <button
                            onClick={() => handleCopy(msg.id, msg.text)}
                            className="inline-flex items-center gap-1 py-0.5 px-1.5 rounded hover:bg-[#EDE6DE] text-[#65605B] hover:text-[#2B2723] transition-colors cursor-pointer"
                            title="Copy answer"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-700 font-medium">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                {/* Loading / Typing Indicator before first stream token */}
                {isLoading && (!messages[messages.length - 1]?.text || messages[messages.length - 1]?.sender === "user") && (
                  <div className="flex items-start gap-2 max-w-[88%]">
                    <div className="w-6 h-6 rounded-full bg-[#5C6F2D] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#D7CEC6]/70 rounded-2xl rounded-bl-xs px-4 py-3 shadow-sm flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-[#5C6F2D] rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-2 h-2 bg-[#5C6F2D] rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-2 h-2 bg-[#5C6F2D] rounded-full animate-bounce" />
                      </div>
                      <span className="text-xs text-[#65605B] font-medium ml-1">
                        FoundingLegals AI is answering...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Box Footer */}
              <div className="p-3 bg-[#EDE6DE]/40 border-t border-[#D7CEC6] shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-end gap-2 bg-white rounded-xl border border-[#D7CEC6] focus-within:border-olive-600 focus-within:ring-2 focus-within:ring-olive-300/40 p-1.5 shadow-inner transition-all"
                >
                  <textarea
                    ref={inputRef}
                    rows={1}
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about agreements, incorporation, legal..."
                    disabled={isLoading}
                    className="flex-1 resize-none bg-transparent border-0 focus:outline-none text-sm text-[#2B2723] placeholder-[#9E9890] max-h-24 min-h-[36px] py-1.5 px-2 font-sans"
                  />
                  <button
                    type="submit"
                    disabled={!inputQuery.trim() || isLoading}
                    aria-label="Send message"
                    className={`p-2 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                      inputQuery.trim() && !isLoading
                        ? "bg-[#5C6F2D] text-white shadow hover:bg-[#4a5a24]"
                        : "bg-[#EDE6DE] text-[#9E9890] cursor-not-allowed"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <div className="mt-1.5 text-center">
                  <span className="text-[10px] text-[#9E9890]">
                    Press <kbd className="font-mono bg-cream-dark px-1 py-0.5 rounded text-[9px]">Enter</kbd> to send, <kbd className="font-mono bg-cream-dark px-1 py-0.5 rounded text-[9px]">Shift+Enter</kbd> for newline
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
