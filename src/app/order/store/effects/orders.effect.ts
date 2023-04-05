import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import { OrdersActions } from '../actions';
import { exhaustMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../../../services/toast.service';

@Injectable()
export class OrdersEffect {
  createOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.createOrder),
      exhaustMap((action) =>
        this.orderService.addOrder(action.payload).pipe(
          tap(() => this.toast.showSuccess('Order Created')),
          map((res) => OrdersActions.createOrderSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(OrdersActions.createOrderFail({ message: err }));
          })
        )
      )
    )
  );

  updateOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.updateOrder),
      exhaustMap((action) =>
        this.orderService.updateOrder(action.payload).pipe(
          tap(() => this.toast.showSuccess('Order Updated')),
          map((res) => OrdersActions.updateOrderSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(OrdersActions.updateOrderFail({ message: err }));
          })
        )
      )
    )
  );

  removeOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.removeOrder),
      exhaustMap((action) =>
        this.orderService.removeOrder(action.payload.id).pipe(
          tap(() => this.toast.showSuccess('Order Removed')),
          map(() => OrdersActions.removeOrderSuccess({ payload: action.payload })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(OrdersActions.removeOrderFail({ message: err.message }));
          })
        )
      )
    )
  );

  removeOrdersListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.removeOrdersList),
      exhaustMap((action) => {
        const ids = action.payload.map((e) => e.id);
        return this.orderService.removeOrderList(ids).pipe(
          tap(() => this.toast.showSuccess('Orders Removed')),
          map(() => {
            return OrdersActions.removeOrdersListSuccess({ payload: action.payload });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(OrdersActions.removeOrdersListFail({ message: err.message }));
          })
        );
      })
    )
  );

  loadOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      exhaustMap(() =>
        this.orderService.getOrder().pipe(
          tap(() => this.toast.showSuccess('Orders Loaded')),
          map((res) => {
            return OrdersActions.loadOrdersSuccess({ payload: res });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(OrdersActions.loadOrdersFail({ message: err.message }));
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
