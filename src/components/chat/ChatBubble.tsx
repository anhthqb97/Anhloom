import { cn } from "@/lib/cn";

type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-body-sm leading-relaxed",
          isUser
            ? "bg-primary-600 text-white"
            : "border border-border bg-surface text-text-primary",
        )}
      >
        {content}
      </div>
    </div>
  );
}
