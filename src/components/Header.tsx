import { profile } from '../data/portfolio';
import { useClock } from '../hooks/useClock';

const nav = [
  { href: '#proyectos', label: './proyectos' },
  { href: '#experiencia', label: './experiencia' },
  { href: '#stack', label: './stack' },
];

export function Header() {
  const time = useClock(profile.timezone);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5">
        <div className="flex flex-wrap items-center gap-5">
          <a href="#inicio" className="font-mono text-base font-bold">
            roberto<span className="text-accent">.dev</span>
          </a>
          <span className="flex items-center gap-2 font-mono text-xs text-dim">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent animate-pulse-dot" />
            GYE {time}
          </span>
        </div>
        <nav aria-label="Principal" className="flex flex-wrap gap-2 font-mono text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="p-3 text-muted transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary px-4 py-3 text-sm">contacto</a>
        </nav>
      </div>
    </header>
  );
}
