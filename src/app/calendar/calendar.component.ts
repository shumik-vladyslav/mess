import {Component} from '@angular/core';

@Component({
  selector: 'calendar',
  styleUrls: ['./calendar.component.sass'],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  value: Date;
}
