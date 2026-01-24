"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Paintbrush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
    const { t } = useLanguage();
    
    const features = [
        {
            icon: <ShieldCheck size={40} className="text-primary" />,
            title: t.about.features.quality.title,
            description: t.about.features.quality.description
        },
        {
            icon: <Zap size={40} className="text-primary" />,
            title: t.about.features.speed.title,
            description: t.about.features.speed.description
        },
        {
            icon: <Paintbrush size={40} className="text-primary" />,
            title: t.about.features.design.title,
            description: t.about.features.design.description
        }
    ];
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-accent mb-6">
                            {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>{t.about.titleEnd}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t.about.description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-blue-50/50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group"
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
