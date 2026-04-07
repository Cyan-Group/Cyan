"use client";

import { ArrowLeft, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

const Hero = () => {
    const { t, language } = useLanguage();
    const stats = [
        { value: "+500", label: t.hero.stats.happyClients, icon: CheckCircle2 },
        { value: "100%", label: t.hero.stats.quality, icon: Sparkles },
        { value: language === 'ar' ? "تسليم سريع" : "Fast Delivery", label: t.hero.stats.fastDelivery, icon: Zap },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
            {/* Enhanced Background Decor */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                {/* Text Content */}
                <div className="text-center space-y-8 animate-fade-in-up">
                    {/* Badge */}
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-blue-100/50 text-primary font-bold rounded-full text-sm border border-primary/20 shadow-sm animate-fade-in-down delay-200"
                    >
                        <Sparkles size={16} className="text-primary" />
                        {t.hero.badge}
                    </span>

                    {/* Main Heading */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-accent leading-tight animate-fade-in-up delay-300"
                    >
                        {t.hero.title} <br />
                        <span className="bg-gradient-to-l from-primary via-sky-500 to-primary bg-clip-text text-transparent">
                            {t.hero.titleHighlight}
                        </span>{" "}
                        {t.hero.titleEnd}
                    </h1>

                    {/* Description */}
                    <p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-400"
                    >
                        {t.hero.description}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in-up delay-500"
                    >
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-r from-primary to-sky-600 hover:from-sky-600 hover:to-primary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                            onClick={() => {
                                sendGAEvent('event', 'whatsapp_click', { button_location: 'floating_or_page' });
                            }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {t.hero.ctaWhatsApp}
                                <ArrowLeft size={20} className={`group-hover:translate-x-1 transition-transform ${language === 'en' ? 'rotate-180' : ''}`} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="#portfolio"
                            className="group bg-white border-2 border-primary/30 hover:border-primary text-primary text-lg font-bold px-8 py-4 rounded-xl transition-all hover:bg-primary/5 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {t.hero.ctaPortfolio}
                                <ArrowLeft size={20} className={`group-hover:translate-x-1 transition-transform ${language === 'en' ? 'rotate-180' : ''}`} />
                            </span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div
                        className="pt-6 pb-12 md:pb-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 animate-fade-in-up delay-600"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center group px-2 animate-scale-in delay-${700 + index * 100}`}
                            >
                                <div className="flex items-center gap-2 mb-3 md:mb-4">
                                    <stat.icon size={18} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                    <span className="font-black text-2xl sm:text-3xl md:text-4xl text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-tight">
                                        {stat.value}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500 font-medium text-center">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-fade-in delay-1500"
            >
                <div
                    className="flex flex-col items-center gap-3 text-gray-400 animate-bounce-sm"
                >
                    <span className="text-xs font-medium">{t.hero.scrollDown}</span>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <div
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-3 animate-bounce-sm-inner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
