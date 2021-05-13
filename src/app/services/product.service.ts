import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:HttpClient){}
  url:string="http://localhost:3000/Products";
  getProducts(){
    return this.http.get<Product[]>(this.url);
  }
}

