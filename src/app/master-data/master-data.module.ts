import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './location/countries/countries.component';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { StoreModule } from '@ngrx/store';

import * as fromStore from './store'
import {SharedModule} from "../shared-module.module";
import {HttpClient} from "@angular/common/http";
import {countryFeature, reducers} from "./store";
@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterDataRoutingModule,
    StoreModule.forFeature('masterData',reducers),
  ],
  providers:[]
})
export class MasterDataModule {}
