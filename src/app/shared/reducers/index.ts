import { AuthReducer, AuthState } from "src/app/modules/auth/_reducers/auth.reducers";
import { AUTH_STATE_NAME } from "src/app/modules/auth/_selectors/auth.selectors";
import { CategoriesReducer, CategoriesState } from "src/app/modules/home/_reducers/categories.reducers";
import { CoursesReducer, CoursesState } from "src/app/modules/home/_reducers/courses.reducers";
import { CATEGORIES_STATE_NAME } from "src/app/modules/home/_selectors/categories.selectors";
import { COURSES_STATE_NAME } from "src/app/modules/home/_selectors/courses.selectors";
import { SharedReducer, SharedState } from "../_reducers/shared.reducers";
import { SHARED_STATE_NAME } from "../_selectors/shared.selectors";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState,
    [COURSES_STATE_NAME]: CoursesState,
    [CATEGORIES_STATE_NAME] : CategoriesState,
    [SHARED_STATE_NAME] : SharedState,

}

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
    [COURSES_STATE_NAME] : CoursesReducer,
    [CATEGORIES_STATE_NAME] : CategoriesReducer,
    [SHARED_STATE_NAME] : SharedReducer,
}