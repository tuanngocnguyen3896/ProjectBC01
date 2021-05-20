import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/Models/User.model";

export const LOGIN_ACTION = '[auth page] login action';
export const LOGIN_SUCCESS = '[auth page] login success';

export const LOGOUT_ACTION = '[auth page] logout action';



export const loginAction = createAction(
    LOGIN_ACTION,
    props<{taiKhoan:string, matKhau:string}>()
)
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{user: User}>()
)

export const logoutAction = createAction(LOGOUT_ACTION);  
