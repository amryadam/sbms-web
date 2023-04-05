import { createSelector } from '@ngrx/store';
import { OrdersState, selectOrders } from '../reducers';
import * as fromReducer from '../reducers/orders.reducer';
import { getRouterState } from '../../../store';
import { Order } from '../../models/order';

export const getOrderState = createSelector(selectOrders, (state: OrdersState) => state.orders);

export const getOrdersEntities = createSelector(getOrderState, fromReducer.getOrderEntity);
export const getOrderLoading = createSelector(getOrderState, fromReducer.getOrderLoading);
export const getOrderLoaded = createSelector(getOrderState, fromReducer.getOrderLoaded);

export const getSelectedOrder = createSelector(
  getOrdersEntities,
  getRouterState,
  (entities, router): Order => {
    return router.state && entities[router.state.params['orderId']];
  }
);

export const getAllOrders = createSelector(getOrdersEntities, fromReducer.getAllOrder);
