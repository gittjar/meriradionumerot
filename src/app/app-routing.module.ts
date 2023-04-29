import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';
import { MeriradionumeroComponent } from './meriradionumero/meriradionumero.component';
import { AlusDetailsComponent } from './alus-details/alus-details.component';

const routes: Routes = [
  // meriradio; not in use now --> connect to traficom
{path : 'meriradio2', component: NumbersComponent}, // THIS IS NOT IN USE
{path : 'meriradio', component: MeriradionumeroComponent}, // THIS IS CONNECTED TO TRAFICOM !
{path : 'signaaliliput', component: SignalflagsComponent},
{path : 'alusrekisteri', component: AlusrekisteriComponent},
{path : 'majakat', component: MajakatComponent},
{path : 'alus-details/:id', component: AlusDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
