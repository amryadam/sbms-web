import { createReducer, on } from '@ngrx/store';

import { Order } from '../../models/order';
import { OrdersActions } from '../actions/orders.actions';
import { toEntities } from '../../../util/ConvertArrayToEntity';
import { removeProprieties } from '../../../util/RemoveProprieties';

export interface OrderState {
  entities: { [id: number | string]: Order };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    OrdersActions.loadOrders,
    (state, action): OrderState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(
    OrdersActions.loadOrdersFail,
    (state, action): OrderState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(OrdersActions.loadOrdersSuccess, (state, action) => {
    let c = toEntities(action.payload);
    return {
      entities: { ...state.entities, ...c },
      loaded: false,
      loading: true,
    };
  }),
  on(
    OrdersActions.createOrder,
    OrdersActions.updateOrder,
    OrdersActions.removeOrder,
    OrdersActions.removeOrdersList,
    (state): OrderState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    OrdersActions.createOrderFail,
    OrdersActions.updateOrderFail,
    OrdersActions.removeOrderFail,
    OrdersActions.removeOrdersListFail,
    (state): OrderState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    OrdersActions.createOrderSuccess,
    OrdersActions.updateOrderSuccess,
    (state, action): OrderState => {
      const order = action.payload;
      return {
        entities: { ...state.entities, [order.id]: order },
        loaded: true,
        loading: false,
      };
    }
  ),
  on(OrdersActions.removeOrderSuccess, (state, action): OrderState => {
    const { [action.payload.id]: removed, ...entities } = state.entities;
    return {
      entities: { ...entities },
      loading: false,
      loaded: true,
    };
  }),
  on(OrdersActions.removeOrdersListSuccess, (state, action): OrderState => {
    const ids = action.payload.map((e) => e.id);
    const entities = removeProprieties(state.entities, ids);
    return {
      entities: entities,
      loading: false,
      loaded: true,
    };
  })
);

export const getOrderEntity = (state: OrderState) => state.entities;
export const getOrderLoading = (state: OrderState) => state.loading;
export const getOrderLoaded = (state: OrderState) => state.loaded;

export const getAllOrder = (entities: { [id: string | number]: Order }) =>
  Object.keys(entities).map((id) => entities[id]);
