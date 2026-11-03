import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';
import { experience } from '../data/portfolio';
import { SectionHeading } from './SectionLabel';

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('[data-line]', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '[data-timeline]', start: 'top 75%', end: 'bottom 60%', scrub: 0.6 },
      });
    });
  }, { scope: root });

  return (
    <section id="experiencia" ref={root} className="container-x flex flex-col gap-10 pt-8 pb-24">
      <SectionHeading index="02 / git log --experiencia" title="Experiencia" />
      <div data-timeline className="relative flex flex-col gap-10 pl-8">
        <span aria-hidden="true" className="absolute top-0 left-0 h-full w-px bg-line-2" />
        <span data-line aria-hidden="true" className="absolute top-0 left-0 h-full w-px origin-top bg-accent" />
        {experience.map((job) => (
          <div key={job.title} data-reveal className="relative flex flex-wrap gap-x-8 gap-y-2">
            <span
              aria-hidden="true"
              className={`absolute top-1 -left-[39px] size-[13px] rounded-full
                ${job.current ? 'bg-accent animate-pulse-dot' : 'border border-[#5A6461] bg-ink'}`}
            />
            <p className="flex-[0_0_220px] font-mono text-sm text-dim">{job.period}</p>
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-2">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
