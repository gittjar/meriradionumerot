import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NumbersComponent } from './numbers/numbers.component';

// mat modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { NumberflagsComponent } from './numberflags/numberflags.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NumbersComponent,
    SignalflagsComponent,
    NumberflagsComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
   


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
