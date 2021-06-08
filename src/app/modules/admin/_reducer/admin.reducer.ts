import { createReducer, on } from "@ngrx/store"
import { CoursesData } from "src/app/core/Models/Courses.model"
import { loadCoursesSuccess } from "../_action/admin.action"

export interface AdminState{
    coursesUpdate: CoursesData;
}
export const initialState: AdminState={
    coursesUpdate: null
}


const _adminReducer = createReducer(
    initialState,
    on(loadCoursesSuccess, (state,action)=>{
        return {
            ...state,
            courses: action.courses
        }
    })
    )

export function AdminReducer(state,action){
    return _adminReducer(state,action)
}