"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Check,
  Copy,
  Loader2,
  MessageCircle,
  Send,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: `Hi 👋 welcome to Daniekeys Studio.

We help businesses with logo design, branding, and websites.

To get started, tell us:
• What you need
• A short description
• Your timeline

Ready to get started?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(idx);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const currentMessages = [...messages, userMessage];
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: currentMessages }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      // Handle streaming response using Server-Sent Events format parsing
      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      // Add placeholder message for model
      setMessages((prev) => [...prev, { role: "model", content: "" }]);

      while (!done) {
        if (!reader) break;
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        // Split chunk by lines since it's an SSE format and parse
        const lines = chunkValue.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ") && line !== "data: [DONE]") {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                setMessages((prev) => {
                  const newMessages = [...prev];
                  const lastIndex = newMessages.length - 1;
                  newMessages[lastIndex] = {
                    ...newMessages[lastIndex],
                    content: newMessages[lastIndex].content + data.text,
                  };
                  return newMessages;
                });
              }
            } catch (err) {
              console.error("Error parsing stream data", err);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            "Sorry, I encountered an error. Please contact us directly at contactdaniekeystudio@gmail.com!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatText = (text: string) => {
    // Basic markdown-like formatting for bold text
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-primary border border-neutral-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden font-neue-montreal text-white"
          >
            {/* Header */}
            <div className="bg-neutral-900 border-b border-neutral-800 p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">
                    Daniekeys Assistant
                  </h3>
                  <p className="text-neutral-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>{" "}
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-2 relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user"
                        ? "bg-neutral-800 text-neutral-300"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[80%] text-sm break-words whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-neutral-800 text-white rounded-tr-none"
                        : "bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-tl-none relative group pr-10"
                    }`}
                  >
                    {formatText(msg.content)}
                    {msg.role === "model" && msg.content && (
                      <button
                        onClick={() => handleCopy(msg.content, idx)}
                        className="absolute top-2 right-2 p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Copy message"
                        aria-label="Copy message"
                      >
                        {copiedId === idx ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0 text-white">
                    <Bot size={16} />
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-400 rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" /> Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-neutral-900 border-t border-neutral-800">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="w-full bg-neutral-950 border border-neutral-800 text-black rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm placeholder:text-neutral-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 bg-neutral-800 !text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors "
                >
                  <Send
                    size={16}
                    className={
                      input.trim() ? "text-blue-500" : "text-neutral-400"
                    }
                  />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 shadow-lg  flex items-center justify-center text-white z-50  transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
