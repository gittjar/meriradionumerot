import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

   const base_url = '/api';

   //const base_url = '/echo';


   let headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
   });

   headers.append('responseType', 'text');
   //headers.append('Content-Type', 'application/json');
   // headers.append('Accept', 'application/json');
   
    //const base_url = 'https://opendata.traficom.fi/api/v8/Meriradionumerot';
  return this.http.get<BoatNumberInformation>(base_url, {headers: headers});

/*
    return this.http.get<BoatNumberInformation>
    (
      `${base_url}`
    ); 

*/
  }


}


