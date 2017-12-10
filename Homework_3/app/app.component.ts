import { Component } from '@angular/core';
import { Todo } from './shared/todo';

let todos: Todo[] = [
  {title: 'Learn Angular',
  status: true},
  {title: 'Learn TypeScript',
  status: false},
  {title: 'Learn React',
  status: false},
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Angular';
  newTaskTitle: string;
  appTodos = todos;
  value: string = '';
  value2: string = ''

  toggle(todo: Todo) {
    let i: number = this.appTodos.indexOf(todo);
    this.appTodos[i].status = !this.appTodos[i].status;
  }

  delete(todo: Todo) {
    let i: number = this.appTodos.indexOf(todo);
    this.appTodos.splice(i, 1);
  }

  create(newTaskTitle: string) {
    this.appTodos.push({title: newTaskTitle, status: false});
  }

  onValue2Send(event: any){
    this.value2 = event;
  }
}