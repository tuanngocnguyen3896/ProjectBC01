import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { loadUser, loadUserSuccess } from "../_action/user-admin.action";
import { AdminUserService } from "../_services/user-admin.service";


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
                return this.userService.getUser().pipe(map((data)=>{
                    return loadUserSuccess({user:data})
                }))
            })
        )
    })
}