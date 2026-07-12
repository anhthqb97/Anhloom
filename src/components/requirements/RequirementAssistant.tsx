"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { gatherRequirements } from "@/lib/ai-api";
import { cn } from "@/lib/cn";

type RequirementAssistantProps = {
  serviceTitle: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterPrompts = [
  "What problem are you solving?",
  "Who is the primary user?",
  "What does success look like in 90 days?",
];

export function RequirementAssistant({ serviceTitle }: RequirementAssistantProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [exportMarkdown, setExportMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await gatherRequirements({
        serviceTitle,
        messages,
        userMessage: text,
      });
      setMessages((current) => [
        ...current,
        { role: "user", content: text },
        { role: "assistant", content: response.reply },
      ]);
      setExportMarkdown(response.export_markdown);
      setInput("");
    } finally {
      setLoading(false);
    }
  }

  function downloadMarkdown() {
    const blob = new Blob([exportMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${serviceTitle.toLowerCase().replace(/\s+/g, "-")}-requirements.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/3 z-40 hidden rounded-l-md bg-accent-500 px-3 py-4 text-body-sm font-medium text-white shadow-lg laptop:block"
      >
        Requirements
      </button>
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-surface shadow-2xl transition-transform laptop:w-[380px]",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Requirement assistant"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p className="text-body-md font-semibold text-text-primary">Requirement assistant</p>
            <p className="text-body-sm text-text-muted">{serviceTitle}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full px-2 py-1 text-text-secondary hover:bg-bg-muted"
            aria-label="Close requirement assistant"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="space-y-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="block w-full rounded-md border border-border px-3 py-2 text-left text-body-sm hover:bg-bg-subtle"
                >
                  {prompt}
                </button>
              ))}
            </div>
          ) : null}
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                "rounded-md px-3 py-2 text-body-sm",
                message.role === "user"
                  ? "ml-8 bg-primary-600 text-white"
                  : "mr-8 border border-border bg-bg-subtle text-text-primary",
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="space-y-3 border-t border-border p-4">
          {exportMarkdown ? (
            <Button variant="secondary" size="sm" onClick={downloadMarkdown}>
              Export Markdown
            </Button>
          ) : null}
          <form
            className="flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(input);
            }}
          >
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe your requirements..."
              aria-label="Requirement message"
            />
            <Button type="submit" size="sm" disabled={loading}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
