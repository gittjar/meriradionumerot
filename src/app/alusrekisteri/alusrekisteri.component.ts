import { Component, OnInit } from '@angular/core';
import { Alus } from '../models/alusrekisteri';
import { AlusService } from '../alus.service';
import { OdataAlus } from '../models/odata.alus.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alusrekisteri',
  templateUrl: './alusrekisteri.component.html',
  styleUrls: ['./alusrekisteri.component.css']
})
export class AlusrekisteriComponent implements OnInit {

  p: number[] = [];
  term = '';
  Aluslist: Alus[] = [];

  constructor(private alusService: AlusService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getAllAlus();
  }

  getAllAlus() {
    this.alusService.getAlusList().subscribe({
      next: (data: OdataAlus) => {
        if (data && data.value) {
          this.Aluslist = this.removeDuplicates(data.value);
          this._snackBar.open('Sisältö ladattu Traficomista!', 'OK!', { duration: 3000, panelClass: ['green-snackbar'] });
        } else {
          console.error('Unexpected data format:', data);
        }
      },
      complete: () => console.info('Get list complete')
    });
  }

  removeDuplicates(alusList: Alus[]): Alus[] {
    const seen = new Set<number>();
    // Prefer records with Rakennusvuosi (omistajuustyyppi=3), then any
    const withDetails = alusList.filter(a => a.Rakennusvuosi !== null);
    const withoutDetails = alusList.filter(a => a.Rakennusvuosi === null);
    const result: Alus[] = [];
    for (const item of [...withDetails, ...withoutDetails]) {
      if (!seen.has(item.alus_id)) {
        seen.add(item.alus_id);
        result.push(item);
      }
    }
    return result;
  }

  trackByFn(index: number, item: Alus): number {
    return item.alus_id;
  }

  changeTermHamina() { this.term = 'Hamina'; }
  changeTermHelsinki() { this.term = 'Helsinki'; }
  changeTermOulu() { this.term = 'Oulu'; }
  changeTermPorvoo() { this.term = 'Porvoo'; }
  changeTermTurku() { this.term = 'Turku'; }
}