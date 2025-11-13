import type { Product, Testimonial } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Cyberpunk UI Kit',
    image: 'https://picsum.photos/seed/product1/600/400',
    price: 79,
    promoPrice: 49,
    rating: 5,
    sales: 1204,
    purchaseUrl: '#',
  },
  {
    id: 2,
    name: 'AI-Powered Logo Generator',
    image: 'https://picsum.photos/seed/product2/600/400',
    price: 99,
    promoPrice: 69,
    rating: 4,
    sales: 2345,
    purchaseUrl: '#',
  },
  {
    id: 3,
    name: 'Futuristic Font Pack',
    image: 'https://picsum.photos/seed/product3/600/400',
    price: 25,
    rating: 5,
    sales: 890,
    purchaseUrl: '#',
  },
  {
    id: 4,
    name: 'VR/AR Development Course',
    image: 'https://picsum.photos/seed/product4/600/400',
    price: 199,
    rating: 5,
    sales: 650,
    purchaseUrl: '#',
  },
  {
    id: 5,
    name: 'Digital Art Masterclass',
    image: 'https://picsum.photos/seed/product5/600/400',
    price: 149,
    rating: 4,
    sales: 1500,
    purchaseUrl: '#',
  },
  {
    id: 6,
    name: 'Synthwave Music Pack',
    image: 'https://picsum.photos/seed/product6/600/400',
    price: 49,
    rating: 5,
    sales: 3210,
    purchaseUrl: '#',
  }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Lead Developer',
        avatar: 'https://picsum.photos/seed/avatar1/100/100',
        quote: 'The Cyberpunk UI Kit completely transformed our project. The quality is top-notch and saved us hundreds of hours. A must-have for any futuristic-themed app!'
    },
    {
        id: 2,
        name: 'Samantha Bee',
        role: 'Graphic Designer',
        avatar: 'https://picsum.photos/seed/avatar2/100/100',
        quote: 'I was blown away by the Futuristic Font Pack. The variety and style are perfect for creating striking visuals. My clients are always impressed.'
    },
    {
        id: 3,
        name: 'David Chen',
        role: 'Indie Game Dev',
        avatar: 'https://picsum.photos/seed/avatar3/100/100',
        quote: 'The Synthwave Music Pack is pure gold. The tracks are immersive and set the perfect mood for my game. The production quality is incredible for the price.'
    }
];
