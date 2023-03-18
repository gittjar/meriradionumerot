import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeriradionumeroService {

  constructor(private meriradionumeroHTTP: HttpClient) { }

  getMeriradionumero():any {
    const meriradionumero = this.meriradionumeroHTTP.get('/api');
    return meriradionumero;
  }
}
