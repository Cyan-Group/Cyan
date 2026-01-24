"use client";

import { motion } from "framer-motion";
import ProductViewer from "./ProductViewer";
// import WhatsAppButton from "./WhatsAppButton"; // We have a global one, but we can have a CTA here too.

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Background Decor */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-right space-y-6 z-10"
                >
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-primary font-bold rounded-full text-sm">
                        #1 في عالم الطباعة والتغليف
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-accent leading-tight">
                        مطبعة سيان: <br />
                        <span className="text-primary">نحول أفكارك</span> إلى واقع
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        متخصصون في طباعة العلب، الأكياس، والأكواب بأعلى معايير الجودة. نقدم حلول تغليف مبتكرة تناسب مشروعك التجاري وتبرز هويتك.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-sky-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            اطبع الآن عبر واتساب
                        </a>
                        <a
                            href="#portfolio"
                            className="bg-white border-2 border-primary/20 hover:border-primary text-primary text-lg font-bold px-8 py-4 rounded-xl transition-all"
                        >
                            شاهد أعمالنا
                        </a>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70">
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="font-bold text-2xl text-accent">+500</span>
                            <span className="text-sm">عميل سعيد</span>
                        </div>
                        <div className="h-10 w-px bg-gray-300"></div>
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="font-bold text-2xl text-accent">100%</span>
                            <span className="text-sm">جودة مضمونة</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-full flex items-center justify-center"
                >
                    <div className="relative w-full max-w-lg">
                        {/* Abstract shapes behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-50 blur-2xl transform scale-90" />

                        <div className="relative bg-white/30 backdrop-blur-sm border border-white/50 rounded-3xl p-2 shadow-2xl">
                            <ProductViewer />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
