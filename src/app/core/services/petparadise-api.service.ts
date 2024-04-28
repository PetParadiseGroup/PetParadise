import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {Register} from "../models/register-model/register.model";


@Injectable({
  providedIn: 'root'
})
export class PetparadiseApiService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //Manejo de errores del lado del cliente o problemas de red
      console.log('An error occurred: ', error.error.message)
    }else{
      //manejo de errores devueltos por el backend
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    //devuelve un observable que emite un mensaje de error
    return throwError('Something bad happened; please try again later.');

  }

  createUser(item:any):Observable<Register>{
    const base_url:string = 'https://petparadiseapi.azurewebsites.net/api/registrar';
    return this.http
      .post<Register>(base_url,item)
      .pipe(retry(2),catchError(this.handleError));
  }

  getProducts(): Observable<any> {
    const base_url2:string = 'https://petparadiseapi.azurewebsites.net/api/productos';
    return this.http.get(base_url2).pipe(res=>res);
  }
}
