import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(){
  return [
    {productId:1001,productName:'Samsung'},
    {productId:1002,productName:'Apple'},
    {productId:1003,productName:'Asus'}
  ]
}
}
