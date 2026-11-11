import { useState } from 'react';
import { CalendarDays, Clock, Check } from 'lucide-react';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/Brand';
import { ServiceCard } from '@/components/ServiceCard';
import { IMAGES, SERVICES, BUSINESS_HOURS, BUSINESS } from '@/data/content';

const CATEGORIES = ['All', 'Fade', 'Haircut', 'Combo', 'Maintenance'];

export function ServicesPage() {
  const { navigate } = useRouter();
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative border-b border-ink-800 bg-ink-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={IMAGES.fadeBack} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-ink-950/70" />
        </div>
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <p className="section-eyebrow">Services &amp; Pricing</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold text-neutral-50 sm:text-6xl">
              The Menu
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
              Straightforward pricing on every cut. Fades are our specialty, but we do classic cuts,
              line-ups, and beard work too. Call us for the most current prices.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 border-b border-ink-800 bg-ink-950/95 backdrop-blur-md">
        <div className="container-x flex items-center gap-2 overflow-x-auto py-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                active === cat
                  ? 'border-gold-400 bg-gold-400 text-ink-950'
                  : 'border-ink-600 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="border-b border-ink-800 bg-ink-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="border-b border-ink-800 bg-ink-950 bg-grain py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="aspect-[5/4] overflow-hidden border border-ink-700">
              <img
                src={IMAGES.heroClipper}
                alt="Barber using clippers on a fade"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Every Visit"
              title="What is always included"
              description="No matter which service you choose, every cut at Just Faded comes with the same attention to detail."
            />
            <ul className="mt-8 space-y-4">
              {[
                'Consultation before the cut',
                'Clean line-up and neck finish',
                'Hot towel finish on fade combos',
                'Style and product to finish',
                'Aftercare tips to keep it fresh longer',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('booking')} className="btn-primary mt-10">
              <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
              Book an Appointment
            </button>
          </Reveal>
        </div>
      </section>

      {/* Hours summary */}
      <section className="bg-ink-900 py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Plan Your Visit"
                title="Opening Hours"
                description="Walk-ins are welcome when a chair is open, but booking ahead guarantees your time. Sundays we are closed."
              />
              <div className="mt-8 flex items-center gap-3 text-sm text-neutral-400">
                <Clock className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                Last appointment booked one hour before close
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                Questions about prices or hours? Call us at{' '}
                <a href={BUSINESS.phoneHref} className="text-gold-300 hover:text-gold-200">
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="border border-ink-700 bg-ink-950">
                <ul>
                  {BUSINESS_HOURS.map((entry, i) => (
                    <li
                      key={entry.day}
                      className={`flex items-center justify-between px-6 py-4 ${
                        i !== BUSINESS_HOURS.length - 1 ? 'border-b border-ink-700' : ''
                      }`}
                    >
                      <span className="text-sm font-medium uppercase tracking-widest text-neutral-300">
                        {entry.day}
                      </span>
                      <span
                        className={`text-sm ${entry.closed ? 'text-neutral-600' : 'text-gold-300'}`}
                      >
                        {entry.open}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
