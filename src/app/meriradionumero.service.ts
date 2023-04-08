import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeriradionumeroService {

  constructor(private meriradionumeroHTTP: HttpClient) { }


  //baseurl = 'https://opendata.traficom.fi/api/v8/Meriradionumerot/';
 // baseurl = '/api';

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

