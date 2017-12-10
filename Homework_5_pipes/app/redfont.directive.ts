import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[redfont]'
})
export class RedFontDirective{
    constructor(private elementRef: ElementRef){
        this.elementRef.nativeElement.style.color="red";
    }
}