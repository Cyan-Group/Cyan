"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";

const Hero = () => {
    const stats = [
        { value: "+500", label: "عميل سعيد", icon: CheckCircle2 },
        { value: "100%", label: "جودة مضمونة", icon: Sparkles },
        { value: "24/7", label: "خدمة متاحة", icon: CheckCircle2 },
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-8"
                >
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-blue-100/50 text-primary font-bold rounded-full text-sm border border-primary/20 shadow-sm"
                    >
                        <Sparkles size={16} className="text-primary" />
                        #1 في عالم الطباعة والتغليف
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-accent leading-tight"
                    >
                        مطبعة سيان: <br />
                        <span className="bg-gradient-to-l from-primary via-sky-500 to-primary bg-clip-text text-transparent">
                            نحول أفكارك
                        </span>{" "}
                        إلى واقع
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        متخصصون في طباعة العلب، الأكياس، والأكواب بأعلى معايير الجودة. نقدم حلول تغليف مبتكرة تناسب مشروعك التجاري وتبرز هويتك في الكويت والخليج.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
                    >
                        <a
                            href="https://wa.me/96541441200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-r from-primary to-sky-600 hover:from-sky-600 hover:to-primary text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                اطبع الآن عبر واتساب
                                <ArrowLeft size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="#portfolio"
                            className="group bg-white border-2 border-primary/30 hover:border-primary text-primary text-lg font-bold px-8 py-4 rounded-xl transition-all hover:bg-primary/5 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <span className="flex items-center justify-center gap-2">
                                شاهد أعمالنا
                                <ArrowLeft size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-6 flex flex-wrap items-center justify-center gap-6 md:gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <stat.icon size={18} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                                    <span className="font-black text-3xl md:text-4xl text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-400"
                >
                    <span className="text-xs font-medium">انتقل للأسفل</span>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
