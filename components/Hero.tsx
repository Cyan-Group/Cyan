"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[linear-gradient(180deg,#009cdf_0%,#9fffff_100%)]"
        >
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center space-y-8 md:space-y-10">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.22] tracking-tight animate-fade-in-up">
                        <span className="block">{t.hero.title}</span>
                        <span className="block mt-1 md:mt-2">
                            {t.hero.titleHighlight} {t.hero.titleEnd}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-xl md:text-2xl text-white/95 font-normal leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-100">
                        {t.hero.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 animate-fade-in-up delay-200">
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto min-w-[200px] bg-primary hover:bg-[#0086bf] text-white text-lg md:text-xl font-bold px-9 py-3.5 rounded-full shadow-lg shadow-[#009cdf]/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 text-center"
                            onClick={() => {
                                sendGAEvent("event", "whatsapp_click", {
                                    button_location: "floating_or_page",
                                });
                            }}
                        >
                            {t.hero.ctaWhatsApp}
                        </a>
                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto min-w-[200px] bg-white hover:bg-[#f2ffff] text-primary text-lg md:text-xl font-bold px-9 py-3.5 rounded-full shadow-lg shadow-black/5 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 text-center"
                        >
                            {t.hero.ctaPortfolio}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
