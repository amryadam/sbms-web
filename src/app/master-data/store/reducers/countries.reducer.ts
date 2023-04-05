import { createReducer, on } from '@ngrx/store';
import { Country } from '../../models/country';
import { CountriesActions } from '../actions';
import { toCountriesEntities } from '../../../util/ConvertArrayToEntity';

export interface CountryState {
  entities: { [id: number | string]: Country };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CountryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    CountriesActions.loadCountries,
    (state): CountryState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    CountriesActions.loadCountriesFail,
    (state): CountryState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    CountriesActions.loadCountriesSuccess,
    (state, action): CountryState => ({
      entities: toCountriesEntities(action.payload),
      loaded: true,
      loading: false,
    })
  )
);

export const getCountriesEntities = (state: CountryState) => state.entities;
export const getCountryLoading = (state: CountryState) => state.loading;
export const getCountryLoaded = (state: CountryState) => state.loaded;
export const getAllCountries = (entities: { [id: string | number]: Country }) =>
  Object.keys(entities).map((id) => entities[id]);
