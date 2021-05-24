import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserSignup } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private domain  = 'https://elearning0706.cybersoft.edu.vn/api';
  constructor(
    private http: HttpClient,
    private store: Store<AppState>    
  ) {}

  login(taiKhoan: string, matKhau: string): Observable<User>{
    return this.http.post<User>(
      `${this.domain}/quanlynguoidung/dangnhap`,
      {taiKhoan, matKhau , returnSecureToken: true}
    );
  }
  logout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    
  };

  register(taiKhoan: string, matKhau: string, hoTen:string , maNhom:string, email: string): Observable<UserSignup>{
    return this.http.post<UserSignup>(
      `${this.domain}/QuanLyNguoiDung/DangKy`,
      {taiKhoan, matKhau , hoTen ,maNhom , email,  returnSecureToken: true}
    );
  }
  setUserInLocalStorage(user: User){
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  getUserFromLocalStorage(){
    const userDataString = localStorage.getItem('userData');
    if(userDataString){
      const userData = JSON.parse(userDataString);
      return userData;
    };
    return null
  }
  errorMessage(error:string){

  }
}
