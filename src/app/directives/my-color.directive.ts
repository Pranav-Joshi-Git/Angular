import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {
  @HostBinding('style.backgroundColor')  bgColor : string | undefined
  constructor(elementRef : ElementRef, renderer2 : Renderer2) {

   
    //for applying 20 properties we need to write it 20 times
    // elementRef.nativeElement.style.color = 'orangered'
    // elementRef.nativeElement.style.backgroundColor = 'yellow'
    //To overcome this we will use Renderer2

    // renderer2.addClass(elementRef.nativeElement,'mydirclass')
   }
   @HostListener('mouseover') onMouseOver(){

    this.bgColor = 'orangered'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = 'aqua'
   }

   
}
