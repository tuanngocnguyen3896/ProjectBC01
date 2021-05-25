import {User} from '../../../core/Models/User.model';
import {AuthActions,AuthActionTypes} from '../_actions/auth.actions';
export interface AuthState{
    user: User | null;
    loggedIn: boolean;
    errorMessage: string | null;
    // isUserLoaded: boolean;
}
export const initialState: AuthState = {
    user: null,
    loggedIn: false,
    errorMessage : null
    // isUserLoaded: false

};

export function AuthReducer(state = initialState, action : AuthActions) : AuthState  {
    switch (action.type) {
        case AuthActionTypes.LOGIN_ACTION:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            };
            
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                errorMessage: null
            };
        case AuthActionTypes.LOGIN_FAIL: {
            return {
                ...state,
                errorMessage: action.error,
                
            };
        }
        case AuthActionTypes.REGISTER_SUCCESS: {
            return {
                ...state,
                errorMessage: null,
            };
        }    
        case AuthActionTypes.REGISTER_FAIL: {
            return {
                ...state,
                errorMessage: action.error,
            };
        }    
        case AuthActionTypes.LOGOUT_ACTION:
            return initialState;
        case AuthActionTypes.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.error
            }    
        default:
            return state;
    }
}
//

// const _authReducer = createReducer(initialState,
    
    
    
//     on(loginSuccess, (state,action) => {
//         return {
//             ...state,
//             user: action.user,   
//         }
//     }),
//     on(logoutAction,(state) => {
//         return {
//             ...state,
//             user: null
//         }
//     }),
//     on(signupSuccess, (state,action) => {
//         return {
//             ...state,
//             user : action.user
//         }
//     })

// );

// export function AuthReducer(state,action){
//     return _authReducer(state,action);
// }

