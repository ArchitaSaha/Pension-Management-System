import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        return this.authService.isAuthenticated()
        .then(
            (authenticated: any) => {
                // alert(authenticated);
                if(authenticated)
                {
                    return true;
                }
                else
                {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );
    }
}