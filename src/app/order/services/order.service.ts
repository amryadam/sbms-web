import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromURL from '../../util/URL';
import { HttpService } from '../../services/http.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpService) {}

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(fromURL.ORDER);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(fromURL.ORDER, order);
  }

  updateOrder(order: Order) {
    return this.http.put<Order>(fromURL.ORDER, order);
  }

  removeOrder(id: string | number) {
    return this.http.delete(`${fromURL.ORDER}/${id}`);
  }

  removeOrderList(ids: string[] | number[]) {
    return this.http.post(`${fromURL.ORDER}/deleteSelected`, ids);
  }
}
