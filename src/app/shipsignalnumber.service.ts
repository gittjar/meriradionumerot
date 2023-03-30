import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipSignalNumber } from './models/shipsignalnumber';

@Injectable({
  providedIn: 'root'
})
export class ShipsignalnumberService {

 baseurl = 'https://raw.githubusercontent.com/gittjar/flags/main/shipsignalnumber.json';

  // baseurl = 'https://opendata.traficom.fi/api/v9/Alusrekisteri';


  constructor(private http: HttpClient) {}

  getShipSignalNumber(): Observable <ShipSignalNumber[]>
  {
    return this.http.get<ShipSignalNumber[]>(this.baseurl);
  }
/* NOT IN USE NOW

  getAlusSignal(): any {
    const signals = this.http.get(this.signalUrl);
    return signals;
  }

  */






}
