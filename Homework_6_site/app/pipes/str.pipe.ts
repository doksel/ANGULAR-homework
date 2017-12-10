import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'str'
})
export class StrPipe implements PipeTransform{
    transform(str: string): string{
        if (!str) return str;
        return str[0].toUpperCase()+str.slice(1);
    }
}