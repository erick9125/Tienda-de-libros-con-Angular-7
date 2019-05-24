import { UserInterface } from './../../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../../services/auth.service';
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

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
    private books: BookInterface[] = [];
    public isAdmin: any = null;
    public userUid: string = null;

  ngOnInit() {
    this.getListBooks();
    this.getCurrentUser();
  }

 getCurrentUser() {
   this.authService.isAuth().subscribe(auth => {
     if (auth) {
      this.userUid = auth.uid;
      this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
        this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
      })
     }
   })
 }

  getListBooks(): any {
    this.dataApi.getAllBooks().subscribe(books => {
      this.books  = books;
    });
  }

  onDeleteBook(idBook: string): void {
    // console.log('LIBRO ELIMINADO');
    const confirmacion = confirm('¿Estas seguro que quieres eliminar este libro?');
    if (confirmacion){
      this.dataApi.deleteBook(idBook);
    }

  }

  onPreUpdateBook(book: BookInterface){
    this.dataApi.selectedBook = Object.assign({}, book);
  }

}
