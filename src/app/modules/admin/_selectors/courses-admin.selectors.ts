import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesUpdateState } from "../_reducer/courses-admin.reducer";

export const COURSES_UPDATE_STATE_NAME = 'coursesUpdate'
export const getCousrsesUpdateState = createFeatureSelector<CoursesUpdateState>(COURSES_UPDATE_STATE_NAME);

const getCoursesUpdate = createSelector(getCousrsesUpdateState,(state)=>{
    return state.coursesUpdtate
})