import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  public app_name : string = 'Tienda de Libros';
  public isLogged: boolean =  false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe( auth => {
      if(auth){
        console.log('user Logged');
        this.isLogged = true;
      } else {
        console.log('NOT user Logged');
        this.isLogged = false;
      }
    });
  }

  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
