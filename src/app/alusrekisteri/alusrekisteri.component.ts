import { Component, OnInit } from '@angular/core';
import { Alus } from '../models/alusrekisteri'
import { AlusrekisteriService } from '../alusrekisteri.service';

@Component({
  selector: 'app-alusrekisteri',
  templateUrl: './alusrekisteri.component.html',
  styleUrls: ['./alusrekisteri.component.css']
})
export class AlusrekisteriComponent implements OnInit {

  p: number[] = [];
  collection: any[] = [];
  term = '';
  searchTerm = '';

  alusaddress: Alus [] = [];

  constructor (private httpservice : AlusrekisteriService) {}
  
  getAlus(): void {
    this.httpservice.getAlus().subscribe(alusaddress => this.alusaddress = alusaddress);
  }
  
  ngOnInit(): void {
    this.getAlus();
  }
  }
