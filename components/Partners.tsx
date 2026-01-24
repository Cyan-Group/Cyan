"use client";

import Image from "next/image";

// Define the partners data here.
// You can change the 'name' and ensure the 'logo' path matches your file in public/partners/
const PARTNERS = Array.from({ length: 30 }).map((_, i) => ({
    name: `Partner ${i + 1}`,
    logo: `/partners/Partener (${i + 1}).svg`
}));

const Partners = () => {
    return (
        <section id="partners" className="py-16 bg-white overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-2xl font-bold text-gray-400">
                    أكثر من <span className="text-accent">500+</span> عميل يثقون بنا في الخليج
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* 
                    We have 30 items. 
                    Duplicate the list to create an infinite scrolling effect (marquee).
                    The animation duration is adjusted for the number of items.
                    Using marquee-reverse to move Right (better for RTL/Arabic flow usually).
                    Alternatively use 'animate-[marquee_...' for Left movement.
                    We ensure the list is long enough.
                */}
                <div
                    className="flex w-max hover:[animation-play-state:paused]"
                    style={{ animation: 'marquee-reverse 60s linear infinite' }}
                >
                    {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className="flex flex-col items-center justify-center mx-8 w-32 group">
                            <div className="relative w-24 h-24 flex items-center justify-center transition-transform transform group-hover:scale-110">
                                {/* 
                                    Using a fallback for development if images aren't there yet.
                                    In production, ensure images exist. 
                                */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        sizes="(max-width: 768px) 100px, 150px"
                                        onError={(e) => {
                                            // Fallback if image not found (optional visual handling)
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Optional: Show name below logo 
                            <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {partner.name}
                            </span>
                            */}
                        </div>
                    ))}
                </div>

                {/* Gradient fades on sides */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
};

export default Partners;
