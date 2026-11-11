import { CalendarDays, ArrowRight, Scissors, Award, Coffee } from 'lucide-react';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { SectionHeading, StarRating } from '@/components/Brand';
import { ServiceCard } from '@/components/ServiceCard';
import { BarberCard } from '@/components/BarberCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { IMAGES, SERVICES, BARBERS, TESTIMONIALS, BUSINESS } from '@/data/content';

export function HomePage() {
  const { navigate } = useRouter();
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 3);
  const featuredBarbers = BARBERS.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroFade}
            alt="Barber giving a sharp fade haircut"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
        </div>

        <div className="container-x relative z-10 pt-24">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <p className="section-eyebrow">Little Havana, Miami</p>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-neutral-50 sm:text-6xl lg:text-7xl">
                Fresh cuts.
                <br />
                <span className="text-gold-400">Sharp</span> fades.
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-300">
                A neighborhood barbershop where clean lines and careful detail come first. Whether
                you want a classic cut or a skin fade, we will get you right.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button onClick={() => navigate('booking')} className="btn-primary">
                  <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
                  Book an Appointment
                </button>
                <button onClick={() => navigate('services')} className="btn-outline">
                  View Services
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <p className="font-serif text-4xl font-semibold text-gold-400">8+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">Years in the neighborhood</p>
              </div>
              <div className="h-12 w-px bg-ink-600" />
              <div>
                <p className="font-serif text-4xl font-semibold text-gold-400">15k+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">Fades delivered</p>
              </div>
              <div className="h-12 w-px bg-ink-600" />
              <div>
                <p className="font-serif text-4xl font-semibold text-gold-400">4.9</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">Avg. rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-ink-950/60 backdrop-blur-sm">
          <div className="container-x flex items-center justify-between py-4 text-xs uppercase tracking-widest text-neutral-400">
            <span className="hidden sm:block">Open Mon – Sat</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Accepting bookings today
            </span>
            <button
              onClick={() => navigate('contact')}
              className="hidden items-center gap-2 text-gold-400 hover:text-gold-300 sm:flex"
            >
              Get directions
              <ArrowRight className="h-3 w-3" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-ink-800 bg-ink-950 bg-grain py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-ink-700">
                <img
                  src={IMAGES.interiorVibrant}
                  alt="Just Faded barbershop interior"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-48 border border-gold-500/30 bg-ink-900 p-5 sm:block lg:-right-8 lg:w-56">
                <p className="font-serif text-5xl font-semibold text-gold-400">F</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-neutral-400">
                  Fade is in the name
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <p className="section-eyebrow">Welcome to {BUSINESS.name}</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-neutral-50 sm:text-5xl">
                Your neighborhood spot
                <br />for a fresh look
              </h2>
              <div className="hairline mt-6" />
              <p className="mt-6 text-base leading-relaxed text-neutral-400">
                {BUSINESS.name} started as a one-chair shop in the heart of {BUSINESS.neighborhood}.
                The idea was simple: do clean fades, do them right, and make every person who sits
                down leave feeling confident.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                Years later, we are still doing the same thing. Good people, careful work, and a cut
                you can count on every time you come back.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: Scissors, label: 'Fade Specialists', text: 'Skin, taper, high top' },
                  { icon: Award, label: 'Clean Line-Ups', text: 'Sharp, precise, lasting' },
                  { icon: Coffee, label: 'Good Energy', text: 'Real neighborhood feel' },
                ].map((item) => (
                  <div key={item.label}>
                    <item.icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-neutral-200">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="border-b border-ink-800 bg-ink-900 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Featured Services"
              description="Fades are what we are known for — but we do classic cuts, line-ups, and beard work too."
            />
            <button onClick={() => navigate('services')} className="btn-ghost shrink-0">
              All Services
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BARBERS */}
      <section className="border-b border-ink-800 bg-ink-950 bg-grain py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="The Crew"
              title="Meet the Barbers"
              description="Local barbers who take pride in every cut that leaves the chair."
            />
            <button onClick={() => navigate('barbers')} className="btn-ghost shrink-0">
              Meet Everyone
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBarbers.map((barber, i) => (
              <BarberCard key={barber.id} barber={barber} delay={i * 100} variant="feature" />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-ink-800 bg-ink-900 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Word of Mouth"
            title="What Our Clients Say"
            description="We let our regulars do the talking."
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-ink-800">
        <div className="absolute inset-0">
          <img src={IMAGES.fadeClose} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ink-950/85" />
        </div>
        <div className="container-x relative z-10 py-24 text-center lg:py-32">
          <Reveal>
            <StarRating rating={5} className="justify-center" />
            <h2 className="mt-6 font-serif text-4xl font-semibold text-neutral-50 sm:text-5xl lg:text-6xl">
              Your next fresh cut
              <br />
              starts with a booking
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
              Pick your barber, pick your time. It takes less than a minute.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => navigate('booking')} className="btn-primary">
                <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
                Book an Appointment
              </button>
              <button onClick={() => navigate('register')} className="btn-outline">
                Create an Account
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
