import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouteState =
  | { name: 'home' }
  | { name: 'services' }
  | { name: 'barbers' }
  | { name: 'booking' }
  | { name: 'contact' }
  | { name: 'login' }
  | { name: 'register' }
  | { name: 'account' }
  | { name: 'admin' };

interface RouterContextValue {
  route: RouteState;
  navigate: (name: RouteState['name']) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

const ROUTE_KEYS: RouteState['name'][] = [
  'home',
  'services',
  'barbers',
  'booking',
  'contact',
  'login',
  'register',
  'account',
  'admin',
];

function makeRoute(name: RouteState['name']): RouteState {
  return { name } as RouteState;
}

function parseHash(): RouteState {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const key = ROUTE_KEYS.find((k) => k === hash);
  return key ? makeRoute(key) : makeRoute('home');
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (name: RouteState['name']) => {
    window.location.hash = `/${name}`;
    setRoute(makeRoute(name));
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}
