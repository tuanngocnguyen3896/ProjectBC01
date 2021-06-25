import { CourseCategories, CoursesData } from "src/app/core/Models/Courses.model";
import { CategoriesActionTypes } from "../_actions/categories.actions";
import { CoursesActions, CoursesActionTypes} from '../_actions/courses.actions';
export interface CoursesState{
    courses: CoursesData;
<<<<<<< Updated upstream
    // categories: CourseCategories;
    // detail: CoursesData;
=======
    
>>>>>>> Stashed changes
}
export const initialState: CoursesState = {
    courses: null,
    // categories: null,
    // detail: null
}

export function CoursesReducer(state = initialState ,action: CoursesActions) : CoursesState{
    switch (action.type) {
        case CoursesActionTypes.LOAD_COURSES_SUCCESS:
            return {
                ...state,
                courses : action.payload.courses
            }
        // case CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS:
        //     return {
        //         ...state,
        //         categories : action.categories
        //     }
        // case CoursesActionTypes.LOAD_COURSES_DETAIL_SUCCESS: 
        //     return {
        //         ...state,
        //         detail : action.payload.courses
        //     }    

        default: 
            return state;
    }
}

