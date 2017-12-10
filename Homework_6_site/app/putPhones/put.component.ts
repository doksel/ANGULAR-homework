import {Component, OnInit} from '@angular/core';
import {PhonesListServise} from '../shared/phonesList.service';
import {Phones} from '../shared/phones';

@Component({
    moduleId: module.id,
    selector: 'app-put',
    templateUrl: 'put.component.html',
    styleUrls: ['put.component.css']
})

export class PutComponent implements OnInit{
    constructor(private phonesListServise: PhonesListServise){}

    phones: Phones[] = [];
    // images = [
    //     "./app/imgPhones/Xia omi_Redmi_4X_2_16Gb.jpg",
    //     "./app/imgPhones/Samsung_Galaxy_J7_(2017)_16Gb.jpg",
    //     "./app/imgPhones/Apple_iPhone_7_32Gb.jpg"
    // ];

    ngOnInit(){
        this.phonesListServise
            .getPhones()
            .subscribe((phones: Phones[])=>this.phones = phones);
    }

    // getRandImage(){
    //     const num = Math.round(Math.random()*this.images.length-1)
    //     return this.images[num];
    // }

    setPhone(phone: Phones,
             namePhone: string,
             typephonePhone: string,
             systemPhone: string,
             memoryPhone: string,
             screenPhone: string,
             cameraPhone: string){
        this.phonesListServise.changePhone(phone, namePhone, typephonePhone, systemPhone, memoryPhone, screenPhone, cameraPhone)
            .subscribe((phone: Phones) => console.log(phone),
                (error)=>alert(error));
    }

    deletePhone(phone: Phones){
        this.phonesListServise.deletePhone(phone)
            .subscribe((phone: Phones) => {
                this.phones = this.phones.filter(ph=>ph.id !==phone.id);},
                (error)=>alert(error));

    }
}