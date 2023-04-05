import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerService } from '../../services/customer.service';
import { CustomersActions } from '../actions';
import { exhaustMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../../../services/toast.service';

@Injectable()
export class CustomersEffect {
  createCustomerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.createCustomer),
      exhaustMap((action) =>
        this.customerService.addCustomer(action.payload).pipe(
          tap(() => this.toast.showSuccess('Customer Created')),
          map((res) => CustomersActions.createCustomerSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CustomersActions.createCustomerFail({ message: err }));
          })
        )
      )
    )
  );

  updateCustomerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.updateCustomer),
      exhaustMap((action) =>
        this.customerService.updateCustomer(action.payload).pipe(
          tap(() => this.toast.showSuccess('Customer Updated')),
          map((res) => CustomersActions.updateCustomerSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CustomersActions.updateCustomerFail({ message: err }));
          })
        )
      )
    )
  );

  removeCustomerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.removeCustomer),
      exhaustMap((action) =>
        this.customerService.removeCustomer(action.payload.id).pipe(
          tap(() => this.toast.showSuccess('Customer Removed')),
          map(() => CustomersActions.removeCustomerSuccess({ payload: action.payload })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CustomersActions.removeCustomerFail({ message: err.message }));
          })
        )
      )
    )
  );

  removeCustomersListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.removeCustomersList),
      exhaustMap((action) => {
        const ids = action.payload.map((e) => e.id);
        return this.customerService.removeCustomerList(ids).pipe(
          tap(() => this.toast.showSuccess('Customers Removed')),
          map(() => {
            return CustomersActions.removeCustomersListSuccess({ payload: action.payload });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CustomersActions.removeCustomersListFail({ message: err.message }));
          })
        );
      })
    )
  );

  loadCustomersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadCustomers),
      exhaustMap(() =>
        this.customerService.getCustomer().pipe(
          tap(() => this.toast.showSuccess('Customers Loaded')),
          map((res) => {
            return CustomersActions.loadCustomersSuccess({ payload: res });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CustomersActions.loadCustomersFail({ message: err.message }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private toast: ToastService
  ) {}
}
