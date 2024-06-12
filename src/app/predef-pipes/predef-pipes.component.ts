import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predef-pipes',
  templateUrl: './predef-pipes.component.html',
  styleUrls: ['./predef-pipes.component.css']
})
export class PredefPipesComponent  {

  name:string = 'pranav joshi'
  price:number = 203
  product:object ={
    pId:101, pName : 'Samsung', pCost: 40000
  }
  sysdate : any = new Date()
  dob : any = new Date(2000,30,11)

}
