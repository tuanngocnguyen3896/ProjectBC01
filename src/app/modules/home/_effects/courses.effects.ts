import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { CoursesService } from '../_services/courses.service';
import { AppState } from 'src/app/shared/reducers';
import { of } from 'rxjs';
import {
  CoursesActionTypes,
  LoadCourses,
  LoadCoursesFail,
  LoadCoursesSuccess,
  RegisterCourses,
  RegisterCoursesFail,
  RegisterCoursesSuccess,
} from '../_actions/courses.actions';
@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}
  @Effect({ dispatch: false })
  loadCourses$ = this.actions$.pipe(
    ofType<LoadCourses>(CoursesActionTypes.LOAD_COURSES_ACTION),
    exhaustMap((action) => {
      return this.coursesService.getCourses().pipe(
        map((data) => {
          this.store.dispatch(new LoadCoursesSuccess({ courses: data }));
        }),
        catchError((error) => {
          return of(this.store.dispatch(new LoadCoursesFail(error.error)));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  registerCourses$ = this.actions$.pipe(
    ofType<RegisterCourses>(CoursesActionTypes.REGISTER_COURSES_ACTION),
    mergeMap((action) => {
      return this.coursesService
        .registerCourses(action.payload.maKhoaHoc, action.payload.taiKhoan)
        .pipe(
          map((data) => {
            console.log(data);
            return of(new RegisterCoursesSuccess());
          }),
          catchError((error, caught) => {
            alert(`${error.error}`); // Khóa học đã đănh kí
            return of(new RegisterCoursesFail(error.error));
          })
        );
    })
  );
}
