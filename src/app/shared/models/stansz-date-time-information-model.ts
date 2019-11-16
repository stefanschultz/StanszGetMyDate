import { StanszDayNamesEnum } from '../enums/stansz-day-names-enum.enum';
import { StanszMonthNamesEnum } from '../enums/stansz-month-names-enum.enum';

export class StanszDateTimeInformationModel {

  private _date: Date;
  private _year: number;
  private _month: number;
  private _monthName: string;
  private _monthDay: number;
  private _day: number;
  private _week: number;
  private _weekDay: number;
  private _weekDayName: string;

  private dayNumbersDefault = {
    'monday': '',
    'tuesday': '',
    'wednesday': '',
    'thursday': '',
    'friday': '',
    'saturday': '',
    'sunday': ''
  }

  public dayNumbers = {
  }

  constructor() {
    this.initValues();
  }

  //
  //
  // Methods
  //
  //

  /**
   * Method init all variables to null
   */
  initValues() {
    this._date = null;
    this._year = null;
    this._month = null;
    this._monthName = null;
    this._monthDay = null;
    this._day = null;
    this._week = null;
    this._weekDay = null;
    this._weekDayName = null;
  }

  /**
   * Method set date object to all variables
   * 
   * @param date 
   */
  setNewDate(date: Date) {
    if (date !== undefined && date !== null) {
      this._date = date;
      this._year = date.getFullYear();
      this._month = date.getMonth();
      this._monthName = this.convertToMonthName(date.getMonth());
      this._monthDay = date.getDate();
      this._day = this.convertDateToDayOfYear(date);
      this._week = this.convertDateToWeekOfYear(date);
      this._weekDay = date.getDay();
      this._weekDayName = this.convertDayToDayName(date.getDay());
    }
  }

  /**
   * Method sets all values to variables
   * 
   * @param date 
   * @param year 
   * @param month 
   * @param monthName 
   * @param monthDay 
   * @param day 
   * @param week 
   * @param weekDay 
   * @param weekDayName 
   */
  setValues(
    date: Date = null,
    year: number = null,
    month: number = null,
    monthName: StanszMonthNamesEnum = null,
    monthDay: number = null,
    day: number = null,
    dayNumber:number = null,
    week: number = null,
    weekDay: number = null,
    weekDayName: StanszDayNamesEnum = null
    ) {
    this._date = date;
    this._year = year;
    this._month = month;
    this._monthName = monthName;
    this._monthDay = monthDay;
    this._day = day;
    this._week = week;
    this._weekDay = weekDay;
    this._weekDayName = weekDayName;
  }

  /**
   * Method get all values as object back
   */
  getValuesAsObject(): Object {
    return {
      date: this._date,
      year: this._year,
      month: this._month,
      monthName: this._monthName,
      monthDay: this._monthDay,
      day: this._day,
      week: this._week,
      weekDay: this._weekDay,
      weekDayName: this._weekDayName
    };
  }

  /**
   * Method convert month number to month name of year
   * Values are from 0 to 11
   * 
   * @param month 
   */
  convertToMonthName(month:number): string {
    if (month !== undefined && month !== null) {
      switch (month) {
        case 0:
          return StanszMonthNamesEnum.January;
        case 1:
          return StanszMonthNamesEnum.February;
        case 2:
          return StanszMonthNamesEnum.March;
        case 3:
          return StanszMonthNamesEnum.April;
        case 4:
          return StanszMonthNamesEnum.May;
        case 5:
          return StanszMonthNamesEnum.June;
        case 6:
          return StanszMonthNamesEnum.July;
        case 7:
          return StanszMonthNamesEnum.August;
        case 8:
          return StanszMonthNamesEnum.September;
        case 9:
          return StanszMonthNamesEnum.October;
        case 10:
          return StanszMonthNamesEnum.November;
        case 11:
          return StanszMonthNamesEnum.December;
        default:
          return null;
      }
    }
    return null;
  }

  /**
   * Method convert day number to day name of week
   * Value are from 0 to 6
   * 
   * @param day 
   */
  convertDayToDayName(day:number): string {
    if (day !== undefined && day !== null) {
      switch (day) {
        case 0:
          return StanszDayNamesEnum.Sunday;
        case 1:
          return StanszDayNamesEnum.Monday;
        case 2:
          return StanszDayNamesEnum.Tuesday;
        case 3:
          return StanszDayNamesEnum.Wednesday;
        case 4:
          return StanszDayNamesEnum.Thursday;
        case 5:
          return StanszDayNamesEnum.Friday;
        case 6:
          return StanszDayNamesEnum.Saturday;
        default:
          return null;
      }
    }
    return null;
  }

  /**
   * Method convert date to date number of year
   * Maximal day number of year is 365
   * 
   * @param date 
   */
  convertDateToDayOfYear(date:Date): number {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    // let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);

    return day;
  }

  /**
   * Method convert date to week number of year
   * Maximal week number of year is 52
   * 
   * @param date 
   */
  convertDateToWeekOfYear(date:Date): number {
    /*
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
    */

    let newDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    let dayNum = newDate.getUTCDay() || 7;
    newDate.setUTCDate(newDate.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(newDate.getUTCFullYear(),0,1));
    let result = Math.ceil((((newDate.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
    return result;
  }

  convertToDayAndMonthNumber(date:Date): string {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let dayAndMonthNumber = '';
    dayAndMonthNumber += (day.toString().length > 1 ? day.toString() : '0' + day.toString()) + '.' + (month.toString().length > 1 ? month.toString() : '0' + month.toString()) + '.';
    return dayAndMonthNumber;
  }

  /**
   * Method calculate day numbers in object
   */
  calculateDayNumbers(date:Date) {
    // Set object to default object
    this.dayNumbers = this.dayNumbersDefault;

    /* console.log('Date: ' + date.getDate());
    console.log('Week day ' + date.getDay()); */

    // Monday
    if (date.getDay() === 1) {
      let d = null;
      
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 2);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 3);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 4);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 5);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 6);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }

    // Tuesday
    if (date.getDay() === 2) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 2);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 3);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 4);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 5);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }

    // Wednesday
    if (date.getDay() === 3) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 2);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);

      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date();
      d.setDate(d.getDate() + 2);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 3);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 4);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }

    // Thursday
    if (date.getDay() === 4) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 3);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 2);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);

      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 2);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 3);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }

    // Friday
    if (date.getDay() === 5) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 4);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 3);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 2);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);

      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      d = new Date(date);
      d.setDate(d.getDate() + 2);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }

    // Saturday
    if (date.getDay() === 6) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 5);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 4);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 3);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 2);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);

      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(date);
      
      d = new Date(date);
      d.setDate(d.getDate() + 1);
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(d);
    }
    
    // Sunday
    if (date.getDay() === 0) {
      let d = null;
      
      d = new Date(date);
      d.setDate(d.getDate() - 6);
      this.dayNumbers['monday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 5);
      this.dayNumbers['tuesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 4);
      this.dayNumbers['wednesday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 3);
      this.dayNumbers['thursday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 2);
      this.dayNumbers['friday'] = this.convertToDayAndMonthNumber(d);

      d = new Date(date);
      d.setDate(d.getDate() - 1);
      this.dayNumbers['saturday'] = this.convertToDayAndMonthNumber(d);
      
      this.dayNumbers['sunday'] = this.convertToDayAndMonthNumber(date);
    }
  }

  toString(): string {
    let s:string = '';
    s += 'date: ' + this._date.toDateString();
    s += 'year: ' + this._year.toString();
    s += 'month: ' + this._month.toString();
    s += 'monthName: ' + this._monthName;
    s += 'monthDay: ' + this._monthDay;
    s += 'day: ' + this._day.toString();
    s += 'week' + this._week.toString();
    s += 'weekDay' + this._weekDay.toString();
    s += 'weekDayName: ' + this._weekDayName;
    return s;
  }

  //
  //
  // GETTER AND SETTER
  //
  //

  get date() {
    return this._date;
  }
  set date(date:Date) {
    if (date !== undefined && date !== null) {
      this._date = date;
    } else {
      this._date = null;
    }
  }

  get year() {
    return this._year;
  }
  set year(year:number) {
    if (year !== undefined && year !== null) {
      this._year = year;
    } else {
      this._year = null;
    }
  }

  get month() {
    return this._month;
  }
  set month(month:number) {
    if (month !== undefined && month !== null && month >= 0 && month <= 11) {
      this._month = month;
    } else {
      this._month = null;
    }
  }

  get monthName() {
    return this._monthName;
  }
  set monthName(monthName:string) {
    if (monthName !== undefined && monthName !== null) {
      this._monthName = monthName;
    } else {
      this._monthName = null;
    }
  }

  get monthDay() {
    return this._monthDay;
  }
  set monthDay(monthDay:number) {
    if (monthDay !== undefined && monthDay !== null && monthDay >= 1 && monthDay <= 31) {
      this._monthDay = monthDay;
    } else {
      this._monthDay = null;
    }
  }

  get day() {
    return this._day;
  }
  set day(day:number) {
    if (day !== undefined && day !== null && day >= 0 && day <= 366) {
      this._day = day;
    } else {
      this._day = null;
    }
  }

  get week() {
    return this._week;
  }
  set week(week:number) {
    if (week !== undefined && week !== null && week >= 0 && week <= 53) {
      this._week = week;
    } else {
      this._week = null;
    }
  }

  get weekDay() {
    return this._weekDay;
  }
  set weekDay(weekDay:number) {
    if (weekDay !== undefined && weekDay !== null && weekDay >= 0 && weekDay <= 6) {
      this._weekDay = weekDay;
    } else {
      this._weekDay = null;
    }
  }

  get weekDayName() {
    return this._weekDayName;
  }
  set weekDayName(weekDayName:string) {
    if (weekDayName !== undefined && weekDayName !== null) {
      this._weekDayName = weekDayName;
    } else {
      this._weekDayName = null;
    }
  }
}