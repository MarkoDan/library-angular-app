import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 private apiURL = 'http://localhost:5088/';

 constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book);
  }
  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

}
