import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'cube'
})
export class CubePipe implements PipeTransform{
    transform(num: number): number{
        if(num <= 0) return 0;
        return num*num*num;
    }
}