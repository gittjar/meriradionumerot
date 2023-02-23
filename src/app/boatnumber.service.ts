import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoatNumberInformation } from './models/numbersinformation';

@Injectable({
  providedIn: 'root'
})
export class BoatnumberService {

  constructor(private http: HttpClient) { }

  public getBoats(): Observable<BoatNumberInformation>
  {
    // this ./api points to file: proxy.conf.json
    // needs also configure to angular.json -file
    // see README.md
    
    const base_url = './api';
    return this.http.get<BoatNumberInformation>(base_url);
  }


}
