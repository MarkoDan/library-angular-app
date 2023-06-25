import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'George Orwell',
      publicationDate: new Date(1949, 5, 8),
      summary: 'A dystopian novel set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publicationDate: new Date(1960, 6, 11),
      summary: 'A novel about the irrationality of adult attitudes towards race and class in the Deep South of the 1930s, seen through the eyes of a young girl.'
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publicationDate: new Date(1925, 3, 10),
      summary: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the prosperous Long Island of 1922.'
    },
    {
      id: 4,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      publicationDate: new Date(1851, 9, 18),
      summary: 'The narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship\'s previous voyage bit off Ahab\'s leg at the knee.'
    }
  ];

  getBooks(){
    return this.books;
  }

  addBook(book: Book){
    this.books.push(book);
  }

  deleteBook(id: number){
    const index = this.books.findIndex(b => b.id === id);
    if (index !== -1){
      this.books.splice(index, 1);
    }
  }

  updateBook(book: Book){
    const index = this.books.findIndex(b => b.id === book.id);
    if(index !== -1){
      this.books[index] = book;
    }
  }
  
}
