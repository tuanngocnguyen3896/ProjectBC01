import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesData,} from 'src/app/core/Models/Courses.model';
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
}