"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Option 1: Simple image logo (recommended for 2D logos)
const ProductViewer = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center">
            {!imageError ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/Logo.svg"
                        alt="Printing Press"
                        fill
                        className="object-contain"
                        priority
                        onError={() => setImageError(true)}
                    />
                </motion.div>
            ) : (
                // Fallback placeholder if image doesn't exist
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-100/20 rounded-2xl">
                    <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-6xl">🖨️</span>
                        </div>
                        <p className="text-sm text-gray-500">Place your printing press logo at:<br /><code className="text-xs bg-white/50 px-2 py-1 rounded">/public/Logo.svg</code></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductViewer;
