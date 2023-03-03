import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { ShipsignalnumberComponent } from './shipsignalnumber/shipsignalnumber.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';

const routes: Routes = [
  // meriradio; not in use now --> connect to traficom
{path : 'meriradio', component: NumbersComponent}, 
{path : 'signaaliliput', component: SignalflagsComponent},
{path : 'meriradionumerot', component: ShipsignalnumberComponent},
{path : 'alusrekisteri', component: AlusrekisteriComponent},
{path : 'majakat', component: MajakatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
