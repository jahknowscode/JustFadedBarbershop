import { useState } from 'react';
import { Phone, Clock, Mail, Send, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/Brand';
import { MapDirections } from '@/components/MapDirections';
import { BUSINESS_HOURS, IMAGES, BUSINESS } from '@/data/content';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="border-b border-ink-800 bg-ink-950 py-16 lg:py-20">
        <div className="container-x text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-neutral-50 sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <div className="hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            Questions about services, prices, or appointments? Reach out — we are happy to help.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-800 bg-ink-900 py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Form */}
          <Reveal>
            <SectionHeading
              eyebrow="Send a Message"
              title="We will get back to you"
              description="Fill out the form and we will respond within one business day."
            />

            {sent ? (
              <div className="mt-10 border border-gold-500/30 bg-gold-500/5 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-400 text-gold-400">
                  <Check className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-neutral-50">
                  Message sent
                </h3>
                <p className="mt-3 text-sm text-neutral-400">
                  This is a demo form — no message was actually delivered. Once connected, your message will reach us and we will reply.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                className="mt-10 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="firstName">First name</label>
                    <input id="firstName" className="field-input" placeholder="James" required />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="lastName">Last name</label>
                    <input id="lastName" className="field-input" placeholder="Whitman" required />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="email">Email</label>
                    <input id="email" type="email" className="field-input" placeholder="you@email.com" required />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" className="field-input" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="field-label" htmlFor="subject">Subject</label>
                  <select id="subject" className="field-input" defaultValue="general">
                    <option value="general">General enquiry</option>
                    <option value="booking">Booking question</option>
                    <option value="group">Group / event booking</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="field-input resize-none"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" strokeWidth={1.5} />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          {/* Info + hours + image */}
          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="overflow-hidden border border-ink-700">
                <div className="aspect-[16/10]">
                  <img
                    src={IMAGES.neonSign}
                    alt="Just Faded Barbershop"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="border border-ink-700 bg-ink-950 p-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Visit the Shop
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-neutral-300">
                  <li>
                    <MapDirections iconClassName="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                    <a href={BUSINESS.phoneHref} className="hover:text-gold-300">{BUSINESS.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                    <span>{BUSINESS.email}</span>
                  </li>
                </ul>
              </div>

              <div className="border border-ink-700 bg-ink-950 p-7">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  Business Hours
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

              <p className="px-1 text-xs text-neutral-500">
                Address and phone are real. Email is a placeholder until you set up a business email.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
