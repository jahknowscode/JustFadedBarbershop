import { Instagram, Sparkles } from 'lucide-react';
import type { Barber } from '@/data/types';
import { useRouter } from '@/router';
import { Reveal } from './Reveal';

export function BarberCard({
  barber,
  delay = 0,
  variant = 'card',
}: {
  barber: Barber;
  delay?: number;
  variant?: 'card' | 'feature';
}) {
  const { navigate } = useRouter();

  if (variant === 'feature') {
    return (
      <Reveal delay={delay}>
        <article className="group relative overflow-hidden border border-ink-700 bg-ink-900">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={barber.image}
              alt={barber.name}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
          <div className="absolute bottom-0 w-full p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              {barber.title}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-50">
              {barber.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {barber.specialties.slice(0, 2).map((s) => (
                <span
                  key={s}
                  className="border border-ink-600 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-neutral-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col border border-ink-700 bg-ink-900 transition-all duration-500 hover:border-gold-500/40">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={barber.image}
            alt={barber.name}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400">
                {barber.experience} yrs experience
              </p>
            </div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex h-9 w-9 items-center justify-center border border-white/20 bg-ink-950/50 text-neutral-200 backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-300"
              aria-label={`${barber.name} on Instagram`}
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {barber.title}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-50">{barber.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{barber.bio}</p>

          <div className="mt-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.5} />
              Specialties
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {barber.specialties.map((s) => (
                <span
                  key={s}
                  className="border border-ink-600 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-neutral-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('booking')}
            className="mt-6 w-full border border-ink-600 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-200 transition-all hover:border-gold-400 hover:text-gold-300"
          >
            Book with {barber.name.split(' ')[0]}
          </button>
        </div>
      </article>
    </Reveal>
  );
}
