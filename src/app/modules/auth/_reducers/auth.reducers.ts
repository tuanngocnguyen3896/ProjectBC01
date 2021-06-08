import { Observable } from 'rxjs';
import {User, UserReponseData} from '../../../core/Models/User.model';
import {AuthActions,AuthActionTypes} from '../_actions/auth.actions';
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
                // profile: action.payload,
            }
        }
        case AuthActionTypes.EDIT_USER_FAIL: {
            return {
                ...state,
                errorMessage: action.error
            }
        }
        case AuthActionTypes.CANCEL_COURSES_ACTION: {
            const newUpdateProfile = {...state.profile};
            const currentCourse:any = newUpdateProfile.chiTietKhoaHocGhiDanh.filter(item => {
                console.log('number item at present : ',item.maKhoaHoc);
                return item.maKhoaHoc != action.course.maKhoaHoc
            });
            console.log('action courses: ',action.course.maKhoaHoc);
            console.log('course finded: ',currentCourse);
            newUpdateProfile.chiTietKhoaHocGhiDanh = currentCourse
            return {
                ...state,
                profile: newUpdateProfile
            }
        }

        default:
            return state;
    }
}
