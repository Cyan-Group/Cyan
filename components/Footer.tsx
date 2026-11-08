"use client";

import { Instagram, Mail, Phone, Heart, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const ThreadsIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm0 1.92c-4.24 0-7.68 3.44-7.68 7.68s3.44 7.68 7.68 7.68 7.68-3.44 7.68-7.68-3.44-7.68-7.68-7.68zm0 1.44c3.456 0 6.24 2.784 6.24 6.24s-2.784 6.24-6.24 6.24-6.24-2.784-6.24-6.24 2.784-6.24 6.24-6.24zm0 1.2c-2.784 0-5.04 2.256-5.04 5.04s2.256 5.04 5.04 5.04 5.04-2.256 5.04-5.04-2.256-5.04-5.04-5.04z" />
    </svg>
);

const Footer = () => {
    const { t, language } = useLanguage();
    const formattedPhone = "+965 4144 1200";
    const phoneNumber = "96541441200";

    return (
        <footer
            id="contact"
            className="bg-[linear-gradient(180deg,#009cdf_0%,#007bb5_100%)] text-white py-16 relative overflow-hidden"
        >
            {/* Ambient Complementary Glow */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-[#9fffff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-0 w-80 h-80 bg-[#9fffff]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={`space-y-4 text-center ${
                            language === "ar" ? "md:text-right" : "md:text-left"
                        }`}
                    >
                        <div className="relative w-40 h-12 mb-4 mx-auto md:mx-0">
                            <Image
                                src="/Logo.svg"
                                alt="Cyan Printing Logo | مطبعة سيان - شعار الشركة"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/90 leading-relaxed text-base">
                            {t.footer.description}
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`space-y-4 text-center ${
                            language === "ar" ? "md:text-right" : "md:text-left"
                        }`}
                    >
                        <h3 className="text-xl font-bold text-white">{t.footer.contactInfo}</h3>
                        <div className="flex flex-col gap-3 text-white/90 items-center md:items-start">
                            <a
                                href={`tel:${phoneNumber}`}
                                aria-label={t.footer.callUs}
                                className="flex items-center gap-3 hover:text-[#9fffff] transition-colors group"
                            >
                                <div className="bg-white/15 backdrop-blur-md border border-white/25 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                                    <Phone size={18} />
                                </div>
                                <span
                                    className="font-medium text-base"
                                    dir="ltr"
                                    style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
                                >
                                    {formattedPhone}
                                </span>
                            </a>
                            <a
                                href="mailto:info@cyanprintkw.com"
                                aria-label={t.footer.emailUs}
                                className="flex items-center gap-3 hover:text-[#9fffff] transition-colors group"
                            >
                                <div className="bg-white/15 backdrop-blur-md border border-white/25 p-2.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="text-base break-all">info@cyanprintkw.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`space-y-4 text-center ${
                            language === "ar" ? "md:text-right" : "md:text-left"
                        }`}
                    >
                        <h3 className="text-xl font-bold text-white">{t.footer.followUs}</h3>

                        <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                            <a
                                href="https://instagram.com/cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followInstagram}
                                className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white hover:text-primary p-3 rounded-full transition-all transform hover:scale-110 shadow-sm"
                            >
                                <Instagram size={22} />
                            </a>
                            <a
                                href="https://tiktok.com/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followTikTok}
                                className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white hover:text-primary p-3 rounded-full transition-all transform hover:scale-110 shadow-sm"
                            >
                                <TikTokIcon size={22} />
                            </a>
                            <a
                                href="https://threads.net/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followThreads}
                                className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white hover:text-primary p-3 rounded-full transition-all transform hover:scale-110 shadow-sm"
                            >
                                <ThreadsIcon size={22} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100092204716363"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t.footer.followFacebook}
                                className="bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white hover:text-primary p-3 rounded-full transition-all transform hover:scale-110 shadow-sm"
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
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t border-white/20 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-white/85 text-sm">
                        <p className="flex items-center justify-center gap-1 text-center">
                            © {new Date().getFullYear()} Cyan Printing. {t.footer.copyright}
                        </p>
                        <p className="flex items-center justify-center gap-1.5 text-sm">
                            <span className="hidden sm:inline">{t.footer.madeWith}</span>
                            <Heart size={14} className="text-[#9fffff] fill-[#9fffff] animate-pulse" />
                            <span className="hidden sm:inline">{t.footer.inKuwait}</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
