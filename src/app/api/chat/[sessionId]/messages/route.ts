import { NextResponse } from "next/server";

import { getInternalApiKey, getInternalApiUrl } from "@/lib/internal-api";

const API_URL = getInternalApiUrl();
const API_KEY = getInternalApiKey();

export async function GET(
  _request: Request,
  context: { params: Promise<{ sessionId: string }> },
) {
  const { sessionId } = await context.params;
  const response = await fetch(`${API_URL}/chat/${sessionId}/messages`, {
    headers: {
      "X-API-Key": API_KEY,
    },
    cache: "no-store",
  });

  const body = await response.text();
  return new NextResponse(body, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
