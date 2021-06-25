import { createReducer, on } from "@ngrx/store"
import { User, UserReponseData } from "src/app/core/Models/User.model"

import { deleteUserSuccess, loadUserSuccess } from "../_actions/user-admin.action"
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

    
    }), on(deleteUserSuccess, (state,{taiKhoan})=>{
        const updatedUser = state.adminUser.filter((user)=>{
            return user.taiKhoan !== taiKhoan
        })
        return {
            ...state,
            adminUser: updatedUser

        }
    })
    // ,on(addUserSuccess, (state,action)=>{
    //     let user = {...action.payload}
    //     return {
    //         ...state,
    //         adminUser :[...state.adminUser, user]
    //     }
    // }), on(editUserSuccess,(state,action)=>{
    //     const updatedUser = state.adminUser.map((user)=>{
    //         return action.payload.taiKhoan === user.taiKhoan? action.payload : user
    //     })
    //     return{
    //         ...state,
    //         adminUser: updatedUser
    //     }
    // })
)



export function adminUserReducer(state,action){
    return _adminUserReducer(state,action)
}