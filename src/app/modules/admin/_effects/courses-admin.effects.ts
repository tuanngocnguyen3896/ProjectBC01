import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { Store } from "@ngrx/store"
import { error } from "console"
import { catchError, map, mergeMap } from "rxjs/operators"
import { AppState } from "src/app/shared/reducers"
import { addCoursesAction, addCoursesFail, addCoursesSuccess } from "../_action/courses-admin.action";
import { AdminService } from "../_services/courses-admin.service"

@Injectable({
    providedIn:'root'
})

export class CourseAdminService{
    constructor(private action$: Actions, private store:Store<AppState>, 
        private adminCoursesService: AdminService){
    }

    addCourse$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(addCoursesAction),
        mergeMap((action)=>{
            console.log(action);
            
            return this.adminCoursesService.addCourses( action.payload.maKhoaHoc, action.payload.biDanh,
                action.payload.tenKhoaHoc,action.payload.moTa,
                action.payload.luotXem,action.payload.danhGia,action.payload.hinhAnh,
                action.payload.maNhom,
                action.payload.ngayTao,
                action.payload.maDanhMucKhoaHoc,
                action.payload.taiKhoanNguoiTao).pipe(map((data)=>{
                    const post ={...action.payload, id:data.maKhoaHoc};
                    return addCoursesSuccess({payload:data})
                }),)
        })
        )
        
    })
    // deleteCourses$= createEffect(()=>{
    //     return this.action$.pipe(
    //         ofType(deleteCours),
    //         switchMap((action)=>{
    //             console.log(action);
                
    //             return this.adminService.deleteCourses(action.maKhoaHoc).pipe(map((data)=>{
    //                 console.log(action);
                    
    //                 return deleteCoursesSuccess({maKhoaHoc: action.maKhoaHoc})
    //             }))
    //         })
    //     )
    // })

    // editCourses$ = createEffect(()=>{
    //     return this.actions$.pipe(
    //         ofType(editCourses),
    //         switchMap((action)=>{
    //             return this.adminService.editCourses(action.payload).pipe(
    //                 map((data)=>{
    //                     return editCoursesSuccess({payload: action.payload})
    //                 })
    //             )
    //         })
    //     )
    // })
}