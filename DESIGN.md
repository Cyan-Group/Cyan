# Cyan Printing — Design System (`DESIGN.md`)

## 1. Design Philosophy & Brand Direction

Cyan Printing’s visual identity combines **expressive modern Arabic typography** with a **luminous, airy cyan-and-white palette** and **glassmorphism (frosted glass)** surfaces. The interface is engineered to feel modern, trustworthy, and effortless to navigate across both **Arabic (RTL)** and **English (LTR)** experiences.

Core principles:
- **Clarity & Luminosity**: Full-bleed gradients blending Cyan Primary Blue (`#009cdf`) into Complementary Aqua (`#9fffff`) paired with crisp white (`#ffffff`) typography and clean white content canvases.
- **Tactile Glassmorphism**: Translucent frosted-glass pills and cards (`backdrop-blur-md` / `backdrop-blur-xl`) with delicate white borders (`border-white/30`) that float naturally over brand gradients.
- **Expressive Arabic Typography**: Powered by the **Thmanyah Font Family** with OpenType Stylistic Alternates (`"salt" 1` — الأحرف المرسلة) enabled for Arabic text to deliver distinctive, calligraphic-inspired word endings.
- **Pill-Shaped Interactive Elements**: All primary and secondary Call-to-Action (CTA) buttons, navigation containers, and badges use full pill geometry (`rounded-full`) for a friendly, contemporary aesthetic.

---

## 2. Color Palette & Tokens

All brand colors are defined as CSS custom properties in [`app/globals.css`](./app/globals.css) and exposed to Tailwind CSS v4 via `@theme inline`.

### Core Brand Colors

| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Cyan** | `--primary` | `#009cdf` | Primary brand color, logo fill, primary CTA buttons, highlighted text, active states, and top gradient anchor. |
| **Pure White** | `--secondary` / `--background` | `#ffffff` | Primary surface background, Hero typography, inverse pill buttons, and card surfaces. |
| **Complementary Aqua** | `--complementary` | `#9fffff` | Bottom gradient anchor, icon badge accents, ambient glows, and interactive hover highlights. |
| **Deep Navy Ink** | `--foreground` | `#06283d` | High-contrast body and heading text on white/light backgrounds. |
| **Deep Brand Accent** | `--accent` | `#04243a` | Deep structural contrast token. |

### Signature Gradients

1. **Hero & Brand Section Gradient (Vertical)**
   ```css
   background: linear-gradient(180deg, #009cdf 0%, #9fffff 100%);
   ```
   Used on the primary Hero section (`components/Hero.tsx`) and subsidiary page Hero sections (`/cyan-advertising`, `/mansi-line`).

2. **Services Immersive Gradient**
   ```css
   background: linear-gradient(180deg, #009cdf 0%, #1eb4ea 55%, #9fffff 100%);
   ```
   Pairs with translucent frosted-glass cards (`bg-white/18 backdrop-blur-md border-white/35`).

3. **Footer Brand Gradient**
   ```css
   background: linear-gradient(180deg, #009cdf 0%, #007bb5 100%);
   ```

4. **Subtle Icon & Badge Tint Gradient**
   ```css
   background: linear-gradient(135deg, rgba(0, 156, 223, 0.1) 0%, rgba(159, 255, 255, 0.4) 100%);
   ```

---

## 3. Typography (`Thmanyah-Font-Family`)

### Font File Organization

Webfont files (`.woff2`) are stored in `public/fonts/thmanyah/` and loaded via `next/font/local` in [`app/layout.tsx`](./app/layout.tsx):

```text
public/fonts/thmanyah/
├── sans/
│   ├── thmanyahsans-Light.woff2       (300)
│   ├── thmanyahsans-Regular.woff2     (400)
│   ├── thmanyahsans-Medium.woff2      (500)
│   ├── thmanyahsans-Bold.woff2        (700)
│   └── thmanyahsans-Black.woff2       (900)
├── serif-display/
│   ├── thmanyahserifdisplay-Light.woff2   (300)
│   ├── thmanyahserifdisplay-Regular.woff2 (400)
│   ├── thmanyahserifdisplay-Medium.woff2  (500)
│   ├── thmanyahserifdisplay-Bold.woff2    (700)
│   └── thmanyahserifdisplay-Black.woff2   (900)
└── serif-text/
    ├── thmanyahseriftext-Light.woff2      (300)
    ├── thmanyahseriftext-Regular.woff2    (400)
    ├── thmanyahseriftext-Medium.woff2     (500)
    ├── thmanyahseriftext-Bold.woff2       (700)
    └── thmanyahseriftext-Black.woff2      (900)
```

### CSS Font Variables & OpenType Features

- **`--font-thmanyah-sans`**: Default typeface across the entire interface (headings, navigation, body copy, and buttons) for both Arabic and English.
- **`--font-thmanyah-display`**: Available via `.font-display` for editorial display treatments.
- **OpenType Stylistic Alternates (`"salt" 1`)**:
  - Enabled by default on Arabic text (`body { font-feature-settings: "salt" 1; }`) and disabled on English (`html[lang="en"] body { font-feature-settings: normal; }`).
  - Activates the signature Thmanyah extended terminal swashes (*الأحرف المرسلة*) on Arabic letters such as `ن`, `ك`, `ي`, `ب`, and `ف`.

### Typographic Scale

| Element | Size (Mobile -> Desktop) | Weight | Line Height |
| :--- | :--- | :--- | :--- |
| **Hero Display (`h1`)** | `text-5xl` -> `lg:text-[5.5rem]` | `700` (`font-bold`) | `1.22` |
| **Section Heading (`h2`)** | `text-3xl` -> `md:text-5xl` | `700` (`font-bold`) | `1.25` |
| **Card Title (`h3`)** | `text-2xl` | `700` (`font-bold`) | `1.35` |
| **Hero Lead Copy (`p`)** | `text-lg` -> `md:text-2xl` | `400` (`font-normal`) | `1.65` |
| **Body Copy (`p`)** | `text-base` -> `md:text-lg` | `400` (`font-normal`) | `1.7` |
| **Pill Navigation & CTAs** | `text-base` -> `md:text-xl` | `500` / `700` | `1.0` |

---

## 4. Glassmorphism & Surface Specifications

### 1. Floating Pill Navbar (`components/Header.tsx`)
- **Top State (Over Hero Gradient)**:
  - Header bar: `bg-transparent py-6`
  - Brand logo: White (`brightness-0 invert`)
  - Center navigation pill: `rounded-full bg-white/18 backdrop-blur-md border border-white/30 px-8 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.05)]`
  - Navigation links: `text-white hover:text-[#9fffff]`
  - Contact CTA button: `bg-white text-[#009cdf] hover:bg-[#9fffff] rounded-full px-7 py-2.5 font-bold`
- **Scrolled State (`window.scrollY > 40`)**:
  - Header bar: `bg-white/75 backdrop-blur-xl border-b border-[#009cdf]/15 shadow-[0_8px_30px_rgba(0,156,223,0.08)] py-3.5`
  - Brand logo: Primary Cyan (`#009cdf`)
  - Center navigation pill: `bg-[#009cdf]/8 border border-[#009cdf]/20`
  - Contact CTA button: `bg-[#009cdf] text-white hover:bg-[#0086bf] rounded-full`

### 2. Glassmorphic Service Cards (`components/Services.tsx`)
- Surface: `bg-white/18 backdrop-blur-md border border-white/35 rounded-3xl p-8`
- Hover state: `hover:bg-white/28 transition-all duration-300`
- Icon container: `bg-white text-[#009cdf] w-14 h-14 rounded-2xl shadow-sm`

### 3. Light Content Cards (`About`, `Subsidiaries`, `Portfolio`)
- Surface: `bg-white rounded-3xl border border-[#009cdf]/15 shadow-[0_8px_30px_rgba(0,156,223,0.06)]`
- Hover state: `hover:shadow-[0_16px_40px_rgba(0,156,223,0.14)] hover:-translate-y-1 transition-all duration-300`

---

## 5. Button System

All buttons use `rounded-full` pill geometry with smooth hover elevation (`hover:-translate-y-0.5 hover:scale-105 transition-all duration-300`):

- **Primary Brand CTA**:
  - `bg-[#009cdf] hover:bg-[#0086bf] text-white font-bold px-9 py-3.5 rounded-full shadow-lg shadow-[#009cdf]/30`
- **Secondary White CTA (on Gradient Backgrounds)**:
  - `bg-white hover:bg-[#f2ffff] text-[#009cdf] font-bold px-9 py-3.5 rounded-full shadow-lg shadow-black/5`
- **Tinted Aqua Pill (on Light Backgrounds)**:
  - `bg-[linear-gradient(90deg,#009cdf15_0%,#9fffff55_100%)] hover:bg-[#009cdf] text-[#009cdf] hover:text-white border border-[#009cdf]/20 rounded-full px-7 py-3 font-bold`
