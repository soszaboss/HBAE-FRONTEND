import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'time-field-app',
  templateUrl: './time-field.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .inline-flatpickr .form-control,
      .flatpickr-calendar.arrowTop:before,
      .flatpickr-calendar.arrowTop:after {
        display: none;
      }
    `,
  ],
})
export class TimeFieldComponent {
  basicDemoValue = '2017-01-01';
  modelValueAsDate: Date = new Date();
  dateTimeValue: Date = new Date();
  multiDates: Date[] = [new Date(), (new Date() as any)['fp_incr'](10)];
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10),
  };
  inlineDatePicker: Date = new Date();
  timePicker: Date | null = null;
}