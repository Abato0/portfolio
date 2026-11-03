import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { stats } from '../data/portfolio';

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-count]', root.current).forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        el.textContent = '0+';
        gsap.to(obj, {
          v: target, duration: 1.2, ease: 'power2.out', snap: { v: 1 },
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => { el.textContent = `${obj.v}+`; },
        });
      });
    });
  }, { scope: root });

  return (
    <section ref={root} aria-label="Resumen" className="border-y border-line">
      <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 py-8">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="flex flex-col gap-1.5">
            <span data-count={s.countTo} className="font-mono text-[32px] font-bold">{s.value}</span>
            <span className="text-sm text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
