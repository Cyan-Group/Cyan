"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Portfolio item type for images
type PortfolioItem = {
    id: number;
    image: string;
};

// Portfolio items - Images from public/portfolio/ directory
const portfolioItems: PortfolioItem[] = [
    { id: 1, image: "/portfolio/item (1).png" },
    { id: 2, image: "/portfolio/item (2).png" },
    { id: 3, image: "/portfolio/item (3).png" },
    { id: 4, image: "/portfolio/item (4).png" },
    { id: 5, image: "/portfolio/item (5).png" },
    { id: 6, image: "/portfolio/item (6).png" },
    { id: 7, image: "/portfolio/item (7).png" },
    { id: 8, image: "/portfolio/item (8).png" },
    { id: 9, image: "/portfolio/item (9).png" },
    { id: 10, image: "/portfolio/item (10).png" },
];

const Portfolio = () => {
    const { t, language } = useLanguage();
    
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div className="text-center md:text-right w-full md:w-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">{t.portfolio.title}</h2>
                        <p className="text-gray-600 text-lg">{t.portfolio.description}</p>
                    </div>
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                        <span>{t.portfolio.viewMore}</span>
                        <ArrowLeft size={20} className={language === 'en' ? 'rotate-180' : ''} />
                    </a>
                </div>

                {/* Portfolio Images Grid */}
                {portfolioItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
                            >
                                <Image
                                    src={item.image}
                                    alt={`Portfolio item ${item.id}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-lg">{language === 'ar' ? 'لا توجد صور في المعرض حالياً' : 'No images in gallery currently'}</p>
                        <p className="text-sm mt-2">{language === 'ar' ? 'أضف الصور إلى مصفوفة portfolioItems في ملف Portfolio.tsx' : 'Add images to portfolioItems array in Portfolio.tsx'}</p>
                    </div>
                )}

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold"
                    >
                        <span>{t.portfolio.viewMore}</span>
                        <ArrowLeft size={20} className={language === 'en' ? 'rotate-180' : ''} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
