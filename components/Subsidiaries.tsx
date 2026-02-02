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
        <section id="subsidiaries" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black text-accent"
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
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
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
                                <h3 className="text-xl font-bold text-accent mb-4">
                                    {subsidiary.name}
                                </h3>
                                <p
                                    className="text-gray-600 leading-relaxed mb-6"
                                    dir={language === "ar" ? "rtl" : "ltr"}
                                >
                                    {subsidiary.description}
                                </p>
                                <Link
                                    href={subsidiary.href}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-sky-600 transition-colors group/link"
                                >
                                    {t.subsidiaries.visitWebsite}
                                    {isRTL ? (
                                        <ArrowLeft size={18} className="group-hover/link:-translate-x-1 transition-transform" />
                                    ) : (
                                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
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
