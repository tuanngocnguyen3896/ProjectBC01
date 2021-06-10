
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map,mergeMap, switchMap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { addCourses, addCoursesSuccess, deleteCourses, deleteCoursesSuccess } from '../_action/admin.action';
import { AdminService } from '../_services/admin.services';

@Injectable()

export class AdminEffects{
    constructor(
        private actions$: Actions,
        private adminService: AdminService,
        private store: Store<AppState>
      ) {}
    addCourses$= createEffect(()=>{
        return this.actions$.pipe(ofType(addCourses),
        mergeMap((action)=>{
            console.log(action);
            
            return this.adminService.addCourses(
                action.payload.maKhoaHoc, action.payload.biDanh,
                action.payload.tenKhoaHoc,action.payload.moTa,
                action.payload.luotXem,action.payload.danhGia,action.payload.hinhAnh,
                action.payload.maNhom,
                action.payload.ngayTao,
                action.payload.maDanhMucKhoaHoc,
                action.payload.taiKhoanNguoiTao).pipe(map((data)=>{
                    console.log(data);
                    console.log(action.payload);
                    
                    const payload = {...action.payload, id:data.maKhoaHoc}
                    
                    
                    return addCoursesSuccess({payload:data})
                }))
        })
    )

});
    deleteCourses$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(deleteCourses),
            switchMap((action)=>{
                console.log(action);
                
                return this.adminService.deleteCourses(action.maKhoaHoc).pipe(map((data)=>{
                    console.log(action);
                    
                    return deleteCoursesSuccess({maKhoaHoc: action.maKhoaHoc})
                }))
            })
        )
    })
}

