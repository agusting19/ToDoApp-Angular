import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First Todo', completed: false },
      { content: 'Second Todo', completed: false },
    ];
  }

  toggleDone(id: number) {
    this.todos?.map((value, index) => {
      if (index == id) {
        value.completed = !value.completed;
      }

      return value;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }
}
