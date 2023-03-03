import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Majakka } from './models/majakka';

const BASE_URL = 'https://raw.githubusercontent.com/gittjar'

@Injectable({
  providedIn: 'root'
})
export class MajakkaService {

  constructor(private httpclient:HttpClient) { }

  getMajakat(): Observable<Array<Majakka>>{
    return this.httpclient.get<Array<Majakka>>
    (
      `${BASE_URL}/flags/main/majakka.json`
    )
  }
}
