import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import * as fromURL from '../../util/URL';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpService) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(fromURL.PRODUCT);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(fromURL.PRODUCT, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(fromURL.PRODUCT, product);
  }

  removeProduct(id: string | number) {
    return this.http.delete(`${fromURL.PRODUCT}/${id}`);
  }

  removeProductList(ids: string[] | number[]) {
    return this.http.post(`${fromURL.PRODUCT}/deleteSelected`, ids);
  }
}
