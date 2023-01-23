import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesComponent} from "./location/countries/countries.component";

export enum MASTERDATA  {
  COUNTRIES= 'countries'
}


const routes: Routes = [
  { path: MASTERDATA.COUNTRIES,component: CountriesComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDataRoutingModule {}
