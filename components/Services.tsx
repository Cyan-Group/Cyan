"use client";

import { motion } from "framer-motion";
import { Package, ShoppingBag, Coffee, Layers, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Package size={32} />,
            title: t.services.boxes.title,
            description: t.services.boxes.description,
        },
        {
            icon: <ShoppingBag size={32} />,
            title: t.services.bags.title,
            description: t.services.bags.description,
        },
        {
            icon: <Coffee size={32} />,
            title: t.services.cups.title,
            description: t.services.cups.description,
        },
        {
            icon: <Layers size={32} />,
            title: t.services.packaging.title,
            description: t.services.packaging.description,
        },
        {
            icon: <Briefcase size={32} />,
            title: t.services.corporate.title,
            description: t.services.corporate.description,
        },
    ];

    return (
        <section
            id="services"
            className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#009cdf_0%,#1eb4ea_55%,#9fffff_100%)] text-white"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-1.5 rounded-full bg-white/18 backdrop-blur-md border border-white/30 text-white font-bold text-sm"
                    >
                        {t.services.title}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white"
                    >
                        {t.services.subtitle}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="bg-white/18 backdrop-blur-md border border-white/35 p-8 rounded-3xl hover:bg-white/28 transition-all duration-300 shadow-[0_8px_32px_rgba(0,80,120,0.1)] group transform-gpu"
                        >
                            <div className="bg-white text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">
                                {service.title}
                            </h3>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: services.length * 0.06 }}
                        className="bg-white text-foreground p-8 rounded-3xl flex flex-col justify-center items-center text-center relative overflow-hidden shadow-xl border border-white transform-gpu"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">
                            {t.services.cta.title}
                        </h3>
                        <p className="text-foreground/75 mb-6 relative z-10 leading-relaxed">
                            {t.services.cta.description}
                        </p>
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-[#0086bf] text-white font-bold py-3.5 px-9 rounded-full transition-all duration-300 hover:scale-105 relative z-10 shadow-lg shadow-[#009cdf]/25"
                            onClick={() => {
                                sendGAEvent("event", "whatsapp_click", {
                                    button_location: "floating_or_page",
                                });
                            }}
                        >
                            {t.services.cta.button}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
