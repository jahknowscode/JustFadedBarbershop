export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  featured: boolean;
}

export interface Barber {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image: string;
  experience: number;
  instagram: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
}

export interface Appointment {
  id: string;
  serviceName: string;
  barberName: string;
  date: string;
  time: string;
  price: number;
  status: string;
}

export interface BusinessHoursEntry {
  day: string;
  open: string;
  closed: boolean;
}
