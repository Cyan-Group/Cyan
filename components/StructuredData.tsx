import Script from "next/script";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cyan Printing | مطبعة سيان",
    "alternateName": "Cyan Printing",
    "image": "https://cyanprintkw.com/Logo.svg", // Update with your actual domain
    "telephone": "+96541441200",
    "url": "https://cyanprintkw.com", // Update with your actual domain
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KW",
      "addressLocality": "Kuwait",
      "addressRegion": "Kuwait"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.3759",
      "longitude": "47.9774"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Kuwait"
    },
    "sameAs": [
      "https://instagram.com/cyan.print",
      "https://threads.net/@cyan.print",
      "https://www.facebook.com/profile.php?id=100092204716363",
      "https://tiktok.com/@cyan.print"
    ],
    "description": "خدمات طباعة عالية الجودة في الكويت: طباعة بوكسات، أكياس، وتغليف احترافي للشركات والأفراد. مطبعة سيان - شريكك الموثوق في الطباعة والتغليف.",
    "serviceType": [
      "Printing Services",
      "Packaging Solutions",
      "Box Printing",
      "Bag Printing",
      "Digital Printing",
      "Offset Printing"
    ]
  };

  return (
    <Script
      id="structured-data-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
