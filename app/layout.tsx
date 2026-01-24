import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { LanguageProvider } from "@/contexts/LanguageContext";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cyanprintkw.com'), // Update with your actual domain
  title: {
    default: "Cyan Printing | مطبعة سيان - طباعة وتغليف في الكويت",
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
    title: "Cyan Printing | مطبعة سيان - طباعة وتغليف في الكويت",
    description: "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد. مطبعة سيان - شريكك الموثوق في الطباعة والتغليف.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyan Printing | مطبعة سيان",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyan Printing | مطبعة سيان - طباعة وتغليف في الكويت",
    description: "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
