import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PhonesListServise} from './shared/phonesList.service';

import {AppComponent} from './app.component';
import {CatalogComponent} from './catalogPhones/catalog.component';
import {CreateComponent} from './createPhones/create.component';
import {PutComponent} from './putPhones/put.component';
//
import {DemoModalServiceStaticComponent} from './putPhones/modal.component';
import { ModalModule } from 'ngx-bootstrap';
//
@NgModule({
    imports:[BrowserModule,
        FormsModule,
        HttpModule,
        //
        ModalModule.forRoot()
        //
    ],
    declarations:[AppComponent,
        CatalogComponent,
        CreateComponent,
        PutComponent,
        //
        DemoModalServiceStaticComponent
        //
    ],
    providers:[PhonesListServise],
    bootstrap:[AppComponent]
})

export class AppModule{}