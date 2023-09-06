import { Component, OnInit } from '@angular/core';
import { Alus } from '../models/alusrekisteri'
import { AlusService } from '../alus.service';
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

  constructor (private httpservice : AlusService, private _snackBar: MatSnackBar) {}
  
  subscription!: Subscription;
  Aluslist : Alus[] = [];

  panelOpenState = false;

  ngOnInit(): void {
    this.getAllAlus();
  }

  getAllAlus() {
    this.httpservice.getAlusList().subscribe({
      next: (data: OdataAlus) => {
        this.Aluslist = data.value.filter((item: Alus) => {
          return !item['@odata.type'];
        });
       this._snackBar.open('Sisältö ladattu Traficomista!', 'OK!', {duration: 3000, panelClass: ['green-snackbar']});
      }, 
        complete: () => console.info('Get list complete')
    });
  }

  displayedNames: string[] = [];

  // Create a method to check if a name has already been displayed
  isNameDisplayed(name: string): boolean {
    return this.displayedNames.includes(name);
  }

  // Create a method to add a name to the list of displayed names
  addNameToDisplayedList(name: string): void {
    this.displayedNames.push(name);
  }
  

    // Button functions
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
  
