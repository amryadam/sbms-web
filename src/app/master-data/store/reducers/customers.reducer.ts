import { createReducer, on } from '@ngrx/store';

import { Customer } from '../../models/customer';
import { CustomersActions } from '../actions/customers.actions';
import { toEntities } from '../../../util/ConvertArrayToEntity';
import { removeProprieties } from '../../../util/RemoveProprieties';

export interface CustomerState {
  entities: { [id: number | string]: Customer };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CustomerState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(
    CustomersActions.loadCustomers,
    (state, action): CustomerState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(
    CustomersActions.loadCustomersFail,
    (state, action): CustomerState => ({
      entities: { ...state.entities },
      loaded: false,
      loading: true,
    })
  ),
  on(CustomersActions.loadCustomersSuccess, (state, action) => {
    let c = toEntities(action.payload);
    return {
      entities: { ...state.entities, ...c },
      loaded: false,
      loading: true,
    };
  }),
  on(
    CustomersActions.createCustomer,
    CustomersActions.updateCustomer,
    CustomersActions.removeCustomer,
    CustomersActions.removeCustomersList,
    (state): CustomerState => ({
      ...state,
      loaded: false,
      loading: true,
    })
  ),
  on(
    CustomersActions.createCustomerFail,
    CustomersActions.updateCustomerFail,
    CustomersActions.removeCustomerFail,
    CustomersActions.removeCustomersListFail,
    (state): CustomerState => ({
      ...state,
      loaded: false,
      loading: false,
    })
  ),
  on(
    CustomersActions.createCustomerSuccess,
    CustomersActions.updateCustomerSuccess,
    (state, action): CustomerState => {
      const customer = action.payload;
      return {
        entities: { ...state.entities, [customer.id]: customer },
        loaded: true,
        loading: false,
      };
    }
  ),
  on(CustomersActions.removeCustomerSuccess, (state, action): CustomerState => {
    const { [action.payload.id]: removed, ...entities } = state.entities;
    return {
      entities: { ...entities },
      loading: false,
      loaded: true,
    };
  }),
  on(CustomersActions.removeCustomersListSuccess, (state, action): CustomerState => {
    const ids = action.payload.map((e) => e.id);
    const entities = removeProprieties(state.entities, ids);
    return {
      entities: entities,
      loading: false,
      loaded: true,
    };
  })
);

export const getCustomerEntity = (state: CustomerState) => state.entities;
export const getCustomerLoading = (state: CustomerState) => state.loading;
export const getCustomerLoaded = (state: CustomerState) => state.loaded;

export const getAllCustomer = (entities: { [id: string | number]: Customer }) =>
  Object.keys(entities).map((id) => entities[id]);
