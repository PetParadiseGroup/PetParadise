import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {HomeContentComponent} from "./home/home-content/home-content.component";
import {ProductsContentComponent} from "./products/products-content/products-content.component";
import {RegisterComponent} from "./auth/components/register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterContentComponent, NavbarContentComponent, HomeContentComponent, ProductsContentComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PetParadise';
}
