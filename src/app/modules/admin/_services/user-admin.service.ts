import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserReponseData } from "src/app/core/Models/User.model";
import { AppState } from "src/app/shared/reducers";


@Injectable({
    providedIn: 'root'}
)


export class AdminUserService{
    private domain = 'https://elearning0706.cybersoft.edu.vn/api';
    constructor( private http: HttpClient, private store: Store<AppState>){};

    getUser(){
        return this.http.get<UserReponseData[]>(`${this.domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08`)
    }
}