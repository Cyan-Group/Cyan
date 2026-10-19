/**
 * Markdown representations of Cyan Printing pages for AI Agent negotiation (Accept: text/markdown)
 */

export function getMarkdownContent(pathname: string): string | null {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  if (normalizedPath === "/") {
    return `# Cyan Printing | مطبعة سيان — Kuwait & Gulf Region

> Professional Printing, Custom Packaging, Boxes, Bags, Cups, and Corporate Solutions.
> Serving businesses across Kuwait and the GCC with premium offset and digital printing.

---

## 🏢 Company Overview
- **Name**: Cyan Printing (مطبعة سيان)
- **Primary Market**: Kuwait & Gulf Region (GCC)
- **Headquarters**: Kuwait
- **Official Website**: https://cyanprintkw.com
- **Languages Supported**: Arabic (العربية), English

## 📞 Contact & Direct Inquiries
- **WhatsApp**: [+965 4144 1200](https://wa.me/96541441200)
- **Direct Phone**: +965 4144 1200
- **Email**: info@cyanprintkw.com
- **Customer Service Hours**: Sunday – Thursday, 9:00 AM – 9:00 PM (Kuwait Time / UTC+3)

---

## 📦 Core Printing & Packaging Services

### 1. Boxes & Cartons (العلب والكرتون)
- Custom-made rigid boxes, corrugated cartons, luxury gift boxes, perfume packaging, sweet and pastry boxes.
- Full customization: dimensions, thickness, embossed foil stamping, spot UV, matte/gloss lamination.
- High durability with food-grade and luxury finish options.

### 2. Paper Bags (الأكياس الورقية)
- Premium shopping bags for retail, restaurants, and corporate events.
- Heavy-duty kraft and art paper with reinforced twisted, ribbon, or die-cut handles.
- High-definition CMYK and Pantone color reproduction.

### 3. Paper Cups (الأكواب الورقية)
- Single-wall and double-wall insulated paper cups for hot and cold beverages.
- Custom branded for specialty coffee shops, juice bars, and restaurants.
- Leak-proof, food-safe certified inner lining.

### 4. Packaging Materials (مستلزمات التغليف)
- Branded tissue paper / wrapping paper, customized self-adhesive stickers & roll labels.
- Custom printed sealing tapes and branded satin / grosgrain ribbons.

### 5. Corporate Printing (مطبوعات الشركات)
- Business cards (luxury textured paper, raised UV, hot foil).
- Company presentation folders, letterheads, envelopes, and multi-part invoice / receipt vouchers.

---

## 🤝 Subsidiaries & Divisions

### 1. Cyan Advertising (سيان للدعاية والإعلان)
- **URL**: https://cyanprintkw.com/cyan-advertising
- **Specialty**: Exhibition organization, custom booth fabrication, 3D indoor/outdoor signage, event branding, interior and retail decoration.

### 2. Mansi Line (منسي لاين)
- **URL**: https://cyanprintkw.com/mansi-line
- **Specialty**: Card holders, custom acrylic products, direct-to-object UV printing, custom DTF textile printing, promotional gifts, customized t-shirts and apparel.

---

## 📋 How to Request a Quote
To receive an accurate and fast quotation, please provide the following details:
1. **Item Type**: (e.g. Perfume Box, Paper Bag, Coffee Cup, Stickers)
2. **Dimensions**: Length × Width × Height (in cm or inches)
3. **Quantity**: (Minimum orders vary by product, starting from 100 to 10,000+ units)
4. **Material & Finishing**: (e.g., Kraft paper, Art paper, Gold foil stamping, Spot UV)
5. **Artwork / Design**: (Ready print file in AI/PDF, or design service needed)

Direct Quote Channel: Contact our sales team immediately on WhatsApp at https://wa.me/96541441200.

---

## 🤖 AI Agent & Machine Discovery Resources
- **RFC 9727 API Catalog**: https://cyanprintkw.com/.well-known/api-catalog
- **ARD Capability Manifest**: https://cyanprintkw.com/.well-known/ai-catalog.json
- **MCP Server Card**: https://cyanprintkw.com/.well-known/mcp/server-card.json
- **Agent Skills Discovery Index**: https://cyanprintkw.com/.well-known/agent-skills/index.json
- **Agent Authentication & Registration (auth.md)**: https://cyanprintkw.com/auth.md
- **OAuth Protected Resource Metadata**: https://cyanprintkw.com/.well-known/oauth-protected-resource
- **OpenAPI 3.1 Specification**: https://cyanprintkw.com/api/openapi.json
- **Sitemap**: https://cyanprintkw.com/sitemap.xml
`;
  }

  if (normalizedPath === "/cyan-advertising") {
    return `# Cyan Advertising | سيان للدعاية والإعلان

> Creative Advertising Solutions, Exhibition Booths, Signage & Interior Decoration in Kuwait.
> A subsidiary division of Cyan Group.

---

## 🎨 Overview & Expertise
Cyan Advertising is specialized in transforming corporate brand presence into physical installations, high-impact signage, and exhibition environments across Kuwait.

## 🛠️ Main Services
1. **Exhibition Organization & Custom Booth Construction**: Turnkey booth design, 3D modular fabrication, lighting, and on-site assembly.
2. **Indoor & Outdoor Signage**: 3D acrylic signs, illuminated channel letters, neon flex, backlit totems, stainless steel letters.
3. **Interior Commercial Decoration**: Wall murals, acoustic panels, glass frosting, POS displays, retail store fixtures.
4. **Vehicle & Fleet Branding**: High-grade cast vinyl wrapping with UV protection.

## 📞 Inquiries & Contact
- **Main Office**: Kuwait
- **WhatsApp**: [+965 4144 1200](https://wa.me/96541441200)
- **Email**: info@cyanprintkw.com
- **Website**: https://cyanprintkw.com/cyan-advertising
`;
  }

  if (normalizedPath === "/mansi-line") {
    return `# Mansi Line | منسي لاين

> Promotional Gifts, Acrylic Fabrications, UV Printing, DTF Textiles & Custom Merchandise in Kuwait.
> A subsidiary division of Cyan Group.

---

## 🎁 Overview & Expertise
Mansi Line delivers personalized merchandise, corporate promotional gifts, and precision fabrications for businesses, events, and individuals.

## 🛠️ Main Services
1. **Card Holders & Badge Accessories**: Custom lanyards, executive leatherette and acrylic badge holders.
2. **Custom Acrylic Fabrication**: Desk organizers, trophy awards, counter displays, menu stands, protective cases.
3. **Direct UV Printing**: High-resolution durable color printing on plastic, metal, wood, acrylic, and glass.
4. **DTF (Direct to Film) Textile Printing**: Vibrant, washable apparel customization for t-shirts, hoodies, tote bags, caps.
5. **Precision Die-Cut Stickers**: Waterproof vinyl stickers, gold/silver foil labels, dome 3D stickers.

## 📞 Inquiries & Contact
- **Main Office**: Kuwait
- **WhatsApp**: [+965 4144 1200](https://wa.me/96541441200)
- **Email**: info@cyanprintkw.com
- **Website**: https://cyanprintkw.com/mansi-line
`;
  }

  return null;
}
