import { AdminReducer, CoursesUpdateState } from "src/app/modules/admin/_reducer/courses-admin.reducer";
import { adminUserReducer, AdminUserState } from "src/app/modules/admin/_reducer/user-admin.reducer";
import { ADMIN_COURSES_NAME } from "src/app/modules/admin/_selectors/courses-admin.selector";
import { ADMIN_USER_NAME } from "src/app/modules/admin/_selectors/user.selector";
import { AuthReducer, AuthState } from "src/app/modules/auth/_reducers/auth.reducers";
import { AUTH_STATE_NAME } from "src/app/modules/auth/_selectors/auth.selectors";
import { CategoriesReducer, CategoriesState } from "src/app/modules/home/_reducers/categories.reducers";
import { CoursesReducer, CoursesState } from "src/app/modules/home/_reducers/courses.reducers";
import { CATEGORIES_STATE_NAME } from "src/app/modules/home/_selectors/categories.selectors";
import { COURSES_STATE_NAME } from "src/app/modules/home/_selectors/courses.selectors";
import { SharedReducer, SharedState } from "../_reducer/shared.reducer";
import { SHARED_STATE_NAME } from "../_selector/shared.selectors";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState,
    [COURSES_STATE_NAME]: CoursesState,
    [CATEGORIES_STATE_NAME] : CategoriesState,
    [SHARED_STATE_NAME] : SharedState,
    [ADMIN_USER_NAME]: AdminUserState,
    [ADMIN_COURSES_NAME]: CoursesUpdateState


}

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
    [COURSES_STATE_NAME] : CoursesReducer,
    [CATEGORIES_STATE_NAME] : CategoriesReducer,
    [SHARED_STATE_NAME] : SharedReducer,
    [ADMIN_USER_NAME]: adminUserReducer,
    [ADMIN_COURSES_NAME]: AdminReducer
}