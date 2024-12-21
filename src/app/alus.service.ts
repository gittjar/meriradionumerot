import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OdataAlus } from './models/odata.alus.model';
import { Alus } from './models/alusrekisteri';

@Injectable({
  providedIn: 'root'
})
export class AlusService {

  baseurl = 'https://corsproxy.io/?url=https%3A%2F%2Fopendata.traficom.fi%2Fapi%2Fv9%2FAlusrekisteri';
  baseurlbyid = 'https://corsproxy.io/?url=https://opendata.traficom.fi/api/v9/Alusrekisteri(';

  constructor(private http: HttpClient) {}

  getAlusList(): Observable<OdataAlus> {
    return this.http.get<OdataAlus>(this.baseurl);
  }

  getAlusDetails(ID: number): Observable<Alus> {
    return this.http.get<Alus>(this.baseurlbyid + ID + ')');
  }
}