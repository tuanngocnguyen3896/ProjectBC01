import { createFeatureSelector, createSelector } from "@ngrx/store"
import { RouterStateUrl } from "src/app/store/router/custom-serializer"
import { getCurrentRoute } from "src/app/store/router/router.selector"
import { CoursesUpdateState } from "../_reducer/admin.reducer"

export const COURSES_UPDATE_STATE_NAME = 'coursesUpdate'
export const getCousrsesUpdateState = createFeatureSelector<CoursesUpdateState>(COURSES_UPDATE_STATE_NAME);

const getCoursesUpdate = createSelector(getCousrsesUpdateState,(state)=>{
    return state.coursesUpdtate
})
export const getCourseById = createSelector(
    getCoursesUpdate,
    getCurrentRoute,
    
    (courses,route: RouterStateUrl)=>{
    return courses? courses.find((course)=> course.maKhoaHoc ===route.params['maKhoaHoc'] ):null
})