import { createAction, props } from "@ngrx/store";
import { UserReponseData } from "src/app/core/Models/User.model";

export const LOAD_USER_ACTION = '[admin page] load user action';
export const LOAD_USER_SUCCESS = '[admin page] load user success';
export const LOAD_USER_FAIL = '[admin page] load user fail';

export const loadUser = createAction(LOAD_USER_ACTION);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{user:UserReponseData[]}>());
export const loadUserFail = createAction(LOAD_USER_FAIL, props<{payload:UserReponseData}>())