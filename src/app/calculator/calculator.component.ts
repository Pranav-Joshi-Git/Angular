import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result:any
 
  addOperation(num1:any,num2:any){

    this.result = Number(num1) + Number(num2)
    
    

  }
  subOperation(num1:any,num2:any){
    
    this.result = Number(num1) - Number(num2)

  }
   mulOperation(num1:any,num2:any){
    
    this.result = Number(num1) * Number(num2)

   }
   divOperation(num1:any,num2:any){
    
    this.result = Number(num1) / Number(num2)

  }

}
