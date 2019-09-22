import { Injectable } from '@angular/core';
import { Contact } from 'models/contact/contact.interface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  add(contact: Contact): Observable<Contact> {
    return this.http
      .post<Contact>(this.getUrl('add'), contact)
      .pipe(catchError(e => this.handleError(e)));
  }

  get(): Promise<Contact> {
    return null;
  }

  getAll(): Promise<Contact[]> {
    return null;
  }

  update(contact: Contact): Observable<Contact> {
    return this.http
      .put<Contact>(this.getUrl('id'), contact, this.getHeaders())
      .pipe(catchError(e => this.handleError(e)));
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      })
    };
  }

  private getUrl(operation: string): string {
    return 'api/contacts/' + operation;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
