import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { OrdersComponent } from './orders/orders.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    SharedModule,
    OrderRoutingModule,
    StoreModule.forFeature('orders', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class OrderModule {}
