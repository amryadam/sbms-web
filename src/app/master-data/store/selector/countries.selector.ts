import { createSelector } from '@ngrx/store';
import { MasterDataState, selectMasterData } from '../reducers';
import * as fromCountries from '../reducers/countries.reducer';
import { getRouterState } from '../../../store';
import { Country } from '../../models/country';

export const getCountriesState = createSelector(
  selectMasterData,
  (state: MasterDataState) => state.countries
);

export const getCountriesEntities = createSelector(
  getCountriesState,
  fromCountries.getCountriesEntities
);
export const getCountriesLoading = createSelector(
  getCountriesState,
  fromCountries.getCountryLoading
);
export const getCountriesLoaded = createSelector(getCountriesState, fromCountries.getCountryLoaded);

export const getSelectedCountry = createSelector(
  getCountriesEntities,
  getRouterState,
  (entities, router): Country => {
    return router.state && entities[router.state.params['countryId']];
  }
);

export const getAllCountries = createSelector(getCountriesEntities, fromCountries.getAllCountries);
