import { createSelector } from '@ngrx/store';
import { MasterDataState, selectMasterData } from '../reducers';
import * as fromReducer from '../reducers/products.reducer';
import { getRouterState } from '../../../store';
import { Product } from '../../models/product';

export const getProductState = createSelector(
  selectMasterData,
  (state: MasterDataState) => state.products
);

export const getProductsEntities = createSelector(getProductState, fromReducer.getProductEntity);
export const getProductLoading = createSelector(getProductState, fromReducer.getProductLoading);
export const getProductLoaded = createSelector(getProductState, fromReducer.getProductLoaded);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  getRouterState,
  (entities, router): Product => {
    return router.state && entities[router.state.params['productId']];
  }
);

export const getAllProducts = createSelector(getProductsEntities, fromReducer.getAllProduct);
