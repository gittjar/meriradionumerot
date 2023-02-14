import { Component, OnInit } from '@angular/core';
import { BoatNumber } from '../models/numbers';
import { BoatNumberInformation } from '../models/numbersinformation';
import { BoatnumberService } from '../boatnumber.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  boatInfo : BoatNumberInformation;

  constructor (public bnService : BoatnumberService){
    this.boatInfo = {} as BoatNumberInformation; 
  }

ngOnInit(): void {
  this.bnService.getBoats().subscribe((response:BoatNumberInformation) => {

    this.boatInfo = response;

  });
}
}
