import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
const API_KEY = process.env.INTERNAL_API_KEY ?? "dev-internal-api-key";

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
