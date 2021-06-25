import { createReducer, on } from "@ngrx/store";
<<<<<<< Updated upstream
import { CoursesData } from "src/app/core/Models/Courses.model";
import { addCoursesSuccess } from "../_action/courses-admin.action";

export interface CoursesUpdateState{
    coursesUpdtate: CoursesData[]
}
export const initialState: CoursesUpdateState={
    coursesUpdtate: null
 }


const _adminReducer = createReducer(
    initialState,
    on(addCoursesSuccess, (state,action)=>{
            let course = {...action.payload};
            console.log(course);
            
            return {
                ...state,
                coursesUpdtate:[...state.coursesUpdtate, course]
            }
    })
    // ,on(deleteCoursesSuccess, (state,{maKhoaHoc})=>{
    //     // const arr = Array.from(state.coursesUpdtate);
        
    //     const updatedCourses = state.coursesUpdtate.filter((course)=>{
            
    //         return course.maKhoaHoc !==maKhoaHoc

    //     })
        
    //     return{
    //         ...state,
    //         coursesUpdtate: updatedCourses
    //     }
    // }),on(editCoursesSuccess, (state,action)=>{
    //     const updatedCourses = state.coursesUpdtate.map((course)=>{
    //         return action.payload.maKhoaHoc === course.maKhoaHoc ? action.payload : course
    //     })
    //     return{
    //         ...state,
    //         coursesUpdtate: updatedCourses
    //     }
    // })
    
    // )
=======
import { CoursesData} from "src/app/core/Models/Courses.model";
import { addCoursesSuccess, deleteCoursesSuccess, editCoursesSuccess, loadCoursesSuccess } from "../_action/courses-admin.action";

export interface CoursesUpdateState{
    coursesUpdate: CoursesData[]
}

export const initialState: CoursesUpdateState={
    coursesUpdate: null
 }
 
const _adminReducer = createReducer(
    initialState,
    on(loadCoursesSuccess, (state,action)=>{
        return{
            ...state,
            coursesUpdate: action.payload
        }
    }),
    on(addCoursesSuccess, (state,action)=>{
            let course = {...action.payload};
            
            console.log(course);
            return {
                ...state,
                coursesUpdtate:[...state.coursesUpdate, course]
            }
            
    })
    ,on(deleteCoursesSuccess, (state,{maKhoaHoc})=>{
        console.log(state);
        const updatedCourses = state.coursesUpdate.filter((course)=>{
            return course.maKhoaHoc !==maKhoaHoc
        })
        return{
            ...state,
            coursesUpdtate: updatedCourses
        }
    })
    ,on(editCoursesSuccess, (state,action)=>{
        console.log(state);
        const updatedCourses = state.coursesUpdate.map((course)=>{
            return action.payload.maKhoaHoc === course.maKhoaHoc ? action.payload : course
        })
        return{
            ...state,
            coursesUpdate: updatedCourses
        }
    })
    

>>>>>>> Stashed changes
)

export function AdminReducer(state,action){
    return _adminReducer(state,action)
}