import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { ADMIN } from '../app-routing.module';

const routes: Routes = [
  { path: ADMIN.LOGIN, component: LoginComponent },
  { path: ADMIN.AUTH, component: AuthorizedComponent },
  { path: '', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
