"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    // Handle scroll effect for navbar background with passive listener and RAF throttling
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 40);
                    ticking = false;
                });
                ticking = true;
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "ar" ? "en" : "ar");
    };

    const navLinks = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.services, href: "#services" },
        { name: t.nav.subsidiaries, href: "#subsidiaries" },
        { name: t.nav.partners, href: "#partners" },
        { name: t.nav.portfolio, href: "#portfolio" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);

        if (!isHomePage) {
            e.preventDefault();
            window.location.href = "/" + href;
            return;
        }

        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 md:bg-white/75 backdrop-blur-sm md:backdrop-blur-xl border-b border-[#009cdf]/15 shadow-[0_8px_30px_rgba(0,156,223,0.08)] py-3.5"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-black flex items-center gap-2 transition-transform hover:scale-105"
                    onClick={(e) => handleNavClick(e, "#hero")}
                >
                    <Image
                        src="/Logo.svg"
                        alt="Cyan Printing Logo | مطبعة سيان - شعار الشركة"
                        width={120}
                        height={40}
                        className={`h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
                            isScrolled ? "" : "brightness-0 invert"
                        }`}
                        priority
                    />
                </Link>

                {/* Desktop Glassmorphic Pill Navigation */}
                <nav
                    className={`hidden md:flex items-center gap-6 lg:gap-8 px-8 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                        isScrolled
                            ? "bg-[#009cdf]/8 border border-[#009cdf]/20 shadow-sm"
                            : "bg-white/18 border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
                    }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`text-base font-medium transition-colors ${
                                isScrolled
                                    ? "text-foreground hover:text-primary"
                                    : "text-white hover:text-[#9fffff]"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        title={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
                        className={`p-2 rounded-full transition-colors cursor-pointer ${
                            isScrolled
                                ? "text-primary hover:bg-[#009cdf]/10"
                                : "text-white hover:bg-white/15"
                        }`}
                        aria-label={language === "ar" ? "EN — Switch to English" : "AR — التبديل إلى العربية"}
                    >
                        <Globe size={26} strokeWidth={1.75} />
                    </button>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            sendGAEvent("event", "contactus_click");
                            handleNavClick(e, "#contact");
                        }}
                        className={`px-7 py-2.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-sm ${
                            isScrolled
                                ? "bg-primary text-white hover:bg-[#0086bf] shadow-[#009cdf]/20"
                                : "bg-white text-primary hover:bg-[#9fffff] shadow-black/5"
                        }`}
                    >
                        {t.nav.contact}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-full transition-colors ${
                        isScrolled ? "text-foreground" : "text-white bg-white/15 backdrop-blur-md"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Glassmorphic Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-[520px] opacity-100 mt-3 mx-4 rounded-3xl bg-white/95 backdrop-blur-md md:backdrop-blur-xl border border-[#009cdf]/20 shadow-2xl"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-6 py-6 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2.5 border-b border-[#009cdf]/10"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center justify-between pt-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-primary font-bold px-3 py-2 rounded-full bg-[#009cdf]/10"
                            aria-label={language === "ar" ? "EN — Switch to English" : "AR — التبديل إلى العربية"}
                        >
                            <Globe size={20} />
                            <span>{language === "ar" ? "EN" : "AR"}</span>
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                sendGAEvent("event", "contactus_click");
                                handleNavClick(e, "#contact");
                            }}
                            className="bg-primary text-white px-7 py-2.5 rounded-full font-bold shadow-md shadow-[#009cdf]/25"
                        >
                            {t.nav.contact}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
