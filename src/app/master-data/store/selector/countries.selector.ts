import { createSelector } from '@ngrx/store';
import { MasterDataState, selectMasterData } from '../reducers';
import {
  getCountriesEntities,
  getCountryLoaded,
  getCountryLoading,
} from '../reducers/countries.reducer';
import { getRouterState } from '../../../store';
import { Country } from '../../models/country';

export const getCountriesState = createSelector(
  selectMasterData,
  (state: MasterDataState) => state.countries
);

export const getAllCountries = createSelector(
  getCountriesState,
  getCountriesEntities
);
export const getCountriesLoading = createSelector(
  getCountriesState,
  getCountryLoading
);
export const getCountriesLoaded = createSelector(
  getCountriesState,
  getCountryLoaded
);

export const getSelectedCountry = createSelector(
  getCountriesState,
  getRouterState,
  (state, router): Country | undefined => {
    return state.entities.find(
      (country) => country.cca3 == router.state.params['countryId']
    );
  }
);
