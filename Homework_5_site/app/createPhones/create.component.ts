import {Component} from '@angular/core';
import {Phones} from '../shared/phones';
import {PhonesListServise} from '../shared/phonesList.service';

@Component({
    moduleId: module.id,
    selector: 'app-create',
    templateUrl: 'create.component.html',
    styleUrls: ['create.component.css']
})

export class CreateComponent{
    phones: Phones[] = [];
    namePhone: string = '';
    typephonePhone: string = '';
    systemPhone: string = '';
    memoryPhone: string = '';
    screenPhone: string = '';
    cameraPhone: string = '';

    constructor(private phonesListServise: PhonesListServise){}

    createPhone(){
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
}