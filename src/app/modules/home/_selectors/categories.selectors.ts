import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesState } from "../_reducers/categories.reducers";

export const CATEGORIES_STATE_NAME = "categories";
const getCategoriesState = createFeatureSelector<CategoriesState>(CATEGORIES_STATE_NAME);

export const getCategories = createSelector(getCategoriesState, (state) => {
    return state.categories;
});

export const getCoursesDetail = createSelector(getCategoriesState, (state) => {
    return state.detail;
})
export const getCoursesError = createSelector(getCategoriesState, (state) => {
    return  state.errorMessage;
})