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
            description: t.services.boxes.description
        },
        {
            icon: <ShoppingBag size={32} />,
            title: t.services.bags.title,
            description: t.services.bags.description
        },
        {
            icon: <Coffee size={32} />,
            title: t.services.cups.title,
            description: t.services.cups.description
        },
        {
            icon: <Layers size={32} />,
            title: t.services.packaging.title,
            description: t.services.packaging.description
        },
        {
            icon: <Briefcase size={32} />,
            title: t.services.corporate.title,
            description: t.services.corporate.description
        }
    ];
    return (
        <section id="services" className="py-20 bg-accent text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm"
                    >
                        {t.services.title}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black mt-3"
                    >
                        {t.services.subtitle}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="bg-primary/20 text-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: services.length * 0.1 }}
                        className="bg-primary p-8 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-accent/10 opacity-20"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">{t.services.cta.title}</h3>
                        <p className="mb-6 relative z-10">{t.services.cta.description}</p>
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors relative z-10 shadow-lg"
                            onClick={() => {
                                sendGAEvent('event', 'whatsapp_click', { button_location: 'floating_or_page' });
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
