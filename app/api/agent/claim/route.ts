import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    // optional body
  }

  const claimId = (body.claim_id as string) || "anonymous";

  return NextResponse.json(
    {
      status: "claimed",
      claim_id: claimId,
      token_type: "Bearer",
      access_token: `cyan_claim_${Buffer.from(claimId + Date.now()).toString("base64url")}`,
      expires_in: 86400 * 30,
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
