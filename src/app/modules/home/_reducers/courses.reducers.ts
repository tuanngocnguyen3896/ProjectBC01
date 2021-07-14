import { CoursesData } from "src/app/core/Models/Courses.model";
import { UserReponseData } from "src/app/core/Models/User.model";
import { CoursesActions, CoursesActionTypes} from '../_actions/courses.actions';
export interface CoursesState{
    courses: CoursesData;
}
export const initialState: CoursesState = {
    courses: null,
}

export function CoursesReducer(state = initialState ,action: CoursesActions) : CoursesState{
    switch (action.type) {
        case CoursesActionTypes.LOAD_COURSES_SUCCESS:
            return {
                ...state,
                courses : action.payload.courses
            }
        case CoursesActionTypes.LOAD_COURSES_BY_CATEGORIES_SUCCESS: 
            return {
                ...state,
                courses: action.payload.courses
            }    
        case CoursesActionTypes.REGISTER_COURSES_FAIL:
            return {
                ...state
            }
        default: 
            return state;
    }
}