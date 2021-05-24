import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserSignup } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>    
  ) {}

  login(taiKhoan: string, matKhau: string): Observable<User>{
    return this.http.post<User>(
      'https://elearning0706.cybersoft.edu.vn/api/quanlynguoidung/dangnhap',
      {taiKhoan, matKhau , returnSecureToken: true}
    );
  }
  

  signUp(taiKhoan: string, matKhau: string, hoTen:string , maNhom:string, email: string): Observable<UserSignup>{
    return this.http.post<UserSignup>(
      'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      {taiKhoan, matKhau , hoTen ,maNhom , email,  returnSecureToken: true}
    );
  }


  setUserInLocalStorage(user: User){
    localStorage.setItem('userData', JSON.stringify(user))
  }
  getUserFromLocalStorage(){
    const userDataString = localStorage.getItem('userData');
    if(userDataString){
      return JSON.parse(userDataString);
    };
    return null
  }
  logout(){
    localStorage.removeItem('userData');
  };
}
