import { createReducer, on } from "@ngrx/store"
import { User, UserReponseData } from "src/app/core/Models/User.model"
<<<<<<< Updated upstream
import { loadUserSuccess } from "../_action/user-admin.action"
=======
import { deleteUserSuccess, loadUserSuccess } from "../_action/user-admin.action"
>>>>>>> Stashed changes

export interface AdminUserState{
    adminUser: UserReponseData[]
}
export const initialState:AdminUserState={
    adminUser: null
}

const _adminUserReducer = createReducer(initialState,
    on(loadUserSuccess, (state,action)=>{
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        return{
            ...state,
            adminUser: action.user
        }
<<<<<<< Updated upstream
    })
    
=======
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
>>>>>>> Stashed changes
)



export function adminUserReducer(state,action){
    return _adminUserReducer(state,action)
}