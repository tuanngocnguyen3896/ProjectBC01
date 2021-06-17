import { createReducer, on } from "@ngrx/store"
import { User, UserReponseData } from "src/app/core/Models/User.model"
import { loadUserSuccess } from "../_action/user-admin.action"

export interface AdminUserState{
    adminUser: UserReponseData[]
}
export const initialState:AdminUserState={
    adminUser: null
}

const _adminUserReducer = createReducer(initialState,
    on(loadUserSuccess, (state,action)=>{
        
        return{
            ...state,
            adminUser: action.user
        }
    })
    
)



export function adminUserReducer(state,action){
    return _adminUserReducer(state,action)
}