import { Component, Input, OnInit } from '@angular/core';
import { Meriradionumerot } from '../models/shipsignalnumber';

@Component({
  selector: 'app-meriradio-item',
  templateUrl: './meriradio-item.component.html',
  styleUrls: ['./meriradio-item.component.css']
})
export class MeriradioItemComponent implements OnInit  {

  @Input() listMeriradionumerot: Meriradionumerot[] = [];
  p: number[] = [];
  collection: any[] = [];
  term = '';
  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}
}
