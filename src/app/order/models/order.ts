import { OrderDetails } from './order-details';

export interface Order {
  id: string;
  code: string;
  totalOrder: number;
  totalItems: number;
  detailsList: OrderDetails[];
}
