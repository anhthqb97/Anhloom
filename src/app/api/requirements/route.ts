import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
const API_KEY = process.env.INTERNAL_API_KEY ?? "dev-internal-api-key";

export async function POST(request: Request) {
  const payload = await request.text();
  const response = await fetch(`${API_URL}/requirements`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: payload,
  });

  const body = await response.text();
  return new NextResponse(body, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
