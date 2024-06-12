import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myboldpipe'
})
export class BoldPipe implements PipeTransform {

  transform(value: any): any {
    return `<b>${value}</b>`;
  }

}
