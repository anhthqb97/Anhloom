const API_URL = "";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type StreamHandlers = {
  onSessionId?: (sessionId: string) => void;
  onToken: (token: string) => void;
  onDone: () => void;
  onError?: (error: Error) => void;
};

export async function fetchChatHistory(sessionId: string): Promise<ChatMessage[]> {
  const response = await fetch(`${API_URL}/api/chat/${sessionId}/messages`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function streamChatMessage({
  sessionId,
  message,
  handlers,
}: {
  sessionId: string | null;
  message: string;
  handlers: StreamHandlers;
}) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_id: sessionId,
      message,
    }),
  });

  if (!response.ok || !response.body) {
    handlers.onError?.(new Error("Chat request failed."));
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split("\n\n");
    buffer = events.pop() ?? "";

    for (const event of events) {
      const line = event.trim();
      if (!line.startsWith("data:")) {
        continue;
      }

      const data = line.replace(/^data:\s*/, "");
      if (data === "[DONE]") {
        handlers.onDone();
        return;
      }

      try {
        const parsed = JSON.parse(data) as {
          token?: string;
          session_id?: string;
        };
        if (parsed.session_id) {
          handlers.onSessionId?.(parsed.session_id);
        }
        if (parsed.token) {
          handlers.onToken(parsed.token);
        }
      } catch {
        handlers.onError?.(new Error("Invalid chat stream payload."));
        return;
      }
    }
  }

  handlers.onDone();
}
