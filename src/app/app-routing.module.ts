import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { SignalflagsComponent } from './signalflags/signalflags.component';

const routes: Routes = [
{path : 'meriradionumerot', component: NumbersComponent}, 
{path : 'signaaliliput', component: SignalflagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
