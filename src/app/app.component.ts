import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [
    { text: 'Do laundry', done: true },
    { text: 'Get a haircut', done: false },
    { text: 'Book Star Wars tickets', done: false }
  ];
}
