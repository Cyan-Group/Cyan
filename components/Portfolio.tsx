"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type PortfolioItem = {
    id: number;
    image: string;
};

const portfolioItems: PortfolioItem[] = [
    { id: 1, image: "/portfolio/item (1).png" },
    { id: 2, image: "/portfolio/item (2).png" },
    { id: 3, image: "/portfolio/item (3).png" },
    { id: 4, image: "/portfolio/item (4).png" },
    { id: 5, image: "/portfolio/item (5).png" },
    { id: 6, image: "/portfolio/item (6).png" },
    { id: 7, image: "/portfolio/item (7).png" },
    { id: 8, image: "/portfolio/item (8).png" },
    { id: 9, image: "/portfolio/item (9).png" },
    { id: 10, image: "/portfolio/item (10).png" },
];

const Portfolio = () => {
    const { t, language } = useLanguage();

    return (
        <section
            id="portfolio"
            className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f0fcff_100%)]"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 gap-6">
                    <div className="text-center md:text-right w-full md:w-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                            {t.portfolio.title}
                        </h2>
                        <p className="text-foreground/70 text-lg md:text-xl">
                            {t.portfolio.description}
                        </p>
                    </div>
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2.5 bg-primary hover:bg-[#0086bf] text-white font-bold px-7 py-3 rounded-full shadow-md shadow-[#009cdf]/20 transition-all duration-300 hover:scale-105"
                    >
                        <span>{t.portfolio.viewMore}</span>
                        <ArrowLeft size={18} className={language === "en" ? "rotate-180" : ""} />
                    </a>
                </div>

                {/* Portfolio Images Grid */}
                {portfolioItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {portfolioItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative aspect-square rounded-3xl overflow-hidden group shadow-[0_8px_24px_rgba(0,156,223,0.08)] hover:shadow-[0_16px_36px_rgba(0,156,223,0.18)] border border-[#009cdf]/15 transition-all duration-300 cursor-pointer bg-white"
                            >
                                <Image
                                    src={item.image}
                                    alt={
                                        language === "ar"
                                            ? `عمل طباعة من أعمال مطبعة سيان - منتج ${item.id}`
                                            : `Printing work by Cyan Printing - Product ${item.id}`
                                    }
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-foreground/50">
                        <p className="text-lg">
                            {language === "ar"
                                ? "لا توجد صور في المعرض حالياً"
                                : "No images in gallery currently"}
                        </p>
                    </div>
                )}

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full shadow-md shadow-[#009cdf]/25"
                    >
                        <span>{t.portfolio.viewMore}</span>
                        <ArrowLeft size={18} className={language === "en" ? "rotate-180" : ""} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
