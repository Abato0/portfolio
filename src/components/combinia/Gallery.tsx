import { Marquee } from '../Marquee';
import { gallery } from '../../data/portfolio';

export function Gallery() {
  return (
    <Marquee reverse duration={80} label="Galería de pantallas de Combinia" className="pt-6 pb-10">
      {gallery.map((g) => (
        <img
          key={g.src}
          src={g.src}
          alt={g.alt}
          loading="lazy"
          className="mr-7 block h-[360px] w-[207px] drop-shadow-[0_18px_30px_rgba(0,0,0,.45)]
                     transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-3 hover:scale-[1.04]"
        />
      ))}
    </Marquee>
  );
}
