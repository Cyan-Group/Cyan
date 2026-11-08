"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Subsidiaries = () => {
    const { t, language } = useLanguage();
    const isRTL = language === "ar";

    const subsidiaries = [
        {
            name: t.subsidiaries.cyanAdvertising.name,
            description: t.subsidiaries.cyanAdvertising.description,
            logo: "/Cyan Advertising Logo.svg",
            href: "/cyan-advertising",
        },
        {
            name: t.subsidiaries.mansiLine.name,
            description: t.subsidiaries.mansiLine.description,
            logo: "/Mansi Line Logo.svg",
            href: "/mansi-line",
        },
    ];

    return (
        <section
            id="subsidiaries"
            className="py-24 bg-[linear-gradient(180deg,#f5fdff_0%,#ffffff_100%)]"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                    >
                        {t.subsidiaries.title}{" "}
                        <span className="text-primary">{t.subsidiaries.titleHighlight}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {subsidiaries.map((subsidiary, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,156,223,0.06)] hover:shadow-[0_16px_44px_rgba(0,156,223,0.14)] hover:-translate-y-1 transition-all duration-300 border border-[#009cdf]/15 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-48 h-32 relative mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={subsidiary.logo}
                                        alt={subsidiary.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                    {subsidiary.name}
                                </h3>
                                <p
                                    className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8"
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                >
                                    {subsidiary.description}
                                </p>
                                <Link
                                    href={subsidiary.href}
                                    className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#009cdf15_0%,#9fffff55_100%)] hover:bg-primary text-primary hover:text-white font-bold px-7 py-3 rounded-full border border-[#009cdf]/20 transition-all duration-300 group/link"
                                >
                                    {t.subsidiaries.visitWebsite}
                                    {isRTL ? (
                                        <ArrowLeft
                                            size={18}
                                            className="group-hover/link:-translate-x-1 transition-transform"
                                        />
                                    ) : (
                                        <ArrowRight
                                            size={18}
                                            className="group-hover/link:translate-x-1 transition-transform"
                                        />
                                    )}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subsidiaries;
