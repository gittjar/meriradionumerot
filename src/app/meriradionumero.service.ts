import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odata } from './models/odata.model';

@Injectable({
  providedIn: 'root'
})
export class MeriradionumeroService {

  private API_URL = 'https://corsproxy.io/?url=https%3A%2F%2Fopendata.traficom.fi%2Fapi%2Fv13%2FMeriradionumerot';

  constructor(private http: HttpClient) { }

  getMeriradioList(): Observable<Odata> {
    return this.http.get<Odata>(this.API_URL);
  }
}

