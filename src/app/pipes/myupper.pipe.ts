import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper'
})
export class MyupperPipe implements PipeTransform {

  transform(value:string): string {
    return value.toUpperCase();
  }

}
