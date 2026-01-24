"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "الرئيسية", href: "#hero" },
        { name: "من نحن", href: "#about" },
        { name: "خدماتنا", href: "#services" },
        { name: "شركاؤنا", href: "#partners" },
        { name: "أعمالنا", href: "#portfolio" },
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
                    <span className="text-accent text-3xl">Cyan</span>
                    <span>Printing</span>
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
                    <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Globe size={20} />
                        <span className="text-sm font-bold">EN</span>
                    </button>
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="bg-primary hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105"
                    >
                        تواصل معنا
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
                                <button className="flex items-center gap-2 text-foreground font-bold">
                                    <Globe size={20} />
                                    <span>EN</span>
                                </button>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    className="bg-primary text-white px-6 py-2.5 rounded-full font-bold"
                                >
                                    تواصل معنا
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
