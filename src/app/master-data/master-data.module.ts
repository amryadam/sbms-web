import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './location/countries/countries.component';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { Store, StoreModule } from '@ngrx/store';

import * as fromStore from './store';
import { effects, reducers } from './store';
import { SharedModule } from '../shared-module.module';
import { EffectsModule } from '@ngrx/effects';
import { MasterDataComponent } from './master-data/master-data.component';
import { CountryComponent } from './location/countries/country.component';

@NgModule({
  declarations: [CountriesComponent, MasterDataComponent, CountryComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterDataRoutingModule,
    StoreModule.forFeature('masterData', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [],
})
export class MasterDataModule implements OnInit {
  constructor(private store: Store<fromStore.MasterDataState>) {}
  ngOnInit(): void {
    this.store.dispatch(fromStore.LoadCountries());
  }
}
