import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "Cyan Printing Web Services",
      region: "Kuwait (KWT)",
      version: "1.0.1",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      },
    }
  );
}
