import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

type Props = { children: ReactNode; duration?: number; reverse?: boolean; className?: string; label?: string };

export function Marquee({ children, duration = 30, reverse = false, className = '', label }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      tween.current = gsap.fromTo(
        track.current,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration, ease: 'none', repeat: -1 },
      );
    });
  }, { scope: track, dependencies: [duration, reverse] });

  const ease = (to: number) =>
    tween.current && gsap.to(tween.current, { timeScale: to, duration: 0.6, ease: 'power2.out' });

  return (
    <div
      aria-label={label}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => ease(0)}
      onMouseLeave={() => ease(1)}
    >
      <div ref={track} className="flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
