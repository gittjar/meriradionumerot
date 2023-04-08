import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberFlag } from './models/numberflag';

@Injectable({
  providedIn: 'root'
})
export class NumberflagService {

  numberflagsurl = 'https://raw.githubusercontent.com/gittjar/flags/main/numberflag.json';

  constructor(private http: HttpClient) { }

  getNumberFlag(): Observable <NumberFlag[]>
  {
    return this.http.get<NumberFlag[]>(this.numberflagsurl);
  }
}
