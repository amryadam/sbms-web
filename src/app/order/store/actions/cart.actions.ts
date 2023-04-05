import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from '../../models/cart';
import { Order } from '../../models/order';
import { Product } from '../../../master-data/models/product';

export const CartsActions = createActionGroup({
  source: 'Cart',
  events: {
    // create order Action
    'Create Order': emptyProps(),
    'Create Order Fail': props<{ message: any }>(),
    'Create Order Success': props<{ payload: Order }>(),
    // add item to cart action
    'Add Item': props<{ payload: Product }>(),
    // Remove item action
    'Remove Item': props<{ payload: Product }>(),
    // Clear cart action
    'Clear Carts': emptyProps(),
  },
});
