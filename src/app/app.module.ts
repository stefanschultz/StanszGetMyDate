import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//
// Components
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StanszComponentDatetimeWeekComponent } from './components/stansz-component-datetime-week/stansz-component-datetime-week.component';
import { StanszComponentDatetimeYearComponent } from './components/stansz-component-datetime-year/stansz-component-datetime-year.component';
import { StanszComponentDatetimeMonthComponent } from './components/stansz-component-datetime-month/stansz-component-datetime-month.component';
import { StanszComponentDatetimeDayComponent } from './components/stansz-component-datetime-day/stansz-component-datetime-day.component';
import { StanszPageWeekCalendarComponent } from './pages/stansz-page-week-calendar/stansz-page-week-calendar.component';
import { StanszPageNotFoundComponent } from './pages/stansz-page-not-found/stansz-page-not-found.component';

// External libraries
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    StanszComponentDatetimeWeekComponent,
    StanszComponentDatetimeYearComponent,
    StanszComponentDatetimeMonthComponent,
    StanszComponentDatetimeDayComponent,
    StanszPageWeekCalendarComponent,
    StanszPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
