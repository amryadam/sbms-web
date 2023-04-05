import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ORDERS } from '../app-routing.module';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ORDERS.ORDERS, component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
