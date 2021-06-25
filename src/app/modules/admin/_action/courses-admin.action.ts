<<<<<<< Updated upstream
import { createAction, props } from "@ngrx/store";
import { CoursesData } from "src/app/core/Models/Courses.model";
=======
import { StringMap, StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { createAction, props } from "@ngrx/store";
import { CoursesData} from "src/app/core/Models/Courses.model";


export const LOAD_COURSES_ACTION = '[admin page] load courses action';
export const LOAD_COURSES_SUCCESS = '[admin page] load courses success';
export const LOAD_COURSES_FAIL = '[admin page] load courses fail';

>>>>>>> Stashed changes

export const ADD_COURSES_ACTION = '[admin page] add courses action';
export const ADD_COURSES_SUCCESS = '[admin page] add courses success';
export const ADD_COURSES_FAIL = '[admin page] add courses fail';
export const DELETE_COURSES_ACTION = '[admin page] delete courses action';
export const DELETE_COURSES_SUCCESS = '[admin page] delete courses success';
<<<<<<< Updated upstream
export const EDIT_COURSES_ACTION = '[admin page] edit courses action';
export const EDIT_COURSES_SUCCESS = '[admin page] edit courses success';

export const addCoursesAction = createAction(ADD_COURSES_ACTION,props<{payload:
    {maKhoaHoc: string,
=======
export const DELETE_COURSES_FAIL = '[admin page] delete courses fail';

export const EDIT_COURSES_ACTION = '[admin page] edit courses action';
export const EDIT_COURSES_SUCCESS = '[admin page] edit courses success';

export const loadCoursesAction = createAction(LOAD_COURSES_ACTION, props<{maNhom:string}>());
export const loadCoursesSuccess = createAction(LOAD_COURSES_SUCCESS, props<{payload:CoursesData[]}>());
export const loadCoursesFail = createAction(LOAD_COURSES_FAIL, props<{error:string}>())
export const addCoursesAction = createAction(ADD_COURSES_ACTION,props<{payload:{maKhoaHoc: string,
>>>>>>> Stashed changes
    biDanh: string,
    tenKhoaHoc: string,
    moTa: string,
    luotXem: number,
    danhGia: number,
    hinhAnh: string,
    maNhom: string,
    ngayTao: string,
    maDanhMucKhoaHoc: string,
    taiKhoanNguoiTao: string}
}>())
export const addCoursesSuccess = createAction(ADD_COURSES_SUCCESS, props<{payload:CoursesData}>());
<<<<<<< Updated upstream
export const addCoursesFail = createAction(ADD_COURSES_FAIL, props<{payload:CoursesData}>())
export const deleteCourses = createAction(DELETE_COURSES_ACTION, props<{maKhoaHoc:string}>());
export  const deleteCoursesSuccess = createAction(DELETE_COURSES_SUCCESS, props<{maKhoaHoc:string}>());
export const editCourses = createAction(EDIT_COURSES_ACTION, props<{payload:CoursesData}>());
=======
export const addCoursesFail = createAction(ADD_COURSES_FAIL, props<{error:string}>())
export const deleteCourses = createAction(DELETE_COURSES_ACTION, props<{maKhoaHoc:string}>());
export  const deleteCoursesSuccess = createAction(DELETE_COURSES_SUCCESS, props<{maKhoaHoc:string}>());
export const deleteCoursesFail = createAction(DELETE_COURSES_FAIL, props<{error:String}>())
export const editCourses = createAction(EDIT_COURSES_ACTION, props<{payload:{maKhoaHoc: string,
    biDanh: string,
    tenKhoaHoc: string,
    moTa: string,
    luotXem: number,
    danhGia: number,
    hinhAnh: string,
    maNhom: string,
    ngayTao: string,
    maDanhMucKhoaHoc: string,
    taiKhoanNguoiTao: string}}>());
>>>>>>> Stashed changes
export const editCoursesSuccess = createAction(EDIT_COURSES_SUCCESS, props<{payload:CoursesData}>())
