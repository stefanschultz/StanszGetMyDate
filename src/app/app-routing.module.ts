import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanszPageCalendarComponent } from './pages/stansz-page-calendar/stansz-page-calendar.component';
import { StanszPageNotFoundComponent } from './pages/stansz-page-not-found/stansz-page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StanszPageCalendarComponent },
  { path: 'calendar', component: StanszPageCalendarComponent },
  { path: '**', component: StanszPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
