import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
import { RegisterForm } from '../../home/_models/courses.models';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private domain = 'https://elearning0706.cybersoft.edu.vn/api';
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login(taiKhoan: string, matKhau: string): Observable<User> {
    return this.http.post<User>(`${this.domain}/quanlynguoidung/dangnhap`, {
      taiKhoan,
      matKhau,
    });
  }
  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
  }

  register(
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: number,
    maNhom: string,
    email: string
  ): Observable<UserReponseData> {
    return this.http.post<UserReponseData>(
      `${this.domain}/QuanLyNguoiDung/DangKy`,
      { taiKhoan, matKhau, hoTen, soDT, maNhom, email }
    );
  }
  setUserInLocalStorage(user: UserReponseData) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      return userData;
    }
    return null;
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  loadUser(taiKhoan: string): Observable<UserReponseData> {
    return this.http.post<UserReponseData>(
      `${this.domain}/quanlynguoidung/ThongTinTaiKhoan`,
      { taiKhoan }
    );
  }
  editUser(
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: number,
    maNhom: string,
    email: string,
    maLoaiNguoiDung: string
  ): Observable<UserReponseData> {
    return this.http.put<UserReponseData>(
      `${this.domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      { taiKhoan, matKhau, hoTen, soDT, maNhom, email, maLoaiNguoiDung }
    );
  }
  cancelCourses(maKhoaHoc:string,taiKhoan : string): Observable<UserReponseData>{
    return this.http.post<UserReponseData>(
      `${this.domain}/QuanLyKhoaHoc/HuyGhiDanh`,
      {maKhoaHoc,taiKhoan}
    )    
}
}
