import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(uri: string, payload?: any): Observable<any> {
    return this.http.get<T>(uri).pipe(catchError(this.handleError));
  }

  post<T>(uri: string, body?: any, headers?: any): Observable<any> {
    return this.http.post<T>(uri, body, headers).pipe(catchError(this.handleError));
  }

  put<T>(uri: string, payload?: any): Observable<any> {
    // return this.put<T>(uri, payload).pipe(catchError(this.handleError));
    return this.http.put<T>(uri, payload).pipe(catchError(this.handleError));
  }

  delete<T>(uri: string, payload?: any): Observable<any> {
    return this.http.delete<T>(uri).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // Return an observable with a user-facing error message.
      console.log(error.error);
      return throwError(() => new Error(`An error occurred:${error.error}`, error.error));
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      return throwError(() => new Error(`Backend returned code ${error.status}`, error.error));
    }
  }
}
