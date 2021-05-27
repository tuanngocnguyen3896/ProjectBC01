import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { defer, Observable, of } from "rxjs";
import { Store, Action } from '@ngrx/store';
import { map, mergeMap } from "rxjs/operators";
import { AuthActionTypes, CheckLogin, Login } from "../../auth/_actions/auth.actions";
import { loadCategories, loadCourses, loadCoursesSuccess , loadCategoriesSuccess} from "../_actions/courses.actions";
import { CoursesService } from "../_services/courses.service";

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ){}
    loadCourses$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loadCourses),
                mergeMap(data => {
                    return this.coursesService.getCourses().pipe(
                        map((courses) => {
                            return loadCoursesSuccess({courses});
                        })
                    )
                })
            )
        }
    );
    loadCategories$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loadCategories),
                mergeMap(data => {
                    return this.coursesService.getCoursesCategories().pipe(
                        map((categories) => {
                            return loadCategoriesSuccess({categories});
                        })
                    )
                })
            )
        }
    );
  
}