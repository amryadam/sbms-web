import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Order } from '../../models/order';

export const OrdersActions = createActionGroup({
  source: 'Order',
  events: {
    // Load Orders Action
    'Load Orders': emptyProps(),
    'Load Orders Fail': props<{ message: any }>(),
    'Load Orders Success': props<{ payload: Order[] }>(),
    //create Order Action
    'Create Order': props<{ payload: Order }>(),
    'Create Order Fail': props<{ message: any }>(),
    'Create Order Success': props<{ payload: Order }>(),
    // Update customer action
    'Update Order': props<{ payload: Order }>(),
    'Update Order Fail': props<{ message: any }>(),
    'Update Order Success': props<{ payload: Order }>(),
    // Remove customer action
    'Remove Order': props<{ payload: Order }>(),
    'Remove Order Fail': props<{ message: any }>(),
    'Remove Order Success': props<{ payload: Order }>(),
    // Remove customers action
    'Remove Orders List': props<{ payload: Order[] }>(),
    'Remove Orders List Fail': props<{ message: any }>(),
    'Remove Orders List Success': props<{ payload: Order[] }>(),
  },
});
