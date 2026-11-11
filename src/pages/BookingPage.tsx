import { useMemo, useState } from 'react';
import {
  Check,
  Clock,
  CalendarDays,
  Scissors,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CalendarCheck,
  Home,
} from 'lucide-react';
import { useRouter } from '@/router';

import { SERVICES, BARBERS, TIME_SLOTS } from '@/data/content';
import type { Service } from '@/data/types';

const STEPS = ['Service', 'Barber', 'Date & Time', 'Confirm'] as const;


function nextDays(count: number): { label: string; sub: string; iso: string }[] {
  const days: { label: string; sub: string; iso: string }[] = [];
  const fmt = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const subFmt = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      label: fmt.format(d),
      sub: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : subFmt.format(d),
      iso: d.toISOString().slice(0, 10),
    });
  }
  return days;
}

export function BookingPage() {
  const { navigate } = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [service, setService] = useState<Service | null>(null);
  const [barberId, setBarberId] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const days = useMemo(() => nextDays(14), []);
  const step = STEPS[stepIndex];

  const barber = BARBERS.find((b) => b.id === barberId) || null;

  const canProceed = (() => {
    if (step === 'Service') return !!service;
    if (step === 'Barber') return !!barberId;
    if (step === 'Date & Time') return !!date && !!time;
    return true;
  })();

  const next = () => {
    if (!canProceed) return;
    if (stepIndex < STEPS.length - 1) setStepIndex(stepIndex + 1);
  };
  const back = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const confirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="pt-20">
        <section className="flex min-h-[80vh] items-center bg-ink-950 bg-grain py-20">
          <div className="container-x">
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400 text-gold-400">
                <CheckCircle2 className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <p className="mt-8 section-eyebrow">Booking Request Sent</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold text-neutral-50 sm:text-5xl">
                See you soon
              </h1>
              <div className="hairline mx-auto mt-6" />
              <p className="mt-6 text-base leading-relaxed text-neutral-400">
                This is a demonstration template, so no real booking has been saved. When the backend
                is connected, you will receive an email confirmation and the appointment will appear
                in your account.
              </p>

              <div className="mt-10 border border-ink-700 bg-ink-900 p-8 text-left">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Appointment Summary
                </h3>
                <dl className="mt-5 space-y-4">
                  <SummaryRow label="Service" value={service?.name || '—'} />
                  <SummaryRow label="Barber" value={barber?.name || 'Any available'} />
                  <SummaryRow
                    label="Date"
                    value={days.find((d) => d.iso === date)?.label || '—'}
                  />
                  <SummaryRow label="Time" value={time || '—'} />
                  <SummaryRow
                    label="Duration"
                    value={service ? `${service.duration} min` : '—'}
                  />
                  <SummaryRow
                    label="Price"
                    value={service ? `$${service.price}` : '—'}
                    highlight
                  />
                </dl>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button onClick={() => navigate('home')} className="btn-outline">
                  <Home className="h-4 w-4" strokeWidth={1.5} />
                  Back to Home
                </button>
                <button onClick={() => navigate('account')} className="btn-primary">
                  <CalendarCheck className="h-4 w-4" strokeWidth={1.5} />
                  View My Appointments
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-950 py-16 lg:py-20">
        <div className="container-x text-center">
          <p className="section-eyebrow">Online Booking</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-neutral-50 sm:text-5xl lg:text-6xl">
            Reserve Your Chair
          </h1>
          <div className="hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            Four quick steps. Pick a service, choose your barber, select a time, and confirm.
          </p>
        </div>
      </section>

      {/* Stepper */}
      <section className="sticky top-20 z-30 border-b border-ink-800 bg-ink-950/95 backdrop-blur-md">
        <div className="container-x">
          <ol className="flex items-center justify-between gap-2 py-3 sm:py-5">
            {STEPS.map((label, i) => {
              const done = i < stepIndex;
              const current = i === stepIndex;
              return (
                <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border text-xs font-semibold transition-all ${
                        done
                          ? 'border-gold-400 bg-gold-400 text-ink-950'
                          : current
                          ? 'border-gold-400 text-gold-300'
                          : 'border-ink-600 text-neutral-600'
                      }`}
                    >
                      {done ? <Check className="h-4 w-4" strokeWidth={2} /> : i + 1}
                    </span>
                    <span
                      className={`hidden truncate text-xs font-semibold uppercase tracking-widest sm:block ${
                        current || done ? 'text-neutral-200' : 'text-neutral-600'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <span
                      className={`h-px flex-1 ${done ? 'bg-gold-400/60' : 'bg-ink-600'}`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-ink-900 py-10 sm:py-16 lg:py-20">
        <div className="container-x grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* Step content */}
          <div className="min-h-[420px] min-w-0">
            {step === 'Service' && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl font-semibold text-neutral-50">
                  Choose a service
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Select the service you would like to book.
                </p>
                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setService(s)}
                      className={`group flex min-w-0 flex-col border p-4 text-left transition-all sm:p-5 ${
                        service?.id === s.id
                          ? 'border-gold-400 bg-ink-800'
                          : 'border-ink-700 bg-ink-950 hover:border-neutral-500'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400">
                          {s.category}
                        </span>
                        <span className="font-serif text-xl font-semibold text-neutral-50">
                          ${s.price}
                        </span>
                      </div>
                      <h3 className="mt-3 font-serif text-xl font-semibold text-neutral-50">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400 line-clamp-2">
                        {s.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-neutral-500">
                          <Clock className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.5} />
                          {s.duration} min
                        </span>
                        {service?.id === s.id && (
                          <Check className="h-4 w-4 text-gold-400" strokeWidth={2} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'Barber' && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl font-semibold text-neutral-50">
                  Choose your barber
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Pick a specific barber, or go with whoever is available.
                </p>
                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                  <button
                    onClick={() => setBarberId(null)}
                    className={`flex min-w-0 items-center gap-3 border p-4 text-left transition-all sm:gap-4 sm:p-5 ${
                      barberId === null
                        ? 'border-gold-400 bg-ink-800'
                        : 'border-ink-700 bg-ink-950 hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink-600 text-gold-400">
                      <Scissors className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-neutral-50">
                        Any available
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">
                        Next free barber at your chosen time
                      </p>
                    </div>
                  </button>

                  {BARBERS.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBarberId(b.id)}
                      className={`flex min-w-0 items-center gap-3 border p-4 text-left transition-all sm:gap-4 sm:p-5 ${
                        barberId === b.id
                          ? 'border-gold-400 bg-ink-800'
                          : 'border-ink-700 bg-ink-950 hover:border-neutral-500'
                      }`}
                    >
                      <div className="h-14 w-14 shrink-0 overflow-hidden border border-ink-600">
                        <img
                          src={b.image}
                          alt={b.name}
                          loading="lazy"
                          className="h-full w-full object-cover grayscale"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg font-semibold text-neutral-50">
                          {b.name}
                        </h3>
                        <p className="mt-1 truncate text-xs text-neutral-400">{b.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'Date & Time' && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl font-semibold text-neutral-50">
                  Pick a date &amp; time
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Choose from the next two weeks of availability.
                </p>

                {/* Date scroller */}
                <div className="mt-8">
                  <p className="field-label">Select a date</p>
                  <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
                    {days.map((d) => (
                      <button
                        key={d.iso}
                        onClick={() => setDate(d.iso)}
                        className={`flex w-28 shrink-0 snap-start flex-col items-center border p-4 transition-all ${
                          date === d.iso
                            ? 'border-gold-400 bg-ink-800'
                            : 'border-ink-700 bg-ink-950 hover:border-neutral-500'
                        }`}
                      >
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-widest ${
                            date === d.iso ? 'text-gold-300' : 'text-neutral-500'
                          }`}
                        >
                          {d.sub}
                        </span>
                        <span className="mt-1.5 text-sm font-medium text-neutral-200">
                          {d.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                <div className="mt-8">
                  <p className="field-label">
                    {date ? 'Available times' : 'Select a date first'}
                  </p>
                  <div
                    className={`grid grid-cols-3 gap-3 sm:grid-cols-4 ${
                      !date ? 'pointer-events-none opacity-40' : ''
                    }`}
                  >
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        disabled={!date}
                        className={`border py-3 text-sm font-medium transition-all ${
                          time === slot
                            ? 'border-gold-400 bg-gold-400 text-ink-950'
                            : 'border-ink-700 bg-ink-950 text-neutral-300 hover:border-neutral-500'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 'Confirm' && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl font-semibold text-neutral-50">
                  Review &amp; confirm
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Check the details below before confirming your booking request.
                </p>

                <div className="mt-8 border border-ink-700 bg-ink-950">
                  <dl className="divide-y divide-ink-700">
                    <SummaryRow label="Service" value={service?.name || '—'} />
                    <SummaryRow
                      label="Barber"
                      value={barber?.name || 'Any available barber'}
                    />
                    <SummaryRow
                      label="Date"
                      value={days.find((d) => d.iso === date)?.label || '—'}
                    />
                    <SummaryRow label="Time" value={time || '—'} />
                    <SummaryRow
                      label="Duration"
                      value={service ? `${service.duration} minutes` : '—'}
                    />
                    <SummaryRow
                      label="Price"
                      value={service ? `$${service.price}` : '—'}
                      highlight
                    />
                  </dl>
                </div>

                <div className="mt-6 flex items-start gap-3 border border-gold-500/20 bg-gold-500/5 p-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed text-neutral-300">
                    This is a visual demo — no real appointment is saved. Once connected to the
                    backend, confirming will reserve your slot and send a confirmation email.
                  </p>
                </div>
              </div>
            )}

            {/* Nav buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 sm:mt-10">
              <button
                onClick={back}
                disabled={stepIndex === 0}
                className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
                  stepIndex === 0
                    ? 'cursor-not-allowed text-neutral-700'
                    : 'text-neutral-300 hover:text-gold-300'
                }`}
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                Back
              </button>

              {stepIndex < STEPS.length - 1 ? (
                <button
                  onClick={next}
                  disabled={!canProceed}
                  className={`btn-primary w-full sm:w-auto ${
                    !canProceed ? 'cursor-not-allowed opacity-40' : ''
                  }`}
                >
                  Continue
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              ) : (
                <button onClick={confirm} className="btn-primary w-full sm:w-auto">
                  <Check className="h-4 w-4" strokeWidth={2} />
                  Confirm Booking
                </button>
              )}
            </div>
          </div>

          {/* Summary sidebar */}
          <aside className="min-w-0 lg:sticky lg:top-44">
            <div className="border border-ink-700 bg-ink-950 p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                Your Booking
              </h3>
              <dl className="mt-6 space-y-5">
                <SummaryRow label="Service" value={service?.name || 'Not selected'} />
                <SummaryRow
                  label="Barber"
                  value={barber?.name || 'Any available'}
                />
                <SummaryRow
                  label="Date"
                  value={date ? days.find((d) => d.iso === date)?.label || 'Not selected' : 'Not selected'}
                />
                <SummaryRow label="Time" value={time || 'Not selected'} />
              </dl>

              <div className="mt-6 border-t border-ink-700 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Total</span>
                  <span className="font-serif text-2xl font-semibold text-gold-400">
                    {service ? `$${service.price}` : '—'}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <Clock className="h-3 w-3" strokeWidth={1.5} />
                  {service ? `${service.duration} minutes` : 'Duration varies'}
                </p>
              </div>
            </div>

            <div className="mt-4 border border-ink-700 bg-ink-900 p-5">
              <p className="text-xs leading-relaxed text-neutral-500">
                Need to change or cancel a booking? You can manage all your appointments from your
                account area after sign-in.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </dt>
      <dd
        className={`text-right text-sm ${
          highlight ? 'font-serif text-lg font-semibold text-gold-400' : 'text-neutral-200'
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
