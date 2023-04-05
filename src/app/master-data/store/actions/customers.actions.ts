import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../../models/customer';

export const CustomersActions = createActionGroup({
  source: 'MasterData',
  events: {
    // Load Customers Action
    'Load Customers': emptyProps(),
    'Load Customers Fail': props<{ message: any }>(),
    'Load Customers Success': props<{ payload: Customer[] }>(),
    //create Customer Action
    'Create Customer': props<{ payload: Customer }>(),
    'Create Customer Fail': props<{ message: any }>(),
    'Create Customer Success': props<{ payload: Customer }>(),
    // Update customer action
    'Update Customer': props<{ payload: Customer }>(),
    'Update Customer Fail': props<{ message: any }>(),
    'Update Customer Success': props<{ payload: Customer }>(),
    // Remove customer action
    'Remove Customer': props<{ payload: Customer }>(),
    'Remove Customer Fail': props<{ message: any }>(),
    'Remove Customer Success': props<{ payload: Customer }>(),
    // Remove customers action
    'Remove Customers List': props<{ payload: Customer[] }>(),
    'Remove Customers List Fail': props<{ message: any }>(),
    'Remove Customers List Success': props<{ payload: Customer[] }>(),
  },
});
