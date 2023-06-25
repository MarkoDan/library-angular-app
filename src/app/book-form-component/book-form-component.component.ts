import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form-component',
  templateUrl: './book-form-component.component.html',
  styleUrls: ['./book-form-component.component.css']
})
export class BookFormComponentComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService){
    this.form = this.fb.group({
      title: '',
      author: '',
      publicationDate: '',
      summary: ''
    });
  }

  ngOnInit(): void {}

  onSubmit(): void{
    
    if(this.form.valid){
      const newBook: Book = this.form.value;
      this.bookService.addBook(newBook);
    }
  }
}
