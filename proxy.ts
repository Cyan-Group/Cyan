import { NextResponse, type NextRequest } from "next/server";
import { getMarkdownContent } from "@/lib/markdown";

const LINK_HEADERS = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</.well-known/ai-catalog.json>; rel="ai-catalog"',
  '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"',
  '</.well-known/mcp/server-card.json>; rel="service-desc"',
  '</auth.md>; rel="describedby"',
  '</.well-known/agent-skills/index.json>; rel="service-doc"'
].join(", ");

export function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // Content negotiation for AI agents: Accept: text/markdown
  if (
    acceptHeader.includes("text/markdown") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/.well-known")
  ) {
    const md = getMarkdownContent(pathname);
    if (md) {
      const tokenEstimate = Math.ceil(md.length / 4);
      return new NextResponse(md, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": String(tokenEstimate),
          "Cache-Control": "public, max-age=3600, must-revalidate",
          "Vary": "Accept",
          "Link": LINK_HEADERS,
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }

  // Pass-through with default behavior
  const response = NextResponse.next();
  return response;
}

export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Image/binary extensions (svg, png, jpg, jpeg, gif, webp, pdf)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
