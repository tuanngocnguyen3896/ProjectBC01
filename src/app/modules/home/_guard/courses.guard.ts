// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AppState } from 'src/app/shared/reducers';
// import { isLoggedIn } from '../../auth/_selectors/auth.selectors';
// import { AuthService } from '../../auth/_services/auth.service';

// @Injectable({providedIn: 'root'})
// export class CoursesGuard implements CanActivate {
//     constructor(
//         private store: Store<AppState>,
//         private router: Router,
//         private authService: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
//     | boolean 
//     | UrlTree
//     | Observable<boolean | UrlTree> 
//     | Promise<boolean | UrlTree> { 
//             const token = this.authService.getToken();
//             if(token === '') {
//                 this.router.createUrlTree(['auth/login']);
//                 return false
//             }
//             return true;
// }
// }