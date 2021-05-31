import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesData, CourseCategories } from 'src/app/core/Models/Courses.model';
import { UserReponseData } from 'src/app/core/Models/User.model';
import {RegisterForm} from '../_models/courses.models';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private domain = 'https://elearning0706.cybersoft.edu.vn/api';
  constructor(private http: HttpClient){}
  getCourses(): Observable<CoursesData>{
      return this.http.get<CoursesData>
      (`${this.domain}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`)
  }
  getCoursesDetail(maKhoaHoc:string):Observable<CoursesData> {
      return this.http.get<CoursesData>
      (`${this.domain}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
  }
  getCoursesCategories(): Observable<CourseCategories>{
      return this.http.get<CourseCategories>
      (`${this.domain}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
  }
  registerCourses(maKhoaHoc:string,taiKhoan :string): Observable<CoursesData>{
      return this.http.post<CoursesData>(
        `${this.domain}/QuanLyKhoaHoc/DangKyKhoaHoc`,
        {maKhoaHoc,taiKhoan}
      )    
  }
}
