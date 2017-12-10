import {Pipe, PipeTransform} from '@angular/core';
import { IPersonBefore } from './IPersonBefore';
import { IPersonAfter } from './IPersonAfter';

@Pipe({
    name:'object',
    // pure: false
})
export class ObjectPipe implements PipeTransform{
    transform(objBefor: IPersonBefore): IPersonAfter{
        const objAfter = {sernameAfter:  objBefor.sername, ageAfter: objBefor.age};
        return objAfter;
    }
}