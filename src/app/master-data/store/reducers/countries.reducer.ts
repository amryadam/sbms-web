import { createReducer, on } from '@ngrx/store';
import { Country } from '../../models/country';
import {
  LoadCountries,
  LoadCountriesFail,
  LoadCountriesSuccess,
} from '../actions';

export interface CountryState {
  entities: Country[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CountryState = {
  entities: [],
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    LoadCountries,
    (state): CountryState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    LoadCountriesFail,
    (state): CountryState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    LoadCountriesSuccess,
    (state, action): CountryState => ({
      entities: action.payload,
      loaded: true,
      loading: false,
    })
  )
);

export const getCountriesEntities = (state: CountryState) => state.entities;
export const getCountryLoading = (state: CountryState) => state.loading;
export const getCountryLoaded = (state: CountryState) => state.loaded;
