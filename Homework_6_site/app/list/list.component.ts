import { Component, OnInit} from '@angular/core';
import { Todo } from '../shared/todo';
import {TodoService} from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
  })

export class ListComponent implements OnInit{
    listTodos: Todo[];

    constructor(private todoService: TodoService){
        this.listTodos = [];
    }

    ngOnInit(){
        this.todoService.getTodoList().then(todos => this.listTodos = todos);
    }
}