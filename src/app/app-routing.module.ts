import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './administration/login/login.component';
import { AuthorizedComponent } from './administration/authorized/authorized.component';

export enum MAINROUTES {
  MASTER = 'masterdata',
  ADMIN = 'admin',
}

export enum MASTERDATA {
  COUNTRIES = 'countries',
  CUSTOMER = 'customer',
}

export enum ADMIN {
  LOGIN = 'login',
  LOGOUT = 'logout',
  AUTH = 'authorized',
}

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: MAINROUTES.ADMIN,
        component: LoginComponent,
      },
      {
        path: 'admin/authorized',
        component: AuthorizedComponent,
      },
      {
        path: MAINROUTES.MASTER,
        loadChildren: () =>
          import('./master-data/master-data.module').then(
            (m) => m.MasterDataModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
