import { Component,  Input } from '@angular/core';
import { Todo } from '../shared/todo';
import {TodoService} from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
  })

export class TaskComponent {
    @Input() todo: Todo;
    listTodos: Todo[];

    constructor(private todoService: TodoService) {
        this.listTodos = [];
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo);

    }
}