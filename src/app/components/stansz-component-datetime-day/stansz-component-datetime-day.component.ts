import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stansz-component-datetime-day',
  templateUrl: './stansz-component-datetime-day.component.html',
  styleUrls: ['./stansz-component-datetime-day.component.scss']
})
export class StanszComponentDatetimeDayComponent implements OnInit {

  @Input() dayNumber:string;
  @Input() dayName:string;
  @Input() isToday:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
