import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MeriradionumeroService } from '../meriradionumero.service';
import { Meriradionumerot } from '../models/shipsignalnumber';
import { Odata } from '../models/odata.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-meriradionumero',
  templateUrl: './meriradionumero.component.html',
  styleUrls: ['./meriradionumero.component.css']
})
export class MeriradionumeroComponent implements OnInit, OnDestroy {

MeriradioList: any;

subscription!: Subscription;
listMeriradionumerot: Meriradionumerot [] = [];

  //Meriradionumero = '/api';
  constructor (private hpservice : MeriradionumeroService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
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
        this._snackBar.open('Sisältö ladattu!', 'OK!', {duration: 3000, panelClass: ['green-snackbar']});
      }, 
        complete: () => console.info('Get list complete')
    });
  }
  }


