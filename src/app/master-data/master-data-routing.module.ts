import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './location/countries/countries.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { CountryComponent } from './location/countries/country.component';

export enum MASTERDATA {
  COUNTRIES = 'countries',
}

const routes: Routes = [
  { path: '', component: MasterDataComponent },
  { path: MASTERDATA.COUNTRIES, component: CountriesComponent },
  { path: 'countries/:countryId', component: CountryComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDataRoutingModule {}
