import { Instagram, Mail, Phone, Heart } from "lucide-react";

// Custom TikTok icon since Lucide might not have it or it varies
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    return (
        <footer id="contact" className="bg-accent text-white py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-primary">Cyan Printing</h2>
                        <p className="text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
                            شريككم الموثوق في عالم الطباعة والتغليف. نقدم حلولاً مبتكرة بجودة عالية وسرعة فائقة لتلبية كافة احتياجاتكم التجارية.
                        </p>
                    </div>

                    {/* Quick Contact */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">معلومات التواصل</h3>
                        <div className="flex flex-col gap-3 items-center md:items-start text-gray-300">
                            <a href="https://wa.me/96541441200" className="flex items-center gap-3 hover:text-primary transition-colors dir-ltr">
                                <span className="font-mono text-lg">+965 41441200</span>
                                <Phone size={20} />
                            </a>
                            <a href="mailto:info@cyanprintkw.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                                <Mail size={20} />
                                <span>info@cyanprintkw.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">تابعونا</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="https://instagram.com/cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://tiktok.com/@cyan.print"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                            >
                                <TikTokIcon size={24} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p className="flex items-center justify-center gap-1">
                        © {new Date().getFullYear()} مطبعة سيان. جميع الحقوق محفوظة.
                        <span className="hidden sm:inline-flex items-center gap-1">
                            | صنع بـ <Heart size={14} className="text-red-500 fill-red-500" /> في الكويت
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
