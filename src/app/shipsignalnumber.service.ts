import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipSignalNumber } from './models/shipsignalnumber';

@Injectable({
  providedIn: 'root'
})
export class ShipsignalnumberService {

  baseurl = 'https://raw.githubusercontent.com/gittjar/flags/main/shipsignalnumber.json';

  constructor(private http: HttpClient) {}

  getShipSignalNumber(): Observable <ShipSignalNumber[]>
  {
    return this.http.get<ShipSignalNumber[]>(this.baseurl);
  }
}
