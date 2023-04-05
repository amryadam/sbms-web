import { NgModule, OnInit } from '@angular/core';
import { CountriesComponent } from './presentation/countries/countries.component';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { Store, StoreModule } from '@ngrx/store';

import * as fromStore from './store';
import { effects, reducers } from './store';
import { SharedModule } from '../shared-module.module';
import { EffectsModule } from '@ngrx/effects';
import { MasterDataComponent } from './presentation/master-data/master-data.component';
import { CountryComponent } from './presentation/countries/country.component';
import { CustomerComponent } from './presentation/customer/customer.component';
import { HttpService } from '../services/http.service';
import { ProductComponent } from './presentation/product/product.component';
import { CategoryComponent } from './presentation/category/category.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    CountriesComponent,
    MasterDataComponent,
    CountryComponent,
    CustomerComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    SharedModule,
    MasterDataRoutingModule,
    StoreModule.forFeature('masterData', reducers),
    EffectsModule.forFeature(effects),
    AutoCompleteModule,
  ],
  providers: [HttpService],
})
export class MasterDataModule implements OnInit {
  constructor(private store: Store<fromStore.MasterDataState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromStore.CountriesActions.loadCountries());
  }
}
