import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export interface ComponentCanDeactivate{
    canDeacivate: () => boolean | Observable<boolean>;
}

export class ExitCreateGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
        return component.canDeacivate ? component.canDeacivate(): true;
    }
}
