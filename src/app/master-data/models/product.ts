import { Category } from './category';

export interface Product {
  id: string;
  code?: string;
  name?: string;
  price?: number;
  rating?: number;
  imageUri?: string;
  description?: string;
  category: Category[] | null;
}
