import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

import * as fromURL from '../../util/URL';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpService) {}

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(fromURL.CUSTOMER);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(fromURL.CUSTOMER, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Customer>(fromURL.CUSTOMER, customer);
  }

  removeCustomer(id: string | number) {
    return this.http.delete(`${fromURL.CUSTOMER}/${id}`);
  }

  removeCustomerList(ids: string[] | number[]) {
    return this.http.post(`${fromURL.CUSTOMER}/deleteSelected`, ids);
  }
}
