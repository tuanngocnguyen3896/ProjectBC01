import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "../_reducers/courses.reducers";

export const COURSES_STATE_NAME = "courses";
const getCoursesState = createFeatureSelector<CoursesState>(COURSES_STATE_NAME);

export const getCoursesList = createSelector(getCoursesState, (state) => {
    return state.courses;
});
