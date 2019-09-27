export class StanszCalenderWeekInformationModel {

  private _date: Date;
  private _year: number;
  private _calenderWeek: number;
  private _weekDayMonday: Date;
  private _weekDayTuesday: Date;
  private _weekDayWednesday: Date;
  private _weekDayThursday: Date;
  private _weekDayFriday: Date;
  private _weekDaySaturday: Date;
  private _weekDaySunday: Date;

  constructor() {
  }


  //
  //
  // METHODS
  //
  //

  calculateInformationsFromCalenderWeek(week: number) {
  }

  calculateInformationsFromDate(date: Date) {
    if (date) {

    }
  }


  //
  //
  // GETTER AND SETTER
  //
  //

  get date(): Date {
    return this._date;
  }

  set date(date:Date) {
    if (date !== undefined && date !== null) {
      this._date = date;
    } else {
      this._date = null;
    }
  }

  get year(): number {
    return this._year;
  }

  set year(year: number) {
    if (year !== undefined && year !== null) {
      this._year = year;
    } else {
      this._year = -1;
    }
  }

  get calenderWeek(): number {
    return this._calenderWeek;
  }

  set calenderWeek(calenderWeek:number) {
    if (calenderWeek !== undefined && calenderWeek !== null) {
      if (calenderWeek >= -1 && calenderWeek <= 55) {
        this.calenderWeek = calenderWeek;
      }
    }
    calenderWeek = -1;
  }

  get weekDayMonday(): Date {
    return this._weekDayMonday;
  }

  set weekDayMonday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDayMonday = date;
    } else {
      this._weekDayMonday = null;
    }
  }

  get weekDayTuesday(): Date {
    return this._weekDayTuesday;
  }

  set weekDayTuesday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDayTuesday = date;
    } else {
      this._weekDayTuesday = null;
    }
  }

  get weekDayWednesday(): Date {
    return this._weekDayWednesday;
  }

  set weekDayWednesday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDayWednesday = date;
    } else {
      this._weekDayWednesday = null;
    }
  }

  get weekDayThursday(): Date {
    return this._weekDayThursday;
  }

  set weekDayThursday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDayThursday = date;
    } else {
      this._weekDayThursday = null;
    }
  }

  get weekDayFriday(): Date {
    return this._weekDayFriday;
  }

  set weekDayFriday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDayFriday = date;
    } else {
      this._weekDayFriday = null;
    }
  }

  get weekDaySaturday(): Date {
    return this._weekDaySaturday;
  }

  set weekDaySaturday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDaySaturday = date;
    } else {
      this._weekDaySaturday = null;
    }
  }

  get weekDaySunday(): Date {
    return this._weekDaySunday;
  }

  set weekDaySunday(date: Date) {
    if (date !== undefined && date !== null) {
      this._weekDaySunday = date;
    } else {
      this._weekDaySunday = null;
    }
  }
}