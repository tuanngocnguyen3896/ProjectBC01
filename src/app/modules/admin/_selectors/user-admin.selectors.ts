import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminUserState } from "../_reducer/user-admin.reducer";


export const ADMIN_USER_NAME = 'user';
const selectUserState = createFeatureSelector<AdminUserState>(ADMIN_USER_NAME)


export const getUserList = createSelector(selectUserState, (state)=>{
    return state.adminUser
})