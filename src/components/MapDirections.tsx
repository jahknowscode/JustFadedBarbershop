import { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, ChevronDown, ExternalLink } from 'lucide-react';
import { BUSINESS } from '@/data/content';

/**
 * Renders the shop address as a clickable element that opens a small
 * popover with Google Maps and Apple Maps direction links.
 */
export function MapDirections({
  className = '',
  iconClassName = 'mt-0.5 h-4 w-4 shrink-0 text-gold-400',
}: {
  className?: string;
  iconClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-start gap-3 text-left"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <MapPin className={iconClassName} strokeWidth={1.5} />
        <span className="text-neutral-400 transition-colors group-hover:text-gold-300">
          {BUSINESS.address.line1}
          <br />
          {BUSINESS.neighborhood}
          <br />
          {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          <span className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Get directions
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              strokeWidth={2}
            />
          </span>
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-60 border border-ink-600 bg-ink-900 shadow-xl animate-fade-in">
          <div className="border-b border-ink-700 px-4 py-2.5">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              <Navigation className="h-3.5 w-3.5" strokeWidth={1.5} />
              Open in Maps
            </p>
          </div>
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 px-4 py-3 text-sm text-neutral-200 transition-colors hover:bg-ink-800 hover:text-gold-300"
            onClick={() => setOpen(false)}
          >
            Google Maps
            <ExternalLink className="h-3.5 w-3.5 text-neutral-500" strokeWidth={1.5} />
          </a>
          <a
            href={BUSINESS.appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 px-4 py-3 text-sm text-neutral-200 transition-colors hover:bg-ink-800 hover:text-gold-300"
            onClick={() => setOpen(false)}
          >
            Apple Maps
            <ExternalLink className="h-3.5 w-3.5 text-neutral-500" strokeWidth={1.5} />
          </a>
        </div>
      )}
    </div>
  );
}
