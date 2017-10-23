import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle doneness', () => {
    const todo = { text: 'Thing', done: false };

    component.toggle(todo);

    expect(todo.done).toBeTruthy();

    component.toggle(todo);

    expect(todo.done).toBeFalsy();
  });

  it('should add todos', () => {
    component.todos = [];

    component.add('Buy groceries');

    expect(component.todos.length).toEqual(1);
    expect(component.todos).toContain({ text: 'Buy groceries', done: false });
  });

  it('should remove todos', () => {
    const todo = { text: 'Buy groceries', done: false };
    component.todos = [ todo ];

    component.remove(todo);

    expect(component.todos.length).toEqual(0);
  });
});
