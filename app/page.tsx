import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Trusted />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <CTA />
    </main>
  );
}
