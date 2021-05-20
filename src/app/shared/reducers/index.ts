import { AuthReducer, AuthState } from "src/app/modules/auth/_reducers/auth.reducers";
import { AUTH_STATE_NAME } from "src/app/modules/auth/_selectors/auth.selectors";
import { CoursesReducer, CoursesState } from "src/app/modules/home/_reducers/courses.reducers";
import { COURSES_STATE_NAME } from "src/app/modules/home/_selectors/courses.selectors";

export interface AppState {
    [COURSES_STATE_NAME]: CoursesState
    [AUTH_STATE_NAME]: AuthState
}

export const appReducer = {
    [COURSES_STATE_NAME] : CoursesReducer,
    [AUTH_STATE_NAME]: AuthReducer
}