import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-todo',
    templateUrl: 'create.todo.component.html',
    styleUrls: ['create.todo.component.css']
  })

export class CreateTodoComponent {

    @Input() newTaskTitle: string;
    @Output() onCreated = new EventEmitter();

    onCreate(newTaskTitle: string) {
        this.onCreated.emit(newTaskTitle);
        this.newTaskTitle = '';
    }
}