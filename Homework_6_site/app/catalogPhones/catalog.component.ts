import {Component, OnInit} from '@angular/core';
import {Phones} from '../shared/phones';
import {PhonesListServise} from '../shared/phonesList.service';

@Component({
    moduleId: module.id,
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['catalog.component.css']
})

export class CatalogComponent implements OnInit{
    title = 'Catalog of phone';
    phones: Phones[] = [];

    constructor(private phonesListServise: PhonesListServise){}

    ngOnInit(){
        this.phonesListServise
            .getPhones()
            .subscribe((phones: Phones[])=>this.phones = phones,
                (error)=>alert(error));
    }
}