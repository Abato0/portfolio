import { useRef, type MouseEvent } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { profile } from '../data/portfolio';

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const mail = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP({ scope: root });

  const onMove = contextSafe((e: MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !mail.current) return;
    const r = mail.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    gsap.to(mail.current, { x, y, duration: 0.4, ease: 'power3.out' });
  });
  const onLeave = contextSafe(() => {
    gsap.to(mail.current, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
  });

  return (
    <section id="contacto" ref={root} className="container-x flex flex-col gap-7 pt-32 pb-16">
      <p data-reveal className="font-mono text-sm text-accent">04 / contacto</p>
      <h2 data-reveal className="text-[clamp(40px,6vw,80px)] leading-[1.02] font-bold tracking-[-0.03em]">
        ¿Tienes un proyecto?<br />Hablemos<span className="cursor-block" aria-hidden="true" />
      </h2>
      <div className="self-start p-4 -m-4" onMouseMove={onMove} onMouseLeave={onLeave}>
        <a
          ref={mail}
          data-reveal
          href={`mailto:${profile.email}`}
          className="inline-block bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0%_2px] bg-left-bottom bg-no-repeat
                     pb-1.5 font-mono text-[clamp(18px,2.4vw,28px)] text-accent transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
        >
          {profile.email}
        </a>
      </div>
      <footer className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-4 border-t border-line pt-12 text-sm text-dim">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
        <div className="flex gap-6">
          <a href={profile.links.github} className="text-muted hover:text-accent">GitHub</a>
          <a href={profile.links.linkedin} className="text-muted hover:text-accent">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
}
