import { OrderDetails } from './order-details';

export interface Cart {
  id: string;
  code: string;
  totalOrder: number;
  totalItems: number;
  detailsList: OrderDetails[];
}
