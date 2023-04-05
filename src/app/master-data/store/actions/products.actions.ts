import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../models/product';

export const ProductsActions = createActionGroup({
  source: 'MasterData',
  events: {
    // Load Products Action
    'Load Products': emptyProps(),
    'Load Products Fail': props<{ message: any }>(),
    'Load Products Success': props<{ payload: Product[] }>(),
    //create Product Action
    'Create Product': props<{ payload: Product }>(),
    'Create Product Fail': props<{ message: any }>(),
    'Create Product Success': props<{ payload: Product }>(),
    // Update customer action
    'Update Product': props<{ payload: Product }>(),
    'Update Product Fail': props<{ message: any }>(),
    'Update Product Success': props<{ payload: Product }>(),
    // Remove customer action
    'Remove Product': props<{ payload: Product }>(),
    'Remove Product Fail': props<{ message: any }>(),
    'Remove Product Success': props<{ payload: Product }>(),
    // Remove customers action
    'Remove Products List': props<{ payload: Product[] }>(),
    'Remove Products List Fail': props<{ message: any }>(),
    'Remove Products List Success': props<{ payload: Product[] }>(),
  },
});
