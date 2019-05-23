import { NgForm } from '@angular/forms';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {


  constructor(private dataApi: DataApiService) { }

  // simula nuestro boton cerrar para el modal
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.id === null) {
      // new
      this.dataApi.addBook(bookForm.value);
    } else {
      // update
      this.dataApi.updateBook(bookForm.value);
    }
    bookForm.resetForm();
    this.btnClose.nativeElement.click();

  }

}
