import { Component, OnInit } from '@angular/core';
import { ShipSignalNumber } from '../models/shipsignalnumber';
import { ShipsignalnumberService } from '../shipsignalnumber.service'; 

@Component({
  selector: 'app-shipsignalnumber',
  templateUrl: './shipsignalnumber.component.html',
  styleUrls: ['./shipsignalnumber.component.css']
})
export class ShipsignalnumberComponent implements OnInit {


  p: number[] = [];
  collection: any[] = [];
  term = '';
  searchTerm = '';
  
  ssnaddress: ShipSignalNumber [] = [];

  constructor (private httpservice : ShipsignalnumberService) {}

 
  getShipSignalNumber(): void {
    this.httpservice.getShipSignalNumber().subscribe(ssnaddress => this.ssnaddress = ssnaddress);
  }


  ngOnInit(): void {
    this.getShipSignalNumber();
  }

}
