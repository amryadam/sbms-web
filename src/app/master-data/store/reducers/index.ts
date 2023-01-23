import * as fromCountries from "./countries.reducer";
import {ActionReducerMap, createFeature, createFeatureSelector, createSelector} from "@ngrx/store";
import {CountryState, reducer} from "./countries.reducer";

export interface MasterDataState {
  countries : fromCountries.CountryState
}


export const reducers : ActionReducerMap<MasterDataState> = {
  countries: fromCountries.reducer
}

export const countryFeature = createFeature({
  name: 'countries',
  reducer: reducer
});

// export const getMasterDataState =createFeatureSelector<MasterDataState>('masterData')

export const getMasterDataState = (state: MasterDataState) => state.countries;

export const getCountriesState = createSelector(
  getMasterDataState,
  (state: CountryState) => state.data
);




export const featureKey = 'feature';

export interface FeatureState {
  counter: number;
}

export const selectFeature = createFeatureSelector<FeatureState>('masterData');

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
