"use client";

import { useCallback, useEffect, useState } from "react";

import { ChatLauncher } from "@/components/chat/ChatLauncher";
import { ChatPanel, type ChatMessage } from "@/components/chat/ChatPanel";
import { fetchChatHistory, streamChatMessage } from "@/lib/api";

const SESSION_STORAGE_KEY = "anhloom-chat-session-id";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);

  const loadHistory = useCallback(async (id: string) => {
    const history = await fetchChatHistory(id);
    setMessages(history);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      setSessionId(stored);
    }
  }, []);

  useEffect(() => {
    if (open && sessionId) {
      void loadHistory(sessionId);
    }
  }, [open, sessionId, loadHistory]);

  async function handleSend(message: string) {
    setMessages((current) => [...current, { role: "user", content: message }]);
    setStreaming(true);

    let assistantContent = "";
    setMessages((current) => [...current, { role: "assistant", content: "" }]);

    await streamChatMessage({
      sessionId,
      message,
      handlers: {
        onSessionId: (id) => {
          setSessionId(id);
          localStorage.setItem(SESSION_STORAGE_KEY, id);
        },
        onToken: (token) => {
          assistantContent += token;
          setMessages((current) => {
            const next = [...current];
            const lastIndex = next.length - 1;
            if (lastIndex >= 0 && next[lastIndex]?.role === "assistant") {
              next[lastIndex] = { role: "assistant", content: assistantContent };
            }
            return next;
          });
        },
        onDone: () => {
          setStreaming(false);
        },
        onError: () => {
          setStreaming(false);
          setMessages((current) => [
            ...current.slice(0, -1),
            {
              role: "assistant",
              content:
                "Sorry, I could not reach the AI service. Please try again shortly.",
            },
          ]);
        },
      },
    });
  }

  return (
    <>
      <ChatLauncher open={open} onToggle={() => setOpen((value) => !value)} />
      <ChatPanel
        open={open}
        messages={messages}
        streaming={streaming}
        onClose={() => setOpen(false)}
        onSend={handleSend}
      />
    </>
  );
}
