import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSelectedCountry, MasterDataState } from '../../store';
import { Observable } from 'rxjs';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  public country$: Observable<Country | undefined>;

  constructor(private store: Store<MasterDataState>) {
    this.country$ = store.select(getSelectedCountry);
  }
}
