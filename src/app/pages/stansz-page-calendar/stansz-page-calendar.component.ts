import { Component, OnInit } from '@angular/core';

import { StanszServiceDatetimeService } from 'src/app/services/stansz-service-datetime/stansz-service-datetime.service';

@Component({
  selector: 'stansz-page-calendar',
  templateUrl: './stansz-page-calendar.component.html',
  styleUrls: ['./stansz-page-calendar.component.scss']
})
export class StanszPageCalendarComponent implements OnInit {

  constructor(private dateTime:StanszServiceDatetimeService) { }

  ngOnInit() {
  }

}
