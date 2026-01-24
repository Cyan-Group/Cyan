"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ModelViewer from "./ModelViewer";

// Portfolio item type
type PortfolioItem = {
    id: number;
    name: string;
    model: string;
};

// Portfolio items organized by category
// Place your GLB files in the public/models/ directory
// Only include files that actually exist in public/models/
const portfolioCategories: {
    boxes: PortfolioItem[];
    bags: PortfolioItem[];
    other: PortfolioItem[];
} = {
    boxes: [
        { id: 1, name: "علب", model: "/models/box.glb" },
        // Add more box models here when you add them to public/models/
    ],
    bags: [
        { id: 2, name: "أكياس", model: "/models/bag.glb" },
        // Add more bag models here when you add them to public/models/
    ],
    other: [
        // Add other product models here when you add them to public/models/
        // Example: { id: 3, name: "أكواب", model: "/models/cup.glb" },
    ],
};

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

                {/* Boxes Category - Only show if there are items */}
                {portfolioCategories.boxes.length > 0 && (
                    <div className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-black text-accent mb-6 text-center md:text-right"
                        >
                            علب
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {portfolioCategories.boxes.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
                                >
                                    <div className="w-full h-full relative">
                                        <ModelViewer
                                            modelPath={item.model}
                                            className="w-full h-full"
                                            autoRotate={true}
                                            enableControls={true}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                                        <span className="text-white font-bold text-sm md:text-base">{item.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bags Category - Only show if there are items */}
                {portfolioCategories.bags.length > 0 && (
                    <div className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-black text-accent mb-6 text-center md:text-right"
                        >
                            أكياس
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {portfolioCategories.bags.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
                                >
                                    <div className="w-full h-full relative">
                                        <ModelViewer
                                            modelPath={item.model}
                                            className="w-full h-full"
                                            autoRotate={true}
                                            enableControls={true}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                                        <span className="text-white font-bold text-sm md:text-base">{item.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Products Category - Only show if there are items */}
                {portfolioCategories.other.length > 0 && (
                    <div className="mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-black text-accent mb-6 text-center md:text-right"
                        >
                            منتجات أخرى
                        </motion.h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {portfolioCategories.other.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all cursor-pointer bg-white"
                                >
                                    <div className="w-full h-full relative">
                                        <ModelViewer
                                            modelPath={item.model}
                                            className="w-full h-full"
                                            autoRotate={true}
                                            enableControls={true}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                                        <span className="text-white font-bold text-sm md:text-base">{item.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

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
