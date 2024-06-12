import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  product ={
    productId: 101,
    productName: 'Samsung',
    productCategory: 'Laptop',
    productPrice: 40000


  }

}
