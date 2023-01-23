import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private subject = new BehaviorSubject<Country[]>([]);
  courses$: Observable<Country[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllCountries()
  }

  private loadAllCountries() {
    this.http
      .get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(tap((res) => this.subject.next(res)))
      .subscribe();
  }
}
