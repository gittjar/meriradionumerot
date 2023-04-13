import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators'

import { Odata } from './models/odata.model';
import { Meriradionumerot } from './models/shipsignalnumber';


@Injectable({
  providedIn: 'root'
})
export class MeriradionumeroService {

 private API_URL: string = 'https://corsproxy.io/?https%3A%2F%2Fopendata.traficom.fi%2Fapi%2Fv8%2FMeriradionumerot%2F';
 //private API_URL: string = '/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  constructor(private meriradionumeroHTTP: HttpClient) { }

 getMeriradioList(): Observable<Odata> {
  return this.meriradionumeroHTTP.get<Odata>(this.API_URL, this.httpOptions);
}








  getMeriradionumero():any {
    /*
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
     });

      headers.append('responseType', 'text' as 'json');
     // headers.append('Content-Type', 'application/json');
      //headers.append('Accept', 'application/json');
      */

      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'application/json'
        })
      };



  //  const meriradionumero = this.meriradionumeroHTTP.get(this.baseurl, {headers: headers});
  // const meriradionumero = this.meriradionumeroHTTP.get(this.baseurl, {responseType: 'text'});
  const meriradionumero = this.meriradionumeroHTTP.get('/api', httpOptions);
    return meriradionumero;
  }


  getBoatResults(): Observable<any>{
    const url = '/api';
    return this.meriradionumeroHTTP.get<any>(url);   
  }


}

