import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StanszComponentDatetimeWeekComponent } from './components/stansz-component-datetime-week/stansz-component-datetime-week.component';
import { StanszComponentDatetimeYearComponent } from './components/stansz-component-datetime-year/stansz-component-datetime-year.component';
import { StanszComponentDatetimeMonthComponent } from './components/stansz-component-datetime-month/stansz-component-datetime-month.component';
import { StanszComponentDatetimeDayComponent } from './components/stansz-component-datetime-day/stansz-component-datetime-day.component';
import { StanszPageCalendarComponent } from './pages/stansz-page-calendar/stansz-page-calendar.component';
import { StanszPageNotFoundComponent } from './pages/stansz-page-not-found/stansz-page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StanszComponentDatetimeWeekComponent,
    StanszComponentDatetimeYearComponent,
    StanszComponentDatetimeMonthComponent,
    StanszComponentDatetimeDayComponent,
    StanszPageCalendarComponent,
    StanszPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
