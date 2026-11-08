"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gift, Megaphone, Home, Lightbulb, Building2, Car, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

const CyanAdvertisingPage = () => {
    const { t, language } = useLanguage();
    const isRTL = language === "ar";

    const services = [
        {
            icon: <Gift size={32} />,
            title: t.cyanAdvertisingPage.services.promotional.title,
            description: t.cyanAdvertisingPage.services.promotional.description,
        },
        {
            icon: <Megaphone size={32} />,
            title: t.cyanAdvertisingPage.services.billboards.title,
            description: t.cyanAdvertisingPage.services.billboards.description,
        },
        {
            icon: <Home size={32} />,
            title: t.cyanAdvertisingPage.services.interior.title,
            description: t.cyanAdvertisingPage.services.interior.description,
        },
        {
            icon: <Lightbulb size={32} />,
            title: t.cyanAdvertisingPage.services.signage.title,
            description: t.cyanAdvertisingPage.services.signage.description,
        },
        {
            icon: <Building2 size={32} />,
            title: t.cyanAdvertisingPage.services.exhibitions.title,
            description: t.cyanAdvertisingPage.services.exhibitions.description,
        },
        {
            icon: <Car size={32} />,
            title: t.cyanAdvertisingPage.services.vehicles.title,
            description: t.cyanAdvertisingPage.services.vehicles.description,
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[linear-gradient(180deg,#009cdf_0%,#9fffff_100%)]">
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-lg mb-8">
                            <Image
                                src="/Cyan Advertising Logo.svg"
                                alt="Cyan Advertising Logo"
                                width={200}
                                height={100}
                                className="mx-auto h-20 w-auto object-contain"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {t.cyanAdvertisingPage.heroTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/95 font-medium mb-4">
                            {t.cyanAdvertisingPage.heroSubtitle}
                        </p>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            {t.cyanAdvertisingPage.heroDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-[linear-gradient(180deg,#f5fdff_0%,#ffffff_100%)]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                            {t.cyanAdvertisingPage.servicesTitle}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,156,223,0.06)] hover:shadow-[0_16px_40px_rgba(0,156,223,0.14)] hover:-translate-y-1 transition-all duration-300 border border-[#009cdf]/15 group"
                            >
                                <div className="bg-[linear-gradient(135deg,#009cdf18_0%,#9fffff66_100%)] text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white border-t border-[#009cdf]/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {t.cyanAdvertisingPage.contactTitle}
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/70 mb-10">
                            {t.cyanAdvertisingPage.contactDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/96541441300"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-[#0086bf] text-white font-bold py-4 px-9 rounded-full shadow-lg shadow-[#009cdf]/25 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2.5"
                                onClick={() => {
                                    sendGAEvent("event", "whatsapp_click", {
                                        button_location: "floating_or_page",
                                    });
                                }}
                            >
                                {t.cyanAdvertisingPage.whatsappButton}
                            </a>
                            <Link
                                href="/"
                                className="bg-[linear-gradient(90deg,#009cdf15_0%,#9fffff55_100%)] hover:bg-[#009cdf]/20 text-primary font-bold py-4 px-9 rounded-full border border-[#009cdf]/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                            >
                                {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                                {t.cyanAdvertisingPage.backToHome}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CyanAdvertisingPage;
