import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { GlobalPresence } from "@/components/sections/about/GlobalPresence";

export const metadata = {
  title: "About Us | K-BRIDGE",
  description:
    "K-BRIDGE is a Korean study-abroad consultancy founded by international alumni. With offices in Hanoi, Hai Duong, and Qingdao, we support students from their home country all the way to Korean campuses.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <GlobalPresence />
        {/* Global Presence, Memberships, Why K-BRIDGE next */}
      </main>
      <Footer />
    </>
  );
}
