import { Component, OnInit } from '@angular/core';
import { NumberFlag } from '../models/numberflag';
import { NumberflagService } from '../numberflag.service';

@Component({
  selector: 'app-numberflags',
  templateUrl: './numberflags.component.html',
  styleUrls: ['./numberflags.component.css']
})
export class NumberflagsComponent implements OnInit {

  numberflagsaddress: NumberFlag [] = [];

  constructor (private httpservice : NumberflagService) {}
  
  getNumberFlag(): void {
    this.httpservice.getNumberFlag().subscribe(numberflagsaddress => this.numberflagsaddress = numberflagsaddress);
  }
  
  ngOnInit(): void {
    this.getNumberFlag();
  }
  
  }
