import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { CoursesService } from '../_services/courses.service';
import { AppState } from 'src/app/shared/reducers';
import { of, pipe } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import {
  CoursesActionTypes,
  LoadCourses,
  LoadCoursesByCategories,
  LoadCoursesByCategoriesFail,
  LoadCoursesByCategoriesSuccess,
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
      return this.coursesService.getCourses(action.maNhom).pipe(
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
  loadCoursesByCategories$ = this.actions$.pipe(
    ofType<LoadCoursesByCategories>(CoursesActionTypes.LOAD_COURSES_BY_CATEGORIES_ACTION),
    exhaustMap((action) => {
      return this.coursesService.getCoursesByCategories(action.maDanhMuc,action.maNhom).pipe(
        map((data) => {
          this.store.dispatch(new LoadCoursesByCategoriesSuccess({courses:data}));
        }),
        catchError((error) => {
          return of(this.store.dispatch(new LoadCoursesByCategoriesFail(error.error)))
        })
      )
    })
  )


  @Effect({ dispatch: false })
  registerCourses$ = this.actions$.pipe(
    ofType<RegisterCourses>(CoursesActionTypes.REGISTER_COURSES_ACTION),
    switchMap((action) => {
      return this.coursesService.registerCourses(action.payload.maKhoaHoc,action.payload.taiKhoan).pipe(
        map(() => {
          return new RegisterCoursesSuccess();
        }),
        catchError((error, caught) => {
          if(error.error.text){
            Swal.fire({  
              icon: 'success',  
              title: 'Congratz',  
              text: `${error.error.text}`,  
            })  
          }else{
            Swal.fire({  
              icon: 'error',  
              title: 'Oops...',  
              text: `${error.error}`,  
            })  
          }
          return of(new RegisterCoursesFail(error.error));
        })
      )
    }),
  );



}