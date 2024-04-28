import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {PetparadiseApiService} from "../../core/services/petparadise-api.service";
import {ProductModel} from "../../core/models/product-model/product.model";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle} from "@angular/material/card";

@Component({
  selector: 'app-products-content',
  standalone: true,
  imports: [MatCardModule, HttpClientModule, NgForOf, MatFormField, MatInput, MatLabel, NgIf],
  templateUrl: './products-content.component.html',
  styleUrl: './products-content.component.css',
  providers: [PetparadiseApiService]
})
export class ProductsContentComponent implements OnInit{

  productsList:ProductModel[] = [];
  constructor(private petparadiseApiService:PetparadiseApiService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.petparadiseApiService.getProducts().subscribe({
      next:(result)=>{
        this.productsList= result.productos;
        console.log(this.productsList)
      },
      error:(error)=>{console.log(error)}
    })
  }
}
