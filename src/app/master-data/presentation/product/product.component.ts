import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Table } from 'primeng/table';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];

  product: Product;

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  rowsPerPageOptions = [5, 10, 20];

  Products$: Observable<any>;
  category: any;
  categories: Category[];

  constructor(private store: Store<fromStore.MasterDataState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.ProductsActions.loadProducts());
    this.store.select<any>(fromStore.getAllProducts).subscribe((c) => {
      this.products = c;
    });
    this.store.select<any>(fromStore.getAllCategories).subscribe((c) => {
      this.categories = c;
    });
  }

  loadCategories() {
    this.store.dispatch(fromStore.CategoriesActions.loadCategories());
    this.store.select<any>(fromStore.getAllCategories).subscribe((c) => {
      this.categories = c;
    });
  }

  openNew() {
    this.product = { categories: [], name: '', price: 0, id: '' };
    this.submitted = false;
    this.loadCategories();
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editProduct(product: Product) {
    this.loadCategories();
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.deleteProductDialog = true;
    this.product = product;
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.store.dispatch(
      fromStore.ProductsActions.removeProductsList({ payload: this.selectedProducts })
    );

    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.store.dispatch(fromStore.ProductsActions.removeProduct({ payload: this.product }));
    this.product = { categories: [], name: '', price: 0, id: '' };
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    if (this.product.name?.trim()) {
      if (this.product.id) {
        this.store.dispatch(fromStore.ProductsActions.updateProduct({ payload: this.product }));
      } else {
        this.product.imageUri = 'https://loremflickr.com/320/240';
        this.store.dispatch(fromStore.ProductsActions.createProduct({ payload: this.product }));
      }
      this.productDialog = false;
      this.product = { categories: [], name: '', price: 0, id: '' };
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  toItem(item: any): Product {
    return item;
  }
}
