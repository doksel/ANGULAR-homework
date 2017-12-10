import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
  })

export class TaskComponent {
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