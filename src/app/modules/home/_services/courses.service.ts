import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesData, CourseCategories } from 'src/app/core/Models/Courses.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient){}

  getCourses(): Observable<CoursesData[]>{
      return this.http.get<CoursesData[]>
      (`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`)
      .pipe(
          map((data) => {
              const courses: CoursesData[] = [];
              for(let key in data){
                  courses.push({...data[key]})
              }
              return courses;
          })
      )
  }
  getCoursesDetail(maKhoaHoc:string):Observable<CoursesData[]> {
      return this.http.get<CoursesData[]>
      (`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
  }
  getCoursesCategories(): Observable<CourseCategories[]>{
      return this.http.get<CourseCategories[]>
      (`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
      .pipe(
          map((data) => {
              const categories: CourseCategories[] = [];
              for(let key in data){
                categories.push({...data[key]})
              };
              return categories;
          })
      )
  }
}
