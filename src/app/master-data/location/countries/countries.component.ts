import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {Country} from "../../models/country";
import {CountriesService} from "../../services/countries.service";
import  * as fromStore from '../../store'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{
  countries$!:Observable<Country[]>;
  Country!: Country;
  constructor(private countriesService: CountriesService,
              private store: Store<fromStore.MasterDataState>) {
  }
  ngOnInit(): void {
    this.countries$ = this.countriesService.courses$;
    this.store.select<any>('masterData').subscribe(
      (s)=>{
        console.log(s)
      }
    )
  }

  toItem(item: any): Country {
    return item;
  }

}
