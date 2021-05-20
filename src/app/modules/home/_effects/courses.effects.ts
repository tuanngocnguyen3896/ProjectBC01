import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { loadCategories, loadCourses, loadCoursesSuccess , loadCategoriesSuccess} from "../_actions/courses.actions";
import { CoursesService } from "../_services/courses.service";

@Injectable()
export class CoursesEffects {
    constructor(
        private action$: Actions,
        private coursesService: CoursesService
    ){}
    loadCourses$ = createEffect(
        () => {
            return this.action$.pipe(
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
            return this.action$.pipe(
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