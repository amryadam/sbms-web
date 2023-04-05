import { createSelector } from '@ngrx/store';
import { MasterDataState, selectMasterData } from '../reducers';
import * as fromReducer from '../reducers/categories.reducer';
import { getRouterState } from '../../../store';
import { Category } from '../../models/category';

export const getCategoryState = createSelector(
  selectMasterData,
  (state: MasterDataState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getCategoryState,
  fromReducer.getCategoryEntity
);
export const getCategoryLoading = createSelector(getCategoryState, fromReducer.getCategoryLoading);
export const getCategoryLoaded = createSelector(getCategoryState, fromReducer.getCategoryLoaded);

export const getSelectedCategory = createSelector(
  getCategoriesEntities,
  getRouterState,
  (entities, router): Category => {
    return router.state && entities[router.state.params['categoryId']];
  }
);

export const getAllCategories = createSelector(getCategoriesEntities, fromReducer.getAllCategory);
