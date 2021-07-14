import {User, UserReponseData} from '../../../core/Models/User.model';
import {AuthActions,AuthActionTypes} from '../_actions/auth.actions';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
export interface AuthState{
    user: UserReponseData | User | null;
    profile: UserReponseData;
    loggedIn: boolean;
    errorMessage: string | null;
    // isUserLoaded: boolean;
}
export const initialState: AuthState = {
    user: null,
    loggedIn: false,
    errorMessage : null,
    profile: null
};

export function AuthReducer(state = initialState, action : AuthActions) : AuthState  {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                // profile: action.payload,
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
        case AuthActionTypes.LOGOUT_ACTION: {
            return initialState;
        }
        case AuthActionTypes.SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.error
            }    
        }
        case AuthActionTypes.LOAD_USER_SUCCESS: {
            let newProfile = {...state.profile};
            newProfile = action.user;
            return {
                ...state,
                profile: action.user,
            }    
        }
        case AuthActionTypes.LOAD_USER_FAIL: {
            return {
                ...state,
                errorMessage: action.error
            }    
        }
        case AuthActionTypes.EDIT_USER_SUCCESS: {
            return {
                ...state,
                profile: {...action.payload,soDT: action.payload.soDT},
            }
        }
        case AuthActionTypes.EDIT_USER_FAIL: {
            return {
                ...state,
                errorMessage: action.error
            }
        }
        // case AuthActionTypes.CANCEL_COURSES_ACTION: {
        //     const newProfile = {...state.profile};
        //     const updateCourses = newProfile.chiTietKhoaHocGhiDanh.filter(item => {
        //         return item.maKhoaHoc != action.course.maKhoaHoc;
        //     });
        //     newProfile.chiTietKhoaHocGhiDanh = updateCourses;
        //     return {
        //         ...state,
        //         profile: newProfile,
        //     }
        // }

        default:
            return state;
    }
}