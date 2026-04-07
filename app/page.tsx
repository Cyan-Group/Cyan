import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Dynamically import below-fold components to reduce initial JS bundle
// This cuts ~100-150KB from the critical path and dramatically reduces TBT
const About = dynamic(() => import("@/components/About"));
const ArfajCampaign = dynamic(() => import("@/components/ArfajCampaign"));
const Services = dynamic(() => import("@/components/Services"));
const Subsidiaries = dynamic(() => import("@/components/Subsidiaries"));
const Partners = dynamic(() => import("@/components/Partners"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <ArfajCampaign />
      <Services />
      <Subsidiaries />
      <Partners />
      <Portfolio />
    </div>
  );
}
