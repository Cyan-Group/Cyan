"use client";

import { Instagram, Mail, Phone, Heart, MessageCircle, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom TikTok icon
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    // Format phone number: +96541441200 -> +965 4144 1200
    const formattedPhone = "+965 4144 1200";
    const phoneNumber = "96541441200";

    return (
        <footer id="contact" className="bg-accent text-white py-16 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="relative w-40 h-12 mb-4">
                            <Image
                                src="/Logo.svg"
                                alt="Cyan Printing Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            شريككم الموثوق في عالم الطباعة والتغليف. نقدم حلولاً مبتكرة بجودة عالية وسرعة فائقة لتلبية كافة احتياجاتكم التجارية.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">
                            معلومات التواصل
                        </h3>
                        <div className="flex flex-col gap-3 text-gray-300">
                            <a 
                                href={`tel:${phoneNumber}`}
                                aria-label="اتصل بنا"
                                className="flex items-center gap-3 hover:text-primary transition-colors group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <span className="font-medium text-base" dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>{formattedPhone}</span>
                            </a>
                            <a 
                                href="mailto:info@cyanprintkw.com"
                                aria-label="راسلنا عبر البريد الإلكتروني"
                                className="flex items-center gap-3 hover:text-primary transition-colors group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <span className="text-sm break-all">info@cyanprintkw.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <Clock size={18} className="text-primary" />
                                </div>
                                <span className="text-sm">24/7 خدمة متاحة</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">روابط سريعة</h3>
                        <div className="flex flex-col gap-2 text-gray-300">
                            <a href="#hero" className="hover:text-primary transition-colors text-sm">الرئيسية</a>
                            <a href="#about" className="hover:text-primary transition-colors text-sm">من نحن</a>
                            <a href="#services" className="hover:text-primary transition-colors text-sm">خدماتنا</a>
                            <a href="#portfolio" className="hover:text-primary transition-colors text-sm">أعمالنا</a>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">تابعونا</h3>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="تابعنا على انستقرام"
                                className="bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://tiktok.com/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="تابعنا على تيك توك"
                                className="bg-gray-800/50 hover:bg-black p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <TikTokIcon size={22} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border-t border-gray-700/50 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                        <p className="flex items-center justify-center gap-1">
                            © {new Date().getFullYear()} مطبعة سيان. جميع الحقوق محفوظة.
                        </p>
                        <p className="flex items-center gap-1 text-xs">
                            <span className="hidden sm:inline">صنع بـ</span>
                            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                            <span className="hidden sm:inline">في الكويت</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
