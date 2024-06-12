import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent  {
    products:any = []
    constructor (private productsService:ProductsService){
      this.products = productsService.getProducts()
    }
}
  // showProduct: boolean = false;
  // names:string[] = ['Ramesh','Suresh','Naresh']
  // products =[
  //   {productId:101,productName:'Samsung'},
  //   {productId:102,productName:'Apple'},
  //   {productId:103,productName:'Asus'}
  // ]
  
  // course :string = "angular"


