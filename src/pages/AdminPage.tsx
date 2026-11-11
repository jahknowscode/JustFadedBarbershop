import { useState } from 'react';
import {
  LayoutDashboard,
  Scissors,
  Users,
  CalendarDays,
  Clock,
  Plus,
  Pencil,
  Trash2,
  Search,
  DollarSign,
  TrendingUp,
  CalendarCheck,
  Check,
  X,
} from 'lucide-react';
import { useRouter } from '@/router';
import { SERVICES, BARBERS, ADMIN_APPOINTMENTS, BUSINESS_HOURS } from '@/data/content';
import type { Service, Barber } from '@/data/types';

type AdminTab = 'overview' | 'services' | 'barbers' | 'appointments' | 'hours';

export function AdminPage() {
  const { navigate } = useRouter();
  const [tab, setTab] = useState<AdminTab>('overview');

  return (
    <div className="min-h-screen bg-ink-950 pt-20">
      <div className="container-x py-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-ink-700 bg-ink-900">
              <div className="border-b border-ink-700 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  <LayoutDashboard className="h-4 w-4" strokeWidth={1.5} />
                  Admin
                </p>
                <h1 className="mt-2 font-serif text-xl font-semibold text-neutral-50">
                  JUST FADED
                </h1>
                <p className="mt-1 text-xs text-neutral-500">Manager dashboard</p>
              </div>
              <nav className="p-3">
                {([
                  { key: 'overview', label: 'Overview', icon: TrendingUp },
                  { key: 'services', label: 'Services', icon: Scissors },
                  { key: 'barbers', label: 'Barbers', icon: Users },
                  { key: 'appointments', label: 'Appointments', icon: CalendarDays },
                  { key: 'hours', label: 'Business Hours', icon: Clock },
                ] as { key: AdminTab; label: string; icon: typeof Users }[]).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setTab(item.key)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                      tab === item.key
                        ? 'bg-ink-800 text-gold-300'
                        : 'text-neutral-400 hover:bg-ink-800/50 hover:text-neutral-200'
                    }`}
                  >
                    <item.icon className="h-4 w-4" strokeWidth={1.5} />
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="border-t border-ink-700 p-3">
                <button
                  onClick={() => navigate('home')}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-200"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                  Exit Dashboard
                </button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            {tab === 'overview' && <OverviewTab />}
            {tab === 'services' && <ServicesTab />}
            {tab === 'barbers' && <BarbersTab />}
            {tab === 'appointments' && <AppointmentsTab />}
            {tab === 'hours' && <HoursTab />}
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="border border-ink-700 bg-ink-900 p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center border border-ink-600 text-gold-400">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>
      <p className="mt-5 font-serif text-3xl font-semibold text-neutral-50">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-xs text-neutral-400">{sub}</p>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="animate-fade-in">
      <div>
        <h2 className="font-serif text-3xl font-semibold text-neutral-50">Overview</h2>
        <p className="mt-2 text-sm text-neutral-400">
          A snapshot of the shop today. Replace placeholders with live data once connected.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={CalendarCheck} label="Today's Appointments" value="6" sub="2 pending confirmation" />
        <StatCard icon={DollarSign} label="Today's Revenue" value="$229" sub="Projected from confirmed bookings" />
        <StatCard icon={Users} label="Active Clients" value="184" sub="+12 this month" />
        <StatCard icon={TrendingUp} label="Avg. Rating" value="4.9" sub="From 312 reviews" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="border border-ink-700 bg-ink-900 p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Today's Schedule
          </h3>
          <ul className="mt-5 space-y-3">
            {ADMIN_APPOINTMENTS.slice(0, 4).map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between border-b border-ink-700 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-200">{a.client}</p>
                  <p className="text-xs text-neutral-500">
                    {a.service} &middot; {a.barber}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gold-300">{a.time}</p>
                  <p className="text-xs text-neutral-500">{a.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-ink-700 bg-ink-900 p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Quick Actions
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { label: 'Add Service', icon: Scissors },
              { label: 'Add Barber', icon: Users },
              { label: 'View Appointments', icon: CalendarDays },
              { label: 'Edit Hours', icon: Clock },
            ].map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-3 border border-ink-600 bg-ink-950 p-4 text-sm font-medium text-neutral-300 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <action.icon className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                {action.label}
              </button>
            ))}
          </div>
          <div className="mt-6 border-t border-ink-700 pt-5">
            <p className="text-xs text-neutral-500">
              This dashboard is a visual template. Live data, editing, and authentication will be
              connected in the next stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-neutral-50">Services</h2>
          <p className="mt-2 text-sm text-neutral-400">Manage your service menu and pricing.</p>
        </div>
        <button className="btn-primary !py-2.5">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add Service
        </button>
      </div>

      <div className="mt-8 overflow-x-auto border border-ink-700 bg-ink-900">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-ink-700 text-xs uppercase tracking-widest text-neutral-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Service</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Duration</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-700">
            {services.map((s) => (
              <tr key={s.id} className="transition-colors hover:bg-ink-800/40">
                <td className="px-6 py-4">
                  <p className="font-medium text-neutral-100">{s.name}</p>
                  <p className="mt-0.5 text-xs text-neutral-500 line-clamp-1">{s.description}</p>
                </td>
                <td className="px-6 py-4 text-neutral-400">{s.category}</td>
                <td className="px-6 py-4 text-neutral-400">{s.duration} min</td>
                <td className="px-6 py-4 font-serif text-lg font-semibold text-gold-400">
                  ${s.price}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditing(editing === s.id ? null : s.id)}
                      className="flex h-8 w-8 items-center justify-center border border-ink-600 text-neutral-400 transition-colors hover:border-gold-400 hover:text-gold-300"
                      aria-label="Edit"
                    >
                      <Pencil className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => setServices(services.filter((x) => x.id !== s.id))}
                      className="flex h-8 w-8 items-center justify-center border border-red-900/40 text-red-400 transition-colors hover:border-red-700"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-neutral-600">
        Edits here are temporary (demo state). They will persist once the database is connected.
      </p>
    </div>
  );
}

function BarbersTab() {
  const [barbers] = useState<Barber[]>(BARBERS);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-neutral-50">Barbers</h2>
          <p className="mt-2 text-sm text-neutral-400">Manage barber profiles and specialties.</p>
        </div>
        <button className="btn-primary !py-2.5">
          <Plus className="h-4 w-4" strokeWidth={1.5} />
          Add Barber
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {barbers.map((b) => (
          <div
            key={b.id}
            className="flex gap-5 border border-ink-700 bg-ink-900 p-5"
          >
            <div className="h-24 w-24 shrink-0 overflow-hidden border border-ink-600">
              <img
                src={b.image}
                alt={b.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-semibold text-neutral-50">{b.name}</h3>
              <p className="text-xs text-gold-400">{b.title}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {b.specialties.map((s) => (
                  <span
                    key={s}
                    className="border border-ink-600 px-2 py-0.5 text-[10px] uppercase tracking-widest text-neutral-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex items-center gap-1.5 border border-ink-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-300 hover:border-gold-400 hover:text-gold-300">
                  <Pencil className="h-3 w-3" strokeWidth={1.5} />
                  Edit
                </button>
                <button className="flex items-center gap-1.5 border border-red-900/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-red-400 hover:border-red-700">
                  <Trash2 className="h-3 w-3" strokeWidth={1.5} />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppointmentsTab() {
  const [query, setQuery] = useState('');
  const filtered = ADMIN_APPOINTMENTS.filter(
    (a) =>
      a.client.toLowerCase().includes(query.toLowerCase()) ||
      a.barber.toLowerCase().includes(query.toLowerCase()) ||
      a.service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div>
        <h2 className="font-serif text-3xl font-semibold text-neutral-50">Appointments</h2>
        <p className="mt-2 text-sm text-neutral-400">View and manage all customer bookings.</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search client, barber, service…"
            className="field-input pl-11"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Confirmed', 'Pending'].map((f) => (
            <button
              key={f}
              className="border border-ink-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-300 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto border border-ink-700 bg-ink-900">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-ink-700 text-xs uppercase tracking-widest text-neutral-500">
            <tr>
              <th className="px-6 py-4 font-semibold">Client</th>
              <th className="px-6 py-4 font-semibold">Service</th>
              <th className="px-6 py-4 font-semibold">Barber</th>
              <th className="px-6 py-4 font-semibold">Date &amp; Time</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-700">
            {filtered.map((a) => (
              <tr key={a.id} className="transition-colors hover:bg-ink-800/40">
                <td className="px-6 py-4 font-medium text-neutral-100">{a.client}</td>
                <td className="px-6 py-4 text-neutral-400">{a.service}</td>
                <td className="px-6 py-4 text-neutral-400">{a.barber}</td>
                <td className="px-6 py-4 text-neutral-400">
                  {a.date}
                  <br />
                  <span className="text-gold-300">{a.time}</span>
                </td>
                <td className="px-6 py-4 font-serif font-semibold text-gold-400">${a.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                      a.status === 'Confirmed'
                        ? 'border-green-500/30 bg-green-500/10 text-green-400'
                        : 'border-gold-500/30 bg-gold-500/10 text-gold-400'
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="flex h-8 w-8 items-center justify-center border border-green-900/40 text-green-400 transition-colors hover:border-green-700"
                      aria-label="Confirm"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                    <button
                      className="flex h-8 w-8 items-center justify-center border border-red-900/40 text-red-400 transition-colors hover:border-red-700"
                      aria-label="Cancel"
                    >
                      <X className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-sm text-neutral-500">No appointments match your search.</p>
      )}
    </div>
  );
}

function HoursTab() {
  return (
    <div className="animate-fade-in">
      <div>
        <h2 className="font-serif text-3xl font-semibold text-neutral-50">Business Hours</h2>
        <p className="mt-2 text-sm text-neutral-400">Set when the shop is open for bookings.</p>
      </div>

      <div className="mt-8 max-w-2xl border border-ink-700 bg-ink-900">
        <ul>
          {BUSINESS_HOURS.map((entry, i) => (
            <li
              key={entry.day}
              className={`flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                i !== BUSINESS_HOURS.length - 1 ? 'border-b border-ink-700' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked={!entry.closed}
                    className="peer sr-only"
                  />
                  <span className="h-6 w-11 rounded-full bg-ink-600 transition-colors peer-checked:bg-gold-400" />
                  <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-ink-900 transition-transform peer-checked:translate-x-5" />
                </label>
                <span className="text-sm font-semibold uppercase tracking-widest text-neutral-200">
                  {entry.day}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    defaultValue="09:00"
                    disabled={entry.closed}
                    className="field-input !py-2 !px-3 text-sm disabled:opacity-40"
                  />
                  <span className="text-neutral-600">–</span>
                  <input
                    type="time"
                    defaultValue="19:00"
                    disabled={entry.closed}
                    className="field-input !py-2 !px-3 text-sm disabled:opacity-40"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button className="btn-primary">
          <Check className="h-4 w-4" strokeWidth={2} />
          Save Hours
        </button>
        <p className="text-xs text-neutral-600">Changes are demo-only until the backend is connected.</p>
      </div>
    </div>
  );
}
