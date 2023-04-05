import * as fromOrders from './orders.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface OrdersState {
  orders: fromOrders.OrderState;
}

export const reducers: ActionReducerMap<OrdersState> = {
  orders: fromOrders.reducer,
};

export const selectOrders = createFeatureSelector<OrdersState>('orders');
