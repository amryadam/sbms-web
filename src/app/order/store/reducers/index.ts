import * as fromOrders from './orders.reducer';
import * as fromCart from './cart.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface OrdersState {
  orders: fromOrders.OrderState;
  cart: fromCart.CartState;
}

export const reducers: ActionReducerMap<OrdersState> = {
  orders: fromOrders.reducer,
  cart: fromCart.reducer,
};

export const selectOrders = createFeatureSelector<OrdersState>('orders');
