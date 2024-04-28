import { Component,OnInit, ViewChild} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PetparadiseApiService } from '../../../core/services/petparadise-api.service';
import { NgForm } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {Register} from "../../../core/models/register-model/register.model";
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userData!: Register;
  constructor(private petparadiseApiService : PetparadiseApiService) {
    this.userData = {} as Register; //Inicializa userData
  }

  ngOnInit(): void {}

  onRegister(){
    console.log(this.userData);
    this.petparadiseApiService.createUser(this.userData).subscribe(
      (response) => {
        console.log(response);
        alert('Usuario registrado con éxito')
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
