import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cyan Advertising | سيان للدعاية والإعلان",
    description: "سيان للدعاية والإعلان - متخصصون في المنتجات الترويجية، اللوحات الإعلانية، والديكور الداخلي. نقدم حلولاً إبداعية لتعزيز حضور علامتك التجارية في الكويت والخليج. | Cyan Advertising specializes in promotional products, billboards, and interior decoration.",
    keywords: [
        'سيان للدعاية والإعلان',
        'Cyan Advertising',
        'دعاية وإعلان الكويت',
        'لوحات إعلانية',
        'منتجات ترويجية',
        'ديكور داخلي',
        'تغليف مركبات',
        'لافتات مضيئة',
        'تجهيز معارض',
        'promotional products Kuwait',
        'billboards Kuwait',
        'interior decoration',
        'vehicle wrapping',
        'signage',
    ],
    openGraph: {
        type: "website",
        locale: "ar_KW",
        alternateLocale: ["en_US"],
        url: "https://cyanprintkw.com/cyan-advertising",
        siteName: "Cyan Advertising | سيان للدعاية والإعلان",
        title: "Cyan Advertising | سيان للدعاية والإعلان",
        description: "متخصصون في المنتجات الترويجية، اللوحات الإعلانية، والديكور الداخلي. نقدم حلولاً إبداعية لتعزيز حضور علامتك التجارية.",
        images: [
            {
                url: "/Cyan Advertising Logo.svg",
                width: 1200,
                height: 630,
                alt: "Cyan Advertising | سيان للدعاية والإعلان",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cyan Advertising | سيان للدعاية والإعلان",
        description: "متخصصون في المنتجات الترويجية، اللوحات الإعلانية، والديكور الداخلي.",
        images: ["/Cyan Advertising Logo.svg"],
    },
    alternates: {
        canonical: "https://cyanprintkw.com/cyan-advertising",
    },
};

export default function CyanAdvertisingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
