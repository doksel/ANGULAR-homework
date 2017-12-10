import { Component, EventEmitter, Input, Output,
    OnInit, DoCheck, OnChanges,
    AfterContentInit, AfterContentChecked,
    AfterViewChecked, AfterViewInit} from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
  })

export class TaskComponent
    implements
    OnInit, DoCheck, OnChanges,
    AfterContentInit, AfterContentChecked,
    AfterViewChecked, AfterViewInit
{
    @Input() todo: Todo;
    @Output() onToggled = new EventEmitter();
    @Output() onDeleted = new EventEmitter();

    ngOnInit(){
        console.log(`ngOnInit`);}
    ngOnChanges(){
        console.log(`ngOnChanges`);}
    ngDoCheck(){
        console.log(`DoCheck`);}
    ngAfterContentInit(){
        console.log(`ngAfterContentInit`);}
    ngAfterContentChecked(){
        console.log(`ngAfterContentChecked`);}
    ngAfterViewChecked(){
        console.log(`ngAfterViewChecked`);}
    ngAfterViewInit(){
        console.log(`ngAfterViewInit`);}

    onToggle(todo: Todo) {
        this.onToggled.emit(todo);
    }

    onDelete(todo: Todo) {
        this.onDeleted.emit(todo);
    }
}