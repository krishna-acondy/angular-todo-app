import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  list() {
    return [
      { text: 'Do laundry', done: true },
      { text: 'Get a haircut', done: false },
      { text: 'Book Star Wars tickets', done: false }
    ];
  }
}
