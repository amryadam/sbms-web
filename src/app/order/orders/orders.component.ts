import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderDialog: boolean = false;

  deleteOrderDialog: boolean = false;

  deleteOrdersDialog: boolean = false;

  orders: Order[] = [];

  order: Order;

  selectedOrders: Order[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  orders$: Observable<Order[]>;
  constructor(private store: Store<fromStore.OrdersState>) {}
  ngOnInit(): void {
    this.store.dispatch(fromStore.OrdersActions.loadOrders());
    this.orders$ = this.store.select<any>(fromStore.getAllOrders);
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  toItem(item: any): Order {
    return item;
  }

  editOrder(order: Order) {}

  deleteOrder(order: Order) {}

  openNew() {}

  deleteSelectedOrders() {}
}
