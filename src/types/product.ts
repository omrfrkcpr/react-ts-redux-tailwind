export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  category: string;
  rating: number;
  brand: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  images: string[];
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
