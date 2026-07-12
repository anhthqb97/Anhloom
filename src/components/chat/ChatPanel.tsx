"use client";

import { useEffect, useRef } from "react";

import { ChatBubble } from "@/components/chat/ChatBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { cn } from "@/lib/cn";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatPanelProps = {
  open: boolean;
  messages: ChatMessage[];
  streaming: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
};

export function ChatPanel({
  open,
  messages,
  streaming,
  onClose,
  onSend,
}: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, streaming, open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[55] flex h-[100dvh] max-h-[100dvh] flex-col bg-surface transition-transform duration-300 laptop:inset-x-auto laptop:bottom-24 laptop:right-6 laptop:h-[520px] laptop:max-h-[520px] laptop:w-[380px] laptop:rounded-2xl laptop:border laptop:border-border laptop:shadow-2xl",
        open
          ? "translate-y-0"
          : "pointer-events-none translate-y-full laptop:translate-y-4 laptop:opacity-0",
      )}
      role="dialog"
      aria-label="Anhloom AI chat"
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <p className="text-body-md font-semibold text-text-primary">Anhloom AI</p>
          <p className="text-body-sm text-text-muted">Ask about our services</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-9 items-center justify-center rounded-full text-text-secondary hover:bg-bg-muted"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <p className="text-body-sm text-text-secondary">
            Hi! I can help you explore Anhloom services, solutions, and next steps.
          </p>
        ) : null}
        {messages.map((message, index) => (
          <ChatBubble
            key={`${message.role}-${index}`}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>
      <ChatInput disabled={streaming} onSend={onSend} />
    </div>
  );
}
