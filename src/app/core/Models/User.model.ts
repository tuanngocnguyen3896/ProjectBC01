export interface User {
    taiKhoan:string,
    matKhau:string,
    accessToken?: string;
}
export interface UserReponseData {
    taiKhoan:string,
    matKhau:string,
    hoTen?:string,
    soDT?:number,
    email?:string
    accessToken?: string;
    maLoaiNguoiDung?: string,
    maNhom?:string,
    chiTietKhoaHocGhiDanh?: Array<any> 
}
