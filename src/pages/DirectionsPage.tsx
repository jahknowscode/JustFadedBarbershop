import { MapPin, Navigation, ExternalLink, Phone, Clock, Car } from 'lucide-react';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/Brand';
import { BUSINESS, BUSINESS_HOURS, IMAGES } from '@/data/content';

export function DirectionsPage() {
  const { navigate } = useRouter();

  const mapEmbedUrl =
    'https://www.google.com/maps?q=1550+SW+1st+St,+Miami,+FL+33135&output=embed';

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-950 py-16 lg:py-20">
        <div className="container-x text-center">
          <p className="section-eyebrow">Find Us</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-neutral-50 sm:text-5xl lg:text-6xl">
            Directions
          </h1>
          <div className="hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            We are in the heart of {BUSINESS.neighborhood}. Tap a map below to get turn-by-turn
            directions straight to the chair.
          </p>
        </div>
      </section>

      {/* Map + info */}
      <section className="border-b border-ink-800 bg-ink-900 py-16 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          {/* Embedded map */}
          <Reveal>
            <div className="overflow-hidden border border-ink-700 bg-ink-950">
              <div className="aspect-[4/3] w-full lg:aspect-[5/4]">
                <iframe
                  title="Map to Just Faded Barbershop"
                  src={mapEmbedUrl}
                  className="h-full w-full grayscale contrast-125"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) grayscale(0.3) contrast(1.1)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Address + direction buttons + hours */}
          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="border border-ink-700 bg-ink-950 p-7">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  The Shop
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-200">
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.neighborhood}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-4 flex items-center gap-2 text-sm text-neutral-400 hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Direction buttons */}
              <div className="border border-ink-700 bg-ink-950 p-7">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <Navigation className="h-4 w-4" strokeWidth={1.5} />
                  Get Directions
                </h3>
                <p className="mt-3 text-sm text-neutral-400">
                  Open turn-by-turn directions in your preferred map app.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <Car className="h-4 w-4" strokeWidth={1.5} />
                    Google Maps
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                  <a
                    href={BUSINESS.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full"
                  >
                    <Navigation className="h-4 w-4" strokeWidth={1.5} />
                    Apple Maps
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-ink-700 bg-ink-950 p-7">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  Hours
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {BUSINESS_HOURS.map((entry) => (
                    <li key={entry.day} className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">{entry.day}</span>
                      <span className={entry.closed ? 'text-neutral-600' : 'text-neutral-200'}>
                        {entry.open}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Neighborhood strip */}
      <section className="relative overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0">
          <img src={IMAGES.streetBarber} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="container-x relative z-10 py-20 text-center lg:py-24">
          <Reveal>
            <p className="section-eyebrow">{BUSINESS.neighborhood}</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-neutral-50 sm:text-4xl lg:text-5xl">
              Right in the neighborhood
            </h2>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
              Easy street parking on SW 1st St. A short walk from Domino Park and the heart of Calle
              Ocho. Come for the cut, stay for the neighborhood.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Navigation className="h-4 w-4" strokeWidth={1.5} />
                Open in Google Maps
              </a>
              <button onClick={() => navigate('contact')} className="btn-outline">
                Contact Us
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
