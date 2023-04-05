import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { OrdersComponent } from './orders/orders.component';
import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [OrdersComponent, CartComponent],
  imports: [
    SharedModule,
    OrderRoutingModule,
    StoreModule.forFeature('orders', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [CartComponent],
})
export class OrderModule {}
