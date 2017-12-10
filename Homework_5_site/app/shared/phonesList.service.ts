import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Phones} from '../shared/phones';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';

@Injectable()
export class PhonesListServise {

    constructor(private http: Http) {}

    getPhones() {
        return this.http.get('http://localhost:3000/phones')
            .map((resp: Response) => resp.json())
                .catch ((error: Response)=>{
            return Observable.throw('Сервер не доступен или файл не найден.')
        });
    }

    createPhone(namePhone: string,
                typephonePhone: string,
                systemPhone: string,
                memoryPhone: string,
                screenPhone: string,
                cameraPhone: string){
        const data = {
            name: namePhone,
            typephone: typephonePhone,
            system: systemPhone,
            memory: memoryPhone,
            screen: screenPhone,
            camera: cameraPhone
       };
        return this.http.post('http://localhost:3000/phones', data)
            .map((resp: Response) => resp.json())
            .catch ((error: Response)=>{
                return Observable.throw('Сервер не доступен или файл не найден.')
            });
    }

    changePhone(
        phone: Phones,
        namePhone: string,
        typephonePhone: string,
        systemPhone: string,
        memoryPhone: string,
        screenPhone: string,
        cameraPhone: string){
        phone.name = namePhone;
        phone.typephone = typephonePhone;
        phone.system = systemPhone;
        phone.memory = memoryPhone;
        phone.screen = screenPhone;
        phone.camera = cameraPhone;

        return this.http.put(`http://localhost:3000/phones/${phone.id}`, phone)
            .map((resp: Response) => resp.json())
            .catch ((error: Response)=>{
                return Observable.throw('Сервер не доступен или файл не найден.')
            });
    }

    deletePhone(phone: Phones){
        return this.http.delete (`http://localhost:3000/phones/${phone.id}`)
            .map((resp: Response) => resp.json())
            .catch ((error: Response)=>{
                return Observable.throw('Сервер не доступен или файл не найден.')
            });

    }
}