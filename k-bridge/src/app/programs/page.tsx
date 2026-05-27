import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProgramsHero } from "@/components/sections/programs/ProgramsHero";
import { HowWeSupport } from "@/components/sections/programs/HowWeSupport";

export const metadata = {
  title: "Programs & Pathways | K-BRIDGE",
  description:
    "Explore academic programs and the visa pathway from your first Korean class to long-term residency in Korea.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsHero />
        <HowWeSupport />
        {/* Pathway, Support, Partners sections will be added next */}
      </main>
      <Footer />
    </>
  );
}
