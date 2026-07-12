"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type ChatInputProps = {
  disabled?: boolean;
  onSend: (message: string) => void;
};

export function ChatInput({ disabled = false, onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) {
      return;
    }
    onSend(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border p-4">
      <label htmlFor="chat-message" className="sr-only">
        Message
      </label>
      <input
        id="chat-message"
        name="message"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about services, pricing, or timelines..."
        disabled={disabled}
        className={cn(
          "h-11 flex-1 rounded-full border border-border bg-bg-subtle px-4 text-body-sm text-text-primary",
          "placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
        )}
      />
      <Button type="submit" size="sm" disabled={disabled || !value.trim()}>
        Send
      </Button>
    </form>
  );
}
