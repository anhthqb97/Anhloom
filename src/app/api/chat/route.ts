import { NextResponse } from "next/server";

import { getInternalApiKey, getInternalApiUrl } from "@/lib/internal-api";

const API_URL = getInternalApiUrl();
const API_KEY = getInternalApiKey();

export async function POST(request: Request) {
  const payload = await request.text();
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: payload,
  });

  return new NextResponse(response.body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
