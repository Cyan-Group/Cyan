import { NextResponse } from "next/server";

const OAUTH_PROTECTED_RESOURCE = {
  resource: "https://cyanprintkw.com",
  authorization_servers: [
    "https://cyanprintkw.com",
  ],
  scopes_supported: ["openid", "profile", "read", "public"],
  bearer_methods_supported: ["header"],
  resource_documentation: "https://cyanprintkw.com/auth.md",
  note: "Cyan Printing is a public commercial catalog. All services, portfolio, and quote guidelines are publicly accessible without authentication.",
};

export function GET() {
  return NextResponse.json(OAUTH_PROTECTED_RESOURCE, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
