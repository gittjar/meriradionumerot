import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { SignalflagsComponent } from './signalflags/signalflags.component';
import { AlusrekisteriComponent } from './alusrekisteri/alusrekisteri.component';
import { MajakatComponent } from './majakat/majakat.component';
import { MeriradionumeroComponent } from './meriradionumero/meriradionumero.component';
import { AlusDetailsComponent } from './alus-details/alus-details.component';
import { LokikirjaComponent } from './lokikirja/lokikirja.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  // meriradio; not in use now --> connect to traficom
{path : 'meriradio2', component: NumbersComponent}, // THIS IS NOT IN USE
{path : 'meriradio', component: MeriradionumeroComponent}, // THIS IS CONNECTED TO TRAFICOM !
{path : 'signaaliliput', component: SignalflagsComponent},
{path : 'alusrekisteri', component: AlusrekisteriComponent}, // THIS IS CONNECTED TO TRAFICOM !
{path : 'majakat', component: MajakatComponent},
{path : 'alus-details/:id', component: AlusDetailsComponent},
{path : 'lokikirja', component: LokikirjaComponent},
{path : 'mainpage', component: MainpageComponent },
{path : '', redirectTo: '/mainpage', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
