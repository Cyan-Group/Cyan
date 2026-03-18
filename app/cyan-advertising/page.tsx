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
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
                {/* Background Decor */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="mb-8">
                            <Image
                                src="/Cyan Advertising Logo.svg"
                                alt="Cyan Advertising Logo"
                                width={200}
                                height={100}
                                className="mx-auto h-24 w-auto object-contain"
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-accent mb-6">
                            {t.cyanAdvertisingPage.heroTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-4">
                            {t.cyanAdvertisingPage.heroSubtitle}
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t.cyanAdvertisingPage.heroDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-accent">
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
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                            >
                                <div className="bg-primary/10 text-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-accent mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-accent mb-6">
                            {t.cyanAdvertisingPage.contactTitle}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {t.cyanAdvertisingPage.contactDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/96541441300"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                                onClick={() => {
                                    sendGAEvent('event', 'whatsapp_click', { button_location: 'floating_or_page' });
                                }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                {t.cyanAdvertisingPage.whatsappButton}
                            </a>
                            <Link
                                href="/"
                                className="bg-primary/10 hover:bg-primary/20 text-primary font-bold py-4 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
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
