import { User, UserSignup } from "src/app/core/Models/User.model";
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN_ACTION = '[auth page] login action',
    LOGIN_SUCCESS = '[auth page] login success',
    LOGIN_FAIL = '[auth page] login fail',

    LOGOUT_ACTION = '[auth page] logout action',

    REGISTER_ACTION = '[auth page] register action',
    REGISTER_SUCCESS = '[auth page] register success',
    REGISTER_FAIL = '[auth page] register fail',

    AUTO_LOGIN = '[auth page] auto login',

    SET_ERROR_MESSAGE = '[auth page] set error message'
}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN_ACTION;
    constructor(public payload: {taiKhoan: string, matKhau: string}) {}
}
export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: User) {}
}
export class LoginFail implements Action {
    readonly type = AuthActionTypes.LOGIN_FAIL;
    constructor(public error: string) {}
} 
export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT_ACTION;
}
export class AutoLogin implements Action {
    readonly type = AuthActionTypes.AUTO_LOGIN;
}
export class Register implements Action {
    readonly type = AuthActionTypes.REGISTER_ACTION;
    constructor(public payload: {taiKhoan: string, matKhau: string,hoTen:string ,maNhom:string, email: string}) {}
}
export class RegisterSuccess implements Action {
    readonly type = AuthActionTypes.REGISTER_SUCCESS;
    constructor(public payload: UserSignup) {}
}
export class RegisterFail implements Action {
    readonly type = AuthActionTypes.REGISTER_FAIL;
    constructor(public message: string) {}
}

export class GetErrorMessage implements Action {
    readonly type = AuthActionTypes.SET_ERROR_MESSAGE;
    constructor(public message: string) {}
}

export type AuthActions = | Login | AutoLogin | LoginSuccess | LoginFail | Logout | Register | RegisterSuccess | RegisterFail;



