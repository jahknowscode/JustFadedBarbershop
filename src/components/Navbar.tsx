import { useEffect, useState } from 'react';
import { Menu, X, CalendarDays, User, LayoutDashboard } from 'lucide-react';
import { useRouter } from '@/router';
import { Logo } from './Brand';

const NAV_LINKS: { label: string; route: 'home' | 'services' | 'barbers' | 'booking' | 'contact' }[] = [
  { label: 'Home', route: 'home' },
  { label: 'Services', route: 'services' },
  { label: 'Barbers', route: 'barbers' },
  { label: 'Booking', route: 'booking' },
  { label: 'Contact', route: 'contact' },
];

export function Navbar() {
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (name: 'home' | 'services' | 'barbers' | 'booking' | 'contact' | 'login' | 'register' | 'account' | 'admin') => {
    navigate(name);
    setOpen(false);
  };

  const isActive = (r: string) => route.name === r;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-20 items-center justify-between">
          <button onClick={() => go('home')} aria-label="Go to home">
            <Logo />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.route}
                onClick={() => go(link.route)}
                className={`relative text-sm font-medium uppercase tracking-widest transition-colors ${
                  isActive(link.route) ? 'text-gold-300' : 'text-neutral-300 hover:text-neutral-50'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    isActive(link.route) ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => go('account')}
              className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-300 transition-colors hover:text-gold-300"
            >
              <User className="h-4 w-4" strokeWidth={1.5} />
              Account
            </button>
            <button onClick={() => go('booking')} className="btn-primary !px-5 !py-2.5">
              <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
              Book Now
            </button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center text-neutral-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-ink-900 shadow-2xl transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-600 px-6 py-5">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-neutral-300 hover:text-gold-300"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-1 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.route}
                onClick={() => go(link.route)}
                className={`border-l-2 py-3 pl-4 text-left text-base font-medium uppercase tracking-widest transition-colors ${
                  isActive(link.route)
                    ? 'border-gold-400 text-gold-300'
                    : 'border-transparent text-neutral-300 hover:text-neutral-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go('account')}
              className="border-l-2 border-transparent py-3 pl-4 text-left text-base font-medium uppercase tracking-widest text-neutral-300 hover:text-neutral-50"
            >
              My Account
            </button>
            <button
              onClick={() => go('admin')}
              className="border-l-2 border-transparent py-3 pl-4 text-left text-base font-medium uppercase tracking-widest text-neutral-300 hover:text-neutral-50"
            >
              Admin
            </button>
          </div>
          <div className="border-t border-ink-600 p-6">
            <button onClick={() => go('booking')} className="btn-primary w-full">
              <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { LayoutDashboard };
