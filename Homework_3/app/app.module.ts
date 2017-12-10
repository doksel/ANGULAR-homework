import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CreateTodoComponent } from './create/create.todo.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

import { RedFontDirective } from './redfont.directive';
import { WhileDirective } from './while.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CreateTodoComponent, ListComponent, TaskComponent,
                  RedFontDirective, WhileDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }