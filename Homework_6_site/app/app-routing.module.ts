import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {CatalogComponent} from './catalogPhones/catalog.component';
import {CreateComponent} from './createPhones/create.component';
import {PutComponent} from './putPhones/put.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {CreateGuard} from './create.guard';
import {ExitCreateGuard} from './exit.create.guard';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'create', component: CreateComponent, canActivate:[CreateGuard], canDeactivate:[ExitCreateGuard] },
    { path: 'put', component: PutComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    providers:[CreateGuard, ExitCreateGuard],
    exports:[RouterModule]
})
export class AppRoutingModule{

}