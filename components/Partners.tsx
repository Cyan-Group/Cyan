"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const PARTNERS = Array.from({ length: 30 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    logo: `/partners/Partener (${i + 1}).svg`,
}));

const Partners = () => {
    const { t } = useLanguage();

    return (
        <section
            id="partners"
            className="py-20 bg-white overflow-hidden border-y border-[#009cdf]/10"
        >
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    {t.partners.title}{" "}
                    <span className="text-primary">{t.partners.titleHighlight}</span>{" "}
                    {t.partners.titleEnd}
                </h2>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-5 md:gap-6">
                    {PARTNERS.map((partner, idx) => (
                        <div
                            key={`${partner.name}-${idx}`}
                            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#f8feff] border border-[#009cdf]/8 hover:border-[#009cdf]/30 hover:bg-[#9fffff]/15 transition-all duration-300 group"
                        >
                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 80px"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
