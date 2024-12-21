
// alusrekisteri.component.ts
import { Component, OnInit } from '@angular/core';
import { Alus } from '../models/alusrekisteri';
import { AlusrekisteriService } from '../alusrekisteri.service';
import { OdataAlus } from '../models/odata.alus.model';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private httpservice: AlusrekisteriService, private _snackBar: MatSnackBar) {}

  subscription!: Subscription;
  Aluslist: Alus[] = [];

  panelOpenState = false;

  ngOnInit(): void {
    this.getAllAlus();
  }

  getAllAlus() {
    this.httpservice.getAlus().subscribe({
      next: (data: OdataAlus) => {
        if (data && data.value) {
          this.Aluslist = data.value.filter((item: Alus) => {
            return !item['@odata.type'];
          });
          this._snackBar.open('Sisältö ladattu Traficomista!', 'OK!', { duration: 3000, panelClass: ['green-snackbar'] });
        } else {
          console.error('Unexpected data format:', data);
        }
      },
      complete: () => console.info('Get list complete')
    });
  }

  displayedNames: string[] = [];

  isNameDisplayed(name: string): boolean {
    return this.displayedNames.includes(name);
  }

  addNameToDisplayedList(name: string): void {
    this.displayedNames.push(name);
  }

  changeTermHamina() {
    this.term = 'Hamina';
  }
  changeTermHelsinki() {
    this.term = 'Helsinki';
  }
  changeTermOulu() {
    this.term = 'Oulu';
  }
  changeTermPorvoo() {
    this.term = 'Porvoo';
  }
  changeTermTurku() {
    this.term = 'Turku';
  }
}