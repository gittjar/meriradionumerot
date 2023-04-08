import { Component, OnInit } from '@angular/core';
import { MeriradionumeroService } from '../meriradionumero.service';
import { ShipRadioLicense } from '../models/shipsignalnumber';



@Component({
  selector: 'app-meriradionumero',
  templateUrl: './meriradionumero.component.html',
  styleUrls: ['./meriradionumero.component.css']
})
export class MeriradionumeroComponent implements OnInit {

  MeriradioList: any;
  shipRadioLicenses: ShipRadioLicense[] | undefined;


  //Meriradionumero = '/api';
  constructor (private hpservice : MeriradionumeroService) {
  }

  ngOnInit(): void {
   //this.getMeriradionumero();
   // this.getBoatResultNum();
   this.hpservice.getBoatResults().subscribe(res=> {
    this.shipRadioLicenses = res.value;
   })
  }

  



  getMeriradionumero(): void {
    this.hpservice.getMeriradionumero().subscribe ((data: any) => {
    this.MeriradioList = data;
    });





  }

}
