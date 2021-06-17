import { createAction, props } from "@ngrx/store";
import { CoursesData } from "src/app/core/Models/Courses.model";

export const ADD_COURSES_ACTION = '[admin page] add courses action';
export const ADD_COURSES_SUCCESS = '[admin page] add courses success';
export const ADD_COURSES_FAIL = '[admin page] add courses fail';
export const DELETE_COURSES_ACTION = '[admin page] delete courses action';
export const DELETE_COURSES_SUCCESS = '[admin page] delete courses success';
export const EDIT_COURSES_ACTION = '[admin page] edit courses action';
export const EDIT_COURSES_SUCCESS = '[admin page] edit courses success';

export const addCoursesAction = createAction(ADD_COURSES_ACTION,props<{payload:
    {maKhoaHoc: string,
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
export const addCoursesFail = createAction(ADD_COURSES_FAIL, props<{payload:CoursesData}>())
export const deleteCourses = createAction(DELETE_COURSES_ACTION, props<{maKhoaHoc:string}>());
export  const deleteCoursesSuccess = createAction(DELETE_COURSES_SUCCESS, props<{maKhoaHoc:string}>());
export const editCourses = createAction(EDIT_COURSES_ACTION, props<{payload:CoursesData}>());
export const editCoursesSuccess = createAction(EDIT_COURSES_SUCCESS, props<{payload:CoursesData}>())
