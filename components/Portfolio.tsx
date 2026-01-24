"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// Sample portfolio items (using Unsplash placeholders)
const portfolioItems = [
    { id: 1, category: "علب", image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=1080&auto=format&fit=crop", size: "large" }, // Gift box
    { id: 2, category: "أكياس", image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?q=80&w=1080&auto=format&fit=crop", size: "small" }, // Paper bag
    { id: 3, category: "أكواب", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1080&auto=format&fit=crop", size: "medium" }, // Coffee cup
    { id: 4, category: "تغليف", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1080&auto=format&fit=crop", size: "medium" }, // Packaging
    { id: 5, category: "شركات", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1080&auto=format&fit=crop", size: "small" }, // Stationery
    { id: 6, category: "علب", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1080&auto=format&fit=crop", size: "small" }, // Gift box
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-right">
                        <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">أحدث أعمالنا</h2>
                        <p className="text-gray-600 text-lg">نفتخر بتقديم أفضل حلول الطباعة لشركائنا</p>
                    </div>
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                        <span>شاهد المزيد على انستقرام</span>
                        <ArrowLeft size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer ${item.size === 'large' ? 'col-span-2 row-span-2' :
                                    item.size === 'medium' ? 'col-span-1 row-span-2' :
                                        'col-span-1 row-span-1'
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.category}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{item.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a
                        href="https://instagram.com/cyan.print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold"
                    >
                        <span>شاهد المزيد على انستقرام</span>
                        <ArrowLeft size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
