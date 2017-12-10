import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PhonesListServise} from './shared/phonesList.service';

import {AppComponent} from './app.component';
import {CatalogComponent} from './catalogPhones/catalog.component';
import {CreateComponent} from './createPhones/create.component';
import {PutComponent} from './putPhones/put.component';

@NgModule({
    imports:[BrowserModule,
            FormsModule,
            HttpModule],
    declarations:[AppComponent,
                  CatalogComponent,
                  CreateComponent,
                  PutComponent],
    providers:[PhonesListServise],
    bootstrap:[AppComponent]
})

export class AppModule{}