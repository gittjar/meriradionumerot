import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alus } from './models/alusrekisteri';

@Injectable({
  providedIn: 'root'
})
export class AlusrekisteriService {


  //alusrekisteriurl = 'https://opendata.traficom.fi/api/v9/Alusrekisteri';
  alusrekisteriurl = 'https://raw.githubusercontent.com/gittjar/flags/main/alusrekisteri.json';

  constructor(private http: HttpClient) { }

  getAlus(): Observable <Alus[]>
  {
    return this.http.get<Alus[]>(this.alusrekisteriurl);
  }
}