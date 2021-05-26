import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { AuthActionTypes, Login,  LoginSuccess,  Logout, Register, RegisterSuccess, LoginFail, RegisterFail, LoadUser, LoadUserSuccess, LoadUserFail } from "../_actions/auth.actions";
import { AuthService } from "../_services/auth.service";



@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router     
    ){}
    // LOGIN
    @Effect({dispatch:false})
    login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN_ACTION),
    exhaustMap((action) => {
      return this.authService.login(action.payload.taiKhoan, action.payload.matKhau).pipe(
        map((data) => {
          this.authService.setUserInLocalStorage(data);
          this.store.dispatch(new LoginSuccess(data));
        }),
        catchError((error) => {
          return of(this.store.dispatch(new LoginFail(error.error)));
        })
      )
      
    })
    );
    @Effect({ dispatch: false })
    LogInSuccess$ = this.actions$.pipe(
      ofType<LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
      tap((user) => {
        localStorage.setItem('accessToken', user.payload.accessToken);
        this.router.navigate(['/'])
      })
    );
      

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LOGOUT_ACTION),
    tap(() => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    })
    );


    // REGISTER
    @Effect({ dispatch: false})
    register$ = this.actions$.pipe(
      ofType<Register>(AuthActionTypes.REGISTER_ACTION),
      exhaustMap((action) => {
        return this.authService.register(action.payload.taiKhoan, action.payload.matKhau,action.payload.hoTen,action.payload.soDT,action.payload.maNhom,action.payload.email).pipe(
          map((data) => {
            this.store.dispatch(new RegisterSuccess(data));
          }),
          catchError((error) => {
            return of(this.store.dispatch(new RegisterFail(error.error)));
          })
        );
      })
      );
    
    @Effect({ dispatch: false })
    registerSuccess$= this.actions$.pipe(
    ofType<RegisterSuccess>(AuthActionTypes.REGISTER_SUCCESS),
      tap((user) => {
        this.router.navigateByUrl('/auth/login');
      })
    );
     
    // LOAD USER
    @Effect({ dispatch: false })
    loadUser$ = this.actions$.pipe(
      ofType<LoadUser>(AuthActionTypes.LOAD_USER_ACTION),
      exhaustMap((action) => {
        return this.authService.loadUser(action.user.taiKhoan).pipe(
          map((data) => {
            this.store.dispatch(new LoadUserSuccess(data));
          }),
          catchError((error) => {
            return of(this.store.dispatch(new LoadUserFail(error.error)));
          })
        )
      })
    )
}