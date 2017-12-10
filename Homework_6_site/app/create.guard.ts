import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export class CreateGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    return confirm('Вы уверены, что хотите добавить новый телефон?');
    }
}