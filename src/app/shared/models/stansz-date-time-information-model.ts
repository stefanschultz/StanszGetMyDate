import { StanszDayNamesEnum } from '../enums/stansz-day-names-enum.enum';
import { StanszMonthNamesEnum } from '../enums/stansz-month-names-enum.enum';

export class StanszDateTimeInformationModel {
  
  public constructor(
    public date: Date,
    public year: number,
    public month: number,
    public monthName: StanszMonthNamesEnum,
    public week: number,
    public day: number,
    public dayName: StanszDayNamesEnum
  ) {}

  toString(): string {
    let s:string = '';
    s += 'date: ' + this.date.toDateString();
    s += 'year: ' + this.year.toString();
    s += 'month: ' + this.month.toString();
    s += 'monthName: ' + this.monthName;
    s += 'week' + this.week.toString();
    s += 'day: ' + this.day.toString();
    s += 'dayName: ' + this.dayName;
    return s;
  }
}