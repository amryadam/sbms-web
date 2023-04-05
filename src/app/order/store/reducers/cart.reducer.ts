import { createReducer, on } from '@ngrx/store';

import { Order } from '../../models/order';
import { CartsActions } from '../actions/cart.actions';
import { OrderDetails } from '../../models/order-details';
import { toCartEntities } from '../../../util/ConvertArrayToEntity';

export interface CartState {
  cart: Order;
}

export const initialState: CartState = {
  cart: { id: '', code: '', totalOrder: 0, totalItems: 0, detailsList: [] },
};

export const reducer = createReducer(
  initialState,
  on(CartsActions.addItem, (state, action): CartState => {
    const product = action.payload;
    const orderDetailsEntities: { [id: string]: OrderDetails } = toCartEntities(
      state.cart.detailsList
    );
    let editedEntities: { [id: string]: OrderDetails };
    if (orderDetailsEntities[product.id] == null) {
      let newProduct: OrderDetails = {
        id: '',
        numberOfItems: 1,
        pricePerItem: product.price,
        product: product,
      };
      editedEntities = { newProduct, ...orderDetailsEntities };
    } else {
      const { [product.id]: editedProduct, ...entities } = orderDetailsEntities;
      editedEntities = {
        [product.id]: { ...editedProduct, numberOfItems: editedProduct.numberOfItems + 1 },
        ...entities,
      };
    }
    const cart: Order = {
      id: '',
      code: '',
      totalOrder: state.cart.totalOrder + action.payload.price,
      totalItems: state.cart.totalItems + 1,
      detailsList: getAllCart(editedEntities),
    };

    return { cart: cart };
  }),
  on(CartsActions.removeItem, (state, action): CartState => {
    const product = action.payload;
    const orderDetailsEntities: { [id: string]: OrderDetails } = toCartEntities(
      state.cart.detailsList
    );
    let editedEntities: { [id: string]: OrderDetails };
    if (orderDetailsEntities[product.id].numberOfItems <= 1) {
      const { [product.id]: removed, ...entities } = orderDetailsEntities;
      editedEntities = entities;
    } else {
      const { [product.id]: editedProduct, ...entities } = orderDetailsEntities;
      editedEntities = {
        [product.id]: { ...editedProduct, numberOfItems: editedProduct.numberOfItems - 1 },
        ...entities,
      };
    }

    const cart: Order = {
      id: '',
      code: '',
      totalOrder: state.cart.totalOrder - action.payload.price,
      totalItems: state.cart.totalItems - 1,
      detailsList: getAllCart(editedEntities),
    };

    return { cart: cart };
  })
);

export const getCart = (state: CartState) => state.cart;
export const getAllCart = (entities: { [id: string | number]: OrderDetails }) =>
  Object.keys(entities).map((id) => entities[id]);
