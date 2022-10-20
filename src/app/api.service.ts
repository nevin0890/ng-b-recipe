import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getRecipes = (data:any) => {
    return this.http.post('http://localhost:8080/addrecipie',data)
  }

  viewAllRecipes = () => {
    return this.http.get('http://localhost:8080/getrecipie')
  }
  Deleterecipe = (data: any) => {
    return this.http.post('http://localhost:8080/deleterecipie',data)
  }
}