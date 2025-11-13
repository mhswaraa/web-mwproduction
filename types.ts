
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  promoPrice?: number;
  rating: number;
  sales: number;
  purchaseUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  role: string;
}

export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}
