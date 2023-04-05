import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromMasterDataStore from '../../store';
import * as fromOrderStore from '../../../order/store';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products$: Observable<Product[]>;

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  orderCities: any[] = [];

  constructor(
    private store: Store<fromMasterDataStore.MasterDataState | fromOrderStore.OrdersState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromMasterDataStore.ProductsActions.loadProducts());
    this.products$ = this.store.select(fromMasterDataStore.getAllProducts);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }

  toItem(item: any): Product {
    return item;
  }

  addToCart(product: Product) {
    this.store.dispatch(fromOrderStore.CartsActions.addItem({ payload: product }));
  }
}

export interface SelectItem<T = any> {
  label?: string;
  value: T;
  styleClass?: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
}
