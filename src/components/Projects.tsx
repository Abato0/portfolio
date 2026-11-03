import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section aria-label="Más proyectos" className="container-x flex flex-col gap-8 pt-12 pb-24">
      <div data-reveal className="flex flex-col gap-3">
        <p className="font-mono text-sm text-accent">01.2 / más proyectos</p>
        <h3 className="text-[32px] font-bold tracking-tight">Experiencia profesional en producto</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            data-reveal
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-accent"
          >
            {/* Proyecto de empresa: visual genérico de terminal en lugar de capturas del producto */}
            <div aria-hidden="true" className="dot-grid flex h-[180px] flex-col justify-center gap-1.5 bg-panel-2 px-7 font-mono text-[13px] leading-relaxed">
              <span className="text-code">
                <span className="text-accent">$</span> ./{p.cmd} --info
              </span>
              <span className="text-dim">tipo: <span className="text-string">"{p.kind}"</span></span>
              <span className="text-dim">código: <span className="text-string">"privado"</span></span>
              <span className="text-code">$ <span className="cursor-block" /></span>
            </div>
            <div className="flex flex-col gap-3 p-7">
              <p className="font-mono text-xs text-dim">para {p.client}</p>
              <h4 className="text-[22px] font-bold">{p.name}</h4>
              <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>
              <p className="font-mono text-xs text-accent">{p.tags}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
