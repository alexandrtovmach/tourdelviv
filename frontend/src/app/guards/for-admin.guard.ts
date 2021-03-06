import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WindowObj } from '../services/window.service';

@Injectable()
export class isAdminGuard implements CanActivate {
    constructor(private router: Router, private window: WindowObj) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.isAdmin();
    }

    isAdmin(): boolean {
        if ((this.window.data._injectedData as any).role === 'admin') {
            return true;
        }
        // without "as any" TS show error, when role doesn't excist in _injectedDate

        this.router.navigate(['/']); // can be change to main page or special-forbidden-page
        return false;
    }
}
