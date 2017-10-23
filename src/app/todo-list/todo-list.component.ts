import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle(todo) {
    todo.done = !todo.done;
  }

  remove(todoToRemove) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
  }

  add(newTodo) {
    this.todos.push({ text: newTodo, done: false });
  }

}
