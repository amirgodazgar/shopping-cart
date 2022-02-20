export interface IProducts {
  id: number;
  category: string;
  description: string;
  image: string;
  price: 109.95;
  rating: { rate: number; count: number };
  title: string;
  amount?: number;
}
