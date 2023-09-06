import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueSatamapaikka'
})
export class UniqueSatamapaikkaPipe implements PipeTransform {
  transform(value: any[]): any[] {
    const uniqueSatamapaikat: any[] = [];

    for (const item of value) {
      if (!uniqueSatamapaikat.includes(item.aluksen_satamapaikka)) {
        uniqueSatamapaikat.push(item.aluksen_satamapaikka);
      }
    }

    return uniqueSatamapaikat.map(satamapaikka => value.find(item => item.aluksen_satamapaikka === satamapaikka));
  }
}
