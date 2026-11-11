import { useState, type ReactNode } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Scissors } from 'lucide-react';
import { useRouter } from '@/router';
import { IMAGES, BUSINESS } from '@/data/content';

function AuthShell({ children, side }: { children: ReactNode; side: 'login' | 'register' }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Image side */}
      <div className="relative hidden lg:block">
        <img
          src={side === 'login' ? IMAGES.fadeRazor : IMAGES.youngCut}
          alt=""
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <p className="font-serif text-4xl font-semibold text-neutral-50">
            {side === 'login' ? 'Welcome back.' : 'Join the chair.'}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-300">
            Manage your appointments, keep your preferred cut on file, and book in seconds.
          </p>
        </div>
      </div>

      {/* Form side */}
      <div className="flex min-h-screen items-center justify-center bg-ink-950 bg-grain px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

export function LoginPage() {
  const { navigate } = useRouter();
  const [show, setShow] = useState(false);

  return (
    <AuthShell side="login">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center border border-gold-400 text-gold-400">
          <Scissors className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <span className="font-serif text-xl font-semibold text-neutral-50">
          JUST <span className="text-gold-400">FADED</span>
        </span>
      </div>

      <h1 className="mt-10 font-serif text-4xl font-semibold text-neutral-50">Sign in</h1>
      <p className="mt-3 text-sm text-neutral-400">
        Welcome back. Enter your details to access your account.
      </p>

      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          navigate('account');
        }}
      >
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.com"
              className="field-input pl-11"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="field-label" htmlFor="password">Password</label>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="mb-2 text-xs text-gold-400 hover:text-gold-300"
            >
              Forgot?
            </button>
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
            <input
              id="password"
              type={show ? 'text' : 'password'}
              required
              placeholder="••••••••"
              className="field-input pl-11 pr-11"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? <EyeOff className="h-4 w-4" strokeWidth={1.5} /> : <Eye className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-neutral-400">
          <input type="checkbox" className="h-4 w-4 accent-gold-400" />
          Remember me on this device
        </label>

        <button type="submit" className="btn-primary w-full">
          Sign In
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-neutral-400">
        New to {BUSINESS.name}?{' '}
        <button onClick={() => navigate('register')} className="font-semibold text-gold-400 hover:text-gold-300">
          Create an account
        </button>
      </p>

      <p className="mt-6 text-center text-xs text-neutral-600">
        Demo only — no real authentication is performed.
      </p>
    </AuthShell>
  );
}

export function RegisterPage() {
  const { navigate } = useRouter();
  const [show, setShow] = useState(false);

  return (
    <AuthShell side="register">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center border border-gold-400 text-gold-400">
          <Scissors className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <span className="font-serif text-xl font-semibold text-neutral-50">
          JUST <span className="text-gold-400">FADED</span>
        </span>
      </div>

      <h1 className="mt-10 font-serif text-4xl font-semibold text-neutral-50">Create account</h1>
      <p className="mt-3 text-sm text-neutral-400">
        Save your details and book appointments in seconds.
      </p>

      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          navigate('account');
        }}
      >
        <div>
          <label className="field-label" htmlFor="name">Full name</label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
            <input id="name" required placeholder="Alex Rivera" className="field-input pl-11" />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
            <input id="email" type="email" required placeholder="you@email.com" className="field-input pl-11" />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="(305) 000-0000" className="field-input" />
        </div>
        <div>
          <label className="field-label" htmlFor="password">Password</label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" strokeWidth={1.5} />
            <input
              id="password"
              type={show ? 'text' : 'password'}
              required
              placeholder="At least 8 characters"
              className="field-input pl-11 pr-11"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? <EyeOff className="h-4 w-4" strokeWidth={1.5} /> : <Eye className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-neutral-400">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-gold-400" />
          I agree to receive booking confirmations and occasional updates.
        </label>

        <button type="submit" className="btn-primary w-full">
          Create Account
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-neutral-400">
        Already have an account?{' '}
        <button onClick={() => navigate('login')} className="font-semibold text-gold-400 hover:text-gold-300">
          Sign in
        </button>
      </p>

      <p className="mt-6 text-center text-xs text-neutral-600">
        Demo only — no real account is created.
      </p>
    </AuthShell>
  );
}
