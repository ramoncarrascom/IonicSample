import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  customYearValues = [2025, 2020, 2015];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => { console.log(event); }
      },
      {
        text: 'Mundo',
        handler: () => { console.log('Mundo!'); }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFechaNacimiento($event) {
    console.log($event);
    console.log(new Date($event.detail.value));
  }

}
