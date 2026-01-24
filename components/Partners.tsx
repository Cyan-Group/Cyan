"use client";

import Image from "next/image";

// Define the partners data here.
const PARTNERS = Array.from({ length: 30 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  logo: `/partners/Partener (${i + 1}).svg`,
}));

const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl font-bold text-gray-400">
          أكثر من <span className="text-accent">500+</span> عميل يثقون بنا في الخليج
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-6 md:gap-8">
          {PARTNERS.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex flex-col items-center justify-center group"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 96px"
                  priority={idx < 12}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;