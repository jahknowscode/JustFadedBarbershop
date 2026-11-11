import { Clock, ArrowRight } from 'lucide-react';
import type { Service } from '@/data/types';
import { useRouter } from '@/router';
import { Reveal } from './Reveal';

export function ServiceCard({
  service,
  delay = 0,
  onBook,
}: {
  service: Service;
  delay?: number;
  onBook?: (service: Service) => void;
}) {
  const { navigate } = useRouter();

  return (
    <Reveal delay={delay}>
      <article className="group relative flex h-full flex-col border border-ink-700 bg-ink-900 p-7 transition-all duration-500 hover:border-gold-500/50 hover:bg-ink-800">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {service.category}
          </span>
          <span className="font-serif text-2xl font-semibold text-neutral-50">
            ${service.price}
          </span>
        </div>

        <h3 className="mt-5 font-serif text-2xl font-semibold text-neutral-50">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
          {service.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-ink-700 pt-5">
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
            <Clock className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
            {service.duration} min
          </span>
          <button
            onClick={() => (onBook ? onBook(service) : navigate('booking'))}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 transition-colors group-hover:text-gold-300"
          >
            Book
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </button>
        </div>
      </article>
    </Reveal>
  );
}
