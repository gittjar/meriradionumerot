import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ShipSignalNumber, Value } from './models/shipsignalnumber';


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

  //  const meriradionumero = this.meriradionumeroHTTP.get(this.baseurl, {headers: headers});
  // const meriradionumero = this.meriradionumeroHTTP.get(this.baseurl, {responseType: 'text'});
  const meriradionumero = this.meriradionumeroHTTP.get('/api');
    return meriradionumero;
  }
/*
  public boatresult: Value[] = [];
  Base_url = '/api';

  getBoatResults(): void{
    this.meriradionumeroHTTP.get<ShipSignalNumber[]>(this.Base_url)
    .subscribe((resp) => {
      this.boatresult;
      })
      */
  }



