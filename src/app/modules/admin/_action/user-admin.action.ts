import { createAction, props } from "@ngrx/store";
import { UserReponseData } from "src/app/core/Models/User.model";

export const LOAD_USER_ACTION = '[admin page] load user action';
export const LOAD_USER_SUCCESS = '[admin page] load user success';
export const LOAD_USER_FAIL = '[admin page] load user fail';
<<<<<<< Updated upstream

export const loadUser = createAction(LOAD_USER_ACTION);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{user:UserReponseData[]}>());
export const loadUserFail = createAction(LOAD_USER_FAIL, props<{payload:UserReponseData}>())
=======
export const DELETE_USER_ACTION = '[admin page] delete user action';
export const DELETE_USER_SUCCESS = '[admin page] delete user success';
export const DELETE_USER_FAIL = '[admin page] delete user fail';
// export const ADD_USER_ACTION = '[admin page] add user action';
// export const ADD_USER_SUCCESS = '[admin page] add user success';
// export const ADD_USER_FAIL= '[admin page] add user fail';
// export const EDIT_USER_ACTION = '[admin page] edit user action';
// export const EDIT_USER_SUCCESS= '[admin page] edit user success';
// export const EDIT_USER_FAIL = '[admin page] edit user fail'

export const loadUser = createAction(LOAD_USER_ACTION, props<{maNhom:string}>());
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS, props<{user:UserReponseData[]}>());
export const loadUserFail = createAction(LOAD_USER_FAIL, props<{payload:UserReponseData}>());
export const deleteUser = createAction(DELETE_USER_ACTION, props<{taiKhoan:string}>())
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS, props<{taiKhoan:string}>());
export const deleteUserFail = createAction(DELETE_USER_FAIL, props<{error:string}>());
// export const addUser = createAction(ADD_USER_ACTION, props<{
//     payload:{
//         taiKhoan:string,
//         matKhau:string,
//         soDT: number,
//         maLoaiNguoiDung: string,
//         maNhom: string,
//         email: string
//     }
// }>());
// export const addUserSuccess = createAction(ADD_USER_SUCCESS, props<{payload:UserReponseData}>());
// export const addUserFail = createAction(ADD_USER_FAIL, props<{error:string}>());
// export const editUser = createAction(EDIT_USER_ACTION, props<{payload:{
//     taiKhoan:string,
//     matKhau:string,
//     soDT: number,
//     maLoaiNguoiDung: string,
//     maNhom: string,
//     email: string}
// }>());
// export const editUserSuccess = createAction(EDIT_USER_SUCCESS, props<{payload: UserReponseData}>());
// export const editUserFail = createAction(EDIT_USER_FAIL, props<{error: string}>())
>>>>>>> Stashed changes
