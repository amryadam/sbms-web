import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';

export enum MAIN_ROUTES {
  MASTER = 'masterdata',
  ADMIN = 'admin',
  ORDERS = 'orders',
}

export enum MASTER_DATA {
  COUNTRIES = 'countries',
  CUSTOMER = 'customer',
  CATEGORIES = 'categories',
  PRODUCTS = 'products',
  SHOPPING = 'shopping',
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
        path: MAIN_ROUTES.ADMIN,
        loadChildren: () =>
          import('./administration/administration.module').then((m) => m.AdministrationModule),
      },
      // {
      //   path: 'admin/authorized',
      //   component: AuthorizedComponent,
      // },
      {
        path: MAIN_ROUTES.ORDERS,
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),
      },
      {
        path: MAIN_ROUTES.MASTER,
        loadChildren: () =>
          import('./master-data/master-data.module').then((m) => m.MasterDataModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
