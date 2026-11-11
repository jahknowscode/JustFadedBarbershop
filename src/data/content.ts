import type { Barber, Service, Testimonial, Appointment } from './types';

export const BUSINESS = {
  name: 'Just Faded',
  fullName: 'Just Faded Barbershop',
  tagline: 'Fresh cuts. Sharp fades. Little Havana.',
  phone: '(786) 873-5105',
  phoneHref: 'tel:+17868735105',
  email: 'hello@justfadedmiami.example',
  address: {
    line1: '1550 SW 1st St',
    line2: 'Little Havana',
    city: 'Miami',
    state: 'FL',
    zip: '33135',
  },
  neighborhood: "Miami's Little Havana",
  instagram: '@justfadedmiami',
  // Full address string used for map direction queries
  fullAddress: '1550 SW 1st St, Miami, FL 33135',
  googleMapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1550+SW+1st+St%2C+Miami%2C+FL+33135',
  appleMapsUrl:
    'https://maps.apple.com/?daddr=1550+SW+1st+St%2C+Miami%2C+FL+33135&dirflg=d',
};

export const IMAGES = {
  // Hero / fades
  heroFade:
    'https://images.pexels.com/photos/12464841/pexels-photo-12464841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroFresh:
    'https://images.pexels.com/photos/12074386/pexels-photo-12074386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroClipper:
    'https://images.pexels.com/photos/7447148/pexels-photo-7447148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroTemple:
    'https://images.pexels.com/photos/12464840/pexels-photo-12464840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fadeClose:
    'https://images.pexels.com/photos/39559262/pexels-photo-39559262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fadeBack:
    'https://images.pexels.com/photos/4625632/pexels-photo-4625632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fadeRazor:
    'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fadeBw:
    'https://images.pexels.com/photos/10775080/pexels-photo-10775080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  youngCut:
    'https://images.pexels.com/photos/34702982/pexels-photo-34702982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  detailedCut:
    'https://images.pexels.com/photos/5970247/pexels-photo-5970247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  afroTrim:
    'https://images.pexels.com/photos/7447150/pexels-photo-7447150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Interiors / neighborhood
  interiorVibrant:
    'https://images.pexels.com/photos/9703068/pexels-photo-9703068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  neonSign:
    'https://images.pexels.com/photos/7317293/pexels-photo-7317293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  streetBarber:
    'https://images.pexels.com/photos/24713128/pexels-photo-24713128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  vintageShop:
    'https://images.pexels.com/photos/12280620/pexels-photo-12280620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Barbers
  barber1:
    'https://images.pexels.com/photos/32351053/pexels-photo-32351053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  barber2:
    'https://images.pexels.com/photos/19664861/pexels-photo-19664861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  barber3:
    'https://images.pexels.com/photos/18213699/pexels-photo-18213699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  barber4:
    'https://images.pexels.com/photos/39236030/pexels-photo-39236030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // Client portraits for testimonials
  client1:
    'https://images.pexels.com/photos/7781848/pexels-photo-7781848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  client2:
    'https://images.pexels.com/photos/8249810/pexels-photo-8249810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const SERVICES: Service[] = [
  {
    id: 'svc-1',
    name: 'Skin Fade',
    description:
      'Our signature service. A seamless blend from skin to length, finished with a clean line-up. The cut that put us on the map.',
    price: 35,
    duration: 45,
    category: 'Fade',
    featured: true,
  },
  {
    id: 'svc-2',
    name: 'Low Fade',
    description:
      'A subtle fade that sits low around the ears and neckline. Clean, versatile, and easy to maintain between visits.',
    price: 30,
    duration: 40,
    category: 'Fade',
    featured: true,
  },
  {
    id: 'svc-3',
    name: 'High Top Fade',
    description:
      'Length on top, sharp fade on the sides. A classic silhouette with a fresh, modern finish.',
    price: 38,
    duration: 50,
    category: 'Fade',
    featured: true,
  },
  {
    id: 'svc-4',
    name: 'Taper Fade',
    description:
      'A gradual taper around the ears and neck that keeps length everywhere else. The everyday favorite.',
    price: 28,
    duration: 35,
    category: 'Fade',
    featured: true,
  },
  {
    id: 'svc-5',
    name: 'Classic Haircut',
    description:
      'A clean, traditional cut with scissors and clippers. No fade, just a sharp shape that fits your style.',
    price: 25,
    duration: 30,
    category: 'Haircut',
    featured: false,
  },
  {
    id: 'svc-6',
    name: 'Fade + Beard',
    description:
      'A skin or taper fade paired with a beard line-up and shape. The full reset, top to bottom.',
    price: 45,
    duration: 60,
    category: 'Combo',
    featured: true,
  },
  {
    id: 'svc-7',
    name: 'Kids Cut (Under 12)',
    description:
      'A fresh cut for the young ones. Patient barbers, quick turnaround, and a look they will actually like.',
    price: 20,
    duration: 30,
    category: 'Haircut',
    featured: false,
  },
  {
    id: 'svc-8',
    name: 'Line-Up / Shape-Up',
    description:
      'A precision line-up to keep your cut looking fresh between full appointments. Quick and sharp.',
    price: 15,
    duration: 20,
    category: 'Maintenance',
    featured: false,
  },
];

export const BARBERS: Barber[] = [
  {
    id: 'barber-1',
    name: 'Carlos Mendez',
    title: 'Owner & Master Barber',
    bio: 'Carlos opened Just Faded in 2017 after cutting in shops across Little Havana for over a decade. He is known for clean skin fades and the kind of line-up that lasts two weeks.',
    specialties: ['Skin Fades', 'Line-Ups', 'High Top Fades'],
    image: IMAGES.barber1,
    experience: 14,
    instagram: '@carlos.cuts',
  },
  {
    id: 'barber-2',
    name: 'Rico Delgado',
    title: 'Senior Barber',
    bio: 'Rico grew up in the neighborhood and has been cutting hair since he was sixteen. His taper fades and beard work have a loyal following on Calle Ocho.',
    specialties: ['Taper Fades', 'Beard Line-Ups', 'Kids Cuts'],
    image: IMAGES.barber2,
    experience: 9,
    instagram: '@rico.fades',
  },
  {
    id: 'barber-3',
    name: 'Tony Reyes',
    title: 'Barber',
    bio: 'Tony brings a steady hand and a sharp eye for detail. Whether it is a classic cut or a fresh fade, he takes his time to get the lines right.',
    specialties: ['Classic Cuts', 'Low Fades', 'Shape-Ups'],
    image: IMAGES.barber3,
    experience: 7,
    instagram: '@tony.reyes',
  },
  {
    id: 'barber-4',
    name: 'Manny Suarez',
    title: 'Barber',
    bio: 'The newest face at Just Faded, Manny has quickly built a reputation for fast, clean work and a chair where everyone feels at home.',
    specialties: ['Skin Fades', 'Kids Cuts', 'Line-Ups'],
    image: IMAGES.barber4,
    experience: 4,
    instagram: '@manny.suarez',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex Rivera',
    role: 'Regular since 2018',
    rating: 5,
    quote:
      'Carlos has been cutting my hair for years. Nobody in Miami does a skin fade like him. I drive across town just to come here and it is worth every minute.',
    image: IMAGES.client1,
  },
  {
    id: 't2',
    name: 'Devon Carter',
    role: 'Client',
    rating: 5,
    quote:
      'Best fade I have had in years. Rico took his time, got the blend perfect, and the line-up was razor sharp. This is my spot from now on.',
    image: IMAGES.client2,
  },
  {
    id: 't3',
    name: 'Luis Hernandez',
    role: 'Client',
    rating: 5,
    quote:
      'Been coming here since they opened. Good people, good energy, and a fresh cut every single time. My kids come here too now.',
    image: IMAGES.youngCut,
  },
  {
    id: 't4',
    name: 'Jordan Bell',
    role: 'Client',
    rating: 5,
    quote:
      'Walked in not sure what I wanted. Tony talked me through it and the taper fade came out clean. Real neighborhood barbershop feel.',
    image: IMAGES.fadeClose,
  },
];

export const BUSINESS_HOURS = [
  { day: 'Monday', open: '10:00 AM – 7:00 PM', closed: false },
  { day: 'Tuesday', open: '9:00 AM – 7:00 PM', closed: false },
  { day: 'Wednesday', open: '9:00 AM – 7:00 PM', closed: false },
  { day: 'Thursday', open: '9:00 AM – 8:00 PM', closed: false },
  { day: 'Friday', open: '9:00 AM – 8:00 PM', closed: false },
  { day: 'Saturday', open: '8:00 AM – 6:00 PM', closed: false },
  { day: 'Sunday', open: 'Closed', closed: true },
];

export const TIME_SLOTS = [
  '9:00 AM',
  '9:45 AM',
  '10:30 AM',
  '11:15 AM',
  '12:00 PM',
  '1:00 PM',
  '1:45 PM',
  '2:30 PM',
  '3:15 PM',
  '4:00 PM',
  '4:45 PM',
  '5:30 PM',
  '6:15 PM',
  '7:00 PM',
];

export const UPCOMING_APPOINTMENTS: Appointment[] = [
  {
    id: 'appt-1',
    serviceName: 'Skin Fade',
    barberName: 'Carlos Mendez',
    date: 'Sat, Nov 15',
    time: '10:30 AM',
    price: 35,
    status: 'Confirmed',
  },
  {
    id: 'appt-2',
    serviceName: 'Line-Up / Shape-Up',
    barberName: 'Rico Delgado',
    date: 'Wed, Nov 19',
    time: '2:30 PM',
    price: 15,
    status: 'Confirmed',
  },
];

export const PAST_APPOINTMENTS: Appointment[] = [
  {
    id: 'appt-3',
    serviceName: 'Fade + Beard',
    barberName: 'Carlos Mendez',
    date: 'Oct 24, 2025',
    time: '11:15 AM',
    price: 45,
    status: 'Completed',
  },
  {
    id: 'appt-4',
    serviceName: 'Taper Fade',
    barberName: 'Rico Delgado',
    date: 'Sep 28, 2025',
    time: '4:00 PM',
    price: 28,
    status: 'Completed',
  },
  {
    id: 'appt-5',
    serviceName: 'High Top Fade',
    barberName: 'Tony Reyes',
    date: 'Aug 30, 2025',
    time: '9:45 AM',
    price: 38,
    status: 'Completed',
  },
];

export const ADMIN_APPOINTMENTS = [
  { id: 'a-1', client: 'Alex Rivera', service: 'Skin Fade', barber: 'Carlos Mendez', date: 'Nov 15', time: '10:30 AM', price: 35, status: 'Confirmed' },
  { id: 'a-2', client: 'Devon Carter', service: 'Taper Fade', barber: 'Rico Delgado', date: 'Nov 15', time: '11:15 AM', price: 28, status: 'Confirmed' },
  { id: 'a-3', client: 'Luis Hernandez', service: 'Fade + Beard', barber: 'Carlos Mendez', date: 'Nov 15', time: '1:00 PM', price: 45, status: 'Confirmed' },
  { id: 'a-4', client: 'Jordan Bell', service: 'Low Fade', barber: 'Tony Reyes', date: 'Nov 16', time: '9:00 AM', price: 30, status: 'Pending' },
  { id: 'a-5', client: 'Kevin Ortiz', service: 'Line-Up / Shape-Up', barber: 'Manny Suarez', date: 'Nov 16', time: '12:00 PM', price: 15, status: 'Confirmed' },
  { id: 'a-6', client: 'Eric Soto', service: 'Kids Cut (Under 12)', barber: 'Rico Delgado', date: 'Nov 16', time: '3:15 PM', price: 20, status: 'Pending' },
];
