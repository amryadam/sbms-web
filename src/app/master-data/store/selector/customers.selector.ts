import { createSelector } from '@ngrx/store';
import { MasterDataState, selectMasterData } from '../reducers';
import * as fromReducer from '../reducers/customers.reducer';
import { getRouterState } from '../../../store';
import { Customer } from '../../models/customer';

export const getCustomerState = createSelector(
  selectMasterData,
  (state: MasterDataState) => state.customer
);

export const getCustomersEntities = createSelector(getCustomerState, fromReducer.getCustomerEntity);
export const getCustomerLoading = createSelector(getCustomerState, fromReducer.getCustomerLoading);
export const getCustomerLoaded = createSelector(getCustomerState, fromReducer.getCustomerLoaded);

export const getSelectedCustomer = createSelector(
  getCustomersEntities,
  getRouterState,
  (entities, router): Customer => {
    return router.state && entities[router.state.params['customerId']];
  }
);

export const getAllCustomers = createSelector(getCustomersEntities, fromReducer.getAllCustomer);
