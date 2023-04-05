import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../models/order-details';

import * as fromURL from '../../util/URL';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor(private http: HttpService) {}

  getOrderDetails(): Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(fromURL.ORDER_DETAILS);
  }

  addOrderDetails(orderDetails: OrderDetails): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(fromURL.ORDER_DETAILS, orderDetails);
  }

  updateOrderDetails(orderDetails: OrderDetails) {
    return this.http.put<OrderDetails>(fromURL.ORDER_DETAILS, orderDetails);
  }

  removeOrderDetails(id: string | number) {
    return this.http.delete(`${fromURL.ORDER_DETAILS}/${id}`);
  }

  removeOrderDetailsList(ids: string[] | number[]) {
    return this.http.post(`${fromURL.ORDER_DETAILS}/deleteSelected`, ids);
  }
}
