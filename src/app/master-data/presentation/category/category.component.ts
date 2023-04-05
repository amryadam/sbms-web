import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Table } from 'primeng/table';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categoryDialog: boolean = false;

  deleteCategoryDialog: boolean = false;

  deleteCategoriesDialog: boolean = false;

  categories: Category[] = [];

  category: Category;

  parentCategories: Category[];

  selectedCategories: any[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  filteredCategories: Category[];
  rowsPerPageOptions = [5, 10, 20];
  Categories$: Observable<any>;

  constructor(private store: Store<fromStore.MasterDataState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.CategoriesActions.loadCategories());
    this.store.select<any>(fromStore.getAllCategories).subscribe((c) => {
      this.categories = c;
      this.parentCategories = c;
    });
    // this.categoryService.getCategory().then((data) => (this.categories = data));

    this.statuses = [
      { label: 'MAD', value: 'mad' },
      { label: 'COOL', value: 'cool' },
      { label: 'NERD', value: 'NERD' },
    ];
  }

  openNew() {
    this.category = { parentCategory: null, code: '', name: '', id: '' };
    this.submitted = false;
    this.categoryDialog = true;
  }

  deleteSelectedCategories() {
    this.deleteCategoriesDialog = true;
  }

  editCategory(category: Category) {
    this.category = { ...category };
    this.categoryDialog = true;
  }

  deleteCategory(category: Category) {
    this.deleteCategoryDialog = true;
    this.category = category;
  }

  confirmDeleteSelected() {
    this.deleteCategoriesDialog = false;
    this.store.dispatch(
      fromStore.CategoriesActions.removeCategoriesList({ payload: this.selectedCategories })
    );

    this.selectedCategories = [];
  }

  confirmDelete() {
    this.deleteCategoryDialog = false;
    this.store.dispatch(fromStore.CategoriesActions.removeCategory({ payload: this.category }));
    this.category = { parentCategory: null, code: '', name: '', id: '' };
  }

  hideDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

  saveCategory() {
    this.submitted = true;
    if (this.category.name?.trim()) {
      if (this.category.id) {
        this.store.dispatch(fromStore.CategoriesActions.updateCategory({ payload: this.category }));
      } else {
        this.store.dispatch(fromStore.CategoriesActions.createCategory({ payload: this.category }));
      }
      this.categoryDialog = false;
      this.category = { parentCategory: null, code: '', name: '', id: '' };
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  toItem(item: any): Category {
    return item;
  }

  filterCategory(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];
      if (category.name?.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(category);
      }
    }

    this.parentCategories = filtered;
  }
}
