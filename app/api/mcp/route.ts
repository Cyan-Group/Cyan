import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    // optional body
  }

  const method = body.method as string;

  if (method === "tools/list") {
    return NextResponse.json({
      tools: [
        {
          name: "get_company_info",
          description: "Get company profile, locations, operating hours, and contact details for Cyan Printing Kuwait.",
          inputSchema: { type: "object", properties: {}, required: [] },
        },
        {
          name: "get_services",
          description: "Retrieve comprehensive list of printing and packaging services.",
          inputSchema: { type: "object", properties: {}, required: [] },
        },
        {
          name: "request_quote_info",
          description: "Retrieve quote requirements, dimensions guide, and direct WhatsApp contact link.",
          inputSchema: { type: "object", properties: {}, required: [] },
        },
      ],
    });
  }

  // Generic JSON-RPC or health response for MCP clients
  return NextResponse.json(
    {
      jsonrpc: "2.0",
      id: body.id ?? 1,
      result: {
        serverInfo: {
          name: "cyan-printing-mcp",
          version: "1.0.1",
        },
        capabilities: {
          tools: {},
          resources: {},
        },
      },
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
}

export function GET() {
  return NextResponse.json(
    {
      status: "ready",
      server: "Cyan Printing MCP Streamable Endpoint",
      transport: "streamable-http",
      schema: "SEP-1649",
      documentation: "https://cyanprintkw.com/.well-known/mcp/server-card.json",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
