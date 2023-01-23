import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

export enum MAINROUTES {
  MASTER = 'masterdata',
  ADMIN = 'admin',
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: MAINROUTES.ADMIN,
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  {
    path: MAINROUTES.MASTER,
    loadChildren: () =>
      import('./master-data/master-data.module').then(
        (m) => m.MasterDataModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
