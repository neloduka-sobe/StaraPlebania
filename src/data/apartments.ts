import { Apartment } from '../types';

export const apartments: Apartment[] = [
  {
    id: 1,
    name: 'Mountain View Suite',
    description: 'A spacious apartment with stunning mountain views, perfect for couples or solo travelers.',
    price: 85,
    capacity: 2,
    size: 35,
    amenities: ['Wi-Fi', 'Kitchen', 'Air conditioning', 'Private bathroom', 'TV'],
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
    name: 'Garden Retreat',
    description: 'A cozy apartment with direct access to our beautiful garden, ideal for nature lovers.',
    price: 75,
    capacity: 2,
    size: 30,
    amenities: ['Wi-Fi', 'Kitchen', 'Garden access', 'Private bathroom', 'Workspace'],
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
    name: 'Urban Loft',
    description: 'A modern loft-style apartment with urban design elements, perfect for digital nomads.',
    price: 95,
    capacity: 3,
    size: 45,
    amenities: ['Wi-Fi', 'Full kitchen', 'Air conditioning', 'Private bathroom', 'Smart TV', 'Workspace'],
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
    name: 'Family Suite',
    description: 'A spacious apartment designed for families, with separate bedroom and plenty of space.',
    price: 120,
    capacity: 4,
    size: 60,
    amenities: ['Wi-Fi', 'Full kitchen', 'Air conditioning', 'Private bathroom', 'TV', 'Washing machine'],
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
    name: 'Cozy Studio',
    description: 'A compact and affordable studio apartment, perfect for budget travelers.',
    price: 65,
    capacity: 2,
    size: 25,
    amenities: ['Wi-Fi', 'Kitchenette', 'Private bathroom', 'TV'],
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
    name: 'Penthouse Apartment',
    description: 'Our premium penthouse apartment with panoramic views and luxury amenities.',
    price: 150,
    capacity: 4,
    size: 75,
    amenities: ['Wi-Fi', 'Full kitchen', 'Air conditioning', 'Private bathroom', 'Smart TV', 'Terrace', 'Premium furniture'],
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