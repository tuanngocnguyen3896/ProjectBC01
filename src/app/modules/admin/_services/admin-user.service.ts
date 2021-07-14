import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserReponseData } from "src/app/core/Models/User.model";
import { AppState } from "src/app/shared/reducers";


@Injectable({
    providedIn: 'root'}
)


export class AdminUserService{
    private domain = 'https://elearning0706.cybersoft.edu.vn/api';
    constructor( private http: HttpClient, private store: Store<AppState>){};

    getUser(maNhom:string):Observable<UserReponseData[]>{
        return this.http.get<UserReponseData[]>(`${this.domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
    }

    deleteUser(taiKhoan:string){
        return this.http.delete(`${this.domain}/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)
    }
    addUser(
        taiKhoan:string,
        matKhau:string,
        soDT: number,
        maLoaiNguoiDung: string,
        maNhom: string,
        email: string):Observable<UserReponseData>{
        return this.http.post<UserReponseData>(`${this.domain}/QuanLyNguoiDung/ThemNguoiDung`,{
            taiKhoan, matKhau, soDT, maLoaiNguoiDung, maNhom, email
        })
    }
    editUser(taiKhoan:string,
        matKhau:string,
        soDT: number,
        maLoaiNguoiDung: string,
        maNhom: string,
        email: string):Observable<UserReponseData>{
            return this.http.put<UserReponseData>(`${this.domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,{
                taiKhoan, matKhau, soDT, maLoaiNguoiDung, maNhom, email
            })
        }
}
