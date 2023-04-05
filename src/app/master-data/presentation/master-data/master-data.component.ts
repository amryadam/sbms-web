import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesActions, MasterDataState } from '../../store';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css'],
})
export class MasterDataComponent {
  constructor(private store: Store<MasterDataState>) {
    this.store.dispatch(CountriesActions.loadCountries());
  }
}
