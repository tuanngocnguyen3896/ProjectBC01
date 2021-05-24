import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { AuthActionTypes, Login,  AutoLogin,  LoginSuccess,  Logout, Register, RegisterSuccess, LoginFail, GetErrorMessage, RegisterFail } from "../_actions/auth.actions";
import { AuthService } from "../_services/auth.service";



@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router     
    ){}
    @Effect({dispatch:false})
    login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN_ACTION),
    exhaustMap((action) => {
      return this.authService.login(action.payload.taiKhoan, action.payload.matKhau).pipe(
        map((data) => {
          this.authService.setUserInLocalStorage(data);
          this.router.navigate(['/'])
          this.store.dispatch(new LoginSuccess(data));
        }),
        catchError((error) => {
          this.store.dispatch(new LoginFail(error.error));
          return of(new GetErrorMessage(error.error));
        })
      )
      
    })
    );
    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LOGOUT_ACTION),
    map(() => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    })
    );

    @Effect({ dispatch: false})
    signUp$ = createEffect(() => {
      return this.actions$.pipe(
        ofType<Register>(AuthActionTypes.REGISTER_ACTION),
        exhaustMap((action) => {
          return this.authService.register(action.payload.taiKhoan, action.payload.matKhau,action.payload.hoTen,action.payload.maNhom,action.payload.email).pipe(
            map((data) => {
              this.authService.setUserInLocalStorage(data);  
              return new RegisterSuccess(data);
            }),
            catchError((error) => {
              this.store.dispatch(new RegisterFail(error.error));
              return of(new GetErrorMessage(error.error));
            })
          );
        })
      );
    });

    // @Effect({ dispatch: false})
    // autoLogin$ = createEffect(
    //   () => {
    //     return this.actions$.pipe(
    //       ofType<AutoLogin>(AuthActionTypes.AUTO_LOGIN),
    //       mergeMap(() => {
    //         const user = this.authService.getUserFromLocalStorage();
    //         console.log(user);            
    //          // Reload trang chỗ nào k chạy 
    //         return of(new LoginSuccess(user));
    //       })
    //     );
    //   }
    // )

    // signUpRedirect$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(signupSuccess),
    //         tap((action) => {
    //             this.router.navigate(['/']);
    //         })
    //     );
    // }, 
    //     {dispatch: false}
    // );
    
    
}