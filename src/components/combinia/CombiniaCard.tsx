import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { combinia } from '../../data/portfolio';

export function CombiniaCard() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const covers = gsap.utils.toArray<HTMLElement>('[data-cover]', root.current);
      gsap.set(covers, { autoAlpha: 0 });
      gsap.set(covers[0], { autoAlpha: 1 });

      // Fundido en bucle: cada portada se queda ~2.6 s y se funde durante 1.6 s
      const tl = gsap.timeline({ repeat: -1 });
      covers.forEach((cover, i) => {
        const next = covers[(i + 1) % covers.length];
        tl.to(cover, { autoAlpha: 0, duration: 1.6, ease: 'sine.inOut' }, '+=2.6')
          .to(next, { autoAlpha: 1, duration: 1.6, ease: 'sine.inOut' }, '<');
      });

      gsap.to('[data-float]', { y: -10, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    });
  }, { scope: root });

  return (
    <article
      ref={root}
      data-reveal
      className="group flex flex-wrap overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-accent"
    >
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5 p-12">
        <span className="flex items-center gap-2 self-start rounded border border-accent px-2.5 py-1.5 font-mono text-xs text-accent">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
          PROYECTO PERSONAL · DESTACADO
        </span>
        <h3 className="text-[40px] font-bold tracking-tight">{combinia.name}</h3>
        <p className="text-[17px] leading-relaxed text-code">{combinia.tagline}</p>
        <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
          {combinia.features.map((f) => (
            <li key={f} className="flex gap-2.5">
              <span aria-hidden="true" className="font-mono text-accent">→</span>{f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 font-mono text-[13px] text-code">
          {combinia.stack.map((t) => (
            <span key={t} className="rounded bg-chip px-2.5 py-1.5 transition-colors hover:bg-accent hover:text-ink">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#combinia-tour" className="btn-primary text-sm">Recorrer la app ↓</a>
          <a href={combinia.storeUrl} className="btn-ghost text-sm">Descargar app →</a>
        </div>
      </div>

      <div className="dot-grid flex min-h-[420px] min-w-0 flex-[1.3_1_480px] items-center justify-center bg-panel-2 px-6 py-10">
        <div data-float className="relative aspect-[1200/795] w-full max-w-[640px]">
          {combinia.covers.map((c, i) => (
            <img
              key={c.src}
              data-cover
              src={c.src}
              alt={c.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-contain ${i === 0 ? '' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
