import { Country } from '../../models/country';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CountriesActions = createActionGroup({
  source: 'MasterData',
  events: {
    'Load Countries': emptyProps(),
    'Load Countries Fail': props<{ message: String }>(),
    'Load Countries Success': props<{ payload: Country[] }>(),
    'Create Country': props<{ id: string; payload: Country }>(),
    'Create Country Fail': props<{ message: string }>(),
    'Create Country Success': props<{ payload: Country }>(),
  },
});
