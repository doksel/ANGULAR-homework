import { Component } from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'form-todo',
    templateUrl: 'create.todo.component.html',
    styleUrls: ['create.todo.component.css']
  })

export class CreateTodoComponent {
    newTaskTitle: string = '';
    constructor(private todoService: TodoService){}

    onCreate() {
        this.todoService.creatTodo(this.newTaskTitle);
        this.newTaskTitle = '';
    }
}