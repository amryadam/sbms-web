import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent implements OnInit {
  customerDialog: boolean = false;

  deleteCustomerDialog: boolean = false;

  deleteCustomersDialog: boolean = false;

  customers: Customer[] = [];

  customer: Customer;

  selectedCustomers: Customer[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  Customers$: Observable<any>;

  constructor(private store: Store<fromStore.MasterDataState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.CustomersActions.loadCustomers());
    this.store.select<any>(fromStore.getAllCustomers).subscribe((c) => {
      this.customers = c;
    });
    // this.customerService.getCustomer().then((data) => (this.customers = data));

    this.statuses = [
      { label: 'MAD', value: 'mad' },
      { label: 'COOL', value: 'cool' },
      { label: 'NERD', value: 'NERD' },
    ];
  }

  openNew() {
    this.customer = { id: '' };
    this.submitted = false;
    this.customerDialog = true;
  }

  deleteSelectedCustomers() {
    this.deleteCustomersDialog = true;
  }

  editCustomer(customer: Customer) {
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  deleteCustomer(customer: Customer) {
    this.deleteCustomerDialog = true;
    this.customer = customer;
  }

  confirmDeleteSelected() {
    this.deleteCustomersDialog = false;
    this.store.dispatch(
      fromStore.CustomersActions.removeCustomersList({ payload: this.selectedCustomers })
    );

    this.selectedCustomers = [];
  }

  confirmDelete() {
    this.deleteCustomerDialog = false;
    this.store.dispatch(fromStore.CustomersActions.removeCustomer({ payload: this.customer }));
    this.customer = { id: '' };
  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
  }

  saveCustomer() {
    this.submitted = true;
    if (this.customer.name?.trim()) {
      if (this.customer.id) {
        this.store.dispatch(fromStore.CustomersActions.updateCustomer({ payload: this.customer }));
      } else {
        this.customer.imageUri = 'http://dummyimage.com/59x79.png/ff4444/ffffff';
        this.store.dispatch(fromStore.CustomersActions.createCustomer({ payload: this.customer }));
      }
      this.customerDialog = false;
      this.customer = { id: '' };
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  toItem(item: any): Customer {
    return item;
  }
}
