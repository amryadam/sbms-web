import * as fromCountries from './countries.reducer';
import * as fromCustomers from './customers.reducer';
import * as fromCategories from './categories.reducer';
import * as fromProducts from './products.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface MasterDataState {
  countries: fromCountries.CountryState;
  customer: fromCustomers.CustomerState;
  categories: fromCategories.CategoryState;
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<MasterDataState> = {
  countries: fromCountries.reducer,
  customer: fromCustomers.reducer,
  categories: fromCategories.reducer,
  products: fromProducts.reducer,
};

export const selectMasterData = createFeatureSelector<MasterDataState>('masterData');
