import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './administration/login/login.component';
import { AuthorizedComponent } from './administration/authorized/authorized.component';

export enum MAINROUTES {
  MASTER = 'masterdata',
  ADMIN = 'admin',
  ORDERS = 'orders',
}

export enum MASTERDATA {
  COUNTRIES = 'countries',
  CUSTOMER = 'customer',
  CATEGORIES = 'categories',
  PRODUCTS = 'products',
}

export enum ORDERS {
  ORDERS = 'orders',
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
          import('./master-data/master-data.module').then((m) => m.MasterDataModule),
      },
      {
        path: MAINROUTES.ORDERS,
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
