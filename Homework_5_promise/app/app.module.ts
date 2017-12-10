import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryTodoDataService} from './shared/todo-data.service'

import { AppComponent }  from './app.component';
import { CreateTodoComponent } from './create/create.todo.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

import {TodoService} from './shared/todo.service';


@NgModule({
  imports:      [ BrowserModule,
                    FormsModule,
                    HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryTodoDataService)],
  declarations: [ AppComponent,
                  CreateTodoComponent,
                  ListComponent,
                  TaskComponent ],
  providers:    [TodoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }