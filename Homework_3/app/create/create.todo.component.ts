import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-todo',
    templateUrl: 'create.todo.component.html',
    styleUrls: ['create.todo.component.css']
  })

export class CreateTodoComponent {

    @Input() newTaskTitle: string;
    @Input() userValue: string;
    @Input() value2: string;
    @Output() onCreated = new EventEmitter();
    @Output() userValueSend = new EventEmitter<string>();

    onCreate(newTaskTitle: string) {
        this.onCreated.emit(newTaskTitle);
        this.newTaskTitle = '';
    }

    onValueSend(str: string){
        this.userValueSend.emit(str);
        this.value2 = str;
    }
}