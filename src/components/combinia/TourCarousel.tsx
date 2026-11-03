import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { tourScreens } from '../../data/portfolio';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const SLIDE = 260;
const GAP = 24;
const STEP = SLIDE + GAP;

export function TourCarousel() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const instant = useRef(true);            // el primer posicionamiento no se anima
  const swipeX = useRef<number | null>(null);
  const reduced = usePrefersReducedMotion();

  const N = tourScreens.length;
  const slides = [tourScreens[N - 1], ...tourScreens, tourScreens[0], tourScreens[1]];
  const [pos, setPos] = useState(1);
  const [auto, setAuto] = useState(true);
  const active = (pos - 1 + N) % N;

  const goTo = (p: number, user = false) => {
    if (user) setAuto(false);
    setPos(Math.max(0, Math.min(N + 1, p)));
  };
  const next = (user = false) => goTo(pos + 1, user);
  const prev = (user = false) => goTo(pos - 1, user);

  // Animación de la pista y de cada diapositiva
  useGSAP(() => {
    const els = gsap.utils.toArray<HTMLElement>('[data-slide]', track.current);
    const duration = instant.current || reduced ? 0 : 0.9;
    instant.current = false;

    const tl = gsap.timeline({ defaults: { duration, ease: 'power3.inOut', overwrite: 'auto' } });
    tl.to(track.current, { x: -(SLIDE / 2 + pos * STEP) }, 0);
    els.forEach((el, i) =>
      tl.to(el, { scale: i === pos ? 1 : 0.84, opacity: i === pos ? 1 : 0.35 }, 0),
    );

    // Salto invisible desde los clones a la diapositiva real
    tl.eventCallback('onComplete', () => {
      if (pos === 0) { instant.current = true; setPos(N); }
      if (pos === N + 1) { instant.current = true; setPos(1); }
    });
  }, { dependencies: [pos, reduced], scope: root });

  // Autoplay
  useEffect(() => {
    if (!auto || reduced) return;
    const id = setInterval(() => setPos((p) => Math.min(p + 1, N + 1)), 4500);
    return () => clearInterval(id);
  }, [auto, reduced, N]);

  // Swipe en el móvil
  const onPointerDown = (e: PointerEvent) => { swipeX.current = e.clientX; };
  const onPointerUp = (e: PointerEvent) => {
    if (swipeX.current === null) return;
    const dx = e.clientX - swipeX.current;
    swipeX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)(true);
  };

  return (
    <div id="combinia-tour" ref={root} className="flex flex-wrap items-stretch gap-8 pt-6">
      {/* Lista de comandos */}
      <div data-reveal className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
        <p className="font-mono text-sm text-accent">01.1 / combinia --tour</p>
        <h3 className="text-[32px] font-bold tracking-tight">Recorrido por la app</h3>
        <div className="flex flex-col gap-2">
          {tourScreens.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.cmd}
                type="button"
                aria-pressed={on}
                onClick={() => goTo(i + 1, true)}
                className={`flex flex-col rounded-lg border px-4 py-3.5 text-left transition-colors duration-500 hover:border-accent
                  ${on ? 'border-accent bg-panel-2' : 'border-line bg-transparent'}`}
              >
                <span className={`font-mono text-sm transition-colors duration-500 ${on ? 'text-accent' : 'text-muted'}`}>
                  {s.cmd}
                </span>
                {/* Despliegue suave de la descripción con el truco de grid-rows */}
                <span
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(.65,0,.35,1)]
                    ${on ? 'mt-1.5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}
                >
                  <span className="overflow-hidden text-sm leading-relaxed text-muted">{s.caption}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Carrusel */}
      <div
        data-reveal
        role="region"
        aria-roledescription="carrusel"
        aria-label="Pantallas de Combinia"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') next(true);
          if (e.key === 'ArrowLeft') prev(true);
        }}
        className="dot-grid flex min-w-0 flex-[1_1_420px] flex-col gap-6 overflow-hidden rounded-2xl border border-line bg-panel pt-10 pb-8"
      >
        <div
          className="relative h-[470px] touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            ref={track}
            className="absolute top-0 left-1/2 flex h-full items-center gap-6"
            style={{ transform: `translateX(${-(SLIDE / 2 + STEP)}px)` }}
          >
            {slides.map((s, i) => {
              const isClone = i === 0 || i > N;
              return (
                <button
                  key={`${s.src}-${i}`}
                  data-slide
                  type="button"
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                  aria-label={isClone ? undefined : `Pantalla: ${s.label}`}
                  onClick={() => goTo(i === N + 2 ? 2 : i, true)}
                  className="w-[260px] shrink-0 cursor-pointer"
                  style={{ opacity: i === 1 ? 1 : 0.35, transform: `scale(${i === 1 ? 1 : 0.84})` }}
                >
                  <img
                    src={s.src}
                    alt={isClone ? '' : `Combinia: ${s.label}`}
                    draggable={false}
                    className="block h-[452px] w-[260px] drop-shadow-[0_18px_30px_rgba(0,0,0,.45)]"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 px-6">
          <CarouselArrow label="Pantalla anterior" onClick={() => prev(true)}>←</CarouselArrow>
          <div aria-hidden="true" className="flex items-center gap-1.5">
            {tourScreens.map((s, i) => (
              <span
                key={s.cmd}
                className={`block h-1.5 rounded-full transition-all duration-600 ease-[cubic-bezier(.65,0,.35,1)]
                  ${i === active ? 'w-6 bg-accent' : 'w-1.5 bg-line-2'}`}
              />
            ))}
          </div>
          <CarouselArrow label="Pantalla siguiente" onClick={() => next(true)}>→</CarouselArrow>
        </div>

        <div className="flex items-center justify-center gap-4 font-mono text-[13px] text-dim">
          <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
          <button
            type="button"
            onClick={() => setAuto((a) => !a)}
            className="rounded-md border border-line-2 px-3.5 py-3 text-code transition-colors hover:border-accent hover:text-accent"
          >
            {auto ? '❚❚ pausar' : '▶ reproducir'}
          </button>
        </div>
      </div>
    </div>
  );
}

function CarouselArrow({ label, onClick, children }: { label: string; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-line-2 text-lg text-code transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </button>
  );
}
