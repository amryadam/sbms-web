import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from '../../models/category';

export const CategoriesActions = createActionGroup({
  source: 'MasterData',
  events: {
    // Load Categories Action
    'Load Categories': emptyProps(),
    'Load Categories Fail': props<{ message: any }>(),
    'Load Categories Success': props<{ payload: Category[] }>(),
    //create Category Action
    'Create Category': props<{ payload: Category }>(),
    'Create Category Fail': props<{ message: any }>(),
    'Create Category Success': props<{ payload: Category }>(),
    // Update customer action
    'Update Category': props<{ payload: Category }>(),
    'Update Category Fail': props<{ message: any }>(),
    'Update Category Success': props<{ payload: Category }>(),
    // Remove customer action
    'Remove Category': props<{ payload: Category }>(),
    'Remove Category Fail': props<{ message: any }>(),
    'Remove Category Success': props<{ payload: Category }>(),
    // Remove customers action
    'Remove Categories List': props<{ payload: Category[] }>(),
    'Remove Categories List Fail': props<{ message: any }>(),
    'Remove Categories List Success': props<{ payload: Category[] }>(),
  },
});
