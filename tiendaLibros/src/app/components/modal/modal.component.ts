import { NgForm } from '@angular/forms';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {


  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
    this.dataApi.addBook(bookForm.value);
  }

}
