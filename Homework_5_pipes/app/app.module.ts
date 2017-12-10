import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CubePipe } from './pipes/cube.pipe';
import { StrPipe } from './pipes/str.pipe';
import { ObjectPipe } from './pipes/object.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CubePipe, StrPipe, ObjectPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }