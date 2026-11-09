"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Paintbrush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <ShieldCheck size={36} className="text-primary" />,
            title: t.about.features.quality.title,
            description: t.about.features.quality.description,
        },
        {
            icon: <Zap size={36} className="text-primary" />,
            title: t.about.features.speed.title,
            description: t.about.features.speed.description,
        },
        {
            icon: <Paintbrush size={36} className="text-primary" />,
            title: t.about.features.design.title,
            description: t.about.features.design.description,
        },
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle ambient brand glow */}
            <div className="absolute -top-24 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#9fffff]/35 rounded-full blur-2xl md:blur-3xl pointer-events-none transform-gpu" />
            <div className="absolute -bottom-24 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#009cdf]/5 rounded-full blur-2xl md:blur-3xl pointer-events-none transform-gpu" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {t.about.title}{" "}
                            <span className="text-primary">{t.about.titleHighlight}</span>
                            {t.about.titleEnd}
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl mx-auto">
                            {t.about.description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-[linear-gradient(145deg,#ffffff_0%,#f2fcff_100%)] p-8 md:p-10 rounded-3xl border border-[#009cdf]/15 shadow-[0_8px_30px_rgba(0,156,223,0.06)] hover:shadow-[0_16px_40px_rgba(0,156,223,0.14)] hover:-translate-y-1 transition-all duration-300 group transform-gpu"
                        >
                            <div className="bg-[linear-gradient(135deg,#009cdf18_0%,#9fffff66_100%)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#009cdf]/15 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
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
