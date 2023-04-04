import { Component, OnInit } from '@angular/core';
import { MeriradionumeroService } from '../meriradionumero.service';


@Component({
  selector: 'app-meriradionumero',
  templateUrl: './meriradionumero.component.html',
  styleUrls: ['./meriradionumero.component.css']
})
export class MeriradionumeroComponent implements OnInit {

  MeriradioList: any;
  //Meriradionumero = '/api';
  constructor (private hpservice : MeriradionumeroService) {
   // this.hpservice.getBoatResults();
  }

  ngOnInit(): void {
   this.getMeriradionumero();

  }

  /*
  getBoatResultNum(){
    return this.hpservice.boatresult;
  }*/


  getMeriradionumero(): void {
    this.hpservice.getMeriradionumero().subscribe ((data: any) => {
    this.MeriradioList = data;
    });





  }

}
