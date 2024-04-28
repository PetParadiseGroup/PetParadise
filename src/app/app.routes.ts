import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {HomeContentComponent} from "./home/home-content/home-content.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {ProductsContentComponent} from "./products/products-content/products-content.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeContentComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsContentComponent}
];
