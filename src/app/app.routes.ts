import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {HomeContentComponent} from "./home/home-content/home-content.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {ProductsContentComponent} from "./products/products-content/products-content.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'PetParadise/login', component: LoginComponent},
  {path: 'PetParadise/home', component: HomeContentComponent},
  {path: 'PetParadise/register', component: RegisterComponent},
  {path: 'PetParadise/products', component: ProductsContentComponent}
];
