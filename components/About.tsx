"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Paintbrush } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={40} className="text-primary" />,
        title: "جودة لا تضاهى",
        description: "نستخدم أحدث تقنيات الطباعة العالمية لضمان دقة الألوان ومتانة الخامات."
    },
    {
        icon: <Zap size={40} className="text-primary" />,
        title: "سرعة في التنفيذ",
        description: "نقدر وقتك. التزام تام بمواعيد التسليم مهما كان حجم الطلبية."
    },
    {
        icon: <Paintbrush size={40} className="text-primary" />,
        title: "تصاميم إبداعية",
        description: "فريق مصممين محترف جاهز لتحويل فكرتك إلى تصميم يبهر عملائك."
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-accent mb-6">
                            لماذا تختار <span className="text-primary">سيان</span>؟
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            نحن لسنا مجرد مطبعة، بل شركاء نجاحك. نخدم السوق الكويتي والخليجي منذ سنوات بخبرة عميقة في مجال التغليف والطباعة التجارية. هدفنا هو تقديم منتج يعكس احترافية مشروعك ويزيد من مبيعاتك.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-blue-50/50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group"
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
