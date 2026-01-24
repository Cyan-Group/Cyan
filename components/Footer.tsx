"use client";

import { Instagram, Mail, Phone, Heart, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Custom TikTok icon
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// Custom Threads icon
const ThreadsIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm0 1.92c-4.24 0-7.68 3.44-7.68 7.68s3.44 7.68 7.68 7.68 7.68-3.44 7.68-7.68-3.44-7.68-7.68-7.68zm0 1.44c3.456 0 6.24 2.784 6.24 6.24s-2.784 6.24-6.24 6.24-6.24-2.784-6.24-6.24 2.784-6.24 6.24-6.24zm0 1.2c-2.784 0-5.04 2.256-5.04 5.04s2.256 5.04 5.04 5.04 5.04-2.256 5.04-5.04-2.256-5.04-5.04-5.04z"/>
    </svg>
);

const Footer = () => {
    const { t, language } = useLanguage();
    // Format phone number: +96541441200 -> +965 4144 1200
    const formattedPhone = "+965 4144 1200";
    const phoneNumber = "96541441200";

    return (
        <footer id="contact" className="bg-accent text-white py-16 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`space-y-4 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}
                    >
                        <div className="relative w-40 h-12 mb-4 mx-auto md:mx-0">
                            <Image
                                src="/Logo.svg"
                                alt="Cyan Printing Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {t.footer.description}
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`space-y-4 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}
                    >
                        <h3 className="text-xl font-bold text-white">
                            {t.footer.contactInfo}
                        </h3>
                        <div className={`flex flex-col gap-3 text-gray-300 items-center ${language === 'ar' ? 'md:items-start' : 'md:items-start'}`}>
                            <a 
                                href={`tel:${phoneNumber}`}
                                aria-label={t.footer.callUs}
                                className="flex items-center gap-3 hover:text-primary transition-colors group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <span className="font-medium text-base" dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>{formattedPhone}</span>
                            </a>
                            <a 
                                href="mailto:info@cyanprintkw.com"
                                aria-label={t.footer.emailUs}
                                className="flex items-center gap-3 hover:text-primary transition-colors group"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <span className="text-sm break-all">info@cyanprintkw.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`space-y-4 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}
                    >
                        <h3 className="text-xl font-bold text-white">{t.footer.followUs}</h3>

                        {/* Social Media Icons */}
                        <div className={`flex gap-3 ${language === 'ar' ? 'justify-center md:justify-start' : 'justify-center md:justify-start'} flex-wrap`}>
                            <a
                                href="https://instagram.com/cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followInstagram}
                                className="bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://tiktok.com/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followTikTok}
                                className="bg-gray-800/50 hover:bg-black p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <TikTokIcon size={22} />
                            </a>
                            <a
                                href="https://threads.net/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followThreads}
                                className="bg-gray-800/50 hover:bg-black p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <ThreadsIcon size={22} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100092204716363"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followFacebook}
                                className="bg-gray-800/50 hover:bg-blue-600 p-3 rounded-xl transition-all transform hover:scale-110 hover:shadow-lg"
                            >
                                <Facebook size={22} />
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
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-gray-400 text-sm">
                        <p className="flex items-center justify-center gap-1 text-center">
                            © {new Date().getFullYear()} Cyan Printing. {t.footer.copyright}
                        </p>
                        <p className="flex items-center justify-center gap-1 text-xs">
                            <span className="hidden sm:inline">{t.footer.madeWith}</span>
                            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                            <span className="hidden sm:inline">{t.footer.inKuwait}</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
