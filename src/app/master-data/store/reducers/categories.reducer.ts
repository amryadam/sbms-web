import { createReducer, on } from '@ngrx/store';

import { Category } from '../../models/category';
import { CategoriesActions } from '../actions/categories.actions';
import { toEntities } from '../../../util/ConvertArrayToEntity';
import { removeProprieties } from '../../../util/RemoveProprieties';

export interface CategoryState {
  entities: { [id: number | string]: Category };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    CategoriesActions.loadCategories,
    (state, action): CategoryState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(
    CategoriesActions.loadCategoriesFail,
    (state, action): CategoryState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(CategoriesActions.loadCategoriesSuccess, (state, action) => {
    let c = toEntities(action.payload);
    return {
      entities: { ...state.entities, ...c },
      loaded: false,
      loading: true,
    };
  }),
  on(
    CategoriesActions.createCategory,
    CategoriesActions.updateCategory,
    CategoriesActions.removeCategory,
    CategoriesActions.removeCategoriesList,
    (state): CategoryState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    CategoriesActions.createCategoryFail,
    CategoriesActions.updateCategoryFail,
    CategoriesActions.removeCategoryFail,
    CategoriesActions.removeCategoriesListFail,
    (state): CategoryState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    CategoriesActions.createCategorySuccess,
    CategoriesActions.updateCategorySuccess,
    (state, action): CategoryState => {
      const category = action.payload;
      return {
        entities: { ...state.entities, [category.id]: category },
        loaded: true,
        loading: false,
      };
    }
  ),
  on(CategoriesActions.removeCategorySuccess, (state, action): CategoryState => {
    const { [action.payload.id]: removed, ...entities } = state.entities;
    return {
      entities: { ...entities },
      loading: false,
      loaded: true,
    };
  }),
  on(CategoriesActions.removeCategoriesListSuccess, (state, action): CategoryState => {
    const ids = action.payload.map((e) => e.id);
    const entities = removeProprieties(state.entities, ids);
    return {
      entities: entities,
      loading: false,
      loaded: true,
    };
  })
);

export const getCategoryEntity = (state: CategoryState) => state.entities;
export const getCategoryLoading = (state: CategoryState) => state.loading;
export const getCategoryLoaded = (state: CategoryState) => state.loaded;

export const getAllCategory = (entities: { [id: string | number]: Category }) =>
  Object.keys(entities).map((id) => entities[id]);
