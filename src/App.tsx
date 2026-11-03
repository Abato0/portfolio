import { useEffect, useRef } from 'react';
import { ScrollTrigger } from './lib/gsap';
import { useReveal } from './hooks/useReveal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Stats } from './components/Stats';
import { SectionHeading } from './components/SectionLabel';
import { CombiniaCard } from './components/combinia/CombiniaCard';
import { TourCarousel } from './components/combinia/TourCarousel';
import { Gallery } from './components/combinia/Gallery';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { Contact } from './components/Contact';
import { stackMarquee } from './data/portfolio';

export default function App() {
  const main = useRef<HTMLElement>(null);
  useReveal(main);

  // Las imágenes cambian la altura de la página: recalcula los ScrollTriggers al terminar de cargar
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <>
      <Header />
      <main ref={main}>
        <Hero />
        <Marquee className="border-t border-line py-[18px] font-mono text-[15px] text-dim" label="Tecnologías">
          {stackMarquee.map((t) => (
            <span key={t} className="flex items-center gap-10 pr-10 whitespace-nowrap">
              {t}<span className="text-accent">/</span>
            </span>
          ))}
        </Marquee>
        <Stats />
        <section id="proyectos" className="container-x flex flex-col gap-10 py-24">
          <SectionHeading index="01 / proyectos" title="Lo que he construido" />
          <CombiniaCard />
          <TourCarousel />
        </section>
        <Gallery />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
