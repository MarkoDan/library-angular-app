import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onDelete(id: number){
    this.bookService.deleteBook(id);
    //Refresh the book list
    this.books = this.bookService.getBooks()
  }

  onEdit(book: Book){
    
  }
}
