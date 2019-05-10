import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public app_name : string = 'Tienda de Libros';
  public isLogged: boolean =  false;
  ngOnInit() {
  }

}
