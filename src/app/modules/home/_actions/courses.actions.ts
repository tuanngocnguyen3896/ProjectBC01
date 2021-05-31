import { Action } from '@ngrx/store';
import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
import { RegisterForm } from '../_models/courses.models';

export enum CoursesActionTypes {
    // COURSES DATA LIST
    LOAD_COURSES_ACTION = '[courses page] load courses',
    LOAD_COURSES_SUCCESS = '[courses page] load courses success',
    LOAD_COURSES_FAIL = '[courses page] load courses fail',
   
    // REGISTER COURSES
    REGISTER_COURSES_ACTION = '[courses page] register course',
    REGISTER_COURSES_SUCCESS = '[courses page] register course success',
    REGISTER_COURSES_FAIL = '[courses page] register course fail',

    // CANCEL COURSES

}

// LOAD COURSES
export class LoadCourses implements Action {
    readonly type = CoursesActionTypes.LOAD_COURSES_ACTION;
}
export class LoadCoursesSuccess implements Action {
    readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;
    constructor(public payload: {courses: CoursesData}) {}

}
export class LoadCoursesFail implements Action {
    readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;
    constructor(public payload: {courses: CoursesData}){}
}

// REGISTER COURSES
export class RegisterCourses implements Action {
    readonly type = CoursesActionTypes.REGISTER_COURSES_ACTION;
    constructor(public payload: RegisterForm){}
}
export class RegisterCoursesSuccess implements Action {
    readonly type = CoursesActionTypes.REGISTER_COURSES_SUCCESS;
    // constructor(public courses: CoursesData){}
}
export class RegisterCoursesFail implements Action {
    readonly type = CoursesActionTypes.REGISTER_COURSES_FAIL;
    constructor(public error: string){}
}

export type CoursesActions = 
    | LoadCourses
    | LoadCoursesSuccess
    | LoadCoursesFail
    | RegisterCourses
    | RegisterCoursesSuccess
    | RegisterCoursesFail