import { Action } from '@ngrx/store';
import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
export enum CategoriesActionTypes {
   
    LOAD_CATEGORIES_ACTION ='[courses page] load categories',
    LOAD_CATEGORIES_SUCCESS ='[courses page] load categories success',
    LOAD_CATEGORIES_FAIL ='[courses page] load categories fail',

    LOAD_COURSES_DETAIL_ACTION = '[courses page] load course detail',
    LOAD_COURSES_DETAIL_SUCCESS ='[courses page] load course detail success',
    LOAD_COURSES_DETAIL_FAIL ='[courses page] load course detail fail',
   
   }

// LOAD CATEGORIES
export class LoadCategories implements Action {
    readonly type = CategoriesActionTypes.LOAD_CATEGORIES_ACTION;
}
export class LoadCategoriesSuccess implements Action {
    readonly type = CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS;
    constructor(public categories: CourseCategories){}
}
export class LoadCategoriesFail implements Action {
    readonly type = CategoriesActionTypes.LOAD_CATEGORIES_FAIL;
    constructor(public error: string){}
}

// COURSES DETAIL
export class LoadCoursesDetail implements Action {
    readonly type = CategoriesActionTypes.LOAD_COURSES_DETAIL_ACTION;
    constructor(public maKhoaHoc:string){}
}
export class LoadCoursesDetailSuccess implements Action {
    readonly type = CategoriesActionTypes.LOAD_COURSES_DETAIL_SUCCESS;
    constructor(public payload:{courses : CoursesData}){}
}
export class LoadCoursesDetailFail implements Action {
    readonly type = CategoriesActionTypes.LOAD_COURSES_DETAIL_FAIL;
    constructor(public erro:string){}
}
export type CategoriesActions = 
    | LoadCategories
    | LoadCategoriesSuccess
    | LoadCategoriesFail
    | LoadCoursesDetail
    | LoadCoursesDetailSuccess
    | LoadCoursesDetailFail
   
