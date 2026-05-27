import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutBridge } from '@/components/sections/AboutBridge';
import { Programs } from '@/components/sections/Programs';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutBridge />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
