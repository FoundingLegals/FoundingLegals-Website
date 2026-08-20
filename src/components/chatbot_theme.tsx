// @ts-nocheck
"use client"

import React, { useState, useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { MessageCircle, X, ArrowUp } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const formatTime = (date: Date) => {
  if (!date || isNaN(new Date(date).getTime())) return ""
  return new Date(date).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })
}

export default function GlobalChatbot() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there 👋\n\nYou are now speaking with Founding Legals Assistant. How can I help?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [streamingId, setStreamingId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // ── Live page scraper ─────────────────────────────────────────────
  const scrapeLivePage = (): string => {
    try {
      const parts: string[] = []

      // Page title
      parts.push(`Page: ${document.title}`)
      parts.push(`URL: ${window.location.pathname}`)

      // Active headings (h1-h3), excluding the chatbot's own heading
      const EXCLUDED_HEADINGS = ["Founding Legals Assistant", "Fin"]
      const headings = Array.from(document.querySelectorAll("h1, h2, h3"))
        .map(el => `${el.tagName}: ${el.textContent?.trim()}`)
        .filter(h => h && !EXCLUDED_HEADINGS.some(ex => h.includes(ex)))
      if (headings.length) parts.push("Headings:\n" + headings.join("\n"))

      // Active tabs (aria-selected or data-active)
      const activeTabs = Array.from(
        document.querySelectorAll('[role="tab"][aria-selected="true"], [data-active="true"]')
      ).map(el => el.textContent?.trim()).filter(Boolean)
      if (activeTabs.length) parts.push("Active Tabs: " + activeTabs.join(", "))

      // Form fields: labels + their input values
      const formFields: string[] = []
      document.querySelectorAll("label").forEach(label => {
        const labelText = label.textContent?.replace(/[*?]/g, "").trim()
        if (!labelText) return
        // Try to find associated input
        const forId = label.getAttribute("for")
        let inputEl: any = null
        if (forId) {
          inputEl = document.getElementById(forId)
        } else {
          inputEl = label.querySelector("input, select, textarea")
        }
        if (inputEl) {
          let value = ""
          if (inputEl.tagName === "SELECT") {
            value = inputEl.options?.[inputEl.selectedIndex]?.text || ""
          } else {
            value = inputEl.value || ""
          }
          formFields.push(`${labelText}: ${value || "(empty)"}`)
        } else {
          formFields.push(`${labelText}: (no input)`)
        }
      })
      if (formFields.length) parts.push("Form Fields:\n" + formFields.join("\n"))

      // Tooltips / help text (small, .hint, [data-tooltip])
      const hints = Array.from(
        document.querySelectorAll("small, .hint, [data-tooltip], [aria-description]")
      ).map(el => el.textContent?.trim()).filter(Boolean).slice(0, 10)
      if (hints.length) parts.push("Help Text:\n" + hints.join("\n"))

      // Visible alert/error banners
      const banners = Array.from(
        document.querySelectorAll('[role="alert"], .alert, .error-message, .warning')
      ).map(el => el.textContent?.trim()).filter(Boolean).slice(0, 5)
      if (banners.length) parts.push("Alerts:\n" + banners.join("\n"))

      return parts.join("\n\n")
    } catch {
      return ""
    }
  }
  // ─────────────────────────────────────────────────────────────────

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, isOpen])

  const streamText = (fullText: string, msgId: string) => {
    const tokens = fullText.match(/(\S+|\s+)/g) || []
    let index = 0

    setMessages(prev => [
      ...prev,
      { id: msgId, text: "", sender: "bot", timestamp: new Date() }
    ])
    setStreamingId(msgId)

    const interval = setInterval(() => {
      if (index >= tokens.length) {
        clearInterval(interval)
        setStreamingId(null)
        return
      }
      const chunk = tokens.slice(index, index + 2).join("")
      index += 2
      setMessages(prev =>
        prev.map(m =>
          m.id === msgId ? { ...m, text: m.text + chunk } : m
        )
      )
    }, 28)
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userText = inputValue.trim()
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newUserMsg])
    setInputValue("")
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
    setIsTyping(true)

    const livePageData = scrapeLivePage()
    const botMsgId = (Date.now() + 1).toString()

    try {
      const baseUrl = process.env.NEXT_PUBLIC_HELP_CHATBOT_URL || "http://localhost:5005"
      const response = await fetch(`${baseUrl}/api/chat/app`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "text/event-stream",
        },
        body: JSON.stringify({ query: userText, live_page: livePageData, bot_type: "app", stream: true }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get("content-type") || ""

      if (contentType.includes("text/event-stream") && response.body) {
        setIsTyping(false)
        setMessages(prev => [
          ...prev,
          { id: botMsgId, text: "", sender: "bot", timestamp: new Date() }
        ])
        setStreamingId(botMsgId)

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split("\n")
          buffer = lines.pop() || ""

          for (const line of lines) {
            const trimmed = line.trim()
            if (trimmed.startsWith("data:")) {
              const dataStr = trimmed.replace(/^data:\s*/, "")
              if (!dataStr) continue
              try {
                const parsed = JSON.parse(dataStr)
                if (parsed.chunk) {
                  setMessages(prev =>
                    prev.map(m =>
                      m.id === botMsgId ? { ...m, text: m.text + parsed.chunk } : m
                    )
                  )
                }
              } catch (err) {
                console.error("SSE parse error", err)
              }
            }
          }
        }
        setStreamingId(null)
      } else {
        const data = await response.json()
        const answerText = data.answer || "Sorry, I couldn't understand that."

        setIsTyping(false)
        streamText(answerText, botMsgId)
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error)
      setIsTyping(false)
      setStreamingId(null)
      const errorMsg: Message = {
        id: botMsgId,
        text: "Sorry, I am having trouble connecting to the server.",
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => {
        const exists = prev.some(m => m.id === botMsgId)
        if (exists) {
          return prev.map(m => (m.id === botMsgId ? errorMsg : m))
        }
        return [...prev, errorMsg]
      })
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`
    }
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDraggingState, setIsDraggingState] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const hasMovedRef = useRef(false)

  const handleCloseChat = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setIsOpen(false)
    setTimeout(() => {
      setPosition({ x: 0, y: 0 })
    }, 320)
  }

  // ── Viewport boundaries constraint ────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      const padding = 12

      if (isOpen) {
        const winWidth = 450
        const winHeight = 600
        const minX = padding - (screenWidth - 24 - winWidth)
        const maxX = 24 - padding
        const minY = padding - (screenHeight - 24 - winHeight)
        const maxY = 24 - padding

        setPosition(prev => ({
          x: Math.max(minX, Math.min(maxX, prev.x)),
          y: Math.max(minY, Math.min(maxY, prev.y))
        }))
      } else {
        const btnSize = 56
        const minX = padding - (screenWidth - 24 - btnSize)
        const maxX = 24 - padding
        const minY = padding - (screenHeight - 24 - btnSize)
        const maxY = 24 - padding

        setPosition(prev => ({
          x: Math.max(minX, Math.min(maxX, prev.x)),
          y: Math.max(minY, Math.min(maxY, prev.y))
        }))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])
  // ─────────────────────────────────────────────────────────────────

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return

    const target = e.target as HTMLElement
    if (
      target.closest("#chat-close-button") ||
      target.closest("textarea") ||
      (target.closest("button") && !target.closest("#floating-chat-button") && !target.closest("#chat-header-drag"))
    ) {
      return
    }

    isDraggingRef.current = true
    setIsDraggingState(true)
    hasMovedRef.current = false
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }

    target.setPointerCapture(e.pointerId)
    e.stopPropagation()
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return

    let newX = e.clientX - dragStartRef.current.x
    let newY = e.clientY - dragStartRef.current.y

    const startX = dragStartRef.current.x + position.x
    const startY = dragStartRef.current.y + position.y
    const distance = Math.sqrt(
      Math.pow(e.clientX - startX, 2) +
      Math.pow(e.clientY - startY, 2)
    )

    if (distance > 4) {
      hasMovedRef.current = true
    }

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const padding = 12

    if (isOpen) {
      const winWidth = 450
      const winHeight = 600
      const minX = padding - (screenWidth - 24 - winWidth)
      const maxX = 24 - padding
      const minY = padding - (screenHeight - 24 - winHeight)
      const maxY = 24 - padding

      newX = Math.max(minX, Math.min(maxX, newX))
      newY = Math.max(minY, Math.min(maxY, newY))
    } else {
      const btnSize = 56
      const minX = padding - (screenWidth - 24 - btnSize)
      const maxX = 24 - padding
      const minY = padding - (screenHeight - 24 - btnSize)
      const maxY = 24 - padding

      newX = Math.max(minX, Math.min(maxX, newX))
      newY = Math.max(minY, Math.min(maxY, newY))
    }

    setPosition({ x: newX, y: newY })
    e.stopPropagation()
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDraggingState(false)
    const target = e.target as HTMLElement
    try {
      target.releasePointerCapture(e.pointerId)
    } catch (err) { }
    e.stopPropagation()
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    setIsOpen(true)
  }

  if (!isMounted) return null

  const isAdminPortal = pathname === "/admin" || pathname?.startsWith("/admin/")
  if (!isAdminPortal) return null

  return (
    <DragContainer $x={position.x} $y={position.y}>
      <FloatingButton
        id="floating-chat-button"
        $isOpen={isOpen}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleButtonClick}
        style={{ touchAction: "none" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </FloatingButton>

      <ChatWindow $isOpen={isOpen}>
        <ChatHeader
          id="chat-header-drag"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{ cursor: "grab", touchAction: "none" }}
        >
          <HeaderLeft>
            <HeaderLogoImg
              src="/founding-legals-logo.png"
              alt="Founding Legals"
            />
          </HeaderLeft>

          <HeaderRight>
            <HeaderIconButton
              id="chat-close-button"
              type="button"
              onClick={handleCloseChat}
              title="Close chat"
            >
              <X size={18} />
            </HeaderIconButton>
          </HeaderRight>
        </ChatHeader>

        <MessagesContainer>
          {messages.map(msg => {
            const timeStr = isMounted && msg.timestamp ? formatTime(msg.timestamp) : ""
            return (
              <MessageGroup key={msg.id} $isUser={msg.sender === "user"}>
                <MessageRow $isUser={msg.sender === "user"}>
                  {msg.sender === "bot" && (
                    <Avatar>
                      <img
                        src="/logo.png"
                        alt="Bot Logo"
                        style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
                      />
                    </Avatar>
                  )}
                  <MessageBubble $isUser={msg.sender === "user"}>
                    {msg.sender === "bot" ? (
                      <MarkdownWrapper>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.text}
                        </ReactMarkdown>
                      </MarkdownWrapper>
                    ) : (
                      <MessageText>{msg.text}</MessageText>
                    )}
                  </MessageBubble>
                </MessageRow>

                <MessageMeta $isUser={msg.sender === "user"} suppressHydrationWarning>
                  {msg.sender === "bot"
                    ? `Founding Legals${timeStr ? ` • ${timeStr}` : ""}`
                    : `You${timeStr ? ` • ${timeStr}` : ""}`}
                </MessageMeta>
              </MessageGroup>
            )
          })}
          {isTyping && (
            <MessageGroup $isUser={false}>
              <MessageRow $isUser={false}>
                <Avatar>
                  <img
                    src="/logo.png"
                    alt="Bot Logo"
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
                  />
                </Avatar>
                <TypingIndicatorContainer>
                  <TypingDot />
                  <TypingDot />
                  <TypingDot />
                </TypingIndicatorContainer>
              </MessageRow>
            </MessageGroup>
          )}
          <div ref={messagesEndRef} />
        </MessagesContainer>

        <InputAreaWrapper>
          <InputCard>
            <StyledTextArea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Write a message..."
              rows={1}
            />
            <InputCardFooter>
              <CircleSendButton
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                title="Send message"
              >
                <ArrowUp size={18} strokeWidth={2.5} />
              </CircleSendButton>
            </InputCardFooter>
          </InputCard>

          <PrivacyFooter>
            By chatting with us, you agree to our <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </PrivacyFooter>
        </InputAreaWrapper>
      </ChatWindow>
    </DragContainer>
  )
}

// --- Animations & Styled Components ---

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-4px); }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`

const DragContainer = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  width: 0;
  height: 0;
  transform: translate3d(${props => props.$x}px, ${props => props.$y}px, 0);
`

const FloatingButton = styled(motion.button) <{ $isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #16a34a;
  color: white;
  border: none;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(22, 163, 74, 0.35);
  cursor: grab;
  transition: background-color 0.2s;
  
  &:hover {
    background: #15803d;
  }
`

const ChatWindow = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 450px;
  height: 620px;
  max-height: calc(100vh - 80px);
  max-width: calc(100vw - 32px);
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #E5E7EB;
  
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform-origin: bottom right;
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), visibility 0.3s;
`

const ChatHeader = styled.div`
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.15s, background-color 0.15s;

  &:hover {
    color: #111827;
    background: #f3f4f6;
  }
`

const HeaderLogoImg = styled.img`
  height: 28px;
  max-width: 180px;
  object-fit: contain;
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  align-self: flex-start;
  margin-top: 2px;
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const HeaderIconButton = styled.button`
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  transition: color 0.15s, background-color 0.15s;
  
  &:hover {
    color: #111827;
    background: #f3f4f6;
  }
`

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  
  /* Scrollbar custom styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 3px;
  }
`

const MessageGroup = styled.div<{ $isUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
  animation: ${fadeIn} 0.25s ease-out;
  width: 100%;
`

const MessageRow = styled.div<{ $isUser: boolean }>`
  display: flex;
  flex-direction: ${({ $isUser }) => ($isUser ? "row-reverse" : "row")};
  gap: 8px;
  max-width: 88%;
  align-items: flex-start;
`

const MessageBubble = styled.div<{ $isUser: boolean }>`
  background: ${({ $isUser }) => ($isUser ? "#16a34a" : "#F3F4F6")};
  color: ${({ $isUser }) => ($isUser ? "#ffffff" : "#111827")};
  padding: 14px 18px;
  border-radius: 20px;
  border-bottom-right-radius: ${({ $isUser }) => ($isUser ? "4px" : "20px")};
  border-bottom-left-radius: ${({ $isUser }) => ($isUser ? "20px" : "4px")};
  font-size: 14px;
  line-height: 1.55;
  box-shadow: none;
`

const MessageText = styled.div`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
`

const MarkdownWrapper = styled.div`
<<<<<<< Updated upstream
  font-size: 13.5px;
  line-height: 1.55;
  word-break: break-word;
  color: inherit;
=======
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
>>>>>>> Stashed changes

  p {
    margin: 0 0 8px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

<<<<<<< Updated upstream
  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0 6px 0;
    font-weight: 600;
    line-height: 1.35;
    color: inherit;
    &:first-child {
      margin-top: 0;
    }
  }
  h1 { font-size: 15px; }
  h2 { font-size: 14.5px; }
  h3 { font-size: 14px; }
  h4, h5, h6 { font-size: 13.5px; }

  ul, ol {
    margin: 0 0 8px 0;
    padding-left: 18px;
    &:last-child {
      margin-bottom: 0;
    }
=======
  ul, ol {
    margin: 4px 0 8px 0;
    padding-left: 20px;
>>>>>>> Stashed changes
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
<<<<<<< Updated upstream
    margin-bottom: 4px;
    line-height: 1.45;

    &:last-child {
      margin-bottom: 0;
    }
=======
    margin-bottom: 6px;
>>>>>>> Stashed changes

    > p {
      margin: 0;
      display: inline;
    }

<<<<<<< Updated upstream
    > ul, > ol {
      margin-top: 4px;
      margin-bottom: 4px;
=======
    ul, ol {
      margin: 4px 0 4px 0;
>>>>>>> Stashed changes
    }
  }

  strong, b {
    font-weight: 600;
    color: inherit;
  }

  em, i {
    font-style: italic;
  }

  code {
    background: rgba(0, 0, 0, 0.06);
    padding: 2px 4px;
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 12px;
  }

  pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 8px 12px;
    border-radius: 6px;
    overflow-x: auto;
    margin: 8px 0;
    font-size: 12px;

    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }

  blockquote {
    border-left: 3px solid #d1d5db;
    margin: 8px 0;
    padding-left: 10px;
    color: #4b5563;
    font-style: italic;
  }

  hr {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 10px 0;
  }

  a {
    color: #2563eb;
    text-decoration: underline;
    &:hover {
      color: #1d4ed8;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 8px 0;
    font-size: 12.5px;
  }

  th, td {
    border: 1px solid #e5e7eb;
    padding: 4px 8px;
    text-align: left;
  }

  th {
    background: #f3f4f6;
    font-weight: 600;
  }
`

const MessageMeta = styled.div<{ $isUser: boolean }>`
  font-size: 11px;
  color: #9ca3af;
  margin-top: 4px;
  padding: 0 4px;
  text-align: ${({ $isUser }) => ($isUser ? "right" : "left")};
  margin-left: ${({ $isUser }) => ($isUser ? "0" : "36px")};
`

const TypingIndicatorContainer = styled.div`
  background: #f3f4f6;
  padding: 12px 18px;
  border-radius: 20px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 6px;
  align-items: center;
`

const TypingDot = styled.div`
  width: 6px;
  height: 6px;
  background: #9ca3af;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  
  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }
`

const InputAreaWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
`

const InputCard = styled.div`
  margin: 8px 16px 4px 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #9ca3af;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  color: #111827;
  font-size: 14px;
  line-height: 1.5;
  min-height: 24px;
  max-height: 160px;
  font-family: inherit;
  overflow-y: auto;

  &::placeholder {
    color: #9ca3af;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 2px;
  }
`

const InputCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 4px;
`

const InputActionsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: color 0.15s;

  &:hover {
    color: #4b5563;
  }
`

const CircleSendButton = styled.button`
  background: #16a34a;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  transition: background-color 0.2s, transform 0.15s, opacity 0.15s;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #15803d;
    transform: scale(1.05);
  }
`

const PrivacyFooter = styled.div`
  font-size: 11px;
  color: #9ca3af;
  text-align: center;
  padding: 8px 16px 14px 16px;

  a {
    color: #6b7280;
    text-decoration: underline;
    &:hover {
      color: #111827;
    }
  }
`
