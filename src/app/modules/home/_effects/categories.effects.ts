import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { AppState } from 'src/app/shared/reducers';
import {
  LoadCategories,
  CategoriesActionTypes,
  LoadCategoriesSuccess,
  LoadCategoriesFail,
  LoadCoursesDetail,
  LoadCoursesDetailSuccess,
  LoadCoursesDetailFail,
} from '../_actions/categories.actions';
import { CoursesService } from '../_services/courses.service';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  loadCategories$ = this.actions$.pipe(
    ofType<LoadCategories>(CategoriesActionTypes.LOAD_CATEGORIES_ACTION),
    exhaustMap((action) => {
      return this.coursesService.getCoursesCategories().pipe(
        map((data) => {
          this.store.dispatch(new LoadCategoriesSuccess(data));
        }),
        catchError((error) => {
          return of(this.store.dispatch(new LoadCategoriesFail(error.error)));
        })
      );
    })
  );
  @Effect({ dispatch: false })
  loadCoursesDetail$ = this.actions$.pipe(
    ofType<LoadCoursesDetail>(CategoriesActionTypes.LOAD_COURSES_DETAIL_ACTION),
    exhaustMap((action) => {      
      return this.coursesService.getCoursesDetail(action.maKhoaHoc).pipe(
        map((data) => {
          this.store.dispatch(new LoadCoursesDetailSuccess({ courses: data }));
        }),
        catchError((error) => {
          return of(
            this.store.dispatch(new LoadCoursesDetailFail(error.error))
          );
        })
      );
    })
  );
}
