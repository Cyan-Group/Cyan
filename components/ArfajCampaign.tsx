"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MAP_LINK = "https://maps.app.goo.gl/ft2ouAv2R5FjHBR96";

const ArfajCampaign = () => {
    const { t } = useLanguage();

    return (
        <section id="arfaj-campaign" className="py-14 md:py-20 bg-gradient-to-b from-white to-blue-50/40 border-y border-blue-100/60">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5 md:space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-full">
                            <MapPin size={16} />
                            {t.arfajCampaign.pickupTitle}
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-accent leading-tight">
                            {t.arfajCampaign.title} <span className="text-primary">{t.arfajCampaign.titleHighlight}</span>
                        </h2>

                        <div className="lg:hidden relative">
                            <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" aria-hidden="true" />
                            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-lg bg-white">
                                <Image
                                    src="/arfaj-flower.jpg"
                                    alt={t.arfajCampaign.imageAlt}
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            {t.arfajCampaign.description}
                        </p>

                        <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm">
                            <p className="font-bold text-accent mb-2">{t.arfajCampaign.pickupLocation}</p>
                            <p className="text-gray-600 text-sm md:text-base">{t.arfajCampaign.pickupNote}</p>
                        </div>

                        <a
                            href={MAP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                        >
                            {t.arfajCampaign.mapButton}
                            <ExternalLink size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" aria-hidden="true" />
                        <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-2xl bg-white">
                            <Image
                                src="/arfaj-flower.jpg"
                                alt={t.arfajCampaign.imageAlt}
                                width={1200}
                                height={900}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ArfajCampaign;
