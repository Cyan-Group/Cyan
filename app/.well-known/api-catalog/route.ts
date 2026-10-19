import { NextResponse } from "next/server";

const API_CATALOG = {
  linkset: [
    {
      anchor: "https://cyanprintkw.com/",
      "service-doc": [
        {
          href: "https://cyanprintkw.com/",
          type: "text/html",
          title: "Cyan Printing — Homepage & Services Overview",
        },
        {
          href: "https://cyanprintkw.com/auth.md",
          type: "text/markdown",
          title: "Cyan Printing Agent Registration & Access Guide",
        },
      ],
      "service-desc": [
        {
          href: "https://cyanprintkw.com/api/openapi.json",
          type: "application/vnd.oai.openapi+json",
          title: "Cyan Printing OpenAPI 3.1 Specification",
        },
        {
          href: "https://cyanprintkw.com/sitemap.xml",
          type: "application/xml",
          title: "XML Sitemap",
        },
      ],
      status: [
        {
          href: "https://cyanprintkw.com/api/health",
          title: "Service Health Check Endpoint",
        },
      ],
    },
    {
      anchor: "https://cyanprintkw.com/cyan-advertising",
      "service-doc": [
        {
          href: "https://cyanprintkw.com/cyan-advertising",
          type: "text/html",
          title: "Cyan Advertising — Booths, Signage & Exhibition Solutions",
        },
      ],
    },
    {
      anchor: "https://cyanprintkw.com/mansi-line",
      "service-doc": [
        {
          href: "https://cyanprintkw.com/mansi-line",
          type: "text/html",
          title: "Mansi Line — Card Holders, Acrylics, UV Printing, DTF",
        },
      ],
    },
  ],
};

export function GET() {
  return new NextResponse(JSON.stringify(API_CATALOG, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
