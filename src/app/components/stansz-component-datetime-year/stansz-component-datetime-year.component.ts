import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stansz-component-datetime-year',
  templateUrl: './stansz-component-datetime-year.component.html',
  styleUrls: ['./stansz-component-datetime-year.component.scss']
})
export class StanszComponentDatetimeYearComponent implements OnInit {

  @Input() yearNumber:number;
  
  constructor() { }

  ngOnInit() {
  }

}
