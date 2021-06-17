import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { defer, Observable } from 'rxjs';
import { of } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
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
  EditUser,
  EditUserSuccess,
  EditUserFail,
  CancelCourses,
  CancelCoursesFail,
  CancelCoursesSuccess,
} from '../_actions/auth.actions';
import { AuthService } from '../_services/auth.service';
import { SetLoadingSpinner } from 'src/app/shared/_actions/shared.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN_ACTION),
    exhaustMap((action) => {
      return this.authService
        .login(action.payload.taiKhoan, action.payload.matKhau)
        .pipe(
          map((data) => {
            this.authService.setUserInLocalStorage(data);
            localStorage.setItem('accessToken', data.accessToken);
            this.store.dispatch(new LoginSuccess(data));
            this.router.navigate(['/']);
            setTimeout(() => {
              this.store.dispatch(new SetLoadingSpinner(false));
            }, 1500);
  
          }),
          catchError((error) => {
            setTimeout(() => {
              this.store.dispatch(new SetLoadingSpinner(false));
            }, 1500);
            return of(this.store.dispatch(new LoginFail(error.error)));
          })
        );
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
            Swal.fire({
              icon: 'success',
              title: 'Congratz',
              text: `Bạn đã đăng kí thành công!`,
            });
            this.router.navigateByUrl('/auth/login');
          }),
          catchError((error) => {
            return of(this.store.dispatch(new RegisterFail(error.error)));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  loadUser$ = this.actions$.pipe(
    ofType<LoadUser>(AuthActionTypes.LOAD_USER_ACTION),
    exhaustMap((action) => {
      return this.authService.loadUser(action.user.taiKhoan).pipe(
        map((data) => {
          return of(this.store.dispatch(new LoadUserSuccess(data)));
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
      return this.authService
        .editUser(
          action.payload.taiKhoan,
          action.payload.matKhau,
          action.payload.hoTen,
          action.payload.soDT,
          action.payload.maNhom,
          action.payload.email,
          action.payload.maLoaiNguoiDung
        )
        .pipe(
          map((data) => {
            this.authService.setUserInLocalStorage(data);
            this.store.dispatch(new EditUserSuccess(data));
            Swal.fire({
              icon: 'success',
              title: 'Congratz',
              text: `Edit success`,
            });
          }),
          catchError((error) => {
            return of(this.store.dispatch(new EditUserFail(error.error)));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  cancelCourses$ = this.actions$.pipe(
    ofType<CancelCourses>(AuthActionTypes.CANCEL_COURSES_ACTION),
    switchMap((action) => {
      return this.authService
        .cancelCourses(action.course.maKhoaHoc, action.course.taiKhoan)
        .pipe(
          map(() => {
            return new CancelCoursesSuccess();
          }),
          catchError((error, caught) => {
            if (error.error.text) {
              Swal.fire({
                icon: 'success',
                title: 'Congratz',
                text: `${error.error.text}`,
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.error}`,
              });
            }
            return of(new CancelCoursesFail(error.error));
          })
        );
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    const userData = localStorage.getItem('userData');
    let observableResult = of({ type: 'NO_ACTION' });
    if (userData) {
      const user = JSON.parse(userData);
      observableResult = of(new LoginSuccess(user));
    }
    return observableResult;
  });
}
