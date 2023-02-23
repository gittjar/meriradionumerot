import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignalFlag } from './models/signalflag';

@Injectable({
  providedIn: 'root'
})
export class SignalflagService {

  flagsurl = 'https://raw.githubusercontent.com/gittjar/flags/main/signalflag.json';


  constructor(private http: HttpClient) { }

  getFlag(): Observable <SignalFlag[]>
  {
    return this.http.get<SignalFlag[]>(this.flagsurl);
  }
}
