import { Award, CalendarDays, ArrowRight } from 'lucide-react';
import { useRouter } from '@/router';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/Brand';
import { BarberCard } from '@/components/BarberCard';
import { IMAGES, BARBERS } from '@/data/content';

export function BarbersPage() {
  const { navigate } = useRouter();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative border-b border-ink-800 bg-ink-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={IMAGES.streetBarber} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-ink-950/70" />
        </div>
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <p className="section-eyebrow">The Crew</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold text-neutral-50 sm:text-6xl">
              Meet the Barbers
            </h1>
            <div className="hairline mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
              Local barbers who know the neighborhood and know fades. Find the right chair for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Barber grid */}
      <section className="border-b border-ink-800 bg-ink-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BARBERS.map((barber, i) => (
              <BarberCard key={barber.id} barber={barber} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-b border-ink-800 bg-ink-950 bg-grain py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Standard"
            title="What sets our barbers apart"
            center
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'Fade Specialists',
                text: 'Every barber here can lay down a clean skin fade. It is what we do.',
              },
              {
                icon: CalendarDays,
                title: 'Consistent Results',
                text: 'Your preferred cut is saved to your profile, so any barber can pick up where you left off.',
              },
              {
                icon: ArrowRight,
                title: 'Neighborhood First',
                text: 'We have been on this block for years. Good people, good cuts, no shortcuts.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="border border-ink-700 bg-ink-900 p-8 text-center">
                  <item.icon className="mx-auto h-7 w-7 text-gold-400" strokeWidth={1.5} />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-neutral-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 border border-ink-700 bg-ink-950 p-10 text-center lg:flex-row lg:p-12 lg:text-left">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-neutral-50 sm:text-4xl">
                  Found your barber?
                </h2>
                <p className="mt-3 text-sm text-neutral-400">
                  Book a slot with them in under a minute.
                </p>
              </div>
              <button onClick={() => navigate('booking')} className="btn-primary shrink-0">
                <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
                Book an Appointment
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
