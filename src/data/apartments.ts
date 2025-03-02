import { Apartment } from '../types';

export const apartments: Apartment[] = [
  {
    id: 1,
    name: 'Apartament nr 1',
    description: 'Przestronny apartment z własną łazienką, anaeksem kuchennym; składający się z pokoju dziennego i sypialni.',
    price: 250,
    capacity: 2,
    size: 35,
    amenities: ['Wi-Fi', 'Aneks Kuchenny', 'Lodówka', 'Prywatna Łazienka', 'Telewizor', 'Czajnik', 'Kuchenka Elektryczna', 'Szafa', 'Przybory kuchenne', 'Kuchenka Mikrofalowa'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        width: 1200,
        height: 800,
        alt: 'Mountain View Suite living room'
      },
      {
        src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
        width: 1200,
        height: 800,
        alt: 'Mountain View Suite bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
        width: 1200,
        height: 800,
        alt: 'Mountain View Suite bathroom'
      }
    ]
  },
  {
    id: 2,
    name: 'Apartament nr 2',
    description: 'Przestronny rodzinny apartment z własną łazienką, anaeksem kuchennym; składający się z pokoju dziennego i sypialni.',
    price: 450,
    capacity: 4,
    size: 35,
    amenities: ['Wi-Fi', 'Aneks Kuchenny', 'Lodówka', 'Prywatna Łazienka', 'Zmywarka', 'Kuchenka Mikrofalowa', 'Czajnik', 'Kuchenka Elektryczna', 'Szafa', 'Przybory kuchenne'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        width: 1200,
        height: 800,
        alt: 'Garden Retreat living area'
      },
      {
        src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
        width: 1200,
        height: 800,
        alt: 'Garden Retreat bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1',
        width: 1200,
        height: 800,
        alt: 'Garden Retreat bathroom'
      }
    ]
  },
  {
    id: 3,
    name: 'Apartament nr 3',
    description: 'Przestronny rodzinny apartment z własną łazienką, anaeksem kuchennym; składający się z pokoju dziennego i sypialni.',
    price: 450,
    capacity: 4,
    size: 35,
    amenities: ['Wi-Fi', 'Aneks Kuchenny', 'Lodówka', 'Prywatna Łazienka', 'Telewizor', 'Kuchenka Mikrofalowa', 'Czajnik', 'Kuchenka Elektryczna', 'Szafa', 'Przybory kuchenne'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        width: 1200,
        height: 800,
        alt: 'Urban Loft living space'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        width: 1200,
        height: 800,
        alt: 'Urban Loft bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
        width: 1200,
        height: 800,
        alt: 'Urban Loft bathroom'
      }
    ]
  },
  {
    id: 4,
    name: 'Apartament nr 4',
    description: 'Przestronny rodzinny apartment z własną łazienką, anaeksem kuchennym; składający się z pokoju dziennego i sypialni.',
    price: 450,
    capacity: 4,
    size: 35,
    amenities: ['Wi-Fi', 'Aneks Kuchenny', 'Lodówka', 'Prywatna Łazienka', 'Telewizor', 'Kuchenka Mikrofalowa', 'Czajnik', 'Kuchenka Elektryczna', 'Szafa', 'Przybory kuchenne'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
        width: 1200,
        height: 800,
        alt: 'Family Suite living room'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
        width: 1200,
        height: 800,
        alt: 'Family Suite bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1',
        width: 1200,
        height: 800,
        alt: 'Family Suite bathroom'
      }
    ]
  },
  {
    id: 5,
    name: 'Apartament nr 5',
    description: 'Przestronny pokój dwuosobowy z własną łazienką i aneksem kuchennym.',
    price: 250,
    capacity: 2,
    size: 25,
    amenities: ['Wi-Fi', 'Prywatna Łazienka', 'Aneks Kuchenny', 'Pralka', 'Kuchenka Mikrofalowa', 'Kuchenka Elektryczna', 'Czajnik', 'Przybory Kuchenne'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a',
        width: 1200,
        height: 800,
        alt: 'Cozy Studio overview'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
        width: 1200,
        height: 800,
        alt: 'Cozy Studio bed'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
        width: 1200,
        height: 800,
        alt: 'Cozy Studio bathroom'
      }
    ]
  },
  {
    id: 6,
    name: 'Apartament nr 6',
    description: 'Przestronny pokój dwuosobowy z własną łazienką.',
    price: 250,
    capacity: 2,
    size: 25,
    amenities: ['Wi-Fi', 'Prywatna Łazienka', 'Czajnik', 'Zestaw do herbaty'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        width: 1200,
        height: 800,
        alt: 'Penthouse living room'
      },
      {
        src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
        width: 1200,
        height: 800,
        alt: 'Penthouse bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
        width: 1200,
        height: 800,
        alt: 'Penthouse bathroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1528913775512-624d24b27b96',
        width: 1200,
        height: 800,
        alt: 'Penthouse terrace'
      }
    ]
  }
];
