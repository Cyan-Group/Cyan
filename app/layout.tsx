import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { LanguageProvider } from "@/contexts/LanguageContext";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cyanprintkw.com'), // Update with your actual domain
  title: {
    default: "Cyan Printing | مطبعة سيان",
    template: "Cyan Printing | مطبعة سيان - %s"
  },
  description: "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد. مطبعة سيان - شريكك الموثوق في الطباعة والتغليف.",
  keywords: [
    'مطبعة الكويت',
    'طباعة بوكسات',
    'طباعة أكياس',
    'طباعة تغليف',
    'طباعة ديجيتال',
    'Cyan Printing',
    'مطبعة سيان',
    'طباعة أوفست',
    'طباعة علب',
    'طباعة أكواب',
    'تغليف الكويت',
    'مطبعة الكويت',
    'طباعة تجارية'
  ],
  authors: [{ name: "Cyan Printing" }],
  creator: "Cyan Printing",
  publisher: "Cyan Printing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    alternateLocale: ["en_US"],
    url: "https://cyanprintkw.com", // Update with your actual domain
    siteName: "Cyan Printing | مطبعة سيان",
    title: "Cyan Printing | مطبعة سيان",
    description: "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد. مطبعة سيان - شريكك الموثوق في الطباعة والتغليف.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cyan Printing | مطبعة سيان - Cyan Printing Kuwait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyan Printing | مطبعة سيان",
    description: "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://cyanprintkw.com", // Update with your actual domain
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
        <link rel="describedby" href="/auth.md" />
        <link rel="service-desc" href="/.well-known/mcp/server-card.json" />
        <link rel="service-doc" href="/.well-known/agent-skills/index.json" />
      </head>
      <body
        className={`${ibmPlexSansArabic.variable} ${ibmPlexSans.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
        suppressHydrationWarning
      >
        <StructuredData />
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>

        <Script id="webmcp-tools" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var mc = (typeof document !== 'undefined' && document.modelContext) ||
                         (typeof navigator !== 'undefined' && navigator.modelContext);
                
                if (!mc || typeof mc.registerTool !== 'function') {
                  if (typeof document !== 'undefined') {
                    document.modelContext = document.modelContext || {
                      tools: new Map(),
                      registerTool: function(tool) {
                        this.tools.set(tool.name, tool);
                        return Promise.resolve(tool);
                      }
                    };
                    mc = document.modelContext;
                  }
                  if (typeof navigator !== 'undefined' && !navigator.modelContext) {
                    navigator.modelContext = document.modelContext;
                  }
                }

                if (mc && typeof mc.registerTool === 'function') {
                  mc.registerTool({
                    name: "get-company-info",
                    description: "Get official information, locations, and direct contact details for Cyan Printing Kuwait and its subsidiaries.",
                    inputSchema: {
                      type: "object",
                      properties: {
                        language: { type: "string", enum: ["ar", "en"], description: "Language preference" }
                      },
                      required: []
                    },
                    execute: function() {
                      return Promise.resolve({
                        company: "Cyan Printing | مطبعة سيان",
                        country: "Kuwait",
                        phone: "+965 4144 1200",
                        whatsapp: "https://wa.me/96541441200",
                        email: "info@cyanprintkw.com",
                        website: "https://cyanprintkw.com",
                        subsidiaries: [
                          { name: "Cyan Advertising", url: "https://cyanprintkw.com/cyan-advertising" },
                          { name: "Mansi Line", url: "https://cyanprintkw.com/mansi-line" }
                        ]
                      });
                    }
                  });

                  mc.registerTool({
                    name: "list-services",
                    description: "List all printing and custom packaging services offered by Cyan Printing (boxes, bags, cups, packaging, corporate).",
                    inputSchema: {
                      type: "object",
                      properties: {},
                      required: []
                    },
                    execute: function() {
                      return Promise.resolve({
                        services: [
                          { id: "boxes", title: "العلب والكرتون / Boxes & Cartons", description: "Custom rigid boxes, corrugated packaging, luxury gift and perfume boxes." },
                          { id: "bags", title: "الأكياس الورقية / Paper Bags", description: "Branded luxury shopping paper bags with durable handles." },
                          { id: "cups", title: "الأكواب الورقية / Paper Cups", description: "Insulated food-grade paper cups for cafes and restaurants." },
                          { id: "packaging", title: "مستلزمات التغليف / Packaging Supplies", description: "Wrapping tissue paper, custom roll stickers, and branded ribbons." },
                          { id: "corporate", title: "مطبوعات الشركات / Corporate Printing", description: "Business cards, presentation folders, stationery, and invoice books." }
                        ]
                      });
                    }
                  });

                  mc.registerTool({
                    name: "get-quote-guide",
                    description: "Get instructions and requirements for requesting a customized printing quotation in Kuwait.",
                    inputSchema: {
                      type: "object",
                      properties: {
                        product: { type: "string", description: "Product type to quote" }
                      },
                      required: []
                    },
                    execute: function() {
                      return Promise.resolve({
                        guide: "Provide product dimensions (L x W x H in cm), quantity, desired material, finishing (foil/UV), and artwork status.",
                        direct_whatsapp_link: "https://wa.me/96541441200?text=" + encodeURIComponent("مرحباً، أود الاستفسار عن طباعة وتغليف")
                      });
                    }
                  });

                  mc.registerTool({
                    name: "list-subsidiaries",
                    description: "List details on Cyan Advertising and Mansi Line subsidiaries.",
                    inputSchema: {
                      type: "object",
                      properties: {},
                      required: []
                    },
                    execute: function() {
                      return Promise.resolve({
                        subsidiaries: [
                          {
                            name: "Cyan Advertising",
                            focus: "Exhibition organization, booth construction, 3D indoor/outdoor signage, interior decoration in Kuwait.",
                            url: "https://cyanprintkw.com/cyan-advertising"
                          },
                          {
                            name: "Mansi Line",
                            focus: "Card holders, acrylic products, direct UV printing, DTF apparel printing, promotional gifts.",
                            url: "https://cyanprintkw.com/mansi-line"
                          }
                        ]
                      });
                    }
                  });
                }
              } catch (e) {
                console.error("WebMCP initialization error:", e);
              }
            })();
          `}
        </Script>

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('consent', 'default', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                });

                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  cookie_flags: 'max-age=7200;secure;samesite=strict',
                  anonymize_ip: true,
                  send_page_view: true,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
