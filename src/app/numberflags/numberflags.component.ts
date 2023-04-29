import { Component, OnInit } from '@angular/core';
import { NumberFlag } from '../models/numberflag';
import { NumberflagService } from '../numberflag.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-numberflags',
  templateUrl: './numberflags.component.html',
  styleUrls: ['./numberflags.component.css']
})
export class NumberflagsComponent implements OnInit {

  numberflagsaddress: NumberFlag [] = [];

  constructor (private httpservice : NumberflagService, private _snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.getNumberFlag();
  }

  getNumberFlag(): void {
    this.httpservice.getNumberFlag().subscribe(numberflagsaddress => this.numberflagsaddress = numberflagsaddress);
    this._snackBar.open('Kaikki signaaliliput ladattu!', 'OK!', {duration: 3000, panelClass: ['green-snackbar']});
  }
}
  
  

  
  
