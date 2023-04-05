import { Product } from '../../master-data/models/product';

export interface OrderDetails {
  id: string;
  product: Product;
  pricePerItem: number;
  numberOfItems: number;
}
