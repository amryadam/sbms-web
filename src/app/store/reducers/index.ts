import * as fromRouter from '@ngrx/router-store';
import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
  params: Params;
  queryParams: Params;
  url: string;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const getRouterState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'routerReducer'
  );

export class CustomerSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState; // == url = routerState.url called de-structure like imports
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return {
      url,
      queryParams,
      params,
    };
  }
}
