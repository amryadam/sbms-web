import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Country } from '../../models/country';
import * as fromStore from '../../store';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private store: Store<fromStore.MasterDataState>) {}

  ngOnInit(): void {
    this.countries$ = this.store.select<any>(fromStore.getAllCountries);
    console.log(environment.API_URL);
  }

  toItem(item: any): Country {
    return item;
  }

  LoadCountries() {
    this.store.dispatch(fromStore.CustomersActions.loadCustomers());
    this.store.dispatch(fromStore.CountriesActions.loadCountries());
  }
}
