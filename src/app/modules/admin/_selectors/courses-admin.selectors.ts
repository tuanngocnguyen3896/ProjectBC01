import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesUpdateState } from "../_reducer/courses-admin.reducer";
export const ADMIN_COURSES_NAME = 'coursesUpdate'
const getCoursesUpdateState = createFeatureSelector<CoursesUpdateState>(ADMIN_COURSES_NAME);


export const getCoursesLists = createSelector(getCoursesUpdateState,(state)=>{
    
    return state.coursesUpdate
} )
export const getCoursesById = createSelector(getCoursesUpdateState,(state,props) =>{
    
 return state.coursesUpdate.find((courses)=>courses.id === props.id)
})
