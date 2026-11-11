import { Scissors, Star } from 'lucide-react';
import { BUSINESS } from '@/data/content';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center border border-gold-400 text-gold-400">
        <Scissors className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="leading-none">
        <span className="block font-serif text-lg font-semibold tracking-wide text-neutral-50">
          JUST <span className="text-gold-400">FADED</span>
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          Barbershop
        </span>
      </div>
    </div>
  );
}

export function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-gold-400 text-gold-400' : 'text-neutral-700'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-neutral-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {center && <div className="hairline mx-auto mt-6" />}
      {!center && <div className="hairline mt-6" />}
      {description && (
        <p className="mt-6 text-base leading-relaxed text-neutral-400">{description}</p>
      )}
    </div>
  );
}

export { BUSINESS };
