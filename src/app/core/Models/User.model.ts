export interface User {
    taiKhoan:string,
    matKhau:string,
    accessToken?: string;
}
export interface UserSignup {
    taiKhoan:string,
    matKhau:string,
    hoTen:string,
    soDT:number,
    maNhom:string, 
    email:string
    accessToken?: string;
}