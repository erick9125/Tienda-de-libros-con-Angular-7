import { BookInterface } from './../../../models/book';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
    private books: BookInterface[] = [];

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(): any {
    this.dataApi.getAllBooks().subscribe(books => {
      this.books  = books;
    });
  }

  onDelete() {
    console.log('LIBRO ELIMINADO');
  }

}
