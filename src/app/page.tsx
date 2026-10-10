import { Hero } from "@/components/organisms/Hero";
import { Marquee } from "@/components/organisms/Marquee";
import { ServicesList } from "@/components/organisms/ServicesList";
import { Showcase } from "@/components/organisms/Showcase";
import { Process } from "@/components/organisms/Process";
import { Industries } from "@/components/organisms/Industries";
import { Faq } from "@/components/organisms/Faq";
import { CtaBand } from "@/components/organisms/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesList />
      <Showcase />
      <Process />
      <Industries />
      <Faq />
      <CtaBand />
    </>
  );
}
