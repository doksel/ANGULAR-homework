import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
  })

export class ListComponent {
    @Input() listTodos: Todo[];
    @Input() todo: Todo;
    @Output() onToggled = new EventEmitter();
    @Output() onDeleted = new EventEmitter();

    onToggle(todo: Todo) {
        this.onToggled.emit(todo);
    }

    onDelete(todo: Todo) {
        this.onDeleted.emit(todo);
    }
}