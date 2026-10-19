import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@next/third-parties"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Link",
            value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="ai-catalog", </.well-known/oauth-protected-resource>; rel="oauth-protected-resource", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="describedby", </.well-known/agent-skills/index.json>; rel="service-doc"',
          },
        ],
      },
      {
        source: "/.well-known/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*",
          },
        ],
      },
      {
        source: "/(.*)\\.md",
        headers: [
          {
            key: "Content-Type",
            value: "text/markdown; charset=utf-8",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css|woff|woff2|ttf|otf|ico|svg|png|jpg|jpeg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
