"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'en' : 'ar');
    };

    const navLinks = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.services, href: "#services" },
        { name: t.nav.partners, href: "#partners" },
        { name: t.nav.portfolio, href: "#portfolio" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-black text-primary flex items-center gap-2"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    <Image
                        src="/Logo.svg"
                        alt="Cyan Printing Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                        onError={(e) => {
                            // Fallback to text if logo doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.logo-text-fallback')) {
                                parent.innerHTML += '<span class="logo-text-fallback text-accent text-3xl">Cyan</span><span class="logo-text-fallback">Printing</span>';
                            }
                        }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-foreground hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                        aria-label="Toggle language"
                    >
                        <Globe size={20} />
                        <span className="text-sm font-bold">{language === 'ar' ? 'EN' : 'AR'}</span>
                    </button>
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-primary hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105"
                    >
                        {t.nav.contact}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-gray-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-4">
                                <button 
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 text-foreground font-bold"
                                    aria-label="Toggle language"
                                >
                                    <Globe size={20} />
                                    <span>{language === 'ar' ? 'EN' : 'AR'}</span>
                                </button>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    className="bg-primary text-white px-6 py-2.5 rounded-full font-bold"
                                >
                                    {t.nav.contact}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
