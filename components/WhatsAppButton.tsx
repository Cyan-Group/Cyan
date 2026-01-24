"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

export default function WhatsAppButton() {
    const { t, language } = useLanguage();
    const [showPopup, setShowPopup] = useState(false);
    const [hasSeenPopup, setHasSeenPopup] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Show popup after 5 seconds if user hasn't seen it
        const seen = typeof window !== 'undefined' ? localStorage.getItem('whatsapp-popup-seen') : null;
        if (!seen) {
            // Set timer to show popup after 5 seconds
            timeoutRef.current = setTimeout(() => {
                setShowPopup(true);
            }, 5000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        setHasSeenPopup(true);
        if (typeof window !== 'undefined') {
            localStorage.setItem('whatsapp-popup-seen', 'true');
        }
    };

    const handleMouseEnter = () => {
        // Show on hover (but don't prevent the 5-second auto-show)
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        // Auto-hide after delay when mouse leaves (only if not manually closed)
        if (!hasSeenPopup) {
            timeoutRef.current = setTimeout(() => {
                setShowPopup(false);
            }, 500);
        }
    };
    
    return (
        <div 
            className={`fixed ${language === 'ar' ? 'left-6' : 'right-6'} bottom-6 z-[100]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Popup Notification */}
            <AnimatePresence mode="wait">
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                        className={`absolute ${language === 'ar' ? 'left-full ml-3' : 'right-full mr-3'} bottom-0 w-72 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-5 border border-gray-200`}
                        style={{ zIndex: 1000 }}
                        onMouseEnter={() => {
                            setShowPopup(true);
                            if (timeoutRef.current) {
                                clearTimeout(timeoutRef.current);
                            }
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                            aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
                        >
                            <X size={14} />
                        </button>

                        {/* Popup Content */}
                        <div className="pr-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full flex items-center justify-center shadow-lg">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base font-bold text-gray-900 mb-1.5 leading-tight">
                                        {t.whatsapp.popupMessage}
                                    </p>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {t.whatsapp.popupSubtext}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/96541441200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp.contactUs}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                onClick={() => {
                    sendGAEvent('event', 'click_whatsapp', { method: 'whatsapp' });
                }}
            >
                <div className="absolute inset-0 rounded-full border border-[#25d366] opacity-50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="relative z-10">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </motion.a>
        </div>
    );
}
