import { createAction, props } from "@ngrx/store";
import { User, UserSignup } from "src/app/core/Models/User.model";

export const LOGIN_ACTION = '[auth page] login action';
export const LOGIN_SUCCESS = '[auth page] login success';
// LOGOUT
export const LOGOUT_ACTION = '[auth page] logout action';
// AUTO LOGIN
export const AUTO_LOGIN_ACTION = '[auth page] auto login action';

export const SIGNUP_ACTION = '[auth page] signup action';
export const SIGNUP_SUCCESS = '[auth page] signup success';

export const loginAction = createAction(
    LOGIN_ACTION,
    props<{taiKhoan:string, matKhau:string}>()
)
export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{user: User}>()
)

export const logoutAction = createAction(LOGOUT_ACTION);  

export const signupAction = createAction(
    SIGNUP_ACTION,
    props<{taiKhoan:string, matKhau: string, hoTen:string ,maNhom:string, email: string}>()    
);
export const signupSuccess = createAction(
    SIGNUP_SUCCESS,
    props<{user: UserSignup}>()
);
export const autoLogin = createAction(AUTO_LOGIN_ACTION);
