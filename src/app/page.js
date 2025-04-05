import { Hero } from "@/components/sections/hero";
import { Integrations } from "@/components/sections/integrations";
import { Resources } from "@/components/sections/Resource";
import FeaturesSection from "@/components/sections/features-section";

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
