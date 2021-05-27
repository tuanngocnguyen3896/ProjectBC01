import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { defer, Observable } from 'rxjs';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  Logout,
  Register,
  RegisterSuccess,
  LoginFail,
  RegisterFail,
  LoadUser,
  LoadUserSuccess,
  LoadUserFail,
  CheckLogin,
  SetErrorMessage,
  EditUser,
  EditUserSuccess,
  EditUserFail,
} from '../_actions/auth.actions';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  LOGIN;
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN_ACTION),
    exhaustMap((action) => {
      return this.authService
        .login(action.payload.taiKhoan, action.payload.matKhau)
        .pipe(
          map((data) => {
            this.authService.setUserInLocalStorage(data);
            this.authService.setUserInLocalStorage(action.payload);
            
            this.store.dispatch(new LoginSuccess(data));
          }),
          catchError((error) => {
            return of(this.store.dispatch(new LoginFail(error.error)));
          })
        );
    })
  );
  @Effect({ dispatch: false })
  LogInSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('accessToken', user.payload.accessToken);
      this.router.navigate(['/']);
    })
  );
  
  //LOGOUT
  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LOGOUT_ACTION),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
    })
  );

  // REGISTER
  @Effect({ dispatch: false })
  register$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.REGISTER_ACTION),
    exhaustMap((action) => {
      return this.authService
        .register(
          action.payload.taiKhoan,
          action.payload.matKhau,
          action.payload.hoTen,
          action.payload.soDT,
          action.payload.maNhom,
          action.payload.email
        )
        .pipe(
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
  registerSuccess$ = this.actions$.pipe(
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
      );
    })
  );

  @Effect({ dispatch: false })
  editUser$ = this.actions$.pipe(
    ofType<EditUser>(AuthActionTypes.EDIT_USER_ACTION),
    exhaustMap((action) => {
      return this.authService.editUser(
        action.payload.taiKhoan,
        action.payload.matKhau,
        action.payload.hoTen,
        action.payload.soDT,
        action.payload.maNhom,
        action.payload.email,
        action.payload.maLoaiNguoiDung,
      ).pipe(
        map((data) => {
          this.store.dispatch(new EditUserSuccess(data));
          console.log(action.payload.soDT);
          alert('Edit success')
        }),
        catchError((error) => {
          return of(this.store.dispatch(new EditUserFail(error.error)));
        })
      );
    })
  )






  @Effect()
  init$: Observable<Action> = defer(() => {
    const userToken = localStorage.getItem('userData');
    let observableResult  = of ({type: 'NO_ACTION'});
    if(userToken) {
      const user = JSON.parse(userToken);
      observableResult = of(new Login(user));
    }
    return observableResult;
  })
}
