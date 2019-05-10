import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'book:/id',
    component: DetailsBookComponent
  },
  {
    path: 'admin/list-books',
    component: ListBookComponent
  },
  {
    path: 'user/login',
    component : LoginComponent
  },
  {
    path: 'user/register',
    component : RegisterComponent
  },
  {
    path: 'user/profile',
    component : ProfileComponent
  },
  {
    path: '**',
    component : Page404Component
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
