import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    // optional body
  }

  const agentName = (body.agent_name as string) || "AnonymousAgent";
  // Return agent registration confirmation with a mock client token
  return NextResponse.json(
    {
      status: "registered",
      agent_name: agentName,
      token_type: "Bearer",
      access_token: `cyan_agent_${Buffer.from(agentName + Date.now()).toString("base64url")}`,
      expires_in: 86400 * 30, // 30 days
      message: "Agent successfully registered for Cyan Printing services. All public APIs and catalogs do not require authentication.",
      scopes: ["read", "public"],
      documentation: "https://cyanprintkw.com/auth.md",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      },
    }
  );
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
