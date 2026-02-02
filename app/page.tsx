import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Subsidiaries from "@/components/Subsidiaries";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Services />
      <Subsidiaries />
      <Partners />
      <Portfolio />
    </div>
  );
}
