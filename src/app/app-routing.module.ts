import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { ShipsignalnumberComponent } from './shipsignalnumber/shipsignalnumber.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';
import { MeriradionumeroComponent } from './meriradionumero/meriradionumero.component';

const routes: Routes = [
  // meriradio; not in use now --> connect to traficom
{path : 'meriradio', component: NumbersComponent}, // THIS IS NOT IN USE
{path : 'meriradio2', component: MeriradionumeroComponent}, // THIS IS CONNECTED TO TRAFICOM
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
