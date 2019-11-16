import { Injectable } from '@angular/core';

import { StanszDateTimeInformationModel } from '../../shared/models/stansz-date-time-information-model';
import { StanszMonthNamesEnum } from 'src/app/shared/enums/stansz-month-names-enum.enum';
import { StanszDayNamesEnum } from 'src/app/shared/enums/stansz-day-names-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class StanszServiceDatetimeService {

  stanszDateTimeInformationModel:StanszDateTimeInformationModel = new StanszDateTimeInformationModel();

  constructor() {
    this.newDate()
  }

  /**
   * Method set new date to datetime model
   */
  newDate() {
    this.stanszDateTimeInformationModel.setNewDate(new Date());
  }

  /**
   * Method set new parameter date to datetime model
   * 
   * @param date 
   */
  setNewDate(date:Date) {
    this.stanszDateTimeInformationModel.setNewDate(date);
  }
}
