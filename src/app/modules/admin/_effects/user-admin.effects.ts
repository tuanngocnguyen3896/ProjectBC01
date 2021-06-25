import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
<<<<<<< Updated upstream
import { map, mergeMap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { loadUser, loadUserSuccess } from "../_action/user-admin.action";
import { AdminUserService } from "../_services/user-admin.service";
=======
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import {  deleteUser, deleteUserFail, deleteUserSuccess, loadUser, loadUserSuccess } from "../_action/user-admin.action";
import { AdminUserService } from "../_services/user-admin.services";
>>>>>>> Stashed changes


@Injectable({
    providedIn:'root'
})

export class AdminUserEffects{
    constructor( private action$: Actions,
        private userService: AdminUserService,
        private store: Store<AppState>){

    }

    loadUser$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadUser),
            mergeMap((action)=>{
<<<<<<< Updated upstream
                return this.userService.getUser().pipe(map((data)=>{
=======
                return this.userService.getUser(action.maNhom).pipe(map((data)=>{
>>>>>>> Stashed changes
                    return loadUserSuccess({user:data})
                }))
            })
        )
<<<<<<< Updated upstream
    })
=======
    });
    deleteUser$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(deleteUser),
            switchMap((action)=>{
                return this.userService.deleteUser(action.taiKhoan).pipe(map((data)=>{
                    return deleteUserSuccess({taiKhoan: action.taiKhoan})
                }))
            }),catchError((err)=>{
                console.log(err);
                
                return of(deleteUserFail({error:err}))
            })
        )
    });
    // addUser$ = createEffect(()=>{
    //     return this.action$.pipe(
    //         ofType(addUser),
    //         mergeMap((action)=>{
    //             return this.userService.addUser(action.payload.taiKhoan,action.payload.matKhau,
    //                 action.payload.soDT, action.payload.maLoaiNguoiDung, action.payload.maNhom,
    //                 action.payload.email).pipe(map((data)=>{
    //                     return addUserSuccess({payload:data})
    //                 }))
    //         }), catchError((err)=>{
    //             return of(addUserFail({error:err}))
    //         })
    //     )
    // }); 
    // editUser = createEffect(()=>{
    //     return this.action$.pipe(
    //         ofType(editUser),
    //         switchMap((action)=>{
    //             return this.userService.editUser(action.payload.taiKhoan,action.payload.matKhau,
    //                 action.payload.soDT, action.payload.maLoaiNguoiDung, action.payload.maNhom,
    //                 action.payload.email).pipe(map((data)=>{
    //                     return editUserSuccess({payload:data})
    //                 }))
    //         }), catchError((err)=>{
    //             return of(editUserFail({error:err}))
    //         })
    //     )
    // })
>>>>>>> Stashed changes
}