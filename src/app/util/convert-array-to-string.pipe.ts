import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertArrayToString',
})
export class ConvertArrayToStringPipe implements PipeTransform {
  transform(value: any[] | null, ...args: any[]): string {
    return value?.reduce((accumulator, currentValue) => {
      `${accumulator} , ${currentValue['name']}`;
    }, '');
  }
}
