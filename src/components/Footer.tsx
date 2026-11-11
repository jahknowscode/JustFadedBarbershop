import { MapPin, Phone, Clock, Instagram, Facebook, Scissors } from 'lucide-react';
import { useRouter } from '@/router';
import { Logo } from './Brand';
import { BUSINESS, BUSINESS_HOURS } from '@/data/content';

const FOOTER_LINKS: { label: string; route: 'home' | 'services' | 'barbers' | 'booking' | 'contact' | 'login' | 'register' | 'account' | 'admin' }[] = [
  { label: 'Home', route: 'home' },
  { label: 'Services & Pricing', route: 'services' },
  { label: 'Meet the Barbers', route: 'barbers' },
  { label: 'Online Booking', route: 'booking' },
  { label: 'Contact', route: 'contact' },
  { label: 'Sign In', route: 'login' },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-ink-700 bg-ink-900 bg-grain">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">
              A neighborhood barbershop in {BUSINESS.neighborhood}. Clean lines, careful detail, and
              a fresh look that fits your style.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center border border-ink-600 text-neutral-400 transition-colors hover:border-gold-400 hover:text-gold-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center border border-ink-600 text-neutral-400 transition-colors hover:border-gold-400 hover:text-gold-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-sm text-neutral-400 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Visit Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                <span>
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.neighborhood}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                <a href={BUSINESS.phoneHref} className="hover:text-gold-300">
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Hours
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {BUSINESS_HOURS.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between gap-4">
                  <span className="text-neutral-400">{entry.day.slice(0, 3)}</span>
                  <span
                    className={
                      entry.closed ? 'text-neutral-600' : 'text-neutral-300'
                    }
                  >
                    {entry.open}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-neutral-500">
            <Scissors className="h-3 w-3 text-gold-500" strokeWidth={1.5} />
            Little Havana, Miami
          </p>
        </div>
      </div>
    </footer>
  );
}
