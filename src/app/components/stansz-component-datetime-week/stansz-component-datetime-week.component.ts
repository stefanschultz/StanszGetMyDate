import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stansz-component-datetime-week',
  templateUrl: './stansz-component-datetime-week.component.html',
  styleUrls: ['./stansz-component-datetime-week.component.scss']
})
export class StanszComponentDatetimeWeekComponent implements OnInit {

  @Input() weekNumber:number;

  constructor() { }

  ngOnInit() {
  }

}
