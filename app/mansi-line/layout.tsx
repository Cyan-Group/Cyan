import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mansi Line | منسي لاين",
    description: "منسي لاين - متخصصون في طباعة حاملات البطاقات، المنتجات الأكريليك، طباعة UV، الاستيكرات، DTF، والتيشيرتات بأعلى معايير الجودة في الكويت. | Mansi Line specializes in card holder printing, acrylic products, UV printing, stickers, DTF, and t-shirts.",
    keywords: [
        'منسي لاين',
        'Mansi Line',
        'طباعة حاملات بطاقات',
        'منتجات أكريليك',
        'طباعة UV',
        'استيكرات',
        'طباعة DTF',
        'طباعة تيشيرتات',
        'card holder printing',
        'acrylic products Kuwait',
        'UV printing',
        'stickers printing',
        'DTF printing',
        't-shirt printing Kuwait',
    ],
    openGraph: {
        type: "website",
        locale: "ar_KW",
        alternateLocale: ["en_US"],
        url: "https://cyanprintkw.com/mansi-line",
        siteName: "Mansi Line | منسي لاين",
        title: "Mansi Line | منسي لاين",
        description: "متخصصون في طباعة حاملات البطاقات، المنتجات الأكريليك، طباعة UV، الاستيكرات، DTF، والتيشيرتات.",
        images: [
            {
                url: "/Mansi Line Logo.svg",
                width: 1200,
                height: 630,
                alt: "Mansi Line | منسي لاين",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mansi Line | منسي لاين",
        description: "متخصصون في طباعة حاملات البطاقات، المنتجات الأكريليك، طباعة UV، الاستيكرات، DTF، والتيشيرتات.",
        images: ["/Mansi Line Logo.svg"],
    },
    alternates: {
        canonical: "https://cyanprintkw.com/mansi-line",
    },
};

export default function MansiLineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
