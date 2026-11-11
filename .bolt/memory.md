# Project memory

## Product intent & audience

- Premium barbershop website template ("OAK & BLADE") designed to demonstrate to a real business owner.
- Audience: barbershop owners / operators; secondarily their customers booking appointments.
- Multi-page marketing + functional app: Home, Services & Pricing, Meet the Barbers, Online Booking, Contact, Login/Registration, plus Customer Account and Admin dashboards.
- First stage focuses on visual design and frontend structure only; backend (auth, booking DB, payments) deferred to later stages.

## Brand personality & voice

- Premium, modern, masculine. Refined rather than aggressive.
- Copy is professional and confident; realistic placeholder content throughout (services, bios, testimonials, hours).

## Visual design & UX direction

- Palette: black, charcoal, white, with subtle gold accents.
- Typography: Cormorant Garamond for headings, Inter for body.
- Imagery: high-quality barber/haircut photography; barber cards use grayscale-to-color hover.
- Motion: scroll-reveal animations, hover micro-interactions, smooth transitions.
- Layout: fully responsive (mobile/tablet/desktop); sticky navbar; sticky booking step indicators.
- Components: reusable cards (service, barber, testimonial), split-screen auth pages, sidebar admin layout, tabbed customer dashboard, `MapDirections` address dropdown.
- Booking UX: 4-step flow (service → barber → date/time → confirm) with next-14-days date picker and confirmation screen.
- Map directions: address is clickable; dropdown offers Google Maps (`dir/?api=1&destination=...`) and Apple Maps (`?daddr=...`) links opening directions view in new tab. Wired into Footer, Contact page, and Home hero "Get directions" button.
- Demo-only states are clearly labeled (auth, booking confirmation) since no persistence exists yet.

## Decisions, constraints & rationale

- Stack constrained by template: Vite + React + JSX, Tailwind CSS, lucide-react icons, React hooks. No extra UI/theme/icon packages installed.
- Imports use `@/` path alias (maps to `src/`).
- No fake payment processing or simulated saved bookings — UI-only at this stage.
- Realistic placeholder contact info only; no invented real business data.
- Shared data layer uses typed mock data (services, barbers, testimonials, appointments) so admin CRUD surfaces are editable in UI.
- Map URL helpers stored in the BUSINESS data object for reuse.
- Build and type checks pass cleanly.

## Open questions & assumptions

- Backend provider not yet chosen (assistant mentioned Supabase as a suggestion; not confirmed by user).
- Real business contact info, hours, and service pricing to be supplied later.
- Auth, booking persistence, and payment integration scope to be defined in future stages.