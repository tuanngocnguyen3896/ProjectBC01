import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map, tap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { loginAction, loginSuccess, logoutAction } from "../_actions/auth.actions";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router     
    ){}
    login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(loginAction),
          exhaustMap((action) => {
            return this.authService.login(action.taiKhoan, action.matKhau).pipe(
              map((data) => {
                this.authService.setUserInLocalStorage(data);
                // const user = this.authService.formatUser(data)
                return loginSuccess({ user : data});
              }),
            );
          })
        );
    
    });
    loginRedirect$ = createEffect(
      () => {
        return this.actions$.pipe(
          ofType(loginSuccess),
          tap((action) => {
            this.router.navigate(['/'])
          })
        );
      },
      {dispatch : false}
    )
    logout$ = createEffect(
      () => {
        return this.actions$.pipe(
          ofType(logoutAction),
          map((action) => {
            this.authService.logout();
            this.router.navigate(['/'])
          })
        );
      }, {dispatch : false}
    )
}