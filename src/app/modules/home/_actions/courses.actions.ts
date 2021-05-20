import { createAction, props } from "@ngrx/store";
import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
// COURSES DATA
export const LOAD_COURSES_ACTION = '[courses page] load courses';
export const LOAD_COURSES_SUCCESS = '[courses page] load courses success';
// COURSES CATEGORIES
export const LOAD_CATEGORIES_ACTION ='[courses page] load categories';
export const LOAD_CATEGORIES_SUCCESS ='[courses page] load categories success';


export const loadCourses = createAction(LOAD_COURSES_ACTION);
export const loadCoursesSuccess = createAction(
    LOAD_COURSES_SUCCESS,
    props<{courses: CoursesData[]}>()
)

export const loadCategories = createAction(LOAD_CATEGORIES_ACTION);
export const loadCategoriesSuccess = createAction(
    LOAD_CATEGORIES_SUCCESS,
    props<{categories: CourseCategories[]}>()
)