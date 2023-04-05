import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

import * as fromURL from '../../util/URL';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpService) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(fromURL.CATEGORY);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(fromURL.CATEGORY, category);
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(fromURL.CATEGORY, category);
  }

  removeCategory(id: string | number) {
    return this.http.delete(`${fromURL.CATEGORY}/${id}`);
  }

  removeCategoryList(ids: string[] | number[]) {
    return this.http.post(`${fromURL.CATEGORY}/deleteSelected`, ids);
  }
}
