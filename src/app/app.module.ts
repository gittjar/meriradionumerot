import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NumbersComponent } from './numbers/numbers.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { NumberflagsComponent } from './numberflags/numberflags.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';
import { MatSortModule } from '@angular/material/sort';
import { MeriradionumeroComponent } from './meriradionumero/meriradionumero.component';
import { MeriradioItemComponent } from './meriradio-item/meriradio-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import {MatExpansionModule} from '@angular/material/expansion';
import { AlusDetailsComponent } from './alus-details/alus-details.component';
import { LokikirjaComponent } from './lokikirja/lokikirja.component';

import {NgxWebstorageModule} from 'ngx-webstorage';
import { MainpageComponent } from './mainpage/mainpage.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NumbersComponent,
    SignalflagsComponent,
    NumberflagsComponent,
    AlusrekisteriComponent,
    MajakatComponent,
    MeriradionumeroComponent,
    MeriradioItemComponent,
    AlusDetailsComponent,
    LokikirjaComponent,
    MainpageComponent,
    
 
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
    MatSortModule,
    MatSnackBarModule,
    NgbModule,
    NgbCollapseModule,
    MatExpansionModule,
    NgxWebstorageModule.forRoot(),
    
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
