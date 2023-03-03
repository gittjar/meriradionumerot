import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Majakka } from '../models/majakka'
import { MajakkaService } from '../majakka.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-majakat',
  templateUrl: './majakat.component.html',
  styleUrls: ['./majakat.component.css']
})
export class MajakatComponent implements OnInit {

    // filteri taulukkoon
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    @Input () fullWidthMode = false;

    majakka: Majakka[] = [];
    public displayedColumns: string[] = ['name', 'sijainti', 'kartalla', 'korkeus']; 
    public dataSource = new MatTableDataSource<Majakka>();

    constructor(private majakkaService: MajakkaService) {
    }

    ngOnInit() {
      this.getMajakkaInformation();
    }
  
      getMajakkaInformation(){
        this.majakkaService.getMajakat()
        .subscribe((res)=>{
          console.log(res);
          this.dataSource.data = res;
        })
      }
    }


