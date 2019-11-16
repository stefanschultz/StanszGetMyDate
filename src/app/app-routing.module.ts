import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanszPageWeekCalendarComponent } from './pages/stansz-page-week-calendar/stansz-page-week-calendar.component';
import { StanszPageNotFoundComponent } from './pages/stansz-page-not-found/stansz-page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StanszPageWeekCalendarComponent },
  { path: 'weekcalendar', component: StanszPageWeekCalendarComponent },
  { path: '**', component: StanszPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
