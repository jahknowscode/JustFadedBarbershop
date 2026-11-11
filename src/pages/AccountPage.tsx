import { useState } from 'react';
import {
  User,
  CalendarDays,
  Clock,
  CheckCircle2,
  CalendarPlus,
  LogOut,
  Scissors,
  Phone,
  Mail,
  Pencil,
} from 'lucide-react';
import { useRouter } from '@/router';
import { SectionHeading } from '@/components/Brand';
import { Reveal } from '@/components/Reveal';
import { UPCOMING_APPOINTMENTS, PAST_APPOINTMENTS } from '@/data/content';
import type { Appointment } from '@/data/types';

type Tab = 'upcoming' | 'history' | 'profile';

export function AccountPage() {
  const { navigate } = useRouter();
  const [tab, setTab] = useState<Tab>('upcoming');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-950 py-16">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400 bg-ink-900 text-gold-400">
                <span className="font-serif text-2xl font-semibold">J</span>
              </div>
              <div>
                <p className="section-eyebrow">Customer Account</p>
                <h1 className="mt-1 font-serif text-3xl font-semibold text-neutral-50 sm:text-4xl">
                  Welcome back, Alex
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('booking')} className="btn-primary !py-2.5">
                <CalendarPlus className="h-4 w-4" strokeWidth={1.5} />
                New Booking
              </button>
              <button
                onClick={() => navigate('home')}
                className="flex items-center gap-2 border border-ink-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-300 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <LogOut className="h-4 w-4" strokeWidth={1.5} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 z-30 border-b border-ink-800 bg-ink-950/95 backdrop-blur-md">
        <div className="container-x flex gap-1 py-4">
          {([
            { key: 'upcoming', label: 'Upcoming', icon: CalendarDays },
            { key: 'history', label: 'Appointment History', icon: Clock },
            { key: 'profile', label: 'My Profile', icon: User },
          ] as { key: Tab; label: string; icon: typeof User }[]).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                tab === t.key
                  ? 'border-b-2 border-gold-400 text-gold-300'
                  : 'border-b-2 border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <t.icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 py-16 lg:py-20">
        <div className="container-x">
          {tab === 'upcoming' && (
            <Reveal>
              <SectionHeading
                eyebrow="Your Schedule"
                title="Upcoming appointments"
                description="View, reschedule, or cancel your upcoming visits."
              />
              {UPCOMING_APPOINTMENTS.length === 0 ? (
                <EmptyState onBook={() => navigate('booking')} />
              ) : (
                <div className="mt-10 space-y-4">
                  {UPCOMING_APPOINTMENTS.map((a) => (
                    <AppointmentRow key={a.id} appointment={a} upcoming />
                  ))}
                </div>
              )}
            </Reveal>
          )}

          {tab === 'history' && (
            <Reveal>
              <SectionHeading
                eyebrow="On Record"
                title="Appointment history"
                description="Every visit you have made to the chair."
              />
              <div className="mt-10 space-y-4">
                {PAST_APPOINTMENTS.map((a) => (
                  <AppointmentRow key={a.id} appointment={a} />
                ))}
              </div>
            </Reveal>
          )}

          {tab === 'profile' && (
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                <div>
                  <SectionHeading
                    eyebrow="Your Details"
                    title="My profile"
                    description="Keep your details current so we can tailor every visit."
                  />
                  <form
                    className="mt-10 space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="field-label">First name</label>
                        <input className="field-input" defaultValue="Alex" />
                      </div>
                      <div>
                        <label className="field-label">Last name</label>
                        <input className="field-input" defaultValue="Rivera" />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="field-label">Email</label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
                          <input className="field-input pl-11" defaultValue="alex.rivera@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="field-label">Phone</label>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
                          <input className="field-input pl-11" defaultValue="(305) 555-0142" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="field-label">Preferred barber</label>
                      <select className="field-input" defaultValue="Carlos Mendez">
                        <option>No preference</option>
                        <option>Carlos Mendez</option>
                        <option>Rico Delgado</option>
                        <option>Tony Reyes</option>
                        <option>Manny Suarez</option>
                      </select>
                    </div>
                    <div>
                      <label className="field-label">Notes for your barber</label>
                      <textarea
                        rows={3}
                        className="field-input resize-none"
                        defaultValue="Skin fade on the sides, keep length on top. Sharp line-up please."
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      <Pencil className="h-4 w-4" strokeWidth={1.5} />
                      Save Changes
                    </button>
                  </form>
                </div>

                {/* Preferences card */}
                <div className="space-y-4">
                  <div className="border border-ink-700 bg-ink-950 p-7">
                    <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                      <Scissors className="h-4 w-4" strokeWidth={1.5} />
                      Quick Stats
                    </h3>
                    <dl className="mt-5 space-y-4">
                      {[
                        { label: 'Member since', value: 'Mar 2019' },
                        { label: 'Total visits', value: String(PAST_APPOINTMENTS.length + UPCOMING_APPOINTMENTS.length) },
                        { label: 'Preferred service', value: 'Skin Fade' },
                        { label: 'Loyalty points', value: '240 pts' },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between">
                          <dt className="text-xs uppercase tracking-widest text-neutral-500">{row.label}</dt>
                          <dd className="text-sm font-medium text-neutral-200">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="border border-gold-500/20 bg-gold-500/5 p-7">
                    <p className="font-serif text-lg font-semibold text-neutral-50">
                      240 loyalty points
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                      Earn 500 points for a complimentary Express Tidy. Points are awarded after each
                      completed visit.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}

function AppointmentRow({
  appointment,
  upcoming = false,
}: {
  appointment: Appointment;
  upcoming?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 border border-ink-700 bg-ink-950 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border border-ink-600 bg-ink-900">
          <CalendarDays className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-neutral-50">
            {appointment.serviceName}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            with {appointment.barberName} &middot; ${appointment.price}
          </p>
          <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
            {appointment.date} at {appointment.time}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest ${
            appointment.status === 'Completed'
              ? 'border-neutral-600 text-neutral-400'
              : 'border-green-500/30 bg-green-500/10 text-green-400'
          }`}
        >
          {upcoming && <CheckCircle2 className="mr-1 inline h-3 w-3" strokeWidth={2} />}
          {appointment.status}
        </span>
        {upcoming && (
          <div className="flex gap-2">
            <button className="border border-ink-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-300 transition-colors hover:border-neutral-500">
              Reschedule
            </button>
            <button className="border border-red-900/50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-400 transition-colors hover:border-red-700">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ onBook }: { onBook: () => void }) {
  return (
    <div className="mt-10 border border-dashed border-ink-600 bg-ink-950 p-16 text-center">
      <CalendarDays className="mx-auto h-10 w-10 text-neutral-600" strokeWidth={1} />
      <h3 className="mt-5 font-serif text-2xl font-semibold text-neutral-50">
        No upcoming appointments
      </h3>
      <p className="mt-2 text-sm text-neutral-400">Book your next visit to see it here.</p>
      <button onClick={onBook} className="btn-primary mt-6">
        <CalendarPlus className="h-4 w-4" strokeWidth={1.5} />
        Book Now
      </button>
    </div>
  );
}
