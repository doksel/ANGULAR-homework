import {Component} from '@angular/core';
import {Phones} from '../shared/phones';
import {PhonesListServise} from '../shared/phonesList.service';

import {ComponentCanDeactivate} from '../exit.create.guard';
import {Observable} from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css']
})

export class CreateComponent implements ComponentCanDeactivate{

    created: boolean = false;

    phones: Phones[] = [];
    namePhone: string = '';
    typephonePhone: string = '';
    systemPhone: string = '';
    memoryPhone: string = '';
    screenPhone: string = '';
    cameraPhone: string = '';

    constructor(private phonesListServise: PhonesListServise){}

    createPhone(){
        this.created = true;

        this.phonesListServise
            .createPhone(
                this.namePhone,
                this.typephonePhone,
                this.systemPhone,
                this.memoryPhone,
                this.screenPhone,
                this.cameraPhone)
            .subscribe((phone: Phones)=>this.phones.push(phone),
                (error)=>alert(error));
        this.namePhone = '';
        this.typephonePhone = '';
        this.systemPhone = '';
        this.memoryPhone = '';
        this.screenPhone = '';
        this.cameraPhone = '';
    }

    canDeactivate(): boolean | Observable<boolean>{
        if (!this.created){
            return confirm('Вы хотите покинуть страницу?');
        }else {return true;}
    }
}