import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { LoadCountries, LoadCountriesSuccess } from '../actions';

@Injectable()
export class CountriesEffect {
  /*
To handle the behaviour of the Effect when different Action instances
occurs on the same effect you can change mergeMap to other operators
*/

  // effect from simulating an API call success
  loadCountiesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadCountries),
      mergeMap(() =>
        this.countriesService.countries$.pipe(
          map((res) => LoadCountriesSuccess({ payload: res }))
        )
      )
    )
  );
  // // effect for simulating an API error
  // getMockDataWithErrorEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ApiGetMockDataWithError),
  //     tap(() => {
  //       console.log('new getMockDataWithErrorEffect occurred in queue');
  //     }),
  //     mergeMap((action) => {
  //       console.log('new getMockDataWithErrorEffect running');
  //       return this.mockApi.getApiError().pipe(
  //         map((res) => ApiSuccess({ data: res })),
  //         catchError((error) => of(ApiError({ error }))),
  //         tap(() => {
  //           console.log('getMockDataWithErrorEffect Finished');
  //         })
  //       );
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) {}
}
