import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BoatNumberInformation } from './models/numbersinformation';

@Injectable({
  providedIn: 'root'
})
export class BoatnumberService {

  constructor(private http: HttpClient) { }

  public getBoats(): Observable<BoatNumberInformation>
  {
    const base_url = 'www.google.fi';
    return this.http.get<BoatNumberInformation>(base_url);
  }


}
