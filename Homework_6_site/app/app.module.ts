import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PhonesListServise} from './shared/phonesList.service';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CatalogComponent} from './catalogPhones/catalog.component';
import {CreateComponent} from './createPhones/create.component';
import {PutComponent} from './putPhones/put.component';
import {NotFoundComponent} from './not-found/not-found.component';


@NgModule({
    imports:[BrowserModule,
            FormsModule,
            HttpModule,
            AppRoutingModule
    ],
    declarations:[AppComponent,
                  HomePageComponent,
                  CatalogComponent,
                  CreateComponent,
                  PutComponent,
                  NotFoundComponent],
    providers:[PhonesListServise],
    bootstrap:[AppComponent]
})

export class AppModule{}