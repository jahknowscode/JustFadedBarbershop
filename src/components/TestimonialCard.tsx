import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/types';
import { StarRating } from './Brand';
import { Reveal } from './Reveal';

export function TestimonialCard({
  testimonial,
  delay = 0,
}: {
  testimonial: Testimonial;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <figure className="flex h-full flex-col border border-ink-700 bg-ink-900 p-7">
        <Quote className="h-8 w-8 text-gold-400/60" strokeWidth={1} />
        <blockquote className="mt-5 flex-1 text-base leading-relaxed text-neutral-300">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4 border-t border-ink-700 pt-5">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-ink-600">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div>
            <p className="font-serif text-lg font-semibold text-neutral-50">{testimonial.name}</p>
            <p className="text-xs uppercase tracking-widest text-neutral-500">{testimonial.role}</p>
            <StarRating rating={testimonial.rating} className="mt-1.5" />
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
