import { RouterProvider, useRouter } from '@/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { BarbersPage } from '@/pages/BarbersPage';
import { BookingPage } from '@/pages/BookingPage';
import { ContactPage } from '@/pages/ContactPage';
import { LoginPage, RegisterPage } from '@/pages/AuthPages';
import { AccountPage } from '@/pages/AccountPage';
import { AdminPage } from '@/pages/AdminPage';

function Pages() {
  const { route } = useRouter();

  // Auth pages render full-screen without the global nav/footer
  if (route.name === 'login') return <LoginPage />;
  if (route.name === 'register') return <RegisterPage />;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {route.name === 'home' && <HomePage />}
        {route.name === 'services' && <ServicesPage />}
        {route.name === 'barbers' && <BarbersPage />}
        {route.name === 'booking' && <BookingPage />}
        {route.name === 'contact' && <ContactPage />}
        {route.name === 'account' && <AccountPage />}
        {route.name === 'admin' && <AdminPage />}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  );
}
