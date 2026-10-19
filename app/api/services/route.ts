import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      company: {
        name: "Cyan Printing | مطبعة سيان",
        location: "Kuwait",
        whatsapp: "+965 4144 1200",
        phone: "+965 4144 1200",
        email: "info@cyanprintkw.com",
        website: "https://cyanprintkw.com",
      },
      services: [
        {
          id: "boxes",
          name_ar: "العلب والكرتون",
          name_en: "Boxes & Cartons",
          description_ar: "علب مخصصة لكافة المنتجات (عطور، حلويات، هدايا) بتصاميم ومقاسات متنوعة.",
          description_en: "Custom rigid boxes, corrugated packaging for perfumes, sweets, and luxury gifts.",
        },
        {
          id: "bags",
          name_ar: "الأكياس الورقية",
          name_en: "Paper Bags",
          description_ar: "أكياس ورقية فاخرة بطباعة عالية الجودة ومقابض متينة لتعزيز علامتك التجارية.",
          description_en: "Luxury branded paper shopping bags with premium reinforced handles.",
        },
        {
          id: "cups",
          name_ar: "الأكواب الورقية",
          name_en: "Paper Cups",
          description_ar: "أكواب للمقاهي والمطاعم بطبقة عازلة وتصاميم مميزة تناسب جميع المشروبات.",
          description_en: "Insulated single and double-wall paper cups for coffee shops and restaurants.",
        },
        {
          id: "packaging",
          name_ar: "مستلزمات التغليف",
          name_en: "Packaging Materials",
          description_ar: "ورق لف، استيكرات، وشرائط مخصصة لإضفاء لمسة نهائية احترافية على منتجك.",
          description_en: "Custom tissue paper, self-adhesive stickers, roll labels, and branded ribbons.",
        },
        {
          id: "corporate",
          name_ar: "مطبوعات الشركات",
          name_en: "Corporate Printing",
          description_ar: "كروت شخصية، فولدرات، دفاتر فواتير، وكل ما تحتاجه شركتك من مطبوعات ورقية.",
          description_en: "Business cards, presentation folders, corporate stationery, and invoice books.",
        },
      ],
      subsidiaries: [
        {
          name_ar: "سيان للدعاية والإعلان",
          name_en: "Cyan Advertising",
          url: "https://cyanprintkw.com/cyan-advertising",
          focus: "Exhibitions, custom booth fabrication, 3D signage, indoor/outdoor advertising.",
        },
        {
          name_ar: "منسي لاين",
          name_en: "Mansi Line",
          url: "https://cyanprintkw.com/mansi-line",
          focus: "Badge & card holders, custom acrylics, UV printing, DTF textiles, promotional merchandise.",
        },
      ],
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
