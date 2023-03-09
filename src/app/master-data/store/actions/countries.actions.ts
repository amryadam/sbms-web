import { createAction, createActionGroup, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const LOAD_COUNTRIES = '[MasterData] Load Countries';
export const LOAD_COUNTRIES_FAIL = '[MasterData] Load Countries Fail';
export const LOAD_COUNTRIES_SUCCESS = '[MasterData] Load Countries Success';

/**
 * Every action comprises at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export const LoadCountries = createAction(LOAD_COUNTRIES);
export const LoadCountriesFail = createAction(
  LOAD_COUNTRIES_FAIL,
  props<{ message: String }>()
);
export const LoadCountriesSuccess = createAction(
  LOAD_COUNTRIES_SUCCESS,
  props<{ payload: Country[] }>()
);

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

export const CountriesActions = createActionGroup({
  source: 'MasterData',
  events: {
    'Load Countries': props<{ message: String }>(),
    'Load Countries Fail': props<{ message: String }>(),
    'Load Countries Success': props<{ countries: Country[] }>(),
  },
});
