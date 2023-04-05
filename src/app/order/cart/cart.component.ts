import { Component } from '@angular/core';

import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { getCart } from '../store/selector/cart.selector';
import { OrderDetails } from '../models/order-details';
import { Order } from '../models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  display: boolean = false;
  order: Order;
  total: Number;
  orderDetail: OrderDetails[];
  selectedOrderDetails: OrderDetails;

  constructor(private store: Store<fromStore.OrdersState>) {}

  onInit() {}

  toItem(item: any): OrderDetails {
    return item;
  }

  loadCart() {
    this.store.select(getCart).subscribe((c) => {
      this.order = c;
      this.orderDetail = c.detailsList;
    });
  }

  addOrRemoveItem(number: number, details: OrderDetails) {
    if (number < details.numberOfItems) {
      this.store.dispatch(fromStore.CartsActions.removeItem({ payload: details.product }));
    } else {
      this.store.dispatch(fromStore.CartsActions.addItem({ payload: details.product }));
    }
  }
}
