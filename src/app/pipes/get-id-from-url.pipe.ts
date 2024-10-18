import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIdFromUrl',
  standalone: true,
})
@Injectable({
  providedIn: 'root',
})
export class GetIdFromUrlPipe implements PipeTransform {
  transform(url: string): number {
    const regex = /[1-9].+?/g;

    return Number.parseInt((url.match(regex) || [0]).join(''), 10);
  }
}
