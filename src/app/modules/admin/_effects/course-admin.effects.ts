import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { AppState } from "src/app/shared/reducers";
import { addCoursesAction, addCoursesFail, addCoursesSuccess, deleteCourses, deleteCoursesFail, deleteCoursesSuccess, editCourses, editCoursesSuccess, loadCoursesAction, loadCoursesFail, loadCoursesSuccess } from "../_action/courses-admin.action";
import { AdminService } from "../_services/admin-courses.service";

@Injectable({
    providedIn:'root'
})

export class CourseAdminEffects{
    constructor(private action$: Actions, private store:Store<AppState>, 
        private adminCoursesService: AdminService){
    }
    loadCourses$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadCoursesAction),
            mergeMap((action)=>{
                console.log(action);
                return this.adminCoursesService.loadCourses(action.maNhom).pipe(map((data)=>{
                    console.log(data);
                    
                       return loadCoursesSuccess({payload:data})         
                }))
            }),catchError((err)=>{
                return of(loadCoursesFail({error:err}))
            })
            )
    })

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
                    console.log(data);
                    
                    const post ={...action.payload, id:data.maKhoaHoc};
                    
                    return addCoursesSuccess({payload:data})
                }),catchError((err)=>{
                    console.log(err);
                    
                    return of(addCoursesFail({error:err}))
                }))
        })
        )
        
    }, {dispatch:false})
    deleteCourses$= createEffect(()=>{
        return this.action$.pipe(
            ofType(deleteCourses),
            switchMap((action)=>{
                console.log(action);
                return this.adminCoursesService.deleteCourses(action.maKhoaHoc).pipe(map((data)=>{
                    
                    return deleteCoursesSuccess({maKhoaHoc: action.maKhoaHoc})
                }))
            }),catchError((err)=>{
                console.log(err);
                
                return of(deleteCoursesFail({error:err}))
            })
        )
    })

    editCourses$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(editCourses),
            switchMap((action)=>{
                return this.adminCoursesService.editCourses(action.payload.maKhoaHoc, action.payload.biDanh,
                    action.payload.tenKhoaHoc,action.payload.moTa,
                    action.payload.luotXem,action.payload.danhGia,action.payload.hinhAnh,
                    action.payload.maNhom,
                    action.payload.ngayTao,
                    action.payload.maDanhMucKhoaHoc,
                    action.payload.taiKhoanNguoiTao).pipe(
                    map((data)=>{
                        return editCoursesSuccess({payload:data})
                    })
                )
            })
        )
    })
}