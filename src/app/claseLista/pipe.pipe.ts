import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] === 'Mayus' ? value.toUpperCase() : value.toLocaleUpperCase();
  }

}
