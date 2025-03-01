export interface Apartment {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  amenities: string[];
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}