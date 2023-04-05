import { createSelector } from '@ngrx/store';
import { OrdersState, selectOrders } from '../reducers';
import * as fromReducer from '../reducers/cart.reducer';

export const getCartState = createSelector(selectOrders, (state: OrdersState) => state.cart);

export const getCart = createSelector(getCartState, fromReducer.getCart);
