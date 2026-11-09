"use client";

import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MAP_LINK = "https://maps.app.goo.gl/ft2ouAv2R5FjHBR96";

const ArfajCampaign = () => {
    const { t } = useLanguage();

    return (
        <section
            id="arfaj-campaign"
            className="py-16 md:py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f0fcff_50%,#ffffff_100%)] border-y border-[#009cdf]/10"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="space-y-6 animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 text-sm font-bold bg-[linear-gradient(90deg,#009cdf15_0%,#9fffff50_100%)] text-primary px-5 py-2 rounded-full border border-[#009cdf]/20">
                            <MapPin size={16} />
                            {t.arfajCampaign.pickupTitle}
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            {t.arfajCampaign.title}{" "}
                            <span className="text-primary">{t.arfajCampaign.titleHighlight}</span>
                        </h2>

                        <div className="lg:hidden relative">
                            <div
                                className="absolute -inset-3 bg-[linear-gradient(135deg,#009cdf25_0%,#9fffff50_100%)] rounded-3xl blur-xl transform-gpu"
                                aria-hidden="true"
                            />
                            <div className="relative rounded-3xl overflow-hidden border border-[#009cdf]/20 shadow-lg bg-white">
                                <Image
                                    src="/arfaj-flower.jpg"
                                    alt={t.arfajCampaign.imageAlt}
                                    width={1200}
                                    height={900}
                                    quality={75}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                            {t.arfajCampaign.description}
                        </p>

                        <div className="bg-white/80 backdrop-blur-md border border-[#009cdf]/15 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,156,223,0.06)]">
                            <p className="font-bold text-foreground mb-1.5 text-lg">
                                {t.arfajCampaign.pickupLocation}
                            </p>
                            <p className="text-foreground/70 text-sm md:text-base">
                                {t.arfajCampaign.pickupNote}
                            </p>
                        </div>

                        <a
                            href={MAP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 bg-primary hover:bg-[#0086bf] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-[#009cdf]/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            {t.arfajCampaign.mapButton}
                            <ExternalLink size={18} />
                        </a>
                    </div>

                    <div className="relative hidden lg:block animate-scale-in delay-100">
                        <div
                            className="absolute -inset-4 bg-[linear-gradient(135deg,#009cdf25_0%,#9fffff60_100%)] rounded-3xl blur-2xl"
                            aria-hidden="true"
                        />
                        <div className="relative rounded-3xl overflow-hidden border border-[#009cdf]/20 shadow-2xl bg-white">
                            <Image
                                src="/arfaj-flower.jpg"
                                alt={t.arfajCampaign.imageAlt}
                                width={1200}
                                height={900}
                                quality={75}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArfajCampaign;
