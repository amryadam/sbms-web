import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export enum MASTERDATA {
  COUNTRIES = 'login',
}

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: MASTERDATA.COUNTRIES, component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
