import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray',
  pure: false,
})
export class JoinArrayPipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): unknown {
    return value.join();
  }
}
