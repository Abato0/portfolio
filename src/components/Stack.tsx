import { stackGroups } from '../data/portfolio';
import { SectionHeading } from './SectionLabel';

export function Stack() {
  return (
    <section id="stack" className="border-y border-line bg-panel">
      <div className="container-x flex flex-col gap-10 py-24">
        <SectionHeading index="03 / stack" title="Herramientas" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 font-mono">
          {stackGroups.map((g) => (
            <div key={g.title} data-reveal className="flex flex-col items-start gap-2.5">
              <p className="mb-1.5 text-[13px] text-dim">{g.title}</p>
              {g.items.map((item) => (
                <span key={item} className="transition duration-200 hover:translate-x-1.5 hover:text-accent">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
