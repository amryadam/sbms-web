import { createReducer, on } from '@ngrx/store';

import { Product } from '../../models/product';
import { ProductsActions } from '../actions/products.actions';
import { toEntities } from '../../../util/ConvertArrayToEntity';
import { removeProprieties } from '../../../util/RemoveProprieties';

export interface ProductState {
  entities: { [id: number | string]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    ProductsActions.loadProducts,
    (state, action): ProductState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(
    ProductsActions.loadProductsFail,
    (state, action): ProductState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(ProductsActions.loadProductsSuccess, (state, action) => {
    let c = toEntities(action.payload);
    return {
      entities: { ...state.entities, ...c },
      loaded: false,
      loading: true,
    };
  }),
  on(
    ProductsActions.createProduct,
    ProductsActions.updateProduct,
    ProductsActions.removeProduct,
    ProductsActions.removeProductsList,
    (state): ProductState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    ProductsActions.createProductFail,
    ProductsActions.updateProductFail,
    ProductsActions.removeProductFail,
    ProductsActions.removeProductsListFail,
    (state): ProductState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    ProductsActions.createProductSuccess,
    ProductsActions.updateProductSuccess,
    (state, action): ProductState => {
      const product = action.payload;
      return {
        entities: { ...state.entities, [product.id]: product },
        loaded: true,
        loading: false,
      };
    }
  ),
  on(ProductsActions.removeProductSuccess, (state, action): ProductState => {
    const { [action.payload.id]: removed, ...entities } = state.entities;
    return {
      entities: { ...entities },
      loading: false,
      loaded: true,
    };
  }),
  on(ProductsActions.removeProductsListSuccess, (state, action): ProductState => {
    const ids = action.payload.map((e) => e.id);
    const entities = removeProprieties(state.entities, ids);
    return {
      entities: entities,
      loading: false,
      loaded: true,
    };
  })
);

export const getProductEntity = (state: ProductState) => state.entities;
export const getProductLoading = (state: ProductState) => state.loading;
export const getProductLoaded = (state: ProductState) => state.loaded;

export const getAllProduct = (entities: { [id: string | number]: Product }) =>
  Object.keys(entities).map((id) => entities[id]);
