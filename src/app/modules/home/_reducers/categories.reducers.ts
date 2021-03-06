import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
import {CategoriesActions , CategoriesActionTypes} from '../_actions/categories.actions'
export interface CategoriesState {
    categories: CourseCategories;
    detail: CoursesData;
    errorMessage: string;
}
export const initialState: CategoriesState = {
    categories: null,
    detail: undefined,
    errorMessage: null
}
export function CategoriesReducer(state = initialState ,action: CategoriesActions) : CategoriesState{
    switch (action.type) { 
        case CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories : action.categories
            }
        case CategoriesActionTypes.LOAD_COURSES_DETAIL_SUCCESS:             
            return {
                ...state,
                detail : action.payload.courses,
                errorMessage: null
            }
        case CategoriesActionTypes.LOAD_COURSES_DETAIL_FAIL:
            return{
                ...state,
                errorMessage: 'Can not find this course !',
                detail: null,
            }        
        default: 
            return state;
    }
}