import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logoutAction } from "../_actions/auth.actions";
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
        console.log(action)
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
    })     
);

export function AuthReducer(state,action){
    return _authReducer(state,action);
}