import { Injectable } from '@angular/core';

import { StanszDateTimeInformationModel } from '../../shared/models/stansz-date-time-information-model';
import { StanszMonthNamesEnum } from 'src/app/shared/enums/stansz-month-names-enum.enum';
import { StanszDayNamesEnum } from 'src/app/shared/enums/stansz-day-names-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class StanszServiceDatetimeService {

  stanszDateTimeInformationModel:StanszDateTimeInformationModel = new StanszDateTimeInformationModel(
    new Date,
    1983,
    7,
    StanszMonthNamesEnum.July,
    42,
    5,
    StanszDayNamesEnum.Saturday
  );

  constructor() {
    console.log(this.stanszDateTimeInformationModel);

    this.updateDateTimeInformation(new Date());
  }

  /**
   * Method will update the datetime information model
   * 
   * @param date 
   */
  updateDateTimeInformation(date: Date) {
    if (date !== undefined && date !== null) {
      console.log(date.toLocaleString());

      this.setDateTimeInformationModelDate(new Date());
      this.setDateTimeInformationModelYear(2000);
      this.setDateTimeInformationModelMonth(4);
      this.setDateTimeInformationModelMonthName('JULY');
      this.setDateTimeInformationModelDay(1);
      this.setDateTimeInformationModelDayName('MONDAY');
      console.log("Updated datetime information model: ", this.stanszDateTimeInformationModel);
    }
  }

  setDateTimeInformationModelDate(date:Date) {
    if (date !== undefined && date !== null) {
      this.stanszDateTimeInformationModel.date = date;
    }
  }

  setDateTimeInformationModelYear(year:number) {
    if (year !== undefined && year !== null) {
      this.stanszDateTimeInformationModel.year = year;
    }
  }

  setDateTimeInformationModelMonth(month:number) {
    if (month !== undefined && month !== null) {
      if (month !== undefined && month !== null && month >= 1 && month <= 12) {
        this.stanszDateTimeInformationModel.month = month;
      }
    }
  }

  setDateTimeInformationModelMonthName(monthName:string) {
    if (monthName !== undefined && monthName !== null) {
      if (monthName.toLowerCase() === StanszMonthNamesEnum.January.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.January;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.February.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.February;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.March.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.March;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.April.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.April;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.May.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.May;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.June.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.June;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.July.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.July;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.August.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.August;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.September.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.September;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.October.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.October;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.November.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.November;
      }
      if (monthName.toLowerCase() === StanszMonthNamesEnum.December.toLowerCase()) {
        this.stanszDateTimeInformationModel.monthName = StanszMonthNamesEnum.December;
      }
      this.stanszDateTimeInformationModel.monthName = null;
    }
  }

  setDateTimeInformationModelDay(day:number) {
    if (day !== undefined && day !== null) {
      if (day >= 1 && day <= 7) {
        this.stanszDateTimeInformationModel.day = day;
      }
    }
  }

  setDateTimeInformationModelDayName(dayName:string) {
    if (dayName !== undefined && dayName !== null) {
      if (dayName.toLowerCase() === StanszDayNamesEnum.Monday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Monday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Tuesday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Tuesday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Wednesday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Wednesday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Thursday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Thursday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Friday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Friday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Saturday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Saturday;
        return;
      }
      if (dayName.toLowerCase() === StanszDayNamesEnum.Sunday.toLowerCase()) {
        this.stanszDateTimeInformationModel.dayName = StanszDayNamesEnum.Sunday;
        return;
      }
      this.stanszDateTimeInformationModel.dayName = null;
    }
  }
}
