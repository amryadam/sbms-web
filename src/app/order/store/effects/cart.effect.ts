import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import { ToastService } from '../../../services/toast.service';
import { CartsActions } from '../actions';
import { exhaustMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CartEffect {
  addOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartsActions.createOrder),
      exhaustMap((action) =>
        this.orderService.addOrder(action.payload).pipe(
          tap(() => this.toast.showSuccess('Order Created')),
          map((res) => CartsActions.createOrderSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CartsActions.createOrderFail({ message: err }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toast: ToastService
  ) {}
}
