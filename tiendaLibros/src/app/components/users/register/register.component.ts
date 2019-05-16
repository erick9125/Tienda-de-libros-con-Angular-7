import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  public email: string = '';
  public password: string = '';

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  // metodo para cargar imagenes en firebase con libreria storage
  onUpload(e){
    // console.log('subir', e);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

  }

  // metodo para agregar usuario via registro con correo y contraseña
  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['admin/list-books']);
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch ( err => console.log('err', err.message));

  }
  onLoginFacebook(){
    this.authService.loginFacebookUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch (err => console.log('err', err.message ));

  }

  onLoginRedirect(){
    this.router.navigate(['admin/list-books']);
  }

}
