import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NumbersComponent } from './numbers/numbers.component';
import { MatTableModule } from '@angular/material/table';
import {  MatIconModule } from '@angular/material/icon';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { NumberflagsComponent } from './numberflags/numberflags.component';
import { ShipsignalnumberComponent } from './shipsignalnumber/shipsignalnumber.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';
import {MatSortModule} from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NumbersComponent,
    SignalflagsComponent,
    NumberflagsComponent,
    ShipsignalnumberComponent,
    AlusrekisteriComponent,
    MajakatComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatIconModule,
    MatSortModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
