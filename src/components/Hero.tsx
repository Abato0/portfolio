import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';

const S = ({ children }: { children: string }) => <span className="text-string">"{children}"</span>;

const codeLines = [
  <span className="text-dim">// disponible en Guayaquil · remoto</span>,
  <><span className="text-accent">const</span> roberto = {'{'}</>,
  <>  rol: <S>Full Stack Developer</S>,</>,
  <>  experiencia: <S>5+ años</S>,</>,
  <>  backend: [<S>Node.js</S>, <S>GraphQL</S>, <S>WebSockets</S>],</>,
  <>  frontend: [<S>React</S>, <S>Next.js</S>, <S>React Native</S>],</>,
  <>  datos: [<S>PostgreSQL</S>, <S>PostGIS</S>, <S>MongoDB</S>],</>,
  <>{'};'}</>,
  <> </>,
  <span className="text-dim">$ npm run deploy</span>,
  <><span className="text-accent">✓</span> build listo · servicios en línea</>,
  <>$ <span className="cursor-block" aria-hidden="true" /></>,
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const typed = useTypewriter(profile.roles);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero]', { y: 28, autoAlpha: 0, duration: 0.8, stagger: 0.12 })
        .from('[data-code]', { x: -10, autoAlpha: 0, duration: 0.35, stagger: 0.18 }, '-=0.3');
    });
  }, { scope: root });

  return (
    <section id="inicio" ref={root} className="container-x flex flex-wrap items-center gap-14 pt-24 pb-20">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
        <p data-hero className="font-mono text-[15px] text-accent">~/guayaquil $ whoami</p>
        <h1
          data-hero
          aria-label={`${profile.name}, ${profile.roles[0]}`}
          className="min-h-[2.2em] text-[clamp(40px,5.4vw,68px)] leading-[1.06] font-bold tracking-[-0.03em]"
        >
          {profile.name}.<br />
          <span className="text-accent">{typed}</span>
          <span className="cursor-block" aria-hidden="true" />
        </h1>
        <p data-hero className="max-w-[560px] text-[19px] leading-relaxed text-muted">{profile.summary}</p>
        <div data-hero className="flex flex-wrap gap-3 pt-2">
          <a href="#proyectos" className="btn-primary group">
            Ver proyectos <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href={profile.links.cv} download className="btn-ghost group">
            Descargar CV <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>

      <div data-hero className="min-w-0 flex-[1_1_420px] overflow-hidden rounded-xl border border-line bg-panel">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3.5">
          {[0, 1, 2].map((i) => <span key={i} aria-hidden="true" className="size-3 rounded-full bg-line-2" />)}
          <span className="ml-2 font-mono text-[13px] text-dim">perfil.ts</span>
        </div>
        <div className="overflow-x-auto p-6 font-mono text-sm leading-[1.8] text-code">
          {codeLines.map((line, i) => (
            <span key={i} data-code className="block whitespace-pre">{line}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
