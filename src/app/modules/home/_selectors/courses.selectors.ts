import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "../_reducers/courses.reducers";

export const COURSES_STATE_NAME = "courses";
const getCoursesState = createFeatureSelector<CoursesState>(COURSES_STATE_NAME);

export const getCoursesList = createSelector(getCoursesState, (state) => {
    return state.courses;
});
export const getCategories = createSelector(getCoursesState, (state) => {
    return state.categories;
});

export const getCoursesById = createSelector(getCoursesState, (state,props) => {
    return state.courses.find((course) => course.id === props.id)
})