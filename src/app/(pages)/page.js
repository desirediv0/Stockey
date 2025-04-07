import { Integrations } from "@/components/sections/integrations";
import { Resources } from "@/components/sections/Resource";
import FeaturesSection from "@/components/sections/features-section";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Integrations />
      <Resources />
    </>
  );
}
