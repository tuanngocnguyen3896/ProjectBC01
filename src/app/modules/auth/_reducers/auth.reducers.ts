import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logoutAction, signupSuccess } from "../_actions/auth.actions";
import {User} from '../../../core/Models/User.model';
export interface AuthState{
    user: User | null;
    
}
export const initialState: AuthState = {
    user: null
};

//

const _authReducer = createReducer(initialState,
    on(loginSuccess, (state,action) => {
        return {
            ...state,
            user: action.user,   
        }
    }),
    on(logoutAction,(state) => {
        return {
            ...state,
            user: null
        }
    }),
    on(signupSuccess, (state,action) => {
        return {
            ...state,
            user : action.user
        }
    })

);

export function AuthReducer(state,action){
    return _authReducer(state,action);
}