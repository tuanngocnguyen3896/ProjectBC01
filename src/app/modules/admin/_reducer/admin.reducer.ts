import { createReducer, on } from "@ngrx/store"
import { CoursesUpdate } from "src/app/core/Models/Courses.model";
import { addCoursesSuccess, deleteCoursesSuccess, editCoursesSuccess } from "../_action/admin.action"

export interface CoursesUpdateState{
    coursesUpdtate: CoursesUpdate[]
}
export const initialState: CoursesUpdateState={
    coursesUpdtate: null
 }


const _adminReducer = createReducer(
    initialState,
    on(addCoursesSuccess, (state,action)=>{
            let course = {...action.payload};
            console.log(course);
            console.log(state);
            
            
            return {
                ...state,
                coursesUpdtate:{...state.coursesUpdtate, course}
            }
    })
    ,on(deleteCoursesSuccess, (state,{maKhoaHoc})=>{
        // const arr = Array.from(state.coursesUpdtate);
        
        const updatedCourses = state.coursesUpdtate.filter((course)=>{
            
            return course.maKhoaHoc !==maKhoaHoc

        })
        
        return{
            ...state,
            coursesUpdtate: updatedCourses
        }
    }),on(editCoursesSuccess, (state,action)=>{
        const updatedCourses = state.coursesUpdtate.map((course)=>{
            return action.payload.maKhoaHoc === course.maKhoaHoc ? action.payload : course
        })
        return{
            ...state,
            coursesUpdtate: updatedCourses
        }
    })
    
    )

export function AdminReducer(state,action){
    return _adminReducer(state,action)
}