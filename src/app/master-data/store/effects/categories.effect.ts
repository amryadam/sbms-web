import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../../services/category.service';
import { CategoriesActions } from '../actions';
import { exhaustMap, map, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../../../services/toast.service';

@Injectable()
export class CategoriesEffect {
  createCategoryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.createCategory),
      exhaustMap((action) =>
        this.categoryService.addCategory(action.payload).pipe(
          tap(() => this.toast.showSuccess('Category Created')),
          map((res) => CategoriesActions.createCategorySuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CategoriesActions.createCategoryFail({ message: err }));
          })
        )
      )
    )
  );

  updateCategoryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.updateCategory),
      exhaustMap((action) =>
        this.categoryService.updateCategory(action.payload).pipe(
          tap(() => this.toast.showSuccess('Category Updated')),
          map((res) => CategoriesActions.updateCategorySuccess({ payload: res })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CategoriesActions.updateCategoryFail({ message: err }));
          })
        )
      )
    )
  );

  removeCategoryEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.removeCategory),
      exhaustMap((action) =>
        this.categoryService.removeCategory(action.payload.id).pipe(
          tap(() => this.toast.showSuccess('Category Removed')),
          map(() => CategoriesActions.removeCategorySuccess({ payload: action.payload })),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CategoriesActions.removeCategoryFail({ message: err.message }));
          })
        )
      )
    )
  );

  removeCategoriesListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.removeCategoriesList),
      exhaustMap((action) => {
        const ids = action.payload.map((e) => e.id);
        return this.categoryService.removeCategoryList(ids).pipe(
          tap(() => this.toast.showSuccess('Categories Removed')),
          map(() => {
            return CategoriesActions.removeCategoriesListSuccess({ payload: action.payload });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CategoriesActions.removeCategoriesListFail({ message: err.message }));
          })
        );
      })
    )
  );

  loadCategoriesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.loadCategories),
      exhaustMap(() =>
        this.categoryService.getCategory().pipe(
          tap(() => this.toast.showSuccess('Categories Loaded')),
          map((res) => {
            return CategoriesActions.loadCategoriesSuccess({ payload: res });
          }),
          catchError((err) => {
            this.toast.showFailed(err.message);
            return of(CategoriesActions.loadCategoriesFail({ message: err.message }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
    private toast: ToastService
  ) {}
}
