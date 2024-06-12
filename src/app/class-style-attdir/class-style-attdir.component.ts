import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-attdir',
  templateUrl: './class-style-attdir.component.html',
  styleUrls: ['./class-style-attdir.component.css']
})
export class ClassStyleAttdirComponent  {

    isApplyClass1:boolean = true
    isApplyClass2:boolean = true
    myColor:string = 'green'
    myBgColor:string = 'lightgreen'
  
}
