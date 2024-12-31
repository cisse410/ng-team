import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitter',
  standalone: true,
})
export class TwitterPipe implements PipeTransform {
  transform(value: string): string {
    return `https://x.com/${value}`;
  }
}
