import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
<<<<<<< Updated upstream
import { CoursesData } from "src/app/core/Models/Courses.model";
import { AppState } from "src/app/shared/reducers";
import { CoursesUpdateState } from "../_reducer/courses-admin.reducer";
=======
import { map } from "rxjs/operators";
import { CoursesData} from "src/app/core/Models/Courses.model";
import { AppState } from "src/app/shared/reducers";
>>>>>>> Stashed changes

@Injectable({
    providedIn: 'root'
  })
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  export class AdminService {
    private domain = 'https://elearning0706.cybersoft.edu.vn/api';
    constructor(private http: HttpClient, private store: Store<AppState>){}
    
<<<<<<< Updated upstream
    addCourses(maKhoaHoc: string,
=======
  loadCourses(maNhom:string):Observable<CoursesData[]>{
    return this.http.get<CoursesData[]>(`${this.domain}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`)}

  addCourses(maKhoaHoc: string,
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
      taiKhoanNguoiTao: string)
<<<<<<< Updated upstream
      :Observable<CoursesData>{
        return this.http.post<CoursesData>(`${this.domain}/QuanLyKhoaHoc/ThemKhoaHoc`,{maKhoaHoc,
            biDanh,tenKhoaHoc,moTa,luotXem,danhGia,hinhAnh,maNhom,ngayTao,maDanhMucKhoaHoc,taiKhoanNguoiTao
        })
=======
      :Observable<CoursesData>
      {
        return this.http.post<CoursesData>(`${this.domain}/QuanLyKhoaHoc/ThemKhoaHoc`,{maKhoaHoc,
            biDanh,tenKhoaHoc,moTa,luotXem,danhGia,hinhAnh,maNhom,ngayTao,maDanhMucKhoaHoc,taiKhoanNguoiTao
        })
    };
    editCourses(maKhoaHoc: string,
        biDanh: string,
        tenKhoaHoc: string,
        moTa: string,
        luotXem: number,
        danhGia: number,
        hinhAnh: string,
        maNhom: string,
        ngayTao: string,
        maDanhMucKhoaHoc: string,
        taiKhoanNguoiTao: string)
        :Observable<CoursesData>
        {
            return this.http.put<CoursesData>(`${this.domain}/QuanLyKhoaHoc/CapNhatKhoaHoc`,{
                maKhoaHoc,biDanh,tenKhoaHoc,moTa,luotXem,danhGia,hinhAnh,maNhom,ngayTao,maDanhMucKhoaHoc,
                taiKhoanNguoiTao})

    }
    deleteCourses(maKhoaHoc:string){
      return this.http.delete(`${this.domain}/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
>>>>>>> Stashed changes
    }
}