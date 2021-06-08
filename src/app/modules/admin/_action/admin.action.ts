import { createAction, props } from "@ngrx/store";
import { CoursesData } from "src/app/core/Models/Courses.model";

export const LOAD_COURSES = '[courses page] load courses';
export const LOAD_COURSES_SUCCESS= '[courses page] load courses success';


export const loadCourses = createAction(LOAD_COURSES);
export const loadCoursesSuccess = createAction(LOAD_COURSES_SUCCESS, props<{courses:CoursesData}>());