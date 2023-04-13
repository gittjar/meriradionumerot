import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MeriradionumeroService } from '../meriradionumero.service';
import { Meriradionumerot } from '../models/shipsignalnumber';
import { Odata } from '../models/odata.model';



@Component({
  selector: 'app-meriradionumero',
  templateUrl: './meriradionumero.component.html',
  styleUrls: ['./meriradionumero.component.css']
})
export class MeriradionumeroComponent implements OnInit, OnDestroy {

  MeriradioList: any;
 // shipRadioLicenses: ShipRadioLicense[] | undefined;

 subscription!: Subscription;
 listMeriradionumerot: Meriradionumerot [] = [];

  //Meriradionumero = '/api';
  constructor (private hpservice : MeriradionumeroService) {
  }

  ngOnInit(): void {
   //this.getMeriradionumero();
   // this.getBoatResultNum();
   //this.hpservice.getBoatResults().subscribe(res=> {
   // this.shipRadioLicenses = res.value;
   this.getAllMeriradioList();
   }

   ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getAllMeriradioList() {
    this.hpservice.getMeriradioList().subscribe({
      next: (data: Odata) => {
        this.listMeriradionumerot = data.value.filter((item: Meriradionumerot) => {
          return !item['@odata.type'];
        });
        let NameList = this.listMeriradionumerot.map(
          (element: Meriradionumerot) => element.ID
        );
       // this.hpservice.existingUsernames = NameList;

      },
      error: (err: HttpErrorResponse) => {
      },
      complete: () => console.info('Get list complete'),
    });
  }
  

  



  getMeriradionumero(): void {
    this.hpservice.getMeriradionumero().subscribe ((data: any) => {
    this.MeriradioList = data;
    })





  }
}

