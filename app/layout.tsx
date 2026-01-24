import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
});

import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer"; // Import Footer here or page? Page is better for content flow but layout handles global structure. 
// User request: "Links... scroll to footer". Footer fits in page usually, but for a landing page, it's always at bottom.
// Let's put Header and WhatsAppButton in layout. Footer is usually part of the content flow, sticking to bottom.
// I'll put Footer in page.tsx for now, or layout. Let's put it in layout to be consistent global.

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
