import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { autoLogin, loginAction, loginSuccess, logoutAction, signupAction, signupSuccess } from "../_actions/auth.actions";
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
    signUp$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(signupAction),
        exhaustMap((action) => {
          return this.authService.signUp(action.taiKhoan, action.matKhau,action.hoTen,action.maNhom,action.email).pipe(
            map((data) => {
              this.authService.setUserInLocalStorage(data);
              return signupSuccess({user: data});
            })
          );
        })
      );
    });
    signUpRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        );
    }, 
        {dispatch: false}
    );
    autoLogin$ = createEffect(
      () => {
        return this.actions$.pipe(
          ofType(autoLogin),
          mergeMap((action) => {
            const user = this.authService.getUserFromLocalStorage();
            console.log('getitem: ', user);            
             // Reload trang chỗ nào k chạy 
            return of(loginSuccess({user}));
          })
        );
      }
    )
    
}