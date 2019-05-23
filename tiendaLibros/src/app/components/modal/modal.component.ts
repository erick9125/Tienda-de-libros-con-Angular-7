import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {


  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
  }

}
