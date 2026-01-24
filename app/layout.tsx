import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
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
        className={`${cairo.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white`}
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
