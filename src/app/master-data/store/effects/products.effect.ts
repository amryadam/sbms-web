import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import { ProductsActions } from '../actions';
import { exhaustMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../../../services/toast.service';

@Injectable()
export class ProductsEffect {
  createProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      exhaustMap((action) =>
        this.productService.addProduct(action.payload).pipe(
          tap(() => this.toast.showSuccess('Product Created')),
          map((res) => ProductsActions.createProductSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(ProductsActions.createProductFail({ message: err }));
          })
        )
      )
    )
  );

  updateProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      exhaustMap((action) =>
        this.productService.updateProduct(action.payload).pipe(
          tap(() => this.toast.showSuccess('Product Updated')),
          map((res) => ProductsActions.updateProductSuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(ProductsActions.updateProductFail({ message: err }));
          })
        )
      )
    )
  );

  removeProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.removeProduct),
      exhaustMap((action) =>
        this.productService.removeProduct(action.payload.id).pipe(
          tap(() => this.toast.showSuccess('Product Removed')),
          map(() => ProductsActions.removeProductSuccess({ payload: action.payload })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(ProductsActions.removeProductFail({ message: err.message }));
          })
        )
      )
    )
  );

  removeProductsListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.removeProductsList),
      exhaustMap((action) => {
        const ids = action.payload.map((e) => e.id);
        return this.productService.removeProductList(ids).pipe(
          tap(() => this.toast.showSuccess('Products Removed')),
          map(() => {
            return ProductsActions.removeProductsListSuccess({ payload: action.payload });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(ProductsActions.removeProductsListFail({ message: err.message }));
          })
        );
      })
    )
  );

  loadProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      exhaustMap(() =>
        this.productService.getProduct().pipe(
          tap(() => this.toast.showSuccess('Products Loaded')),
          map((res) => {
            return ProductsActions.loadProductsSuccess({ payload: res });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(ProductsActions.loadProductsFail({ message: err.message }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private toast: ToastService
  ) {}
}
