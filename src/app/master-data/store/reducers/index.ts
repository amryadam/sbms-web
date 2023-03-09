import * as fromCountries from './countries.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface MasterDataState {
  countries: fromCountries.CountryState;
}

export const reducers: ActionReducerMap<MasterDataState> = {
  countries: fromCountries.reducer,
};

// export const countryFeature = createFeature({
//   name: 'countries',
//   reducer: reducer
// });

// export const getMasterDataState =createFeatureSelector<MasterDataState>('masterData')
export const selectMasterData =
  createFeatureSelector<MasterDataState>('masterData');
