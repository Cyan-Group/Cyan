import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مطبعة سيان | Cyan Printing - طباعة وتغليف في الكويت",
  description: "متخصصون في طباعة العلب، الأكياس، والأكواب بأعلى معايير الجودة. نقدم حلول تغليف مبتكرة تناسب مشروعك التجاري وتبرز هويتك في الكويت والخليج.",
  keywords: ["مطبعة", "طباعة", "تغليف", "علب", "أكياس", "أكواب", "الكويت", "Cyan Printing"],
  openGraph: {
    title: "مطبعة سيان | Cyan Printing",
    description: "شريككم الموثوق في عالم الطباعة والتغليف",
    locale: "ar_KW",
    type: "website",
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
        className={`${ibmPlexSansArabic.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
