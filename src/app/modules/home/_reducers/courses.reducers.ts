import { createReducer, on } from "@ngrx/store";
import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
import { loadCategoriesSuccess, loadCoursesSuccess } from "../_actions/courses.actions";
// state
export interface CoursesState{
    courses: CoursesData[];
    categories: CourseCategories[]
}
export const initialState: CoursesState = {
    courses: [],
    categories: [],
}
// reducers

const _coursesReducer = createReducer(
    initialState,
    on(loadCoursesSuccess,(state,action) => {
        console.log(action);

        return {
            ...state,
            courses: action.courses
        }
    }),
    on(loadCategoriesSuccess,(state,action) => {
        console.log(action);
        return {
            ...state,
            categories: action.categories
        }
    })    
)

export function CoursesReducer(state,action){
    return _coursesReducer(state,action)
}

