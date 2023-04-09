import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './presentation/countries/countries.component';
import { MasterDataComponent } from './presentation/master-data/master-data.component';
import { CountryComponent } from './presentation/countries/country.component';
import { MASTER_DATA } from '../app-routing.module';
import { CustomerComponent } from './presentation/customer/customer.component';
import { CategoryComponent } from './presentation/category/category.component';
import { ProductComponent } from './presentation/product/product.component';
import { ShoppingComponent } from './presentation/shopping/shopping.component';

const routes: Routes = [
  { path: '', component: MasterDataComponent },
  { path: MASTER_DATA.COUNTRIES, component: CountriesComponent },
  { path: 'countries/:countryId', component: CountryComponent },
  { path: MASTER_DATA.CUSTOMER, component: CustomerComponent },
  { path: MASTER_DATA.CATEGORIES, component: CategoryComponent },
  { path: MASTER_DATA.PRODUCTS, component: ProductComponent },
  { path: MASTER_DATA.SHOPPING, component: ShoppingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDataRoutingModule {}
