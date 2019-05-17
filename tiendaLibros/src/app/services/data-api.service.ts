import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BookInterface } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.bookCollecction = afs.collection<BookInterface>('books');
    this.books = this.bookCollecction.valueChanges();
  }

  private bookCollecction: AngularFirestoreCollection<BookInterface>;
  private books: Observable<BookInterface[]>;

  getAllBooks() {
    return this.books = this.bookCollecction.snapshotChanges()
    .pipe(map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as BookInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  addBook() {

  }
  updateBook() {

  }
  deleteBook() {

  }
}
