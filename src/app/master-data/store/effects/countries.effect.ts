import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { CountriesActions } from '../actions';

@Injectable()
export class CountriesEffect {
  /*
    To handle the behaviour of the Effect when different Action instances
    occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  loadCountiesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesActions.loadCountries),
      exhaustMap(() =>
        this.countriesService
          .getCountries()
          .pipe(map((res) => CountriesActions.loadCountriesSuccess({ payload: res })))
      )
    )
  );

  constructor(private actions$: Actions, private countriesService: CountriesService) {}
}
