import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { faChevronCircleDown, faChevronCircleUp, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { StanszServiceDatetimeService } from 'src/app/services/stansz-service-datetime/stansz-service-datetime.service';


@Component({
  selector: 'stansz-page-week-calendar',
  templateUrl: './stansz-page-week-calendar.component.html',
  styleUrls: ['./stansz-page-week-calendar.component.scss']
})
export class StanszPageWeekCalendarComponent implements OnInit {
  
  dateTimeModelCurrentWeek:StanszServiceDatetimeService = new StanszServiceDatetimeService();
  dateTimeModelPreviousWeek:StanszServiceDatetimeService = new StanszServiceDatetimeService();
  dateTimeModelNextWeek:StanszServiceDatetimeService = new StanszServiceDatetimeService();

  dayNumbersCurrentWeek = {
  }
  dayNumbersPreviousWeek = {
  }
  dayNumbersNextWeek = {
  }

  datePreviousWeek = null;
  dateNextWeek = null;

  faChevronCircleUp = faChevronCircleUp;
  faChevronCircleDown = faChevronCircleDown;
  faSyncAlt = faSyncAlt;

  constructor() {
  }
  
  ngOnInit() {
    this.resetAll();
  }

  /**
   * Reset and calculate all data for values and variables
   */
  resetAll() {
    this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersCurrentWeek = this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.dayNumbers;

    this.calculatePreviousAndNextWeek(1);

    this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersPreviousWeek = this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelNextWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelNextWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersNextWeek = this.dateTimeModelNextWeek.stanszDateTimeInformationModel.dayNumbers;
  }

  /**
   * Method calculate and init the dates for the previous and next week
   */
  calculatePreviousAndNextWeek(weekSteps:number=1) {
    let datePreviousWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    datePreviousWeek.setDate(datePreviousWeek.getDate() - (7 * weekSteps));
    this.dateTimeModelPreviousWeek.setNewDate(new Date(datePreviousWeek));

    let dateNextWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateNextWeek.setDate(dateNextWeek.getDate() + (7 * weekSteps));
    this.dateTimeModelNextWeek.setNewDate(dateNextWeek);
  }

  getWeekNumberOfCurrentWeek():number {
    return this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.week;
  }

  getWeekNumberOfPreviousWeek():number {
    return this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.week;
  }

  getWeekNumberOfNextWeek():number {
    return this.dateTimeModelNextWeek.stanszDateTimeInformationModel.week;
  }

  getYearOfCurrentWeek():number {
    return this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.year;
  }

  getYearOfPreviousWeek():number {
    return this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.year;
  }

  getYearOfNextWeek():number {
    return this.dateTimeModelNextWeek.stanszDateTimeInformationModel.year;
  }

  isTodayMonday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'monday') ? true : false;
  }
  isTodayTuesday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'tuesday') ? true : false;
  }
  isTodayWednesday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'wednesday') ? true : false;
  }
  isTodayThursday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'thursday') ? true : false;
  }
  isTodayFriday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'friday') ? true : false;
  }
  isTodaySaturday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'saturday') ? true : false;
  }
  isTodaySunday(): boolean {
    return (this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.weekDayName.toLowerCase() === 'sunday') ? true : false;
  }

  onClickGoBackwardWeeks(weekSteps:number=1) {
    let dateCurrentWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateCurrentWeek.setDate(dateCurrentWeek.getDate() - (7 * weekSteps));
    this.dateTimeModelCurrentWeek.setNewDate(new Date(dateCurrentWeek));

    let datePreviousWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    datePreviousWeek.setDate(datePreviousWeek.getDate() - (7 * weekSteps));
    this.dateTimeModelPreviousWeek.setNewDate(new Date(datePreviousWeek));

    let dateNextWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateNextWeek.setDate(dateNextWeek.getDate() + (7 * weekSteps));
    this.dateTimeModelNextWeek.setNewDate(dateNextWeek);

    this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersCurrentWeek = this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersPreviousWeek = this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelNextWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelNextWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersNextWeek = this.dateTimeModelNextWeek.stanszDateTimeInformationModel.dayNumbers;
  }
  
  onCLickGoForwardWeeks(weekSteps:number=1) {
    let dateCurrentWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateCurrentWeek.setDate(dateCurrentWeek.getDate() + (7 * weekSteps));
    this.dateTimeModelCurrentWeek.setNewDate(new Date(dateCurrentWeek));

    let datePreviousWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    datePreviousWeek.setDate(datePreviousWeek.getDate() - (7 * weekSteps));
    this.dateTimeModelPreviousWeek.setNewDate(new Date(datePreviousWeek));

    let dateNextWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateNextWeek.setDate(dateNextWeek.getDate() + (7 * weekSteps));
    this.dateTimeModelNextWeek.setNewDate(dateNextWeek);

    this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersCurrentWeek = this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersPreviousWeek = this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelNextWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelNextWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersNextWeek = this.dateTimeModelNextWeek.stanszDateTimeInformationModel.dayNumbers;
  }

  onClickReloadToCurrentWeek() {
    let dateCurrentWeek = new Date();
    this.dateTimeModelCurrentWeek.setNewDate(new Date(dateCurrentWeek));

    let datePreviousWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    datePreviousWeek.setDate(datePreviousWeek.getDate() - (7 * 1));
    this.dateTimeModelPreviousWeek.setNewDate(new Date(datePreviousWeek));

    let dateNextWeek = new Date(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    dateNextWeek.setDate(dateNextWeek.getDate() + (7 * 1));
    this.dateTimeModelNextWeek.setNewDate(dateNextWeek);

    this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersCurrentWeek = this.dateTimeModelCurrentWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersPreviousWeek = this.dateTimeModelPreviousWeek.stanszDateTimeInformationModel.dayNumbers;

    this.dateTimeModelNextWeek.stanszDateTimeInformationModel.calculateDayNumbers(this.dateTimeModelNextWeek.stanszDateTimeInformationModel.date);
    this.dayNumbersNextWeek = this.dateTimeModelNextWeek.stanszDateTimeInformationModel.dayNumbers;
  }
}
