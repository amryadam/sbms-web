import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './presentation/countries/countries.component';
import { MasterDataComponent } from './presentation/master-data/master-data.component';
import { CountryComponent } from './presentation/countries/country.component';
import { MASTERDATA } from '../app-routing.module';
import { CustomerComponent } from './presentation/customer/customer.component';
import { CategoryComponent } from './presentation/category/category.component';
import { ProductComponent } from './presentation/product/product.component';

const routes: Routes = [
  { path: '', component: MasterDataComponent },
  { path: MASTERDATA.COUNTRIES, component: CountriesComponent },
  { path: 'countries/:countryId', component: CountryComponent },
  { path: MASTERDATA.CUSTOMER, component: CustomerComponent },
  { path: MASTERDATA.CATEGORIES, component: CategoryComponent },
  { path: MASTERDATA.PRODUCTS, component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDataRoutingModule {}
